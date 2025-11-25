'use client';

import { useProgressStore } from '@/store/progressStore';
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export function ProgressCounter() {
    const { getCompletedCount } = useProgressStore();
    const [count, setCount] = useState(0);
    const totalExercises = 50; // Assuming 50 for now as per prompt

    useEffect(() => {
        setCount(getCompletedCount());
    }, [getCompletedCount]);

    const percentage = Math.min((count / totalExercises) * 100, 100);

    return (
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 max-w-md mx-auto mt-8">
            <div className="flex justify-between items-end mb-2">
                <div>
                    <h3 className="text-lg font-semibold text-[#080357] dark:text-white">Seu Progresso</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Você completou <span className="font-bold text-[#FF9F1C]">{count}</span> de {totalExercises} exercícios</p>
                </div>
                <span className="text-2xl font-bold text-[#FF9F1C]">{Math.round(percentage)}%</span>
            </div>
            <Progress value={percentage} className="h-3 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-gradient-to-r from-[#FFC15E] to-[#FF9F1C]" />
        </div>
    );
}
