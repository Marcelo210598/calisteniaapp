export interface Exercise {
  id: string;
  name: string;
  slug: string;
  description: string;
  muscleGroups: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'Push' | 'Pull' | 'Legs' | 'Core' | 'Full Body';
  tips: string[];
  commonMistakes: string[];
  images: string[];
}

export interface Cycle {
  id: string;
  name: string;
  description: string;
  duration: string;
  weeks: {
    weekNumber: number;
    workouts: {
      day: string;
      exercises: {
        name: string;
        sets: number;
        reps: string;
        rest: string;
      }[];
    }[];
  }[];
}

export interface Progress {
  exerciseId: string;
  completed: boolean;
  date: string;
  notes?: string;
}