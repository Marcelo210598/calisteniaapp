import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ChallengeExercise {
    exerciseId: string;
    sets: number;
    reps: number;
}

export interface Challenge {
    id: string;
    name: string;
    description: string;
    duration: number; // days
    exercises: ChallengeExercise[];
    dailyGoal: string;
    badge: string;
    shareMessage: string;
    isPremium: boolean;
}

export interface ActiveChallenge {
    challengeId: string;
    startDate: string;
    completedDays: string[]; // ISO date strings
    currentDay: number;
}

interface ChallengeState {
    challenges: Challenge[];
    activeChallenge: ActiveChallenge | null;

    acceptChallenge: (challengeId: string) => void;
    completeDay: (date: string) => void;
    abandonChallenge: () => void;
    isChallengeCompleted: () => boolean;
    getCurrentStreak: () => number;
}

// Predefined challenges
const PREDEFINED_CHALLENGES: Challenge[] = [
    {
        id: 'desafio-28-dias-iniciante',
        name: 'Desafio 28 Dias Iniciante',
        description: 'Perfeito para quem está começando! 28 dias de treinos progressivos focados em construir uma base sólida de força e resistência.',
        duration: 28,
        exercises: [
            { exerciseId: '1', sets: 3, reps: 10 }, // Flexões
            { exerciseId: '8', sets: 3, reps: 30 }, // Prancha (segundos)
            { exerciseId: '3', sets: 3, reps: 15 }, // Agachamento
            { exerciseId: '12', sets: 3, reps: 8 }, // Remada Invertida
        ],
        dailyGoal: 'Complete todos os exercícios com boa forma',
        badge: '🏆',
        shareMessage: 'Completei o Desafio 28 Dias Iniciante do CaliForce! 💪 Treinei todo dia com o melhor app de calistenia brasileiro. Baixe você também: https://califorce.vercel.app/ #CaliForce #CalisteniaBrasil #Desafio28Dias',
        isPremium: false,
    },
    {
        id: 'desafio-full-body-30-dias',
        name: 'Desafio Full Body 30 Dias',
        description: 'Treino completo de corpo inteiro! 30 dias trabalhando todos os grupos musculares com exercícios intermediários.',
        duration: 30,
        exercises: [
            { exerciseId: '1', sets: 4, reps: 15 }, // Flexões
            { exerciseId: '2', sets: 3, reps: 8 }, // Barra Fixa
            { exerciseId: '5', sets: 3, reps: 10 }, // Paralelas
            { exerciseId: '3', sets: 4, reps: 20 }, // Agachamento
            { exerciseId: '7', sets: 3, reps: 20 }, // L-sit (segundos)
            { exerciseId: '10', sets: 3, reps: 15 }, // Burpees
        ],
        dailyGoal: 'Treino completo sem pular nenhum exercício',
        badge: '🔥',
        shareMessage: 'Completei o Desafio Full Body 30 Dias do CaliForce! 🔥 30 dias de treino intenso de corpo inteiro. Transforme seu corpo também: https://califorce.vercel.app/ #CaliForce #FullBody #CalisteniaBrasil',
        isPremium: false,
    },
    {
        id: 'desafio-pull-up-mastery',
        name: 'Desafio Pull-Up Mastery',
        description: 'Domine a barra fixa em 21 dias! Programa focado em aumentar sua força de puxar e conquistar mais repetições na barra.',
        duration: 21,
        exercises: [
            { exerciseId: '2', sets: 5, reps: 5 }, // Barra Fixa
            { exerciseId: '12', sets: 4, reps: 12 }, // Remada Invertida
            { exerciseId: '15', sets: 3, reps: 4 }, // Barra Archer
            { exerciseId: '7', sets: 3, reps: 15 }, // L-sit
            { exerciseId: '19', sets: 3, reps: 10 }, // Superman
        ],
        dailyGoal: 'Foco total na técnica de puxar',
        badge: '💪',
        shareMessage: 'Completei o Desafio Pull-Up Mastery do CaliForce! 💪 21 dias dominando a barra fixa. Aceite o desafio: https://califorce.vercel.app/ #CaliForce #PullUp #BarraFixa',
        isPremium: true,
    },
    {
        id: 'desafio-core-killer-14-dias',
        name: 'Desafio Core Killer 14 Dias',
        description: 'Abdômen de aço em 14 dias! Treinos intensos focados em desenvolver um core forte e definido.',
        duration: 14,
        exercises: [
            { exerciseId: '8', sets: 4, reps: 45 }, // Prancha (segundos)
            { exerciseId: '7', sets: 3, reps: 20 }, // L-sit (segundos)
            { exerciseId: '24', sets: 3, reps: 30 }, // Hollow Body Hold (segundos)
            { exerciseId: '18', sets: 3, reps: 8 }, // Dragon Flag
        ],
        dailyGoal: 'Contraia o core ao máximo em cada exercício',
        badge: '⚡',
        shareMessage: 'Completei o Desafio Core Killer 14 Dias do CaliForce! ⚡ Core de aço conquistado. Fortaleça seu abdômen: https://califorce.vercel.app/ #CaliForce #CoreKiller #AbdomenDeAco',
        isPremium: true,
    },
    {
        id: 'desafio-beast-mode-45-dias',
        name: 'Desafio Beast Mode 45 Dias',
        description: 'O desafio mais completo! 45 dias de treinos avançados para atletas que querem levar a calistenia ao próximo nível.',
        duration: 45,
        exercises: [
            { exerciseId: '6', sets: 3, reps: 5 }, // Muscle-up
            { exerciseId: '9', sets: 4, reps: 8 }, // HSPU
            { exerciseId: '4', sets: 3, reps: 10 }, // Pistol Squat
            { exerciseId: '20', sets: 3, reps: 15 }, // Front Lever (segundos)
            { exerciseId: '18', sets: 3, reps: 10 }, // Dragon Flag
            { exerciseId: '15', sets: 3, reps: 8 }, // Barra Archer
        ],
        dailyGoal: 'Supere seus limites todos os dias',
        badge: '👑',
        shareMessage: 'Completei o Desafio Beast Mode 45 Dias do CaliForce! 👑 45 dias de treino intenso e avançado. Vire uma fera: https://califorce.vercel.app/ #CaliForce #BeastMode #CalisteniaAvancada',
        isPremium: true,
    },
];

