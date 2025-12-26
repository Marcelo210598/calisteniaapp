'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { exercises } from '@/data/exercises';
import { useWorkoutStore, WorkoutExercise } from '@/store/workoutStore';
import { usePremiumStore } from '@/store/usePremiumStore';
import { Header } from '@/components/Header';
import { showPremiumToast } from '@/components/PremiumToast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, GripVertical, Play, Save, X, Minus, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableExerciseProps {
    exercise: any;
    sets: number;
    reps: number;
    onRemove: () => void;
    onUpdateSets: (sets: number) => void;
    onUpdateReps: (reps: number) => void;
}

function SortableExercise({ exercise, sets, reps, onRemove, onUpdateSets, onUpdateReps }: SortableExerciseProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: exercise.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const difficultyColors = {
        beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
        intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-card border border-border rounded-lg p-4 md:p-6 mb-3 touch-manipulation"
        >
            <div className="flex items-start gap-3">
                <button
                    className="mt-2 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground touch-manipulation p-2"
                    {...attributes}
                    {...listeners}
                >
                    <GripVertical className="w-6 h-6 md:w-5 md:h-5" />
                </button>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2 gap-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base md:text-lg truncate">{exercise.name}</h3>
                            <div className="flex gap-2 mt-1 flex-wrap">
                                <Badge className={difficultyColors[exercise.difficulty as keyof typeof difficultyColors]}>
                                    {exercise.difficulty === 'beginner' ? 'Iniciante' : exercise.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
                                </Badge>
                                <Badge variant="outline" className="text-xs">{exercise.category}</Badge>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onRemove}
                            className="text-destructive hover:text-destructive min-h-[48px] min-w-[48px] md:min-h-[40px] md:min-w-[40px]"
                        >
                            <Trash2 className="w-5 h-5 md:w-4 md:h-4" />
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                        {exercise.muscleGroups.join(', ')}
                    </p>

                    {/* Mobile-optimized +/- controls */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs font-medium text-muted-foreground mb-2 block">Séries</label>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => onUpdateSets(Math.max(1, sets - 1))}
                                    className="min-h-[48px] min-w-[48px] touch-manipulation"
                                >
                                    <Minus className="w-5 h-5" />
                                </Button>
                                <div className="flex-1 text-center">
                                    <span className="text-2xl font-bold text-[#FF9F1C]">{sets}</span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => onUpdateSets(Math.min(10, sets + 1))}
                                    className="min-h-[48px] min-w-[48px] touch-manipulation"
                                >
                                    <Plus className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-muted-foreground mb-2 block">Reps</label>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => onUpdateReps(Math.max(1, reps - 1))}
                                    className="min-h-[48px] min-w-[48px] touch-manipulation"
                                >
                                    <Minus className="w-5 h-5" />
                                </Button>
                                <div className="flex-1 text-center">
                                    <span className="text-2xl font-bold text-[#FF9F1C]">{reps}</span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => onUpdateReps(Math.min(100, reps + 1))}
                                    className="min-h-[48px] min-w-[48px] touch-manipulation"
                                >
                                    <Plus className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TreinoPersonalizadoPage() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [workoutName, setWorkoutName] = useState('');
    const [showSaveDialog, setShowSaveDialog] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState<string>('all');
    const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
    const [editingWorkoutId, setEditingWorkoutId] = useState<string | null>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const { isPremium } = usePremiumStore();

    const {
        currentWorkout,
        customWorkouts,
        addExerciseToBuilder,
        removeExerciseFromBuilder,
        updateExerciseConfig,
        reorderExercises,
        saveWorkout,
        updateWorkout,
        clearBuilder,
    } = useWorkoutStore();

    // Check for edit mode from URL params
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const editId = params.get('edit');
        if (editId) {
            setEditingWorkoutId(editId);
            const workout = customWorkouts.find(w => w.id === editId);
            if (workout) {
                setWorkoutName(workout.name);
            }
        }
    }, [customWorkouts]);

    // Scroll detection for FAB
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // Prevent drag on scroll
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = currentWorkout.findIndex((e) => e.exerciseId === active.id);
            const newIndex = currentWorkout.findIndex((e) => e.exerciseId === over.id);

            const reordered = arrayMove(currentWorkout, oldIndex, newIndex);
            reorderExercises(reordered);
            toast.success('Ordem atualizada!');
        }
    };

    const handleAddExercise = (exerciseId: string) => {
        // Check if free user is trying to add 7th exercise
        if (!isPremium && currentWorkout.length >= 6) {
            showPremiumToast('Limite de 6 exercícios no free. Desbloqueie o Premium para treinos ilimitados!');
            return;
        }

        addExerciseToBuilder(exerciseId);
        const exercise = exercises.find(e => e.id === exerciseId);
        toast.success(`${exercise?.name} adicionado!`, {
            description: 'Arraste para reordenar',
        });
    };

    const handleRemoveExercise = (exerciseId: string) => {
        const exercise = exercises.find(e => e.id === exerciseId);
        removeExerciseFromBuilder(exerciseId);
        toast.info(`${exercise?.name} removido`);
    };

    const handleSaveWorkout = () => {
        // Soft login prompt for anonymous users
        if (status === 'unauthenticated') {
            toast.info('💾 Salve seu progresso no cloud!', {
                description: 'Faça login para acessar seus treinos em qualquer dispositivo',
                duration: 6000,
                action: {
                    label: 'Entrar',
                    onClick: () => router.push('/login?callbackUrl=/treino-personalizado')
                }
            });
            // Still allow saving to localStorage for now
            // We'll implement localStorage sync later
        }

        if (workoutName.trim() && currentWorkout.length > 0) {
            if (editingWorkoutId) {
                updateWorkout(editingWorkoutId, workoutName);
                toast.success('Treino atualizado!');
            } else {
                saveWorkout(workoutName);
                if (status === 'authenticated') {
                    toast.success('Treino salvo no cloud!', {
                        description: `${currentWorkout.length} exercícios`,
                    });
                } else {
                    toast.success('Treino salvo localmente!', {
                        description: 'Faça login para salvar no cloud',
                    });
                }
            }
            setWorkoutName('');
            setShowSaveDialog(false);
            setEditingWorkoutId(null);
            router.push('/meus-treinos');
        } else {
            toast.error('Adicione exercícios e dê um nome ao treino');
        }
    };

    const handleStartWorkout = () => {
        if (currentWorkout.length > 0) {
            // Save as temporary workout
            saveWorkout('Treino Rápido ' + new Date().toLocaleTimeString());
            toast.success('Iniciando treino!');
            router.push('/iniciar-treino');
        } else {
            toast.error('Adicione pelo menos um exercício');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredExercises = exercises.filter((ex) => {
        const matchesSearch = ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ex.muscleGroups.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = filterCategory === 'all' || ex.category === filterCategory;
        const matchesDifficulty = filterDifficulty === 'all' || ex.difficulty === filterDifficulty;

        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    const categories = ['all', ...Array.from(new Set(exercises.map(e => e.category)))];
    const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

    return (
        <div className="min-h-screen bg-background pb-32 md:pb-8">
            <Header />

            <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
                <div className="mb-6 md:mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Montar Treino</h1>
                    <p className="text-muted-foreground text-sm md:text-base">
                        Escolha exercícios e defina séries e repetições
                    </p>
                </div>

                {/* Mobile: Vertical Stack, Desktop: 2 Columns */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Exercise List */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Exercícios Disponíveis</h2>

                        {/* Filters */}
                        <div className="mb-4 space-y-3">
                            <Input
                                placeholder="Buscar exercícios..."
                                value={searchTerm}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                                className="h-12 text-base"
                            />

                            <div className="flex gap-2 flex-wrap">
                                {categories.map((cat) => (
                                    <Button
                                        key={cat}
                                        variant={filterCategory === cat ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setFilterCategory(cat)}
                                        className="min-h-[40px] touch-manipulation"
                                    >
                                        {cat === 'all' ? 'Todas' : cat}
                                    </Button>
                                ))}
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {difficulties.map((diff) => (
                                    <Button
                                        key={diff}
                                        variant={filterDifficulty === diff ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setFilterDifficulty(diff)}
                                        className="min-h-[40px] touch-manipulation"
                                    >
                                        {diff === 'all' ? 'Todos' : diff === 'beginner' ? 'Iniciante' : diff === 'intermediate' ? 'Intermediário' : 'Avançado'}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                            {filteredExercises.map((exercise) => {
                                const isAdded = currentWorkout.some((e: WorkoutExercise) => e.exerciseId === exercise.id);
                                const difficultyColors = {
                                    beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
                                    intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
                                    advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
                                };

                                return (
                                    <Card key={exercise.id} className="p-4 min-h-[80px] flex items-center">
                                        <div className="flex items-center justify-between w-full gap-3">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold mb-1 text-sm md:text-base truncate">{exercise.name}</h3>
                                                <div className="flex gap-2 mb-2 flex-wrap">
                                                    <Badge className={difficultyColors[exercise.difficulty as keyof typeof difficultyColors]}>
                                                        {exercise.difficulty === 'beginner' ? 'Iniciante' : exercise.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs">{exercise.category}</Badge>
                                                </div>
                                                <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
                                                    {exercise.muscleGroups.join(', ')}
                                                </p>
                                            </div>
                                            <Button
                                                onClick={() => handleAddExercise(exercise.id)}
                                                disabled={isAdded}
                                                size="sm"
                                                className="min-h-[56px] min-w-[56px] md:min-h-[48px] md:min-w-[100px] shrink-0 touch-manipulation"
                                            >
                                                {isAdded ? (
                                                    <>
                                                        <X className="w-5 h-5 md:mr-1" />
                                                        <span className="hidden md:inline">Adicionado</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Plus className="w-5 h-5 md:mr-1" />
                                                        <span className="hidden md:inline">Adicionar</span>
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>

                    {/* Workout Builder */}
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl md:text-2xl font-bold">Minha Sequência</h2>
                            {currentWorkout.length > 0 && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        clearBuilder();
                                        toast.info('Sequência limpa');
                                    }}
                                    className="min-h-[40px]"
                                >
                                    Limpar Tudo
                                </Button>
                            )}
                        </div>

                        {currentWorkout.length === 0 ? (
                            <Card className="p-8 text-center">
                                <p className="text-muted-foreground mb-2">Nenhum exercício adicionado</p>
                                <p className="text-sm text-muted-foreground">
                                    <span className="lg:hidden">Adicione exercícios da lista abaixo</span>
                                    <span className="hidden lg:inline">Adicione exercícios da lista ao lado</span>
                                </p>
                            </Card>
                        ) : (
                            <>
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleDragEnd}
                                >
                                    <SortableContext
                                        items={currentWorkout.map(e => e.exerciseId)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        <div className="mb-6">
                                            {currentWorkout.map((workoutEx) => {
                                                const exercise = exercises.find(e => e.id === workoutEx.exerciseId);
                                                if (!exercise) return null;

                                                return (
                                                    <SortableExercise
                                                        key={exercise.id}
                                                        exercise={exercise}
                                                        sets={workoutEx.sets}
                                                        reps={workoutEx.reps}
                                                        onRemove={() => handleRemoveExercise(exercise.id)}
                                                        onUpdateSets={(sets) => updateExerciseConfig(exercise.id, sets, workoutEx.reps)}
                                                        onUpdateReps={(reps) => updateExerciseConfig(exercise.id, workoutEx.sets, reps)}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </SortableContext>
                                </DndContext>
                            </>
                        )}
                    </div>
                </div>
            </main>

            {/* Sticky Bottom Bar - Mobile */}
            {currentWorkout.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border p-4 z-40 md:hidden">
                    <div className="container mx-auto max-w-7xl space-y-3">
                        {!showSaveDialog ? (
                            <>
                                <Button
                                    onClick={handleStartWorkout}
                                    className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white min-h-[60px] text-lg font-semibold touch-manipulation"
                                >
                                    <Play className="w-6 h-6 mr-2" />
                                    Iniciar Treino Agora
                                </Button>
                                <Button
                                    onClick={() => setShowSaveDialog(true)}
                                    variant="outline"
                                    className="w-full min-h-[60px] text-lg font-semibold touch-manipulation"
                                >
                                    <Save className="w-6 h-6 mr-2" />
                                    Salvar Treino
                                </Button>
                            </>
                        ) : (
                            <Card className="p-4">
                                <label className="block text-sm font-medium mb-2">Nome do Treino</label>
                                <Input
                                    placeholder="Ex: Treino de Peito e Tríceps"
                                    value={workoutName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkoutName(e.target.value)}
                                    className="mb-3 h-12 text-base"
                                />
                                <div className="flex gap-2">
                                    <Button
                                        onClick={handleSaveWorkout}
                                        className="flex-1 min-h-[56px] text-base touch-manipulation"
                                    >
                                        Salvar
                                    </Button>
                                    <Button
                                        onClick={() => setShowSaveDialog(false)}
                                        variant="outline"
                                        className="flex-1 min-h-[56px] text-base touch-manipulation"
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            )}

            {/* Desktop Bottom Actions */}
            {currentWorkout.length > 0 && (
                <div className="hidden md:block fixed bottom-8 right-8 z-40">
                    <div className="space-y-3">
                        {!showSaveDialog ? (
                            <>
                                <Button
                                    onClick={handleStartWorkout}
                                    className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white min-h-[56px]"
                                    size="lg"
                                >
                                    <Play className="w-5 h-5 mr-2" />
                                    Iniciar Treino Agora
                                </Button>
                                <Button
                                    onClick={() => setShowSaveDialog(true)}
                                    variant="outline"
                                    className="w-full min-h-[56px]"
                                    size="lg"
                                >
                                    <Save className="w-5 h-5 mr-2" />
                                    Salvar Treino
                                </Button>
                            </>
                        ) : (
                            <Card className="p-4 w-80">
                                <label className="block text-sm font-medium mb-2">Nome do Treino</label>
                                <Input
                                    placeholder="Ex: Treino de Peito e Tríceps"
                                    value={workoutName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkoutName(e.target.value)}
                                    className="mb-3"
                                />
                                <div className="flex gap-2">
                                    <Button onClick={handleSaveWorkout} className="flex-1">
                                        Salvar
                                    </Button>
                                    <Button
                                        onClick={() => setShowSaveDialog(false)}
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            )}

            {/* Scroll to Top FAB */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-36 right-6 md:bottom-8 md:left-8 w-14 h-14 bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white rounded-full shadow-lg flex items-center justify-center z-50 touch-manipulation transition-all duration-200 hover:scale-110"
                    aria-label="Voltar ao topo"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}
