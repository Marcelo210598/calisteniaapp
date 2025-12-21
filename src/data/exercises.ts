import { Exercise } from '@/types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Flexões de Braço',
    slug: 'flexoes-de-braco',
    description: 'A flexão de braço é o exercício fundamental da calistenia, trabalhando simultaneamente peito, tríceps, ombros e core. Desenvolve força funcional do tronco superior, melhora a estabilidade do core e pode ser progressivamente mais desafiador com variações. Essencial para construir uma base sólida de força de empurrar.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Posicione as mãos na largura dos ombros com dedos apontando para frente',
      'Mantenha o corpo completamente reto, formando uma linha do pescoço aos calcanhares',
      'Desça controladamente por 2-3 segundos até o peito quase tocar o chão',
      'Cotovelos devem formar 45° com o corpo, não 90° para proteger os ombros',
      'Empurre explosivamente de volta, contraindo peito e tríceps',
      'Respire: inspire na descida, expire ao empurrar para cima',
      'Mantenha o core contraído como se fosse receber um soco na barriga'
    ],
    commonMistakes: [
      'Quadris caindo ou elevados demais - mantenha alinhamento perfeito',
      'Amplitude incompleta - peito deve chegar a 2-5cm do chão',
      'Cotovelos muito abertos (90°) - causa estresse nos ombros, mantenha 45°',
      'Pescoço estendido ou flexionado - olhe para um ponto 30cm à frente',
      'Subir muito rápido - perde tensão muscular e ganhos de força',
      'Mãos muito à frente ou atrás - alinhe com os ombros'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4'
  },
  {
    id: '2',
    name: 'Barra Fixa',
    slug: 'barra-fixa',
    description: 'A barra fixa é o rei dos exercícios de puxar, desenvolvendo força massiva nas costas, bíceps, antebraços e core. Trabalha o grande dorsal, trapézio, romboides e toda a musculatura posterior. Fundamental para desenvolver a forma em V das costas e força de pegada. Um dos melhores indicadores de força relativa do corpo.',
    muscleGroups: ['Costas', 'Bíceps', 'Core', 'Antebraços'],
    difficulty: 'intermediate',
    category: 'Pull',
    tips: [
      'Pegada pronada (palmas para frente) na largura dos ombros ou ligeiramente mais larga',
      'Inicie o movimento puxando as escápulas para baixo e para trás',
      'Pense em "puxar os cotovelos para os bolsos" ao invés de puxar com as mãos',
      'Mantenha o peito elevado e ligeiramente arqueado durante todo o movimento',
      'Suba até o queixo ultrapassar a barra ou peito tocar a barra',
      'Desça controladamente em 2-3 segundos, estendendo completamente os braços',
      'Evite balançar - mantenha pernas cruzadas e core contraído',
      'Respire: expire ao subir, inspire ao descer'
    ],
    commonMistakes: [
      'Usar kipping (balanço) excessivo - perde o trabalho muscular',
      'Não descer completamente - braços devem estar totalmente estendidos',
      'Puxar apenas com os bíceps - ative primeiro as costas',
      'Ombros elevados (encolhidos) - mantenha escápulas deprimidas',
      'Cabeça muito para trás - pode causar lesão cervical',
      'Subir apenas até os olhos - queixo deve passar da barra'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g'
  },
  {
    id: '3',
    name: 'Agachamento Livre',
    slug: 'agachamento-livre',
    description: 'O agachamento livre é considerado o rei dos exercícios de pernas, trabalhando quadríceps, glúteos, posteriores de coxa e core simultaneamente. Desenvolve força funcional, mobilidade de tornozelo e quadril, além de melhorar equilíbrio e postura. Fundamental para construir pernas fortes e atlética. Queima muitas calorias e estimula liberação de hormônios anabólicos.',
    muscleGroups: ['Quadríceps', 'Glúteos', 'Posterior', 'Core'],
    difficulty: 'beginner',
    category: 'Legs',
    tips: [
      'Pés na largura dos ombros, pontas ligeiramente abertas (10-15°)',
      'Inicie o movimento empurrando o quadril para trás, como se fosse sentar',
      'Desça controladamente até coxas paralelas ao chão ou mais baixo se tiver mobilidade',
      'Joelhos devem seguir a direção dos pés, nunca entrar para dentro',
      'Mantenha o peito elevado, olhando para frente ou ligeiramente para cima',
      'Peso distribuído no meio do pé, calcanhares sempre no chão',
      'Core contraído e coluna neutra durante todo o movimento',
      'Empurre pelos calcanhares ao subir, contraindo glúteos no topo'
    ],
    commonMistakes: [
      'Joelhos colapsando para dentro (valgo) - empurre joelhos para fora',
      'Calcanhares saindo do chão - trabalhe mobilidade de tornozelo',
      'Coluna arredondada - mantenha peito para cima e core firme',
      'Profundidade insuficiente - pelo menos paralelo ao chão',
      'Joelhos ultrapassando muito os dedos - sente mais para trás',
      'Subir muito rápido - perde tensão e pode causar lesão'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U'
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
    ],
    videoUrl: 'https://www.youtube.com/embed/t7Oj8-8Htyw'
  },
  {
    id: '5',
    name: 'Paralelas / Dips',
    slug: 'paralelas-dips',
    description: 'Paralelas ou dips são o exercício definitivo para desenvolver tríceps massivos, peito inferior e ombros. Considerado o "agachamento do tronco superior" pela intensidade e recrutamento muscular. Permite progressar com peso adicional facilmente. Essencial para desenvolver força de empurrar vertical e preparar para movimentos avançados como HSPU e muscle-up.',
    muscleGroups: ['Tríceps', 'Peito', 'Ombros', 'Core'],
    difficulty: 'intermediate',
    category: 'Push',
    tips: [
      'Pegue as barras e impulsione-se para cima, braços estendidos',
      'Incline ligeiramente para frente para enfatizar peito, reto para tríceps',
      'Desça controladamente até ombros ficarem na altura dos cotovelos',
      'Cotovelos próximos ao corpo para focar tríceps',
      'Empurre explosivamente de volta, contraindo tríceps no topo',
      'Mantenha escápulas deprimidas (ombros longe das orelhas)',
      'Pernas podem ficar retas ou cruzadas atrás',
      'Não descer além de 90° se tiver problemas nos ombros'
    ],
    commonMistakes: [
      'Descer muito rápido - perde tensão e pode lesionar',
      'Cotovelos muito abertos - estresse excessivo nos ombros',
      'Amplitude incompleta - desça até 90° mínimo',
      'Ombros encolhidos - mantenha deprimidos',
      'Corpo balançando - mantenha estável e controlado',
      'Subir apenas parcialmente - estenda completamente os braços'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/2z8JmcrW-As'
  },
  {
    id: '6',
    name: 'Muscle-up',
    slug: 'muscle-up',
    description: 'O muscle-up é o movimento mais icônico da calistenia, combinando barra fixa explosiva com dips na barra. Representa a transição perfeita entre exercícios de puxar e empurrar, exigindo força explosiva, coordenação e técnica refinada. Trabalha costas, peito, tríceps, ombros e core intensamente. Demonstra domínio completo do peso corporal.',
    muscleGroups: ['Costas', 'Tríceps', 'Peito', 'Core', 'Bíceps'],
    difficulty: 'advanced',
    category: 'Pull',
    tips: [
      'Domine primeiro 15+ pull-ups explosivas e 20+ dips',
      'Use pegada falsa (false grip) ou pegada normal com transição rápida',
      'Inicie com pull-up explosiva, puxando até o peito',
      'No topo, incline o corpo para frente sobre a barra rapidamente',
      'Empurre para baixo e para frente, como se empurrasse a barra',
      'Pratique pull-ups até o peito e dips na barra separadamente',
      'Use elástico ou salto para praticar a fase de transição',
      'Mantenha core extremamente firme durante toda a transição'
    ],
    commonMistakes: [
      'Tentar sem base adequada - desenvolva força primeiro',
      'Muito kipping/balanço - use força, não apenas impulso',
      'Não inclinar para frente - corpo deve passar sobre a barra',
      'Transição lenta - seja explosivo na fase crítica',
      'Core fraco - causa falha na transição',
      'Descer sem controle - pode causar lesão nos ombros'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/2oEsUXJZ7K8'
  },
  {
    id: '7',
    name: 'L-sit',
    slug: 'l-sit',
    description: 'O L-sit é um exercício isométrico avançado que desenvolve força absurda do core, compressão de quadril, tríceps e flexibilidade dos posteriores. Fundamental para ginástica e calistenia avançada. Melhora drasticamente a força de compressão necessária para movimentos como front lever, planche e press to handstand. Trabalha o core de forma única.',
    muscleGroups: ['Core', 'Tríceps', 'Quadríceps', 'Hip Flexors'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Sente no chão com pernas estendidas, mãos ao lado dos quadris',
      'Empurre o chão com força, deprimindo ombros (longe das orelhas)',
      'Eleve o quadril e pernas, mantendo-as completamente estendidas',
      'Pernas paralelas ao chão formando um "L" perfeito',
      'Pontas dos pés apontadas, quadríceps tensos',
      'Core maximamente contraído, costas ligeiramente arredondadas',
      'Comece com tuck L-sit (joelhos flexionados) se necessário',
      'Segure por 10-30 segundos, aumente gradualmente'
    ],
    commonMistakes: [
      'Pernas flexionadas - trabalhe flexibilidade dos posteriores',
      'Ombros encolhidos - empurre ativamente para baixo',
      'Core relaxado - contraição máxima é essencial',
      'Costas muito arqueadas - ligeiro arredondamento é normal',
      'Tentar versão completa sem progressão - comece com tuck',
      'Prender respiração - respire normalmente'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/IUZJNMjtLH4'
  },
  {
    id: '8',
    name: 'Prancha',
    slug: 'prancha',
    description: 'A prancha é o exercício isométrico mais eficaz para desenvolver força do core profundo, estabilidade da coluna e resistência muscular. Trabalha reto abdominal, oblíquos, transverso do abdome, ombros e glúteos simultaneamente. Fundamental para prevenir dores lombares, melhorar postura e criar uma base sólida para todos os exercícios avançados de calistenia.',
    muscleGroups: ['Core', 'Ombros', 'Glúteos', 'Quadríceps'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Cotovelos diretamente abaixo dos ombros, antebraços paralelos',
      'Corpo forma uma linha reta perfeita da cabeça aos calcanhares',
      'Contraia o core como se fosse receber um soco, não apenas "segurar"',
      'Glúteos contraídos para evitar que quadris caiam',
      'Quadríceps tensos, empurrando joelhos para trás',
      'Ombros afastados das orelhas, escápulas neutras',
      'Olhe para um ponto entre as mãos, pescoço neutro',
      'Respire normalmente - não prenda a respiração',
      'Comece com 20-30 segundos, aumente gradualmente'
    ],
    commonMistakes: [
      'Quadris muito baixos ou muito altos - perca do alinhamento neutro',
      'Core relaxado - deve estar maximamente contraído',
      'Prender a respiração - respire normalmente',
      'Cabeça caída ou muito elevada - mantenha pescoço neutro',
      'Ombros encolhidos perto das orelhas - empurre o chão',
      'Glúteos relaxados - contraição é essencial'
    ],
    images: [
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/pvIjsG5Svck'
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
    ],
    videoUrl: 'https://www.youtube.com/embed/tQhrk6WMcKw'
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
    ],
    videoUrl: 'https://www.youtube.com/embed/JZQA08SlJnM'
  },
  {
    id: '11',
    name: 'Flexões Diamante',
    slug: 'flexoes-diamante',
    description: 'Flexão com mãos juntas formando um diamante, foco intenso no tríceps.',
    muscleGroups: ['Tríceps', 'Peito', 'Ombros'],
    difficulty: 'intermediate',
    category: 'Push',
    tips: [
      'Forme um diamante com os dedos indicadores e polegares',
      'Mantenha os cotovelos próximos ao corpo',
      'Desça controladamente até o peito quase tocar as mãos',
      'Mantenha o core firme durante todo movimento'
    ],
    commonMistakes: [
      'Cotovelos muito abertos - mantenha próximos ao corpo',
      'Mãos muito afastadas - forme o diamante corretamente',
      'Movimento muito curto - desça completamente',
      'Core relaxado - mantenha contraído'
    ],
    images: [
      '/exercicios/flexoes-diamante/1.jpg',
      '/exercicios/flexoes-diamante/2.jpg',
      '/exercicios/flexoes-diamante/3.jpg',
      '/exercicios/flexoes-diamante/4.jpg',
      '/exercicios/flexoes-diamante/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/J0DnG1_S92I'
  },
  {
    id: '12',
    name: 'Remada Invertida',
    slug: 'remada-invertida',
    description: 'Remada em barra baixa, perfeita para quem ainda não faz barra fixa completa.',
    muscleGroups: ['Costas', 'Bíceps', 'Core'],
    difficulty: 'beginner',
    category: 'Pull',
    tips: [
      'Mantenha o corpo em linha reta',
      'Puxe o peito em direção à barra',
      'Contraia as escápulas no topo do movimento',
      'Desça com controle total'
    ],
    commonMistakes: [
      'Quadris caindo - mantenha corpo reto',
      'Puxar apenas com os braços - use as costas',
      'Movimento incompleto - peito deve tocar a barra',
      'Descer rápido demais - controle a descida'
    ],
    images: [
      '/exercicios/remada-invertida/1.jpg',
      '/exercicios/remada-invertida/2.jpg',
      '/exercicios/remada-invertida/3.jpg',
      '/exercicios/remada-invertida/4.jpg',
      '/exercicios/remada-invertida/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/hXTc1mDnZCw'
  },
  {
    id: '13',
    name: 'Afundo',
    slug: 'afundo',
    description: 'Passada alternada que desenvolve força e equilíbrio nas pernas.',
    muscleGroups: ['Quadríceps', 'Glúteos', 'Posterior'],
    difficulty: 'beginner',
    category: 'Legs',
    tips: [
      'Dê um passo largo para frente',
      'Desça até o joelho traseiro quase tocar o chão',
      'Mantenha o tronco ereto',
      'Empurre com o calcanhar da perna da frente'
    ],
    commonMistakes: [
      'Joelho da frente ultrapassando os dedos - passo maior',
      'Tronco inclinado - mantenha ereto',
      'Não descer o suficiente - joelho traseiro deve quase tocar o chão',
      'Perda de equilíbrio - comece devagar'
    ],
    images: [
      '/exercicios/afundo/1.jpg',
      '/exercicios/afundo/2.jpg',
      '/exercicios/afundo/3.jpg',
      '/exercicios/afundo/4.jpg',
      '/exercicios/afundo/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/QOVaHwm-Q6U'
  },
  {
    id: '14',
    name: 'Inclinação para Planche',
    slug: 'inclinacao-planche',
    description: 'Inclinação máxima para frente em posição de prancha, preparação para planche.',
    muscleGroups: ['Ombros', 'Core', 'Peito'],
    difficulty: 'advanced',
    category: 'Core / Push',
    tips: [
      'Comece em posição de prancha alta',
      'Incline o corpo para frente gradualmente',
      'Mantenha os braços retos',
      'Contraia maximamente o core e ombros'
    ],
    commonMistakes: [
      'Braços flexionados - mantenha estendidos',
      'Quadris muito altos - corpo deve estar reto',
      'Falta de força nos ombros - fortaleça antes',
      'Inclinação excessiva sem preparo - progrida gradualmente'
    ],
    images: [
      '/exercicios/inclinacao-planche/1.jpg',
      '/exercicios/inclinacao-planche/2.jpg',
      '/exercicios/inclinacao-planche/3.jpg',
      '/exercicios/inclinacao-planche/4.jpg',
      '/exercicios/inclinacao-planche/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/8QpXsJzXGPQ'
  },
  {
    id: '15',
    name: 'Barra Archer',
    slug: 'barra-archer',
    description: 'Barra fixa com um braço estendido, simulando barra com um braço só.',
    muscleGroups: ['Costas', 'Bíceps', 'Core'],
    difficulty: 'advanced',
    category: 'Pull',
    tips: [
      'Puxe com um braço enquanto estende o outro',
      'Mantenha o braço estendido reto',
      'Alterne os lados em cada repetição',
      'Controle total na descida'
    ],
    commonMistakes: [
      'Braço estendido flexionando - mantenha reto',
      'Usar muito impulso - movimento controlado',
      'Não alternar os lados - trabalhe ambos igualmente',
      'Descida rápida - controle o movimento'
    ],
    images: [
      '/exercicios/barra-archer/1.jpg',
      '/exercicios/barra-archer/2.jpg',
      '/exercicios/barra-archer/3.jpg',
      '/exercicios/barra-archer/4.jpg',
      '/exercicios/barra-archer/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/kBYL3kAJ0Aw'
  },
  {
    id: '16',
    name: 'Pike Push-up Elevado',
    slug: 'pike-push-up-elevado',
    description: 'Pike push-up com pés elevados, maior ênfase nos ombros.',
    muscleGroups: ['Ombros', 'Tríceps', 'Peito superior'],
    difficulty: 'intermediate',
    category: 'Push',
    tips: [
      'Eleve os pés em uma superfície estável',
      'Forme um V invertido com o corpo',
      'Desça a cabeça em direção ao chão',
      'Empurre com os ombros focando'
    ],
    commonMistakes: [
      'Quadris muito baixos - mantenha o V invertido',
      'Descer muito rápido - controle o movimento',
      'Cotovelos muito abertos - mantenha a 45°',
      'Cabeça batendo forte - toque levemente'
    ],
    images: [
      '/exercicios/pike-push-up-elevado/1.jpg',
      '/exercicios/pike-push-up-elevado/2.jpg',
      '/exercicios/pike-push-up-elevado/3.jpg',
      '/exercicios/pike-push-up-elevado/4.jpg',
      '/exercicios/pike-push-up-elevado/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/5WRTcFW32WI'
  },
  {
    id: '17',
    name: 'Elevação de Panturrilha em Pé',
    slug: 'panturrilha-em-pe',
    description: 'Elevação na ponta dos pés para fortalecer as panturrilhas.',
    muscleGroups: ['Panturrilha', 'Estabilidade'],
    difficulty: 'beginner',
    category: 'Legs',
    tips: [
      'Suba na ponta dos pés o máximo possível',
      'Mantenha o equilíbrio',
      'Desça controladamente',
      'Faça pausa no topo do movimento'
    ],
    commonMistakes: [
      'Movimento muito curto - suba completamente',
      'Descer rápido demais - controle a descida',
      'Usar impulso - movimento controlado',
      'Não fazer pausa no topo - segure 1-2 segundos'
    ],
    images: [
      '/exercicios/panturrilha-em-pe/1.jpg',
      '/exercicios/panturrilha-em-pe/2.jpg',
      '/exercicios/panturrilha-em-pe/3.jpg',
      '/exercicios/panturrilha-em-pe/4.jpg',
      '/exercicios/panturrilha-em-pe/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI'
  },
  {
    id: '18',
    name: 'Dragon Flag',
    slug: 'dragon-flag',
    description: 'Exercício brutal de Bruce Lee — elevação rígida do corpo no banco.',
    muscleGroups: ['Abdominal', 'Oblíquos', 'Core total'],
    difficulty: 'advanced',
    category: 'Core',
    tips: [
      'Segure firmemente o banco atrás da cabeça',
      'Mantenha o corpo completamente reto',
      'Desça controladamente sem tocar o banco',
      'Use o core para controlar todo movimento'
    ],
    commonMistakes: [
      'Corpo curvando - mantenha reto como uma bandeira',
      'Descer rápido demais - controle total',
      'Usar impulso - força pura do core',
      'Tentar sem preparo - fortaleça o core antes'
    ],
    images: [
      '/exercicios/dragon-flag/1.jpg',
      '/exercicios/dragon-flag/2.jpg',
      '/exercicios/dragon-flag/3.jpg',
      '/exercicios/dragon-flag/4.jpg',
      '/exercicios/dragon-flag/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/moyFIvRrS0s'
  },
  {
    id: '19',
    name: 'Superman',
    slug: 'superman',
    description: 'Deitado de bruços, eleva braços e pernas ao mesmo tempo.',
    muscleGroups: ['Lombar', 'Glúteos', 'Posterior das costas'],
    difficulty: 'beginner',
    category: 'Pull / Core',
    tips: [
      'Deite de bruços com braços estendidos à frente',
      'Eleve braços e pernas simultaneamente',
      'Mantenha a posição por alguns segundos',
      'Contraia glúteos e lombar'
    ],
    commonMistakes: [
      'Elevar muito rápido - movimento controlado',
      'Não segurar a posição - mantenha 2-3 segundos',
      'Pescoço muito elevado - mantenha alinhado',
      'Respiração presa - respire normalmente'
    ],
    images: [
      '/exercicios/superman/1.jpg',
      '/exercicios/superman/2.jpg',
      '/exercicios/superman/3.jpg',
      '/exercicios/superman/4.jpg',
      '/exercicios/superman/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/z6PJMT2y8GQ'
  },
  {
    id: '20',
    name: 'Front Lever',
    slug: 'front-lever',
    description: 'Posição horizontal na barra — força estática máxima.',
    muscleGroups: ['Costas', 'Core', 'Ombros'],
    difficulty: 'advanced',
    category: 'Pull / Core',
    tips: [
      'Comece com progressões (tuck, advanced tuck)',
      'Mantenha o corpo completamente reto e horizontal',
      'Puxe a barra em direção aos quadris',
      'Contraia todo o corpo maximamente'
    ],
    commonMistakes: [
      'Tentar a posição completa sem progressões',
      'Quadris caindo - mantenha horizontal',
      'Braços flexionados - mantenha estendidos',
      'Falta de força nas costas - fortaleça antes'
    ],
    images: [
      '/exercicios/front-lever/1.jpg',
      '/exercicios/front-lever/2.jpg',
      '/exercicios/front-lever/3.jpg',
      '/exercicios/front-lever/4.jpg',
      '/exercicios/front-lever/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/Bqsggj5g4Ek'
  },
  {
    id: '21',
    name: 'Flexão Declinada',
    slug: 'flexao-declinada',
    description: 'Flexão com pés elevados, maior ênfase no peito superior.',
    muscleGroups: ['Peito superior', 'Ombros', 'Tríceps'],
    difficulty: 'intermediate',
    category: 'Push',
    tips: [
      'Eleve os pés em uma superfície estável',
      'Mantenha o corpo em linha reta',
      'Desça até o peito quase tocar o chão',
      'Empurre explosivamente'
    ],
    commonMistakes: [
      'Quadris caindo - mantenha corpo reto',
      'Movimento muito curto - amplitude completa',
      'Cotovelos muito abertos - mantenha a 45°',
      'Pescoço em posição errada - mantenha alinhado'
    ],
    images: [
      '/exercicios/flexao-declinada/1.jpg',
      '/exercicios/flexao-declinada/2.jpg',
      '/exercicios/flexao-declinada/3.jpg',
      '/exercicios/flexao-declinada/4.jpg',
      '/exercicios/flexao-declinada/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/WcNNEHJGb-w'
  },
  {
    id: '22',
    name: 'Curl Nórdico',
    slug: 'curl-nordico',
    description: 'Descida controlada ajoelhado — fortalece os isquiotibiais.',
    muscleGroups: ['Posterior de coxa', 'Glúteos'],
    difficulty: 'intermediate',
    category: 'Legs',
    tips: [
      'Ajoelhe-se e fixe os pés',
      'Desça o corpo para frente controladamente',
      'Use os isquiotibiais para controlar a descida',
      'Use as mãos para amortecer se necessário'
    ],
    commonMistakes: [
      'Descer muito rápido - controle total',
      'Quadris flexionando - mantenha corpo reto',
      'Não usar as mãos quando necessário - evite lesões',
      'Tentar sem preparo - comece com assistência'
    ],
    images: [
      '/exercicios/curl-nordico/1.jpg',
      '/exercicios/curl-nordico/2.jpg',
      '/exercicios/curl-nordico/3.jpg',
      '/exercicios/curl-nordico/4.jpg',
      '/exercicios/curl-nordico/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/l5rTX5l5FoY'
  },
  {
    id: '23',
    name: 'Skin the Cat',
    slug: 'skin-the-cat',
    description: 'Rotação completa na barra — mobilidade e força extrema.',
    muscleGroups: ['Ombros', 'Costas', 'Core'],
    difficulty: 'advanced',
    category: 'Pull / Core',
    tips: [
      'Comece pendurado na barra',
      'Eleve as pernas e passe por baixo da barra',
      'Rotacione os ombros completamente',
      'Retorne à posição inicial com controle'
    ],
    commonMistakes: [
      'Falta de mobilidade nos ombros - trabalhe antes',
      'Movimento muito rápido - seja controlado',
      'Soltar a barra - mantenha pegada firme',
      'Tentar sem aquecimento - aqueça bem os ombros'
    ],
    images: [
      '/exercicios/skin-the-cat/1.jpg',
      '/exercicios/skin-the-cat/2.jpg',
      '/exercicios/skin-the-cat/3.jpg',
      '/exercicios/skin-the-cat/4.jpg',
      '/exercicios/skin-the-cat/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/zzJv8zDYVR0'
  },
  {
    id: '24',
    name: 'Hollow Body Hold',
    slug: 'hollow-body-hold',
    description: 'Posição oca deitada — base para todos os movimentos avançados.',
    muscleGroups: ['Abdominal profundo', 'Core total'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Deite de costas e pressione a lombar no chão',
      'Eleve ligeiramente ombros e pernas',
      'Mantenha braços estendidos atrás da cabeça',
      'Respire normalmente'
    ],
    commonMistakes: [
      'Lombar arqueada - pressione no chão',
      'Pernas muito altas - mantenha baixas',
      'Pescoço tenso - relaxe',
      'Respiração presa - respire normalmente'
    ],
    images: [
      '/exercicios/hollow-body-hold/1.jpg',
      '/exercicios/hollow-body-hold/2.jpg',
      '/exercicios/hollow-body-hold/3.jpg',
      '/exercicios/hollow-body-hold/4.jpg',
      '/exercicios/hollow-body-hold/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/LlDNef_Ztsc'
  },
  {
    id: '25',
    name: 'Bandeira Humana',
    slug: 'bandeira-humana',
    description: 'Bandeira humana na barra vertical — ícone da calistenia.',
    muscleGroups: ['Oblíquos', 'Ombros', 'Core lateral'],
    difficulty: 'advanced',
    category: 'Equilíbrio / Core',
    tips: [
      'Segure a barra vertical com pegada ampla',
      'Empurre com o braço de baixo e puxe com o de cima',
      'Mantenha o corpo completamente reto',
      'Comece com progressões (straddle, tuck)'
    ],
    commonMistakes: [
      'Tentar sem progressões - fortaleça antes',
      'Corpo curvando - mantenha reto',
      'Pegada muito estreita - use pegada ampla',
      'Falta de força nos oblíquos - trabalhe antes'
    ],
    images: [
      '/exercicios/bandeira-humana/1.jpg',
      '/exercicios/bandeira-humana/2.jpg',
      '/exercicios/bandeira-humana/3.jpg',
      '/exercicios/bandeira-humana/4.jpg',
      '/exercicios/bandeira-humana/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/qZIJvJmMFJo'
  },
  {
    id: '26',
    name: 'Handstand na Parede',
    slug: 'handstand-parede',
    description: 'Equilíbrio invertido na parede — preparação para handstand livre.',
    muscleGroups: ['Ombros', 'Core', 'Equilíbrio'],
    difficulty: 'intermediate',
    category: 'Equilíbrio / Push',
    tips: [
      'Comece com as costas para a parede',
      'Suba os pés pela parede gradualmente',
      'Mantenha o corpo em linha reta',
      'Olhe para o chão entre as mãos'
    ],
    commonMistakes: [
      'Corpo muito arqueado - mantenha reto',
      'Mãos muito longe da parede - aproxime-se',
      'Respiração presa - respire normalmente',
      'Tentar muito tempo logo no início - progrida gradualmente'
    ],
    images: [
      '/exercicios/handstand-parede/1.jpg',
      '/exercicios/handstand-parede/2.jpg',
      '/exercicios/handstand-parede/3.jpg',
      '/exercicios/handstand-parede/4.jpg',
      '/exercicios/handstand-parede/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/6JJWRWLVUkI'
  },
  {
    id: '27',
    name: 'Agachamento com Salto',
    slug: 'agachamento-com-salto',
    description: 'Agachamento com salto explosivo para desenvolver potência.',
    muscleGroups: ['Quadríceps', 'Glúteos', 'Explosão'],
    difficulty: 'intermediate',
    category: 'Legs / Full Body',
    tips: [
      'Desça em agachamento completo',
      'Salte explosivamente o mais alto possível',
      'Aterrisse suavemente em agachamento',
      'Mantenha o core firme'
    ],
    commonMistakes: [
      'Aterrissagem dura - amorteça com as pernas',
      'Não descer completamente - agachamento completo',
      'Joelhos entrando na aterrissagem - mantenha alinhados',
      'Salto sem potência - seja explosivo'
    ],
    images: [
      '/exercicios/agachamento-com-salto/1.jpg',
      '/exercicios/agachamento-com-salto/2.jpg',
      '/exercicios/agachamento-com-salto/3.jpg',
      '/exercicios/agachamento-com-salto/4.jpg',
      '/exercicios/agachamento-com-salto/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/A-cFYWvaHr0'
  },
  {
    id: '28',
    name: 'Barra Typewriter',
    slug: 'barra-typewriter',
    description: 'Barra fixa com deslocamento lateral no topo.',
    muscleGroups: ['Costas', 'Bíceps', 'Core'],
    difficulty: 'advanced',
    category: 'Pull',
    tips: [
      'Puxe até o queixo passar da barra',
      'Desloque-se lateralmente mantendo a altura',
      'Alterne os lados suavemente',
      'Mantenha o core firme'
    ],
    commonMistakes: [
      'Descer ao deslocar - mantenha a altura',
      'Movimento muito rápido - seja controlado',
      'Não alternar os lados - trabalhe ambos',
      'Usar impulso excessivo - força controlada'
    ],
    images: [
      '/exercicios/barra-typewriter/1.jpg',
      '/exercicios/barra-typewriter/2.jpg',
      '/exercicios/barra-typewriter/3.jpg',
      '/exercicios/barra-typewriter/4.jpg',
      '/exercicios/barra-typewriter/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/Bqsggj5g4Ek'
  },
  {
    id: '29',
    name: 'V-Sit',
    slug: 'v-sit',
    description: 'Elevação em V — variação mais difícil do L-sit.',
    muscleGroups: ['Abdominal', 'Flexores do quadril'],
    difficulty: 'advanced',
    category: 'Core',
    tips: [
      'Sente-se e eleve as pernas formando um V',
      'Mantenha as pernas e costas retas',
      'Equilibre-se nas mãos ou glúteos',
      'Contraia maximamente o core'
    ],
    commonMistakes: [
      'Pernas flexionadas - mantenha estendidas',
      'Costas curvadas - mantenha ereta',
      'Não segurar a posição - mantenha estável',
      'Tentar sem base - fortaleça com L-sit primeiro'
    ],
    images: [
      '/exercicios/v-sit/1.jpg',
      '/exercicios/v-sit/2.jpg',
      '/exercicios/v-sit/3.jpg',
      '/exercicios/v-sit/4.jpg',
      '/exercicios/v-sit/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/IUZJNMjtLH4'
  },
  {
    id: '30',
    name: 'Flexão com Palma',
    slug: 'flexao-com-palma',
    description: 'Flexão com palma explosiva no ar.',
    muscleGroups: ['Peito', 'Tríceps', 'Explosão'],
    difficulty: 'intermediate',
    category: 'Push',
    tips: [
      'Desça em flexão normal',
      'Empurre explosivamente para cima',
      'Bata palma no ar',
      'Aterrisse suavemente em posição de flexão'
    ],
    commonMistakes: [
      'Falta de explosão - empurre com força máxima',
      'Aterrissagem dura - amorteça com os braços',
      'Não bater palma - pratique a explosão',
      'Corpo desalinhado - mantenha reto'
    ],
    images: [
      '/exercicios/flexao-com-palma/1.jpg',
      '/exercicios/flexao-com-palma/2.jpg',
      '/exercicios/flexao-com-palma/3.jpg',
      '/exercicios/flexao-com-palma/4.jpg',
      '/exercicios/flexao-com-palma/5.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/qJ7ZMInSHLY'
  }
];