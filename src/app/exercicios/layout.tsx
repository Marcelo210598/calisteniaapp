import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Exercícios de Calistenia | Lista Completa e Tutoriais",
    description: "Biblioteca completa de exercícios de calistenia. Filtre por dificuldade (iniciante, intermediário, avançado) e grupos musculares. Tutoriais em vídeo e passo a passo.",
    keywords: ["lista de exercícios", "exercícios calistenia", "tutoriais calistenia", "biblioteca de treinos", "calistenia para iniciantes"],
};

export default function ExercisesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
