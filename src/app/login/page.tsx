"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se já está logado
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/dashboard');
      } else {
        setLoading(false);
      }
    });

    // Listener para mudanças de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.push('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-sky-400 text-2xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-sky-400 mx-auto mb-4" />
          <h1 className="text-4xl font-black text-sky-400 mb-2">
            ProjetoFit30
          </h1>
          <p className="text-gray-400">
            Acesse sua área de membros
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#0ea5e9',
                    brandAccent: '#0284c7',
                    brandButtonText: 'white',
                    defaultButtonBackground: '#1f2937',
                    defaultButtonBackgroundHover: '#374151',
                    defaultButtonBorder: '#374151',
                    defaultButtonText: 'white',
                    dividerBackground: '#374151',
                    inputBackground: '#111827',
                    inputBorder: '#374151',
                    inputBorderHover: '#0ea5e9',
                    inputBorderFocus: '#0ea5e9',
                    inputText: 'white',
                    inputLabelText: '#9ca3af',
                    inputPlaceholder: '#6b7280',
                    messageText: 'white',
                    messageTextDanger: '#ef4444',
                    anchorTextColor: '#0ea5e9',
                    anchorTextHoverColor: '#0284c7',
                  },
                  space: {
                    spaceSmall: '4px',
                    spaceMedium: '8px',
                    spaceLarge: '16px',
                    labelBottomMargin: '8px',
                    anchorBottomMargin: '4px',
                    emailInputSpacing: '4px',
                    socialAuthSpacing: '4px',
                    buttonPadding: '10px 15px',
                    inputPadding: '10px 15px',
                  },
                  fontSizes: {
                    baseBodySize: '14px',
                    baseInputSize: '14px',
                    baseLabelSize: '14px',
                    baseButtonSize: '14px',
                  },
                  borderWidths: {
                    buttonBorderWidth: '1px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '8px',
                    buttonBorderRadius: '8px',
                    inputBorderRadius: '8px',
                  },
                },
              },
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Email',
                  password_label: 'Senha',
                  email_input_placeholder: 'seu@email.com',
                  password_input_placeholder: 'Sua senha',
                  button_label: 'Entrar',
                  loading_button_label: 'Entrando...',
                  social_provider_text: 'Entrar com {{provider}}',
                  link_text: 'Já tem uma conta? Entre',
                },
                sign_up: {
                  email_label: 'Email',
                  password_label: 'Senha',
                  email_input_placeholder: 'seu@email.com',
                  password_input_placeholder: 'Sua senha',
                  button_label: 'Criar conta',
                  loading_button_label: 'Criando conta...',
                  social_provider_text: 'Cadastrar com {{provider}}',
                  link_text: 'Não tem uma conta? Cadastre-se',
                  confirmation_text: 'Verifique seu email para confirmar o cadastro',
                },
                magic_link: {
                  email_input_label: 'Email',
                  email_input_placeholder: 'seu@email.com',
                  button_label: 'Enviar link mágico',
                  loading_button_label: 'Enviando link...',
                  link_text: 'Enviar um link mágico',
                  confirmation_text: 'Verifique seu email para o link de acesso',
                },
                forgotten_password: {
                  email_label: 'Email',
                  password_label: 'Senha',
                  email_input_placeholder: 'seu@email.com',
                  button_label: 'Enviar instruções',
                  loading_button_label: 'Enviando...',
                  link_text: 'Esqueceu sua senha?',
                  confirmation_text: 'Verifique seu email para redefinir a senha',
                },
              },
            }}
            providers={[]}
            redirectTo={`${window.location.origin}/dashboard`}
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            ← Voltar para o site
          </a>
        </div>
      </div>
    </div>
  );
}
