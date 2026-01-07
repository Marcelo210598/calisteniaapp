import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WorkoutExercise {
    exerciseId: string;
    sets: number;
    reps: number;
    order: number;
}

export interface CustomWorkout {
    id: string;
    name: string;
    exercises: WorkoutExercise[];
    createdAt: string;
}

export interface ActiveWorkout {
    workoutId: string;
    currentExerciseIndex: number;
    completedSets: { [exerciseId: string]: number };
    startedAt: string;
}

interface WorkoutState {
    customWorkouts: CustomWorkout[];
    activeWorkout: ActiveWorkout | null;
    currentWorkout: WorkoutExercise[];

    // Custom workout builder
    addExerciseToBuilder: (exerciseId: string) => void;
    removeExerciseFromBuilder: (exerciseId: string) => void;
    updateExerciseConfig: (exerciseId: string, sets: number, reps: number) => void;
    reorderExercises: (exercises: WorkoutExercise[]) => void;
    clearBuilder: () => void;

    // Save and load workouts
    saveWorkout: (name: string) => void;
    updateWorkout: (workoutId: string, name: string) => void;
    loadWorkout: (workoutId: string) => void;
    deleteWorkout: (workoutId: string) => void;

    // New methods for adding exercises directly to workouts
    createWorkout: (name: string) => CustomWorkout;
    addExerciseToWorkout: (workoutId: string, exercise: { exerciseId: string; sets: number; reps: string | number }) => void;

    // Active workout session
    startWorkout: (workoutId: string) => void;
    completeSet: (exerciseId: string) => void;
    nextExercise: () => void;
    finishWorkout: () => void;
}

export const useWorkoutStore = create<WorkoutState>()(
    persist(
        (set, get) => ({
            customWorkouts: [],
            activeWorkout: null,
            currentWorkout: [],

            addExerciseToBuilder: (exerciseId) => set((state) => {
                // Check if exercise already exists
                if (state.currentWorkout.find(e => e.exerciseId === exerciseId)) {
                    return state;
                }

                const newExercise: WorkoutExercise = {
                    exerciseId,
                    sets: 3,
                    reps: 10,
                    order: state.currentWorkout.length,
                };

                return {
                    currentWorkout: [...state.currentWorkout, newExercise],
                };
            }),

            removeExerciseFromBuilder: (exerciseId) => set((state) => ({
                currentWorkout: state.currentWorkout
                    .filter(e => e.exerciseId !== exerciseId)
                    .map((e, index) => ({ ...e, order: index })),
            })),

            updateExerciseConfig: (exerciseId, sets, reps) => set((state) => ({
                currentWorkout: state.currentWorkout.map(e =>
                    e.exerciseId === exerciseId ? { ...e, sets, reps } : e
                ),
            })),

            reorderExercises: (exercises) => set({
                currentWorkout: exercises.map((e, index) => ({ ...e, order: index })),
            }),

            clearBuilder: () => set({ currentWorkout: [] }),

            saveWorkout: (name) => set((state) => {
                if (state.currentWorkout.length === 0) return state;

                const newWorkout: CustomWorkout = {
                    id: Date.now().toString(),
                    name,
                    exercises: state.currentWorkout,
                    createdAt: new Date().toISOString(),
                };

                return {
                    customWorkouts: [...state.customWorkouts, newWorkout],
                    currentWorkout: [],
                };
            }),

            updateWorkout: (workoutId, name) => set((state) => {
                const workoutIndex = state.customWorkouts.findIndex(w => w.id === workoutId);
                if (workoutIndex === -1 || state.currentWorkout.length === 0) return state;

                const updatedWorkouts = [...state.customWorkouts];
                updatedWorkouts[workoutIndex] = {
                    ...updatedWorkouts[workoutIndex],
                    name,
                    exercises: state.currentWorkout,
                };

                return {
                    customWorkouts: updatedWorkouts,
                    currentWorkout: [],
                };
            }),

            loadWorkout: (workoutId) => set((state) => {
                const workout = state.customWorkouts.find(w => w.id === workoutId);
                if (!workout) return state;

                return {
                    currentWorkout: [...workout.exercises],
                };
            }),

            deleteWorkout: (workoutId) => set((state) => ({
                customWorkouts: state.customWorkouts.filter(w => w.id !== workoutId),
            })),

            createWorkout: (name) => {
                const newWorkout: CustomWorkout = {
                    id: Date.now().toString(),
                    name,
                    exercises: [],
                    createdAt: new Date().toISOString(),
                };

                set((state) => ({
                    customWorkouts: [...state.customWorkouts, newWorkout],
                }));

                return newWorkout;
            },

            addExerciseToWorkout: (workoutId, exercise) => set((state) => {
                const workoutIndex = state.customWorkouts.findIndex(w => w.id === workoutId);
                if (workoutIndex === -1) return state;

                const updatedWorkouts = [...state.customWorkouts];
                const currentExercises = updatedWorkouts[workoutIndex].exercises;

                const newExercise: WorkoutExercise = {
                    exerciseId: exercise.exerciseId,
                    sets: exercise.sets,
                    reps: typeof exercise.reps === 'number' ? exercise.reps : parseInt(exercise.reps) || 10,
                    order: currentExercises.length,
                };

                updatedWorkouts[workoutIndex] = {
                    ...updatedWorkouts[workoutIndex],
                    exercises: [...currentExercises, newExercise],
                };

                return {
                    customWorkouts: updatedWorkouts,
                };
            }),

            startWorkout: (workoutId) => set((state) => {
                const workout = state.customWorkouts.find(w => w.id === workoutId);
                if (!workout) return state;

                return {
                    activeWorkout: {
                        workoutId,
                        currentExerciseIndex: 0,
                        completedSets: {},
                        startedAt: new Date().toISOString(),
                    },
                };
            }),

            completeSet: (exerciseId) => set((state) => {
                if (!state.activeWorkout) return state;

                const currentSets = state.activeWorkout.completedSets[exerciseId] || 0;

                return {
                    activeWorkout: {
                        ...state.activeWorkout,
                        completedSets: {
                            ...state.activeWorkout.completedSets,
                            [exerciseId]: currentSets + 1,
                        },
                    },
                };
            }),

            nextExercise: () => set((state) => {
                if (!state.activeWorkout) return state;

                return {
                    activeWorkout: {
                        ...state.activeWorkout,
                        currentExerciseIndex: state.activeWorkout.currentExerciseIndex + 1,
                    },
                };
            }),

            finishWorkout: () => set({
                activeWorkout: null,
            }),
        }),
        {
            name: 'califorce-workouts',
        }
    )
);
