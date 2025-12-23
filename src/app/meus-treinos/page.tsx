'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { exercises } from '@/data/exercises';
import { useWorkoutStore } from '@/store/workoutStore';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Play, Calendar } from 'lucide-react';

export default function MeusTreinosPage() {
    const router = useRouter();
    const { customWorkouts, loadWorkout, deleteWorkout, startWorkout } = useWorkoutStore();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleEdit = (workoutId: string) => {
        loadWorkout(workoutId);
        router.push(`/treino-personalizado?edit=${workoutId}`);
    };

    const handleDelete = (workoutId: string) => {
        if (deletingId === workoutId) {
            deleteWorkout(workoutId);
            setDeletingId(null);
        } else {
            setDeletingId(workoutId);
            setTimeout(() => setDeletingId(null), 3000);
        }
    };

    const handleStart = (workoutId: string) => {
        startWorkout(workoutId);
        router.push('/iniciar-treino');
    };

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Meus Treinos</h1>
                    <p className="text-muted-foreground">
                        Gerencie seus treinos personalizados salvos
                    </p>
                </div>

                {customWorkouts.length === 0 ? (
                    <Card className="p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <div className="text-6xl mb-4">💪</div>
                            <h2 className="text-2xl font-bold mb-2">Nenhum treino salvo</h2>
                            <p className="text-muted-foreground mb-6">
                                Crie seu primeiro treino personalizado para começar!
                            </p>
                            <Button
                                onClick={() => router.push('/treino-personalizado')}
                                className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                                size="lg"
                            >
                                Criar Treino
                            </Button>
                        </div>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {customWorkouts.map((workout) => {
                            const totalSets = workout.exercises.reduce((acc, ex) => acc + ex.sets, 0);
                            const isDeleting = deletingId === workout.id;

                            return (
                                <Card key={workout.id} className="p-6 hover:border-[#FF9F1C]/50 transition-colors">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2">{workout.name}</h3>
                                            <div className="flex gap-3 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {formatDate(workout.createdAt)}
                                                </span>
                                                <span>•</span>
                                                <span>{workout.exercises.length} exercícios</span>
                                                <span>•</span>
                                                <span>{totalSets} séries totais</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Exercise List */}
                                    <div className="space-y-2 mb-4">
                                        {workout.exercises.map((workoutEx) => {
                                            const exercise = exercises.find(e => e.id === workoutEx.exerciseId);
                                            if (!exercise) return null;

                                            const difficultyColors = {
                                                beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
                                                intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
                                                advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
                                            };

                                            return (
                                                <div
                                                    key={workoutEx.exerciseId}
                                                    className="flex items-center justify-between bg-muted/30 rounded-lg p-3"
                                                >
                                                    <div className="flex-1">
                                                        <div className="font-medium">{exercise.name}</div>
                                                        <div className="flex gap-2 mt-1">
                                                            <Badge className={difficultyColors[exercise.difficulty as keyof typeof difficultyColors]} variant="outline">
                                                                {exercise.difficulty === 'beginner' ? 'Iniciante' : exercise.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-semibold text-[#FF9F1C]">
                                                            {workoutEx.sets} × {workoutEx.reps}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">séries × reps</div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <Button
                                            onClick={() => handleStart(workout.id)}
                                            className="flex-1 bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                                        >
                                            <Play className="w-4 h-4 mr-2" />
                                            Iniciar Treino
                                        </Button>
                                        <Button
                                            onClick={() => handleEdit(workout.id)}
                                            variant="outline"
                                            className="flex-1"
                                        >
                                            <Edit className="w-4 h-4 mr-2" />
                                            Editar
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(workout.id)}
                                            variant={isDeleting ? 'destructive' : 'outline'}
                                            className={isDeleting ? 'flex-1' : ''}
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            {isDeleting ? 'Confirmar?' : 'Excluir'}
                                        </Button>
                                    </div>
                                </Card>
                            );
                        })}

                        {/* Create New Button */}
                        <Button
                            onClick={() => router.push('/treino-personalizado')}
                            variant="outline"
                            className="w-full"
                            size="lg"
                        >
                            + Criar Novo Treino
                        </Button>
                    </div>
                )}
            </main>
        </div>
    );
}
