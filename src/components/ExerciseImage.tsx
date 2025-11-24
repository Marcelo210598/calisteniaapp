'use client';

import { useState } from 'react';

interface ExerciseImageProps {
    src: string;
    alt: string;
    className?: string;
    step: number;
}

export function ExerciseImage({ src, alt, className, step }: ExerciseImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white transition-all hover:scale-105">
            <img
                src={imgSrc}
                alt={alt}
                className={className}
                loading="lazy"
                onError={() => setImgSrc('/placeholder.jpg')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-xl font-bold drop-shadow-lg">Passo {step}</p>
            </div>
        </div>
    );
}