export const useChallengeStore = create<ChallengeState>()(
    persist(
        (set, get) => ({
            challenges: PREDEFINED_CHALLENGES,
            activeChallenge: null,

            acceptChallenge: (challengeId) => set({
                activeChallenge: {
                    challengeId,
                    startDate: new Date().toISOString(),
                    completedDays: [],
                    currentDay: 1,
                },
            }),

            completeDay: (date) => set((state) => {
                if (!state.activeChallenge) return state;

                // Check if day already completed
                if (state.activeChallenge.completedDays.includes(date)) {
                    return state;
                }

                const newCompletedDays = [...state.activeChallenge.completedDays, date];

                return {
                    activeChallenge: {
                        ...state.activeChallenge,
                        completedDays: newCompletedDays,
                        currentDay: newCompletedDays.length + 1,
                    },
                };
            }),

            abandonChallenge: () => set({
                activeChallenge: null,
            }),

            isChallengeCompleted: () => {
                const state = get();
                if (!state.activeChallenge) return false;

                const challenge = state.challenges.find(c => c.id === state.activeChallenge?.challengeId);
                if (!challenge) return false;

                return state.activeChallenge.completedDays.length >= challenge.duration;
            },

            getCurrentStreak: () => {
                const state = get();
                if (!state.activeChallenge) return 0;

                const completedDays = state.activeChallenge.completedDays.sort();
                if (completedDays.length === 0) return 0;

                let streak = 1;
                for (let i = completedDays.length - 1; i > 0; i--) {
                    const current = new Date(completedDays[i]);
                    const previous = new Date(completedDays[i - 1]);
                    const diffDays = Math.floor((current.getTime() - previous.getTime()) / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) {
                        streak++;
                    } else {
                        break;
                    }
                }

                return streak;
            },
        }),
        {
            name: 'califorce-challenges',
        }
    )
);
