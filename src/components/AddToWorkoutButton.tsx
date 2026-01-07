'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useWorkoutStore } from '@/store/workoutStore';
import { usePremiumStore } from '@/store/usePremiumStore';
import { Plus, Dumbbell, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface AddToWorkoutButtonProps {
    exerciseId: string;
    exerciseName: string;
}

export function AddToWorkoutButton({ exerciseId, exerciseName }: AddToWorkoutButtonProps) {
    const router = useRouter();
    const { data: session } = useSession();
    const { customWorkouts, addExerciseToWorkout, createWorkout } = useWorkoutStore();
    const { isPremium } = usePremiumStore();
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<'existing' | 'new'>('existing');
    const [selectedWorkoutId, setSelectedWorkoutId] = useState('');
    const [newWorkoutName, setNewWorkoutName] = useState('');
    const [sets, setSets] = useState('3');
    const [reps, setReps] = useState('10');

    const handleAddToExisting = () => {
        if (!selectedWorkoutId) {
            toast.error('Selecione um treino primeiro!');
            return;
        }

        const workout = customWorkouts.find((w) => w.id === selectedWorkoutId);
        if (!workout) return;

        // Check free tier limit (6 exercises max)
        if (!isPremium && !session?.user?.isPremium) {
            if (workout.exercises.length >= 6) {
                toast.error('Limite atingido! 🔒', {
                    description: 'Usuários free podem adicionar no máximo 6 exercícios por treino.',
                    action: {
                        label: 'Ser Premium Agora',
                        onClick: () => router.push('/premium'),
                    },
                    duration: 5000,
                });
                return;
            }
        }

        // Check if exercise already exists in workout
        if (workout.exercises.some((e) => e.exerciseId === exerciseId)) {
            toast.error('Este exercício já está neste treino!');
            return;
        }

        addExerciseToWorkout(selectedWorkoutId, {
            exerciseId,
            sets: parseInt(sets),
            reps,
        });

        toast.success(`${exerciseName} adicionado ao treino! 💪`);
        setOpen(false);
    };

    const handleCreateNew = () => {
        if (!newWorkoutName.trim()) {
            toast.error('Digite um nome para o treino!');
            return;
        }

        const newWorkout = createWorkout(newWorkoutName);
        addExerciseToWorkout(newWorkout.id, {
            exerciseId,
            sets: parseInt(sets),
            reps,
        });

        toast.success(`Treino "${newWorkoutName}" criado com sucesso! 🎉`);
        setOpen(false);

        // Optionally redirect to workouts page
        setTimeout(() => {
            router.push('/meus-treinos');
        }, 1000);
    };

    const handleSubmit = () => {
        if (mode === 'existing') {
            handleAddToExisting();
        } else {
            handleCreateNew();
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white" size="lg">
                    <Plus className="h-5 w-5 mr-2" />
                    Adicionar a Treino
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Adicionar {exerciseName}</DialogTitle>
                    <DialogDescription>
                        Escolha um treino existente ou crie um novo para adicionar este exercício.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Mode Selection */}
                    <RadioGroup value={mode} onValueChange={(value) => setMode(value as 'existing' | 'new')}>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="existing" id="existing" />
                                <Label htmlFor="existing" className="flex items-center gap-2 cursor-pointer">
                                    <Dumbbell className="h-4 w-4" />
                                    Inserir em treino existente
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="new" id="new" />
                                <Label htmlFor="new" className="flex items-center gap-2 cursor-pointer">
                                    <Sparkles className="h-4 w-4" />
                                    Criar novo treino
                                </Label>
                            </div>
                        </div>
                    </RadioGroup>

                    {/* Existing Workout Selection */}
                    {mode === 'existing' && (
                        <div className="space-y-2">
                            <Label>Selecione o treino:</Label>
                            {customWorkouts.length === 0 ? (
                                <div className="text-sm text-muted-foreground p-4 border rounded-lg text-center">
                                    Você ainda não tem treinos salvos. Crie um novo treino!
                                </div>
                            ) : (
                                <RadioGroup value={selectedWorkoutId} onValueChange={setSelectedWorkoutId}>
                                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                                        {customWorkouts.map((workout) => (
                                            <div
                                                key={workout.id}
                                                className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50"
                                            >
                                                <RadioGroupItem value={workout.id} id={workout.id} />
                                                <Label htmlFor={workout.id} className="flex-1 cursor-pointer">
                                                    <div className="font-medium">{workout.name}</div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {workout.exercises.length} exercício(s)
                                                        {!isPremium && !session?.user?.isPremium && workout.exercises.length >= 6 && (
                                                            <span className="text-amber-600 ml-1">• Limite atingido</span>
                                                        )}
                                                    </div>
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </RadioGroup>
                            )}
                        </div>
                    )}

                    {/* New Workout Name */}
                    {mode === 'new' && (
                        <div className="space-y-2">
                            <Label htmlFor="workout-name">Nome do novo treino:</Label>
                            <Input
                                id="workout-name"
                                placeholder="Ex: Treino de Peito e Tríceps"
                                value={newWorkoutName}
                                onChange={(e) => setNewWorkoutName(e.target.value)}
                            />
                        </div>
                    )}

                    {/* Sets and Reps */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="sets">Séries:</Label>
                            <Input
                                id="sets"
                                type="number"
                                min="1"
                                max="10"
                                value={sets}
                                onChange={(e) => setSets(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="reps">Repetições:</Label>
                            <Input
                                id="reps"
                                placeholder="Ex: 10-12"
                                value={reps}
                                onChange={(e) => setReps(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        onClick={handleSubmit}
                        className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                        size="lg"
                    >
                        {mode === 'existing' ? 'Adicionar ao Treino' : 'Criar e Adicionar'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
