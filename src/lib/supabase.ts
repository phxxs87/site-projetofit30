import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export type Profile = {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  created_at: string;
  subscription_status: 'active' | 'inactive' | 'trial';
  subscription_end_date?: string;
};

export type WorkoutLog = {
  id: string;
  user_id: string;
  workout_date: string;
  workout_type: string;
  duration_minutes: number;
  notes?: string;
  created_at: string;
};

export type WeightLog = {
  id: string;
  user_id: string;
  weight_kg: number;
  log_date: string;
  notes?: string;
  created_at: string;
};
