export interface HITWorkout {
    id: string;
    name: string;
    duration: number; // in minutes
    level: 'beginner' | 'intermediate' | 'advanced';
    isPremium: boolean;
    exercises: {
        name: string;
        slug: string;
        workTime: number; // seconds
        restTime: number; // seconds
        rounds: number;
    }[];
    description: string;
    benefits: string[];
    // Beginner-friendly explanations
    whatIsIt?: string; // Explain what HIT is
    howItWorks?: string; // Explain the workout format
    formTips?: string[]; // Form and technique tips
    motivation?: string; // Motivational message
}

export const hitWorkouts: HITWorkout[] = [
    // FREE WORKOUTS (3)
    {
        id: 'hit-1',
        name: 'HIT Iniciante Full Body',
        duration: 20,
        level: 'beginner',
        isPremium: false,
        description: 'Treino completo para iniciantes com exercícios básicos de calistenia. Perfeito para quem está começando!',
        whatIsIt: 'HIT significa Treino de Alta Intensidade — são treinos curtos, intensos e super eficientes para queimar gordura e ganhar força rapidamente. Você trabalha forte por períodos curtos e descansa pouco, mantendo seu coração acelerado!',
        howItWorks: 'São 3 voltas completas. Em cada exercício, faça o máximo que conseguir durante o tempo indicado (30-40 segundos). Descanse o tempo marcado (15-20 segundos) e passe para o próximo. Após completar os 5 exercícios, descanse 1 minuto e repita tudo. Se cansar muito, vá mais devagar — o importante é completar as 3 voltas!',
        formTips: [
            'Mantenha a coluna sempre neutra (nem muito arqueada, nem curvada)',
            'Respire corretamente: expire no esforço, inspire no relaxamento',
            'Se for iniciante, diminua as repetições ou faça variações mais fáceis (ex: flexão de joelhos)',
            'Foque na qualidade do movimento, não na velocidade',
            'Mantenha o core (abdômen) sempre contraído para proteger as costas'
        ],
        motivation: 'Você consegue! Este é o primeiro passo da sua jornada. Foque em fazer o movimento correto e sinta a evolução a cada treino. Não desista, monstro! 💪',
        benefits: [
            'Queima de gordura acelerada',
            'Fortalecimento de corpo inteiro',
            'Melhora do condicionamento cardiovascular',
            'Aumento da resistência muscular'
        ],
        exercises: [
            { name: 'Flexões de Braço', slug: 'flexoes-de-braco', workTime: 40, restTime: 20, rounds: 3 },
            { name: 'Agachamento Livre', slug: 'agachamento-livre', workTime: 40, restTime: 20, rounds: 3 },
            { name: 'Prancha', slug: 'prancha', workTime: 30, restTime: 15, rounds: 3 },
            { name: 'Burpees', slug: 'burpees', workTime: 30, restTime: 20, rounds: 3 },
            { name: 'Afundo', slug: 'afundo', workTime: 40, restTime: 20, rounds: 3 }
        ]
    },
    {
        id: 'hit-2',
        name: 'HIT Cardio Explosivo',
        duration: 15,
        level: 'beginner',
        isPremium: false,
        description: 'Treino cardio intenso para queimar calorias rapidamente. Explosão máxima em apenas 15 minutos!',
        whatIsIt: 'Este é um treino AMRAP (As Many Rounds As Possible) — faça o máximo de voltas possível no tempo total. É perfeito para acelerar seu metabolismo e queimar muitas calorias em pouco tempo!',
        howItWorks: 'Siga a sequência de 5 exercícios sem parar muito. Faça 30 segundos de cada exercício, descanse apenas 15 segundos e passe para o próximo. Complete a volta e recomece imediatamente. O objetivo é fazer o máximo de voltas completas em 15 minutos. Se precisar, descanse 20-30 segundos entre voltas.',
        formTips: [
            'Mantenha um ritmo constante — não comece muito rápido ou vai cansar logo',
            'Nos burpees, mantenha o core firme ao descer e subir',
            'No agachamento com salto, aterrisse com os joelhos levemente flexionados',
            'Respire de forma ritmada — não prenda a respiração',
            'Se sentir tontura, pare e descanse até se recuperar'
        ],
        motivation: 'Apenas 15 minutos separam você de uma explosão de endorfina! Dê tudo de si, mas respeite seus limites. Cada volta completada é uma vitória! 🔥',
        benefits: [
            'Queima calórica máxima',
            'Melhora explosiva',
            'Condicionamento cardiovascular',
            'Aumento do metabolismo pós-treino'
        ],
        exercises: [
            { name: 'Burpees', slug: 'burpees', workTime: 30, restTime: 15, rounds: 4 },
            { name: 'Agachamento com Salto', slug: 'agachamento-com-salto', workTime: 30, restTime: 15, rounds: 4 },
            { name: 'Flexões de Braço', slug: 'flexoes-de-braco', workTime: 30, restTime: 15, rounds: 4 },
            { name: 'Superman', slug: 'superman', workTime: 25, restTime: 15, rounds: 3 },
            { name: 'Prancha', slug: 'prancha', workTime: 30, restTime: 15, rounds: 3 }
        ]
    },
    {
        id: 'hit-3',
        name: 'HIT Core Básico',
        duration: 18,
        level: 'beginner',
        isPremium: false,
        description: 'Foco total no core com exercícios que fortalecem abdômen, lombar e estabilizadores.',
        whatIsIt: 'Treino focado em fortalecer seu CORE (centro do corpo) — abdômen, lombar e músculos estabilizadores. Um core forte é essencial para todos os movimentos e previne dores nas costas!',
        howItWorks: '4 voltas completas. Faça cada exercício pelo tempo indicado (30-40 segundos) ou segure a posição (prancha, hollow body). Descanse 15-20 segundos entre exercícios. Contraia o abdômen o tempo todo para proteger as costas. Entre as voltas, descanse 1 minuto.',
        formTips: [
            'Na prancha e hollow body, mantenha a lombar pressionada (não deixe arquear)',
            'Respire normalmente mesmo nos exercícios isométricos (não prenda a respiração)',
            'Contraia o abdômen como se fosse receber um soco na barriga',
            'Se tremer, é normal! Significa que está trabalhando',
            'Mantenha o pescoço alinhado com a coluna (não force para cima ou para baixo)'
        ],
        motivation: 'Core forte = corpo forte! Cada segundo que você aguenta é um segundo a mais de força. Você está construindo uma base sólida para evoluir! 🎯',
        benefits: [
            'Core de aço',
            'Melhora da postura',
            'Prevenção de dores lombares',
            'Base sólida para movimentos avançados'
        ],
        exercises: [
            { name: 'Prancha', slug: 'prancha', workTime: 40, restTime: 20, rounds: 4 },
            { name: 'Hollow Body Hold', slug: 'hollow-body-hold', workTime: 30, restTime: 20, rounds: 4 },
            { name: 'Superman', slug: 'superman', workTime: 30, restTime: 20, rounds: 4 },
            { name: 'Flexões Diamante', slug: 'flexoes-diamante', workTime: 30, restTime: 20, rounds: 3 },
            { name: 'Elevação de Panturrilha em Pé', slug: 'panturrilha-em-pe', workTime: 40, restTime: 15, rounds: 3 }
        ]
    },

    // PREMIUM WORKOUTS (6)
    {
        id: 'hit-4',
        name: 'HIT Muscle Up Builder',
        duration: 25,
        level: 'advanced',
        isPremium: true,
        description: 'Treino focado em desenvolver a força explosiva necessária para o muscle-up. Para atletas avançados!',
        whatIsIt: 'Treino avançado focado em desenvolver a força explosiva de puxar e empurrar necessária para dominar o muscle-up — um dos movimentos mais icônicos da calistenia!',
        howItWorks: '4 voltas de alta intensidade. Trabalhe 30-40 segundos em cada exercício com foco total na técnica. Descanse 30-40 segundos entre exercícios para recuperação adequada. Este é um treino de força, não de velocidade — qualidade sobre quantidade!',
        formTips: [
            'Técnica perfeita é ESSENCIAL para evitar lesão em movimentos avançados',
            'Na barra fixa, puxe explosivamente mas controle a descida',
            'Nos dips, desça até 90° e empurre com força',
            'No muscle-up, foque na transição rápida sobre a barra',
            'Mantenha escápulas ativadas (ombros longe das orelhas) em todos os exercícios'
        ],
        motivation: 'Você está treinando como um atleta de elite! Cada repetição te aproxima do muscle-up perfeito. Foco, força e determinação! 💪🔥',
        benefits: [
            'Força explosiva de puxar',
            'Desenvolvimento do muscle-up',
            'Costas e tríceps massivos',
            'Coordenação avançada'
        ],
        exercises: [
            { name: 'Barra Fixa', slug: 'barra-fixa', workTime: 40, restTime: 30, rounds: 4 },
            { name: 'Paralelas / Dips', slug: 'paralelas-dips', workTime: 40, restTime: 30, rounds: 4 },
            { name: 'Muscle-up', slug: 'muscle-up', workTime: 30, restTime: 40, rounds: 3 },
            { name: 'Flexões Diamante', slug: 'flexoes-diamante', workTime: 35, restTime: 25, rounds: 3 },
            { name: 'L-sit', slug: 'l-sit', workTime: 20, restTime: 30, rounds: 3 }
        ]
    },
    {
        id: 'hit-5',
        name: 'HIT Front Lever Pro',
        duration: 22,
        level: 'advanced',
        isPremium: true,
        description: 'Desenvolva a força isométrica extrema necessária para o front lever. Treino de elite!',
        whatIsIt: 'Treino especializado em força isométrica (segurar posições estáticas) para desenvolver o front lever — um dos movimentos mais impressionantes e difíceis da calistenia!',
        howItWorks: '4 voltas focadas em tensão máxima. Segure cada posição pelo tempo indicado (20-45 segundos) com contração total do corpo. Descanse adequadamente (25-40 segundos) para manter a qualidade. Progressões são permitidas — use tuck ou advanced tuck se necessário.',
        formTips: [
            'Corpo completamente reto e rígido como uma tábua em todos os holds',
            'Ombros deprimidos e escápulas retraídas (puxadas para trás)',
            'Contraia TUDO: core, glúteos, quadríceps, costas',
            'Respire normalmente mesmo em tensão máxima',
            'Se perder a forma, descanse — qualidade > quantidade'
        ],
        motivation: 'Força isométrica é construída segundo a segundo. Cada treino te deixa mais próximo do front lever. Seja paciente e consistente! 🎯',
        benefits: [
            'Força isométrica extrema',
            'Desenvolvimento do front lever',
            'Core e costas de aço',
            'Controle corporal total'
        ],
        exercises: [
            { name: 'Front Lever', slug: 'front-lever', workTime: 20, restTime: 40, rounds: 4 },
            { name: 'Hollow Body Hold', slug: 'hollow-body-hold', workTime: 35, restTime: 25, rounds: 4 },
            { name: 'L-sit', slug: 'l-sit', workTime: 25, restTime: 30, rounds: 4 },
            { name: 'Skin the Cat', slug: 'skin-the-cat', workTime: 30, restTime: 30, rounds: 3 },
            { name: 'Prancha', slug: 'prancha', workTime: 45, restTime: 20, rounds: 3 }
        ]
    },
    {
        id: 'hit-6',
        name: 'HIT Beast Mode',
        duration: 30,
        level: 'advanced',
        isPremium: true,
        description: 'O treino mais brutal do CaliForce. Apenas para guerreiros que querem testar seus limites!',
        benefits: [
            'Força e resistência extremas',
            'Queima calórica máxima',
            'Desenvolvimento completo',
            'Mentalidade de campeão'
        ],
        exercises: [
            { name: 'Burpees', slug: 'burpees', workTime: 40, restTime: 20, rounds: 5 },
            { name: 'Muscle-up', slug: 'muscle-up', workTime: 30, restTime: 40, rounds: 4 },
            { name: 'Pistol Squat', slug: 'pistol-squat', workTime: 35, restTime: 30, rounds: 4 },
            { name: 'Handstand Push-up (HSPU)', slug: 'handstand-push-up', workTime: 30, restTime: 35, rounds: 4 },
            { name: 'Dragon Flag', slug: 'dragon-flag', workTime: 25, restTime: 35, rounds: 3 }
        ]
    },
    {
        id: 'hit-7',
        name: 'HIT Endurance Avançado',
        duration: 35,
        level: 'advanced',
        isPremium: true,
        description: 'Resistência muscular levada ao extremo. Prepare-se para suar como nunca!',
        benefits: [
            'Resistência muscular extrema',
            'Condicionamento de elite',
            'Força funcional',
            'Queima de gordura prolongada'
        ],
        exercises: [
            { name: 'Barra Fixa', slug: 'barra-fixa', workTime: 40, restTime: 25, rounds: 5 },
            { name: 'Paralelas / Dips', slug: 'paralelas-dips', workTime: 40, restTime: 25, rounds: 5 },
            { name: 'Flexões com Palma', slug: 'flexoes-com-palma', workTime: 35, restTime: 30, rounds: 4 },
            { name: 'Agachamento com Salto', slug: 'agachamento-com-salto', workTime: 40, restTime: 25, rounds: 4 },
            { name: 'Burpees', slug: 'burpees', workTime: 40, restTime: 25, rounds: 4 }
        ]
    },
    {
        id: 'hit-8',
        name: 'HIT Bandeira Humana',
        duration: 25,
        level: 'advanced',
        isPremium: true,
        description: 'Treino específico para desenvolver a força necessária para a bandeira humana. Movimento icônico!',
        benefits: [
            'Força lateral extrema',
            'Desenvolvimento da bandeira',
            'Oblíquos de aço',
            'Equilíbrio e coordenação'
        ],
        exercises: [
            { name: 'Bandeira Humana', slug: 'bandeira-humana', workTime: 20, restTime: 40, rounds: 4 },
            { name: 'L-sit', slug: 'l-sit', workTime: 25, restTime: 30, rounds: 4 },
            { name: 'Dragon Flag', slug: 'dragon-flag', workTime: 25, restTime: 35, rounds: 4 },
            { name: 'V-Sit', slug: 'v-sit', workTime: 20, restTime: 35, rounds: 3 },
            { name: 'Prancha', slug: 'prancha', workTime: 45, restTime: 20, rounds: 3 }
        ]
    },
    {
        id: 'hit-9',
        name: 'HIT Fat Burn Elite',
        duration: 20,
        level: 'advanced',
        isPremium: true,
        description: 'Queima de gordura no nível elite. Treino curto mas devastador para resultados rápidos!',
        benefits: [
            'Queima calórica máxima',
            'EPOC elevado (queima pós-treino)',
            'Definição muscular',
            'Metabolismo acelerado'
        ],
        exercises: [
            { name: 'Burpees', slug: 'burpees', workTime: 40, restTime: 20, rounds: 5 },
            { name: 'Pistol Squat', slug: 'pistol-squat', workTime: 35, restTime: 25, rounds: 4 },
            { name: 'Handstand na Parede', slug: 'handstand-parede', workTime: 30, restTime: 30, rounds: 4 },
            { name: 'Flexão Declinada', slug: 'flexao-declinada', workTime: 35, restTime: 25, rounds: 4 },
            { name: 'Curl Nórdico', slug: 'curl-nordico', workTime: 30, restTime: 30, rounds: 3 }
        ]
    }
];
