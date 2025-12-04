"use client";

import { Check, Users, Award, TrendingUp, Clock, Target, Shield, Zap, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d6a216b8-b7f0-42f1-90cd-0d147c7fbd94.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-sky-400 mb-6 tracking-tight">
            Transforme Seu Corpo em 30 Dias com o Projeto Fit 30
          </h1>
          <p className="text-xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
            Treinos rápidos, simples e 100% online — com suporte 24h e acompanhamento do Treinador Emerson.
          </p>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Emagreça de 9 a 12kg em 30 dias com um método prático, seguro e feito para quem já tentou de tudo e não sabe mais por onde começar.
          </p>
          <a
            href="#pacote"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white text-xl font-bold px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            QUERO COMEÇAR AGORA
          </a>
          <p className="text-sm text-gray-400 mt-4">✅ Apenas R$ 297 - Vagas Limitadas</p>
        </div>
      </section>

      {/* Seção de Urgência */}
      <section className="py-8 bg-sky-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-bold text-black">
            🔥 ATENÇÃO: Apenas 10 vagas disponíveis este mês!
          </p>
        </div>
      </section>

      {/* O QUE É O PROJETO FIT 30? */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center text-sky-400 mb-12">
            O QUE É O PROJETO FIT 30?
          </h2>
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              O Projeto Fit 30 é um programa completo de 30 dias focado em perder barriga, reduzir inchaço e eliminar de 9 a 12kg usando treinos curtos que você pode fazer em casa — mesmo sem tempo, sem equipamentos e sem experiência.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Criado pelo Treinador Emerson, especialista em emagrecimento rápido e saudável, o programa foi pensado para pessoas que:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white">Estão cansadas de tentar e não conseguir</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white">Não sabem por onde começar</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white">Não têm tempo para academia</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white">Querem ver resultado ainda nos primeiros dias</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Dentro do site, você terá acesso ao plano completo de treinos + orientações + suporte 24 horas para tirar dúvidas sempre que precisar.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI ENCONTRAR NO PROJETO FIT 30 */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center text-sky-400 mb-16">
            O QUE VOCÊ VAI ENCONTRAR NO PROJETO FIT 30
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Treinos diários de 10 a 15 minutos</h3>
              <p className="text-gray-300 leading-relaxed">
                Feitos para acelerar a queima de gordura, mesmo com rotina corrida.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Plano simples e fácil de seguir</h3>
              <p className="text-gray-300 leading-relaxed">
                Nada de complicação, nada de conteúdo confuso. Só o que realmente funciona.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Focado em perda de gordura e hipertrofia</h3>
              <p className="text-gray-300 leading-relaxed">
                Redução de peso sem flacidez.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Acompanhamento do Treinador Emerson</h3>
              <p className="text-gray-300 leading-relaxed">
                Ele vai te guiar, motivar, tirar suas dúvidas e te ajudar a deixar o medo pra trás.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Suporte 24h / 7 dias</h3>
              <p className="text-gray-300 leading-relaxed">
                Dúvidas sobre treino? Alimentação? Dor muscular? Nossa equipe responde você em qualquer horário.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Área exclusiva de membros</h3>
              <p className="text-gray-300 leading-relaxed">
                Acesso pelo celular, 100% online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AS PRINCIPAIS DORES QUE O PROJETO RESOLVE */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center text-sky-400 mb-12">
            AS PRINCIPAIS DORES QUE O PROJETO RESOLVE
          </h2>
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed text-center">
              Você está aqui porque provavelmente:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3 bg-gray-900 p-6 rounded-xl">
                <span className="text-sky-400 text-2xl flex-shrink-0 mt-0">•</span>
                <p className="text-lg text-white">Já tentou perder peso, mas sempre desanimou</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-900 p-6 rounded-xl">
                <span className="text-sky-400 text-2xl flex-shrink-0 mt-0">•</span>
                <p className="text-lg text-white">Se sente insegura com o seu corpo</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-900 p-6 rounded-xl">
                <span className="text-sky-400 text-2xl flex-shrink-0 mt-0">•</span>
                <p className="text-lg text-white">Tem medo de tentar e não conseguir mais uma vez</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-900 p-6 rounded-xl">
                <span className="text-sky-400 text-2xl flex-shrink-0 mt-0">•</span>
                <p className="text-lg text-white">Não sabe o que fazer ou por onde começar</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-900 p-6 rounded-xl">
                <span className="text-sky-400 text-2xl flex-shrink-0 mt-0">•</span>
                <p className="text-lg text-white">Está cansada de dietas malucas</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-900 p-6 rounded-xl">
                <span className="text-sky-400 text-2xl flex-shrink-0 mt-0">•</span>
                <p className="text-lg text-white">Se sente inchada, pesada, cansada e sem energia</p>
              </div>
            </div>
            <div className="bg-sky-500 rounded-xl p-8 text-center">
              <p className="text-xl md:text-2xl text-black font-bold leading-relaxed">
                E é justamente por isso que o Projeto Fit 30 existe.
              </p>
              <p className="text-lg md:text-xl text-black mt-4 leading-relaxed">
                Ele foi criado para quebrar esse ciclo, trazer motivação real e te entregar um caminho simples, direto e com acompanhamento 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-sky-400 mb-4">
              RESULTADOS REAIS
            </h2>
            <p className="text-xl text-gray-300">
              Veja as transformações incríveis dos nossos alunos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Resultado 1 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="p-6 bg-sky-500">
                <h3 className="text-2xl font-bold text-black text-center">TRANSFORMAÇÃO 1</h3>
              </div>
              <div className="p-6">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/bf4c840b-2820-4f4e-a807-5067fc1be7a1.jpg"
                  alt="Transformação 1"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-900">
                <p className="text-center text-white">
                  <span className="text-sky-400 font-bold">30 dias</span> de dedicação e resultados surpreendentes!
                </p>
              </div>
            </div>

            {/* Resultado 2 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="p-6 bg-sky-500">
                <h3 className="text-2xl font-bold text-black text-center">TRANSFORMAÇÃO 2</h3>
              </div>
              <div className="p-6">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3f014156-4095-4f3c-a851-b27665e24c5b.jpg"
                  alt="Transformação 2"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-900">
                <p className="text-center text-white">
                  <span className="text-sky-400 font-bold">Mudança completa</span> em apenas 1 mês!
                </p>
              </div>
            </div>

            {/* Resultado 3 - NOVA FOTO */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="p-6 bg-sky-500">
                <h3 className="text-2xl font-bold text-black text-center">TRANSFORMAÇÃO 3</h3>
              </div>
              <div className="p-6">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/32f665ac-da01-47d9-bc23-203b3fd5bf80.jpg"
                  alt="Transformação 3"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-900">
                <p className="text-center text-white">
                  <span className="text-sky-400 font-bold">Resultado incrível</span> em 30 dias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM É O TREINADOR EMERSON? */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center text-sky-400 mb-12">
            QUEM É O TREINADOR EMERSON?
          </h2>
          <p className="text-2xl text-center text-gray-300 mb-12 font-semibold">
            Seu Treinador durante os 30 dias
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3042172f-4692-456f-a612-7d4aa8a8b596.webp"
                alt="Treinador Emerson"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Com anos de experiência em treinos focados em emagrecimento rápido e sustentável, o Treinador Emerson já ajudou centenas de pessoas a:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Perder a barriga</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Recuperar autoestima</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Criar disciplina</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Ganhar disposição</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Finalmente se olhar no espelho com orgulho</p>
                </div>
              </div>
              <div className="bg-sky-500 rounded-xl p-6 mb-8">
                <p className="text-lg text-black leading-relaxed">
                  Ele entende perfeitamente o medo de começar, o receio de falhar e a insegurança — e por isso, dentro do Projeto Fit 30, o Emerson vai caminhar com você durante todo o processo.
                </p>
              </div>
              <p className="text-2xl text-sky-400 font-bold text-center">
                Você nunca mais vai estar sozinha na sua jornada.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-900 p-6 rounded-xl text-center">
                  <Users className="w-12 h-12 text-sky-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white">200+</p>
                  <p className="text-gray-400">Pessoas Transformadas</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl text-center">
                  <Award className="w-12 h-12 text-sky-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white">2 Anos</p>
                  <p className="text-gray-400">De Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS ESPERADOS EM 30 DIAS */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center text-sky-400 mb-12">
            RESULTADOS ESPERADOS EM 30 DIAS
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Se seguir o plano, você pode esperar:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">☑️</div>
              <p className="text-lg text-white font-semibold">Redução de 9 a 12kg</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">☑️</div>
              <p className="text-lg text-white font-semibold">Diminuição da barriga e cintura afinada</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">☑️</div>
              <p className="text-lg text-white font-semibold">Muito menos inchaço</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">☑️</div>
              <p className="text-lg text-white font-semibold">Mais energia</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">☑️</div>
              <p className="text-lg text-white font-semibold">Melhora na autoestima</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">☑️</div>
              <p className="text-lg text-white font-semibold">Roupas voltando a servir</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors md:col-span-2 lg:col-span-3">
              <div className="text-4xl mb-4">☑️</div>
              <p className="text-lg text-white font-semibold">Corpo mais firme e definido</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É O PROJETO FIT 30? */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center text-sky-400 mb-16">
            PARA QUEM É O PROJETO FIT 30?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl flex items-start gap-4 hover:bg-gray-800 transition-colors">
              <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-white">Para quem quer perder peso rápido</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl flex items-start gap-4 hover:bg-gray-800 transition-colors">
              <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-white">Para quem quer acabar com o inchaço</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl flex items-start gap-4 hover:bg-gray-800 transition-colors">
              <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-white">Para quem não tem tempo para academia</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl flex items-start gap-4 hover:bg-gray-800 transition-colors">
              <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-white">Para quem sente vergonha do próprio corpo</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl flex items-start gap-4 hover:bg-gray-800 transition-colors">
              <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-white">Para quem já tentou de tudo e nada funcionou</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl flex items-start gap-4 hover:bg-gray-800 transition-colors">
              <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-white">Para quem busca motivação e acompanhamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pacote - CTA Principal */}
      <section id="pacote" className="py-20 px-4 bg-sky-500">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-sky-400">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-black text-sky-400 mb-4">
                PRONTA PARA COMEÇAR SUA TRANSFORMAÇÃO?
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Clique abaixo e entre para o Projeto Fit 30.
              </p>
              <p className="text-lg text-gray-400">
                Você terá acesso imediato ao programa completo + suporte 24h + acompanhamento do Treinador Emerson.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 mb-8">
              <div className="text-center mb-8">
                <p className="text-gray-400 text-xl line-through mb-2">De R$ 497</p>
                <p className="text-6xl md:text-7xl font-black text-sky-400 mb-2">R$ 297</p>
                <p className="text-xl text-gray-300">Pagamento único</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Plano de treino personalizado para 30 dias</p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Acesso ao app personalizado do Treinador Emerson</p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">3 meses de 20% de desconto na consultoria online</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Acompanhamento diário via WhatsApp</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Suporte 24/7 para dúvidas</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Acesso ao grupo exclusivo de alunos</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">Garantia de resultados em 30 dias</p>
                </div>
              </div>

              <a
                href="https://wa.me/5511999999999?text=Olá%20Emerson,%20quero%20garantir%20minha%20vaga%20no%20ProjetoFit30!"
                className="block w-full bg-sky-500 hover:bg-sky-600 text-black text-2xl font-black py-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                QUERO COMEÇAR AGORA
              </a>
              <p className="text-center text-gray-400 mt-4">
                🔒 Pagamento 100% seguro
              </p>
            </div>

            <div className="bg-sky-500 rounded-xl p-6 text-center">
              <p className="text-black font-bold text-xl">
                ⚠️ ATENÇÃO: Apenas 10 vagas disponíveis este mês!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 rounded-2xl p-12 border-2 border-sky-400">
            <Shield className="w-20 h-20 text-sky-400 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-sky-400 mb-6">
              GARANTIA DE 7 DIAS
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Se você não ficar 100% satisfeito nos primeiros 7 dias, devolvemos seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <p className="text-lg text-gray-400">
              Você não tem nada a perder e um corpo transformado a ganhar!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-sky-400 mb-12">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="space-y-6">
            <div className="bg-black rounded-xl p-6">
              <h3 className="text-xl font-bold text-sky-400 mb-3">
                Quanto tempo leva para ver resultados?
              </h3>
              <p className="text-gray-300">
                A maioria dos alunos começa a ver mudanças visíveis nas primeiras 2 semanas. Em 30 dias, a transformação é completa!
              </p>
            </div>
            <div className="bg-black rounded-xl p-6">
              <h3 className="text-xl font-bold text-sky-400 mb-3">
                Preciso de equipamentos especiais?
              </h3>
              <p className="text-gray-300">
                Não! O treino é adaptado para o que você tem à disposição na sua academia.
              </p>
            </div>
            <div className="bg-black rounded-xl p-6">
              <h3 className="text-xl font-bold text-sky-400 mb-3">
                Como funciona o acompanhamento?
              </h3>
              <p className="text-gray-300">
                Você terá acesso direto ao Emerson via WhatsApp para tirar dúvidas, enviar fotos de progresso e receber orientações diárias.
              </p>
            </div>
            <div className="bg-black rounded-xl p-6">
              <h3 className="text-xl font-bold text-sky-400 mb-3">
                E se eu não conseguir seguir o plano?
              </h3>
              <p className="text-gray-300">
                O programa é flexível e adaptável. Se precisar ajustar algo, basta avisar que faremos as modificações necessárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-sky-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            PRONTO PARA TRANSFORMAR SUA VIDA?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Não deixe para amanhã a transformação que você pode começar hoje!
          </p>
          <a
            href="#pacote"
            className="inline-block bg-black hover:bg-gray-900 text-sky-400 text-2xl font-black px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            COMEÇAR AGORA
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-300 text-lg">
              📱 Instagram: <a href="https://instagram.com/treinador_emersong" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-semibold">@treinador_emersong</a>
            </p>
            <p className="text-gray-300 text-lg">
              📧 Email: <a href="mailto:emerson98517902@gmail.com" className="text-sky-400 hover:text-sky-300 font-semibold">emerson98517902@gmail.com</a>
            </p>
          </div>
          <p className="text-gray-400 text-sm pt-4">
            © 2025 ProjetoFit30 - Treinador Emerson | Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
