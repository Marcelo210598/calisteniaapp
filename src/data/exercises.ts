import { Exercise } from '@/types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Flexões de Braço',
    slug: 'flexoes-de-braco',
    description: 'Exercício fundamental para desenvolver força e massa muscular nos braços, peito e ombros.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Mantenha o corpo em linha reta do pescoço aos pés',
      'Descente controlada até o peito quase tocar o chão',
      'Empurre o chão para fora com as palmas das mãos',
      'Mantenha o core contraído durante todo o movimento'
    ],
    commonMistakes: [
      'Afundar os quadris - mantenha o core firme',
      'Movimento muito curto - desça até quase tocar o chão',
      'Cotovelos muito abertos - mantenha a 45° do corpo',
      'Pescoço em posição errada - mantenha alinhado com a coluna'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '2',
    name: 'Barra Fixa',
    slug: 'barra-fixa',
    description: 'Exercício essencial para desenvolver a musculatura das costas, bíceps e core.',
    muscleGroups: ['Costas', 'Bíceps', 'Core', 'Antebraços'],
    difficulty: 'intermediate',
    category: 'Pull',
    tips: [
      'Puxe com as costas, não apenas com os braços',
      'Mantenha o peito levemente levantado',
      'Desça com controle total',
      'Use pegada pronada (palmas para frente) para focar nas costas'
    ],
    commonMistakes: [
      'Usar impulso excessivo - movimento deve ser controlado',
      'Não completar a amplitude - suba até o queixo passar da barra',
      'Puxar com os braços apenas - envolva as costas',
      'Quadris balançando - mantenha o core firme'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '3',
    name: 'Agachamento Livre',
    slug: 'agachamento-livre',
    description: 'O rei dos exercícios para desenvolver pernas, glúteos e core de forma funcional.',
    muscleGroups: ['Quadríceps', 'Glúteos', 'Posterior', 'Core'],
    difficulty: 'beginner',
    category: 'Legs',
    tips: [
      'Mantenha os pés na largura dos ombros',
      'Desça até as coxas ficarem paralelas ao chão',
      'Mantenha os joelhos alinhados com os pés',
      'Mantenha o peito levantado e core firme'
    ],
    commonMistakes: [
      'Joelhos entrando para dentro - mantenha alinhados com os pés',
      'Não atingir profundidade adequada - desça até paralelo',
      'Curvar demais a coluna - mantenha o peito levantado',
      'Calcanhar levantando - mantenha o peso no meio do pé'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '4',
    name: 'Pistol Squat',
    slug: 'pistol-squat',
    description: 'Agachamento unilateral avançado que desenvolve força, equilíbrio e mobilidade.',
    muscleGroups: ['Quadríceps', 'Glúteos', 'Posterior', 'Core', 'Equilíbrio'],
    difficulty: 'advanced',
    category: 'Legs',
    tips: [
      'Comece com apoio para equilíbrio',
      'Mantenha a perna estendida à frente',
      'Desça com controle máximo',
      'Trabalhe a mobilidade do tornozelo'
    ],
    commonMistakes: [
      'Perda de equilíbrio - use apoio inicialmente',
      'Joelho entrando - mantenha alinhado com o pé',
      'Não atingir profundidade - trabalhe progressivamente',
      'Coluna curvando - mantenha ereta'
    ],
    images: [
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '5',
    name: 'Paralelas / Dips',
    slug: 'paralelas-dips',
    description: 'Exercício poderoso para desenvolver tríceps, peito e ombros com peso corporal.',
    muscleGroups: ['Tríceps', 'Peito', 'Ombros', 'Core'],
    difficulty: 'intermediate',
    category: 'Push',
    tips: [
      'Mantenha o corpo ereto',
      'Desça até os ombros ficarem abaixo dos cotovelos',
      'Empurre com os tríceps focando',
      'Mantenha os cotovelos próximos ao corpo'
    ],
    commonMistakes: [
      'Descer muito rápido - controle o movimento',
      'Cotovelos muito abertos - mantenha próximos ao corpo',
      'Não atingir profundidade - desça até 90° nos cotovelos',
      'Corpo balançando - mantenha firme'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '6',
    name: 'Muscle-up',
    slug: 'muscle-up',
    description: 'Movimento avançado que combina barra fixa com dips, demonstração máxima de força.',
    muscleGroups: ['Costas', 'Tríceps', 'Peito', 'Core', 'Bíceps'],
    difficulty: 'advanced',
    category: 'Pull',
    tips: [
      'Use impulso controlado para passar da barra',
      'Pratique pull-ups explosivas primeiro',
      'Trabalhe dips na barra para a transição',
      'Mantenha o core firme durante toda transição'
    ],
    commonMistakes: [
      'Tentar sem base - domine pull-ups e dips primeiro',
      'Impulso excessivo - use força, não apenas balanço',
      'Falhar na transição - pratique a fase média',
      'Descer rápido demais - controle toda fase'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '7',
    name: 'L-sit',
    slug: 'l-sit',
    description: 'Exercício isométrico que desenvolve core, tríceps e flexibilidade de quadríceps.',
    muscleGroups: ['Core', 'Tríceps', 'Quadríceps', 'Hip Flexors'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Mantenha as pernas completamente estendidas',
      'Empurre os ombros para baixo',
      'Mantenha o core maximamente contraído',
      'Comece com versões com joelhos flexionados'
    ],
    commonMistakes: [
      'Pernas flexionadas - estenda completamente',
      'Ombros subindo - empurre para baixo',
      'Core relaxado - contraia maximamente',
      'Postura curvada - mantenha coluna ereta'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '8',
    name: 'Prancha',
    slug: 'prancha',
    description: 'Exercício isométrico fundamental para desenvolver força core e estabilidade.',
    muscleGroups: ['Core', 'Ombros', 'Glúteos', 'Quadríceps'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Mantenha o corpo em linha reta perfeita',
      'Contraia o core e glúteos',
      'Mantenha os ombros sobre os cotovelos',
      'Respire normalmente durante a posição'
    ],
    commonMistakes: [
      'Quadris muito altos ou baixos - mantenha linha reta',
      'Core relaxado - contraia maximamente',
      'Cabeça caindo - mantenha alinhada',
      'Respiração presa - respire normalmente'
    ],
    images: [
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '9',
    name: 'Handstand Push-up (HSPU)',
    slug: 'handstand-push-up',
    description: 'Exercício avançado de push-up invertido que desenvolve ombros, tríceps e equilíbrio.',
    muscleGroups: ['Ombros', 'Tríceps', 'Core', 'Equilíbrio'],
    difficulty: 'advanced',
    category: 'Push',
    tips: [
      'Comece contra a parede para apoio',
      'Mantenha o corpo em linha vertical',
      'Desça até tocar levemente a cabeça',
      'Empurre com os ombros focando'
    ],
    commonMistakes: [
      'Corpo não vertical - mantenha alinhado',
      'Descer rápido demais - controle o movimento',
      'Cabeça bater forte - toque levemente',
      'Sem preparação - domine handstand primeiro'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '10',
    name: 'Burpees',
    slug: 'burpees',
    description: 'Exercício completo que combina agachamento, flexão e salto para condicionamento total.',
    muscleGroups: ['Corpo Completo', 'Cardio', 'Core', 'Pernas', 'Braços'],
    difficulty: 'intermediate',
    category: 'Full Body',
    tips: [
      'Mantenha o ritmo constante',
      'Realize cada fase com técnica adequada',
      'Respire de forma controlada',
      'Mantenho o core ativado durante todo movimento'
    ],
    commonMistakes: [
      'Técnica incorreta nas flexões - mantenha padrão',
      'Saltos sem intensidade - seja explosivo',
      'Respiração descontrolada - mantenha ritmo',
      'Movimento desorganizado - seja fluido'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  }
];