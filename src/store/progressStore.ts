'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Progress } from '@/types';

interface ProgressState {
  progress: Progress[];
  addProgress: (exerciseId: string, notes?: string) => void;
  removeProgress: (exerciseId: string, date: string) => void;
  getProgressByExercise: (exerciseId: string) => Progress[];
  getProgressByDate: (date: string) => Progress[];
  clearAllProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: [],
      addProgress: (exerciseId, notes) => {
        const date = new Date().toISOString().split('T')[0];
        const newProgress: Progress = {
          exerciseId,
          completed: true,
          date,
          notes,
        };
        
        set((state) => ({
          progress: [...state.progress.filter(p => !(p.exerciseId === exerciseId && p.date === date)), newProgress],
        }));
      },
      removeProgress: (exerciseId, date) => {
        set((state) => ({
          progress: state.progress.filter(p => !(p.exerciseId === exerciseId && p.date === date)),
        }));
      },
      getProgressByExercise: (exerciseId) => {
        return get().progress.filter(p => p.exerciseId === exerciseId);
      },
      getProgressByDate: (date) => {
        return get().progress.filter(p => p.date === date);
      },
      clearAllProgress: () => {
        set({ progress: [] });
      },
    }),
    {
      name: 'califorce-progress',
    }
  )
);