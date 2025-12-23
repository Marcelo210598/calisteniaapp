'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { exercises } from '@/data/exercises';
import { useWorkoutStore, WorkoutExercise } from '@/store/workoutStore';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, GripVertical, Play, Save, X } from 'lucide-react';
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
    } = useSortable({ id: exercise.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
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
            className="bg-card border border-border rounded-lg p-4 mb-3"
        >
            <div className="flex items-start gap-3">
                <button
                    className="mt-2 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground"
                    {...attributes}
                    {...listeners}
                >
                    <GripVertical className="w-5 h-5" />
                </button>

                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="font-semibold text-lg">{exercise.name}</h3>
                            <div className="flex gap-2 mt-1">
                                <Badge className={difficultyColors[exercise.difficulty as keyof typeof difficultyColors]}>
                                    {exercise.difficulty === 'beginner' ? 'Iniciante' : exercise.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
                                </Badge>
                                <Badge variant="outline">{exercise.category}</Badge>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onRemove}
                            className="text-destructive hover:text-destructive"
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                        {exercise.muscleGroups.join(', ')}
                    </p>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium">Séries:</label>
                            <Input
                                type="number"
                                min="1"
                                max="10"
                                value={sets}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdateSets(parseInt(e.target.value) || 1)}
                                className="w-20"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium">Reps:</label>
                            <Input
                                type="number"
                                min="1"
                                max="100"
                                value={reps}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdateReps(parseInt(e.target.value) || 1)}
                                className="w-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TreinoPersonalizadoPage() {
    const router = useRouter();
    const [workoutName, setWorkoutName] = useState('');
    const [showSaveDialog, setShowSaveDialog] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState<string>('all');
    const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
    const [editingWorkoutId, setEditingWorkoutId] = useState<string | null>(null);

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

    const sensors = useSensors(
        useSensor(PointerSensor),
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
        }
    };

    const handleSaveWorkout = () => {
        if (workoutName.trim() && currentWorkout.length > 0) {
            if (editingWorkoutId) {
                updateWorkout(editingWorkoutId, workoutName);
            } else {
                saveWorkout(workoutName);
            }
            setWorkoutName('');
            setShowSaveDialog(false);
            setEditingWorkoutId(null);
            router.push('/meus-treinos');
        }
    };

    const handleStartWorkout = () => {
        if (currentWorkout.length > 0) {
            // Save as temporary workout
            saveWorkout('Treino Rápido ' + new Date().toLocaleTimeString());
            router.push('/iniciar-treino');
        }
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
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Montar Treino Personalizado</h1>
                    <p className="text-muted-foreground">
                        Crie seu treino perfeito escolhendo exercícios e definindo séries e repetições
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Exercise List */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Exercícios Disponíveis</h2>

                        {/* Filters */}
                        <div className="mb-4 space-y-3">
                            <Input
                                placeholder="Buscar exercícios..."
                                value={searchTerm}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                            />

                            <div className="flex gap-2 flex-wrap">
                                {categories.map((cat) => (
                                    <Button
                                        key={cat}
                                        variant={filterCategory === cat ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setFilterCategory(cat)}
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
                                    <Card key={exercise.id} className="p-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">{exercise.name}</h3>
                                                <div className="flex gap-2 mb-2">
                                                    <Badge className={difficultyColors[exercise.difficulty as keyof typeof difficultyColors]}>
                                                        {exercise.difficulty === 'beginner' ? 'Iniciante' : exercise.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
                                                    </Badge>
                                                    <Badge variant="outline">{exercise.category}</Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {exercise.muscleGroups.join(', ')}
                                                </p>
                                            </div>
                                            <Button
                                                onClick={() => addExerciseToBuilder(exercise.id)}
                                                disabled={isAdded}
                                                size="sm"
                                                className="ml-4"
                                            >
                                                {isAdded ? (
                                                    <>
                                                        <X className="w-4 h-4 mr-1" />
                                                        Adicionado
                                                    </>
                                                ) : (
                                                    <>
                                                        <Plus className="w-4 h-4 mr-1" />
                                                        Adicionar
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
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">Minha Sequência</h2>
                            {currentWorkout.length > 0 && (
                                <Button variant="ghost" size="sm" onClick={clearBuilder}>
                                    Limpar Tudo
                                </Button>
                            )}
                        </div>

                        {currentWorkout.length === 0 ? (
                            <Card className="p-8 text-center">
                                <p className="text-muted-foreground mb-2">Nenhum exercício adicionado</p>
                                <p className="text-sm text-muted-foreground">
                                    Adicione exercícios da lista ao lado para montar seu treino
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
                                                        onRemove={() => removeExerciseFromBuilder(exercise.id)}
                                                        onUpdateSets={(sets) => updateExerciseConfig(exercise.id, sets, workoutEx.reps)}
                                                        onUpdateReps={(reps) => updateExerciseConfig(exercise.id, workoutEx.sets, reps)}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </SortableContext>
                                </DndContext>

                                <div className="space-y-3 sticky bottom-4">
                                    <Button
                                        onClick={handleStartWorkout}
                                        className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                                        size="lg"
                                    >
                                        <Play className="w-5 h-5 mr-2" />
                                        Iniciar Treino Agora
                                    </Button>

                                    {!showSaveDialog ? (
                                        <Button
                                            onClick={() => setShowSaveDialog(true)}
                                            variant="outline"
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Save className="w-5 h-5 mr-2" />
                                            Salvar Treino
                                        </Button>
                                    ) : (
                                        <Card className="p-4">
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
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
