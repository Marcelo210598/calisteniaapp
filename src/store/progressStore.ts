import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  completedExercises: string[];
  completedWorkouts: string[];
  toggleExercise: (exerciseId: string) => void;
  toggleWorkout: (workoutId: string) => void;
  isExerciseCompleted: (exerciseId: string) => boolean;
  isWorkoutCompleted: (workoutId: string) => boolean;
  getCompletedCount: () => number;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedExercises: [],
      completedWorkouts: [],

      toggleExercise: (exerciseId) => set((state) => {
        const isCompleted = state.completedExercises.includes(exerciseId);
        return {
          completedExercises: isCompleted
            ? state.completedExercises.filter(id => id !== exerciseId)
            : [...state.completedExercises, exerciseId]
        };
      }),

      toggleWorkout: (workoutId) => set((state) => {
        const isCompleted = state.completedWorkouts.includes(workoutId);
        return {
          completedWorkouts: isCompleted
            ? state.completedWorkouts.filter(id => id !== workoutId)
            : [...state.completedWorkouts, workoutId]
        };
      }),

      isExerciseCompleted: (exerciseId) => get().completedExercises.includes(exerciseId),
      isWorkoutCompleted: (workoutId) => get().completedWorkouts.includes(workoutId),
      getCompletedCount: () => get().completedExercises.length,
    }),
    {
      name: 'califorce-progress',
    }
  )
);