"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, Profile, WorkoutLog, WeightLog } from '@/lib/supabase';
import { 
  LogOut, 
  User, 
  TrendingDown, 
  Calendar, 
  Award,
  Plus,
  Activity,
  Weight,
  Clock,
  MessageCircle
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
  const [weightLogs, setWeightLogs] = useState<WeightLog[]>([]);
  const [showAddWorkout, setShowAddWorkout] = useState(false);
  const [showAddWeight, setShowAddWeight] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/login');
        return;
      }

      // Buscar perfil do usuário
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profileData) {
        setProfile(profileData);
      }

      // Buscar logs de treino
      const { data: workouts } = await supabase
        .from('workout_logs')
        .select('*')
        .eq('user_id', session.user.id)
        .order('workout_date', { ascending: false })
        .limit(10);

      if (workouts) {
        setWorkoutLogs(workouts);
      }

      // Buscar logs de peso
      const { data: weights } = await supabase
        .from('weight_logs')
        .select('*')
        .eq('user_id', session.user.id)
        .order('log_date', { ascending: false })
        .limit(10);

      if (weights) {
        setWeightLogs(weights);
      }

      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/');
  }

  async function handleAddWorkout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const { error } = await supabase.from('workout_logs').insert({
      user_id: session.user.id,
      workout_date: formData.get('date') as string,
      workout_type: formData.get('type') as string,
      duration_minutes: parseInt(formData.get('duration') as string),
      notes: formData.get('notes') as string,
    });

    if (!error) {
      setShowAddWorkout(false);
      checkUser();
    }
  }

  async function handleAddWeight(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const { error } = await supabase.from('weight_logs').insert({
      user_id: session.user.id,
      weight_kg: parseFloat(formData.get('weight') as string),
      log_date: formData.get('date') as string,
      notes: formData.get('notes') as string,
    });

    if (!error) {
      setShowAddWeight(false);
      checkUser();
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-sky-400 text-2xl">Carregando...</div>
      </div>
    );
  }

  const daysRemaining = profile?.subscription_end_date 
    ? Math.ceil((new Date(profile.subscription_end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : 30;

  const totalWorkouts = workoutLogs.length;
  const initialWeight = weightLogs[weightLogs.length - 1]?.weight_kg || 0;
  const currentWeight = weightLogs[0]?.weight_kg || 0;
  const weightLost = initialWeight > 0 ? (initialWeight - currentWeight).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black text-sky-400">ProjetoFit30</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Boas-vindas */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Olá, {profile?.full_name || 'Aluno'}! 👋
          </h2>
          <p className="text-gray-400">
            Bem-vindo à sua área de membros do Projeto Fit 30
          </p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/80 text-sm mb-1">Dias Restantes</p>
            <p className="text-4xl font-black text-white">{daysRemaining}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/80 text-sm mb-1">Treinos Realizados</p>
            <p className="text-4xl font-black text-white">{totalWorkouts}</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/80 text-sm mb-1">Peso Perdido</p>
            <p className="text-4xl font-black text-white">{weightLost} kg</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/80 text-sm mb-1">Status</p>
            <p className="text-2xl font-black text-white">
              {profile?.subscription_status === 'active' ? 'Ativo' : 'Inativo'}
            </p>
          </div>
        </div>

        {/* Banner Comunidade WhatsApp */}
        <div className="mb-8 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center shadow-2xl">
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-3">
            Junte-se à Comunidade! 🚀
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Entre no nosso grupo exclusivo do WhatsApp e conecte-se com outros membros, compartilhe sua evolução e receba dicas diárias!
          </p>
          <a
            href="https://chat.whatsapp.com/JwYQyu8eKSrGlT57T8W0N9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Entrar na Comunidade WhatsApp
          </a>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Treinos */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Activity className="w-6 h-6 text-sky-400" />
                Meus Treinos
              </h3>
              <button
                onClick={() => setShowAddWorkout(true)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Adicionar
              </button>
            </div>

            {showAddWorkout && (
              <form onSubmit={handleAddWorkout} className="bg-gray-800 rounded-xl p-4 mb-4">
                <div className="space-y-3">
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                  />
                  <input
                    type="text"
                    name="type"
                    placeholder="Tipo de treino"
                    required
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                  />
                  <input
                    type="number"
                    name="duration"
                    placeholder="Duração (minutos)"
                    required
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                  />
                  <textarea
                    name="notes"
                    placeholder="Observações (opcional)"
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                    rows={2}
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg"
                    >
                      Salvar
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddWorkout(false)}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {workoutLogs.length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  Nenhum treino registrado ainda
                </p>
              ) : (
                workoutLogs.map((workout) => (
                  <div key={workout.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{workout.workout_type}</span>
                      <span className="text-gray-400 text-sm">
                        {new Date(workout.workout_date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {workout.duration_minutes} minutos
                    </div>
                    {workout.notes && (
                      <p className="text-gray-400 text-sm mt-2">{workout.notes}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Peso */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Weight className="w-6 h-6 text-sky-400" />
                Evolução de Peso
              </h3>
              <button
                onClick={() => setShowAddWeight(true)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Adicionar
              </button>
            </div>

            {showAddWeight && (
              <form onSubmit={handleAddWeight} className="bg-gray-800 rounded-xl p-4 mb-4">
                <div className="space-y-3">
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                  />
                  <input
                    type="number"
                    step="0.1"
                    name="weight"
                    placeholder="Peso (kg)"
                    required
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                  />
                  <textarea
                    name="notes"
                    placeholder="Observações (opcional)"
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                    rows={2}
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg"
                    >
                      Salvar
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddWeight(false)}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {weightLogs.length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  Nenhum registro de peso ainda
                </p>
              ) : (
                weightLogs.map((log) => (
                  <div key={log.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold text-2xl">{log.weight_kg} kg</span>
                      <span className="text-gray-400 text-sm">
                        {new Date(log.log_date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    {log.notes && (
                      <p className="text-gray-400 text-sm mt-2">{log.notes}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Informações Importantes */}
        <div className="mt-8 bg-gradient-to-r from-sky-500 to-purple-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Precisa de ajuda ou tem dúvidas?
          </h3>
          <p className="text-white/90 mb-6">
            Entre em contato com o Treinador Emerson pelo WhatsApp!
          </p>
          <a
            href="https://wa.me/5544998517802?text=Olá%20Emerson,%20preciso%20de%20ajuda%20com%20o%20ProjetoFit30!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sky-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Falar com o Treinador
          </a>
        </div>
      </div>
    </div>
  );
}
