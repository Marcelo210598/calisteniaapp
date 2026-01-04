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
    videoUrl: 'https://www.youtube.com/embed/kb_XzBpWpKk'
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
    videoUrl: 'https://www.youtube.com/embed/qI30pIGswrw'
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
    videoUrl: 'https://www.youtube.com/embed/AeBvpCCYpGI'
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
    videoUrl: 'https://www.youtube.com/embed/V6BtY3Lt0Ys'
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
    videoUrl: 'https://www.youtube.com/embed/Iuau9zhTM-Q'
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
    videoUrl: 'https://www.youtube.com/embed/3UGuAX8sdp8'
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
    videoUrl: 'https://www.youtube.com/embed/3-4pKUhkzoQ'
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
    videoUrl: 'https://www.youtube.com/embed/BhM02H9I4Ck'
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
    videoUrl: 'https://www.youtube.com/embed/Sfdkj-giUro'
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
    videoUrl: 'https://www.youtube.com/embed/Pb0hhvJ2rjk'
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
    videoUrl: 'https://www.youtube.com/embed/C9VyXeiuxJQ'
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
    videoUrl: 'https://www.youtube.com/embed/mNeC4n6HBgM'
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
    videoUrl: 'https://www.youtube.com/embed/aEk3DDFnDuw'
  },
  {
    id: '31',
    name: 'Crunch',
    slug: 'crunch',
    description: 'O crunch é o exercício básico para fortalecer o abdominal superior. Deitado de costas, contraia o abdômen para elevar os ombros do chão, mantendo a lombar colada. Desenvolve força no reto abdominal, melhora a postura e é essencial para iniciantes construirem base para movimentos mais avançados. Respire expirando ao subir.',
    muscleGroups: ['Abdominal superior', 'Core'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Deite de costas com joelhos dobrados, pés no chão',
      'Coloque as mãos atrás da cabeça sem puxar o pescoço',
      'Mantenha a lombar sempre colada no chão',
      'Contraia o abdômen e eleve apenas os ombros (não o corpo todo)',
      'Expire ao subir, inspire ao descer',
      'Foque na contração do abdômen, não na velocidade',
      'Desça controladamente sem relaxar completamente'
    ],
    commonMistakes: [
      'Puxar o pescoço com as mãos - use o abdômen para subir',
      'Lombar saindo do chão - mantenha sempre colada',
      'Subir muito alto - foco é na contração, não amplitude',
      'Movimento muito rápido - controle é essencial',
      'Relaxar completamente ao descer - mantenha tensão',
      'Respiração incorreta - expire ao subir'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/Xyd_fa5zoEU'
  },
  {
    id: '32',
    name: 'Bicycle Crunch',
    slug: 'bicycle-crunch',
    description: 'Alternando cotovelos e joelhos opostos em movimento de pedalada, o bicycle crunch trabalha oblíquos e reto abdominal. Melhora rotação do tronco, estabilidade e queima gordura abdominal. Ideal para definir a "lateral" do abdômen. Mantenha o movimento controlado para evitar tensão no pescoço.',
    muscleGroups: ['Abdominal', 'Oblíquos', 'Core'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas, mãos atrás da cabeça, pernas elevadas',
      'Traga joelho direito para cotovelo esquerdo em rotação',
      'Alterne continuamente como se pedalasse',
      'Estenda completamente a perna que não está em contato',
      'Mantenha lombar colada no chão durante todo movimento',
      'Foque na rotação do tronco, não em aproximar cotovelo e joelho',
      'Respire de forma controlada e ritmada'
    ],
    commonMistakes: [
      'Puxar o pescoço - rotação vem do tronco',
      'Movimento muito rápido - qualidade sobre quantidade',
      'Lombar arqueada - pressione contra o chão',
      'Pernas muito altas - mantenha baixas para mais intensidade',
      'Não estender a perna - extensão completa é essencial',
      'Cotovelos indo para frente - mantenha abertos'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/9FGilxCbdz8'
  },
  {
    id: '33',
    name: 'Russian Twist',
    slug: 'russian-twist',
    description: 'Sentado com joelhos dobrados, gire o tronco de lado a lado com mãos juntas. Fortalece oblíquos, melhora rotação e equilíbrio. Adicione peso para progressão. Essencial para estabilidade em movimentos compostos da calistenia. Expire ao girar.',
    muscleGroups: ['Oblíquos', 'Core', 'Lombar'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Sente com joelhos dobrados, pés podem ficar no chão ou elevados',
      'Incline o tronco ligeiramente para trás (45°)',
      'Junte as mãos à frente do peito',
      'Gire o tronco de um lado para o outro tocando o chão',
      'Mantenha o core sempre contraído',
      'Pés elevados aumentam intensidade',
      'Adicione peso (garrafa, halteres) para progressão',
      'Expire a cada rotação'
    ],
    commonMistakes: [
      'Movimento apenas dos braços - rotação vem do tronco',
      'Muito rápido - controle e qualidade são essenciais',
      'Tronco muito inclinado ou muito reto - encontre o ângulo ideal',
      'Core relaxado - mantenha sempre tenso',
      'Respiração presa - expire a cada giro',
      'Não tocar o chão - amplitude completa'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/wkD8rjkodUI'
  },
  {
    id: '34',
    name: 'Leg Raise',
    slug: 'leg-raise',
    description: 'Deitado, eleve as pernas retas até 90 graus. Trabalha abdominal inferior, difícil de isolar. Melhora compressão do core e prepara para L-sit. Mantenha lombar no chão para evitar lesões. Respire controlado.',
    muscleGroups: ['Abdominal inferior', 'Hip flexors'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas, pernas estendidas, mãos ao lado do corpo ou sob o glúteo',
      'Mantenha a lombar pressionada contra o chão',
      'Eleve as pernas retas até 90° (perpendicular ao chão)',
      'Desça controladamente sem tocar o chão',
      'Joelhos ligeiramente flexionados se não tiver flexibilidade',
      'Expire ao subir, inspire ao descer',
      'Comece com joelhos dobrados (knee raises) se muito difícil'
    ],
    commonMistakes: [
      'Lombar arqueada - pressione contra o chão',
      'Usar impulso para subir - movimento controlado',
      'Pernas descendo rápido demais - controle a descida',
      'Elevar apenas até 45° - busque 90° mínimo',
      'Mãos sob o glúteo excessivamente - ajuda inicial apenas',
      'Respiração presa - mantenha ritmo respiratório'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/JB2oyawG9KI'
  },
  {
    id: '35',
    name: 'Flutter Kicks',
    slug: 'flutter-kicks',
    description: 'Deitado, alterne chutes rápidos com pernas elevadas. Fortalece abdominal inferior e resistência do core. Ótimo para queima de gordura. Mantenha pernas baixas para intensidade. Ideal para iniciantes melhorarem endurance.',
    muscleGroups: ['Abdominal inferior', 'Core'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Deite de costas, mãos sob o glúteo ou ao lado',
      'Eleve as pernas 15-30cm do chão',
      'Alterne subir e descer as pernas em movimento de tesoura',
      'Mantenha lombar colada no chão',
      'Pernas devem permanecer retas',
      'Movimento contínuo, como se estivesse nadando',
      'Respire continuamente, não prenda',
      'Quanto mais baixas as pernas, maior a intensidade'
    ],
    commonMistakes: [
      'Pernas muito altas - reduz intensidade no abdômen',
      'Lombar arqueada - pressione contra o chão',
      'Movimento muito lento - seja mais dinâmico',
      'Joelhos muito flexionados - mantenha retas',
      'Parar entre repetições - movimento contínuo',
      'Cabeça elevada - relaxe pescoço'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/ANVdMDaYRts'
  },
  {
    id: '36',
    name: 'Reverse Crunch',
    slug: 'reverse-crunch',
    description: 'Deitado, puxe os joelhos para o peito contraindo o abdômen. Foco no inferior, melhor que crunch tradicional para "barriga baixa". Melhora estabilidade pélvica. Evite usar momentum — controle o movimento.',
    muscleGroups: ['Abdominal inferior', 'Oblíquos'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas, pernas dobradas ou elevadas',
      'Coloque mãos ao lado do corpo ou sob o glúteo',
      'Puxe os joelhos em direção ao peito',
      'Eleve ligeiramente o quadril do chão usando o abdômen',
      'Contraia o abdômen inferior maximamente no topo',
      'Retorne controladamente sem tocar os pés no chão',
      'Evite usar impulso - movimento deve ser controlado',
      'Expire ao puxar, inspire ao voltar'
    ],
    commonMistakes: [
      'Usar impulso das pernas - força vem do abdômen',
      'Não elevar o quadril - essencial para trabalhar inferior',
      'Movimento muito rápido - perde a contração',
      'Tocar os pés no chão - mantenha tensão constante',
      'Empurrar com as mãos - mínimo de auxílio',
      'Não contrair no topo - pausa é importante'
    ],
    images: [
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/tVB3VJxdAe0'
  },
  {
    id: '37',
    name: 'Side Plank',
    slug: 'side-plank',
    description: 'Apoie no antebraço lateral, segure corpo reto. Fortalece oblíquos laterais, ombros e equilíbrio. Essencial para estabilidade em movimentos unilaterais. Alterne lados. Comece com 20s e progreda.',
    muscleGroups: ['Oblíquos', 'Core', 'Ombros'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de lado, apoie no antebraço com cotovelo sob o ombro',
      'Empilhe os pés ou coloque um à frente do outro',
      'Eleve o quadril formando linha reta dos pés à cabeça',
      'Braço livre pode ficar no quadril ou estendido para cima',
      'Contraia oblíquos e core completamente',
      'Quadril não pode cair - mantenha elevado',
      'Comece com 20-30 segundos por lado',
      'Respire normalmente durante o hold'
    ],
    commonMistakes: [
      'Quadril caindo - mantenha linha reta',
      'Corpo rodando para frente ou trás - mantenha lateral',
      'Ombro do apoio encolhido - empurre o chão',
      'Prender a respiração - respire normalmente',
      'Não alternar os lados - trabalhe ambos igualmente',
      'Cotovelo longe do ombro - alinhamento é crucial'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/K2VljzCC16g'
  },
  {
    id: '38',
    name: 'Heel Touches',
    slug: 'heel-touches',
    description: 'Deitado com joelhos dobrados, toque alternadamente os calcanhares com as mãos. Trabalha oblíquos e rotação. Simples para iniciantes definirem a "lateral". Mantenha contração constante.',
    muscleGroups: ['Oblíquos', 'Abdominal'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Deite de costas, joelhos dobrados, pés no chão',
      'Eleve ligeiramente os ombros do chão',
      'Deslize a mão direita para tocar o calcanhar direito',
      'Retorne ao centro e repita do outro lado',
      'Mantenha ombros sempre elevados, nunca relaxe',
      'Movimento vem da flexão lateral, não só do braço',
      'Contraia os oblíquos a cada toque',
      'Respire continuamente'
    ],
    commonMistakes: [
      'Relaxar os ombros ao voltar - mantenha sempre elevados',
      'Movimento apenas do braço - flexione lateralmente',
      'Muito rápido - qualidade sobre velocidade',
      'Não tocar o calcanhar - busque amplitude completa',
      'Lombar arqueada - pressione contra o chão',
      'Cabeça indo para os lados - mantenha neutra'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/2RXASP42ib8'
  },
  {
    id: '39',
    name: 'Jackknife Sit-up',
    slug: 'jackknife-sit-up',
    description: 'Deitado, eleve tronco e pernas simultaneamente tocando os pés. Trabalha core total com compressão. Avançado para força funcional. Mantenha movimento controlado.',
    muscleGroups: ['Abdominal completo', 'Hip flexors'],
    difficulty: 'advanced',
    category: 'Core',
    tips: [
      'Deite completamente estendido, braços acima da cabeça',
      'Simultaneamente eleve pernas e tronco',
      'Toque os pés com as mãos no topo (forme um V)',
      'Mantenha pernas e braços retos durante todo movimento',
      'Desça controladamente até posição inicial',
      'Core deve estar maximamente contraído',
      'Expire ao subir, inspire ao descer',
      'Comece devagar - é intenso'
    ],
    commonMistakes: [
      'Usar impulso excessivo - movimento deve ser controlado',
      'Pernas ou braços flexionados - mantenha estendidos',
      'Não tocar os pés - busque amplitude completa',
      'Descer muito rápido - controle é essencial',
      'Lombar batendo no chão - desça suavemente',
      'Tentar sem base adequada - fortaleça o core primeiro'
    ],
    images: [
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/UEwAd2HTJvQ'
  },
  {
    id: '40',
    name: 'Toe Touches',
    slug: 'toe-touches',
    description: 'Deitado com pernas elevadas, toque os pés com as mãos. Foco no superior com alongamento. Melhora flexibilidade e força abdominal. Expire ao subir.',
    muscleGroups: ['Abdominal superior', 'Oblíquos'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas, eleve pernas retas a 90°',
      'Estenda os braços em direção aos pés',
      'Eleve ombros e parte superior das costas do chão',
      'Toque os pés (ou chegue o mais perto possível)',
      'Mantenha pernas perpendiculares ao chão',
      'Desça controladamente sem relaxar completamente',
      'Expire ao subir, inspire ao descer',
      'Foque na contração do abdômen superior'
    ],
    commonMistakes: [
      'Pernas descendo ao subir - mantenha a 90°',
      'Usar impulso dos braços - força vem do abdômen',
      'Movimento muito rápido - controle é essencial',
      'Joelhos muito flexionados - mantenha retas',
      'Não elevar o suficiente - escápulas devem sair do chão',
      'Pescoço tenso - relaxe e use o core'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/5BKHcP5muPQ'
  },
  {
    id: '41',
    name: 'Flexão de Braço com Joelho no Chão',
    slug: 'flexao-joelho-chao',
    description: 'Versão facilitada da flexão tradicional, com joelhos no chão. Desenvolve força de empurrar para iniciantes, trabalhando peito, tríceps e ombros. Mantenha corpo reto dos joelhos aos ombros. Ideal para construir base antes da flexão completa.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Ajoelhe-se e coloque as mãos no chão na largura dos ombros',
      'Cruze os pés atrás para estabilidade',
      'Mantenha corpo reto dos joelhos aos ombros',
      'Desça controladamente até peito quase tocar o chão',
      'Cotovelos a 45° do corpo, não 90°',
      'Empurre explosivamente de volta',
      'Core contraído durante todo movimento',
      'Expire ao empurrar, inspire ao descer'
    ],
    commonMistakes: [
      'Quadris caindo - mantenha alinhamento dos joelhos aos ombros',
      'Cotovelos muito abertos - mantenha a 45°',
      'Amplitude incompleta - peito deve quase tocar o chão',
      'Core relaxado - mantenha contraído',
      'Cabeça caída ou muito elevada - pescoço neutro',
      'Movimento muito rápido - controle é essencial'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/jWxvty2KROs'
  },
  {
    id: '42',
    name: 'Flexão na Parede',
    slug: 'flexao-parede',
    description: 'Fique de pé em frente a uma parede, mãos na altura dos ombros. Incline o corpo e flexione os braços até tocar o nariz na parede, depois empurre de volta. Ideal para quem nunca treinou — constrói força básica sem sobrecarregar. Mantenha corpo reto e respire expirando ao empurrar. Progressão perfeita para flexão inclinada.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Fique de pé a cerca de 60cm da parede',
      'Coloque as mãos na parede na altura dos ombros',
      'Incline o corpo para frente, mantendo-o reto',
      'Flexione os braços até o nariz quase tocar a parede',
      'Empurre de volta até braços estendidos',
      'Quanto mais longe da parede, mais difícil',
      'Mantenha core contraído e corpo alinhado',
      'Expire ao empurrar, inspire ao aproximar'
    ],
    commonMistakes: [
      'Ficar muito perto da parede - dificulta o trabalho muscular',
      'Quadris para trás - corpo deve ser uma linha reta',
      'Cotovelos muito abertos - mantenha mais fechados',
      'Movimento muito rápido - seja controlado',
      'Não aproximar suficiente da parede - amplitude completa',
      'Calcanhares saindo do chão - mantenha firmes'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/R5YU35GLP-w'
  },
  {
    id: '43',
    name: 'Flexão Inclinada',
    slug: 'flexao-inclinada',
    description: 'Mãos apoiadas em superfície elevada (banco, escada ou sofá). Corpo reto, desça até peito tocar a superfície e empurre para cima. Reduz o peso corporal, facilitando para iniciantes. Trabalha peito superior mais que a tradicional. Comece alto e baixe a superfície conforme ganha força.',
    muscleGroups: ['Peito superior', 'Tríceps', 'Ombros'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Coloque mãos em superfície elevada (banco, mesa, escada)',
      'Posicione mãos na largura dos ombros',
      'Corpo completamente reto dos pés à cabeça',
      'Desça controladamente até peito tocar a superfície',
      'Cotovelos a 45° do corpo',
      'Empurre explosivamente de volta',
      'Quanto mais alta a superfície, mais fácil',
      'Progrida baixando a altura gradualmente'
    ],
    commonMistakes: [
      'Quadris caindo ou elevados - mantenha corpo reto',
      'Superfície instável - use apoio firme e seguro',
      'Amplitude incompleta - peito deve tocar',
      'Cotovelos muito abertos - mantenha a 45°',
      'Progredir muito rápido - baixe altura gradualmente',
      'Core relaxado - mantenha contraído'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/4dF1DOWzf20'
  },
  {
    id: '44',
    name: 'Flexão Negativa',
    slug: 'flexao-negativa',
    description: 'Comece na posição alta da flexão tradicional (ou com joelhos). Desça devagar (3-5 segundos) até o chão, controlando o movimento. Use joelhos se necessário. Desenvolve força excêntrica (descida) — essencial para aprender a subir. Foque na forma: corpo reto, cotovelos a 45°.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Comece na posição alta da flexão (braços estendidos)',
      'Pode inicialmente usar joelhos no chão',
      'Desça MUITO devagar (3-5 segundos mínimo)',
      'Controle total durante toda a descida',
      'Ao chegar no chão, use joelhos para voltar ao início',
      'Corpo deve estar reto durante descida',
      'Cotovelos a 45° do corpo',
      'Foque em descer o mais devagar possível'
    ],
    commonMistakes: [
      'Descer muito rápido - objetivo é descida lenta',
      'Corpo desalinhado - mantenha reto',
      'Não controlar até o final - mantenha tensão até o chão',
      'Cotovelos muito abertos - mantenha a 45°',
      'Tentar subir sem força - foque só na descida',
      'Core relaxado - mantenha contraído'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/J62IcRZifyU'
  },
  {
    id: '45',
    name: 'Flexão com Apoio Elevado',
    slug: 'flexao-apoio-elevado',
    description: 'Similar à inclinada, mas com apoio mais alto (mesa ou cadeira). Desça controlado e empurre. Ótima para quem tem sobrepeso ou pouca força inicial. Progressão: baixe o apoio aos poucos até chegar ao chão.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Use superfície alta e estável (mesa, cadeira firme)',
      'Quanto mais alto, mais fácil o exercício',
      'Mãos na largura dos ombros',
      'Mantenha corpo perfeitamente reto',
      'Desça controladamente até peito tocar o apoio',
      'Empurre de volta até extensão completa',
      'Progresso: use superfícies cada vez mais baixas',
      'Core sempre contraído'
    ],
    commonMistakes: [
      'Apoio instável - use superfície segura e firme',
      'Quadris caindo - mantenha corpo alinhado',
      'Amplitude incompleta - desça completamente',
      'Progredir muito rápido - baixe altura gradualmente',
      'Cotovelos muito abertos - mantenha próximos ao corpo',
      'Movimento muito rápido - controle é essencial'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/4dF1DOWzf20'
  },
  {
    id: '46',
    name: 'Flexão com Mãos Largas',
    slug: 'flexao-maos-largas',
    description: 'Mãos mais afastadas que os ombros (facilita o movimento para iniciantes). Desça até peito quase tocar o chão e empurre. Menos carga nos tríceps, mais no peito. Ideal para construir base ampla antes da flexão padrão.',
    muscleGroups: ['Peito', 'Ombros', 'Tríceps'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Posicione mãos mais largas que a largura dos ombros',
      'Dedos apontando ligeiramente para fora',
      'Corpo completamente reto dos pés à cabeça',
      'Desça controladamente até peito quase tocar o chão',
      'Cotovelos naturalmente ficam mais abertos (60-70°)',
      'Empurre de volta focando no peito',
      'Pegada larga enfatiza mais o peito que tríceps',
      'Core contraído durante todo movimento'
    ],
    commonMistakes: [
      'Mãos muito largas - pode estressar ombros',
      'Amplitude incompleta - desça até peito quase tocar',
      'Quadris caindo - mantenha alinhamento',
      'Core relaxado - mantenha contraído',
      'Movimento muito rápido - controle é essencial',
      'Ombros encolhidos - mantenha afastados das orelhas'
    ],
    images: [
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/InQnuSKg7e8'
  },
  {
    id: '52',
    name: 'Crunch',
    slug: 'crunch',
    description: 'O crunch é o exercício básico para fortalecer o abdominal superior. Deitado de costas, contraia o abdômen para elevar os ombros do chão, mantendo a lombar colada. Desenvolve força no reto abdominal, melhora a postura e é essencial para iniciantes construirem base para movimentos mais avançados. Respire expirando ao subir.',
    muscleGroups: ['Abdominal superior', 'Core'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Deite de costas com joelhos dobrados e pés no chão',
      'Mãos atrás da cabeça ou cruzadas no peito',
      'Mantenha a lombar colada no chão durante todo movimento',
      'Contraia o abdômen e eleve apenas os ombros (10-15cm)',
      'Expire ao subir, inspire ao descer',
      'Movimento lento e controlado - 2 segundos subir, 2 descer',
      'Foque na contração abdominal, não em puxar o pescoço'
    ],
    commonMistakes: [
      'Puxar o pescoço com as mãos - use o abdômen',
      'Elevar demais - apenas ombros saem do chão',
      'Lombar saindo do chão - mantenha pressionada',
      'Movimento muito rápido - perde tensão muscular',
      'Prender a respiração - expire ao subir',
      'Usar impulso - movimento controlado'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/Xyd_fa5zoEU'
  },
  {
    id: '53',
    name: 'Bicycle Crunch',
    slug: 'bicycle-crunch',
    description: 'Alternando cotovelos e joelhos opostos em movimento de pedalada, o bicycle crunch trabalha oblíquos e reto abdominal. Melhora rotação do tronco, estabilidade e queima gordura abdominal. Ideal para definir a "lateral" do abdômen. Mantenha o movimento controlado para evitar tensão no pescoço.',
    muscleGroups: ['Abdominal', 'Oblíquos', 'Core'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas com mãos atrás da cabeça',
      'Eleve ombros e pernas do chão (posição hollow)',
      'Traga cotovelo direito ao joelho esquerdo enquanto estende perna direita',
      'Alterne lados em movimento fluido de pedalada',
      'Foque em rotação do tronco, não apenas aproximar cotovelo',
      'Mantenha lombar pressionada no chão',
      'Expire a cada rotação, ritmo controlado'
    ],
    commonMistakes: [
      'Movimento muito rápido - perde ativação muscular',
      'Puxar o pescoço - use oblíquos para girar',
      'Lombar saindo do chão - mantenha pressionada',
      'Pernas muito altas - mantenha baixas para intensidade',
      'Rotação incompleta - cotovelo deve tocar joelho oposto',
      'Respiração irregular - mantenha ritmo'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/Iwyvozckjak'
  },
  {
    id: '54',
    name: 'Russian Twist',
    slug: 'russian-twist',
    description: 'Sentado com joelhos dobrados, gire o tronco de lado a lado com mãos juntas. Fortalece oblíquos, melhora rotação e equilíbrio. Adicione peso para progressão. Essencial para estabilidade em movimentos compostos da calistenia. Expire ao girar.',
    muscleGroups: ['Oblíquos', 'Core', 'Lombar'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Sente com joelhos dobrados, pés elevados ou no chão',
      'Incline o tronco para trás até sentir abdômen contrair',
      'Junte as mãos ou segure peso leve',
      'Gire o tronco para um lado tocando mãos no chão',
      'Alterne lados em movimento controlado',
      'Mantenha core contraído durante todo movimento',
      'Expire ao girar, inspire ao centro'
    ],
    commonMistakes: [
      'Movimento apenas dos braços - gire o tronco todo',
      'Costas muito arqueadas - mantenha ligeiramente arredondadas',
      'Girar muito rápido - controle é essencial',
      'Pés tocando o chão se a proposta é elevados',
      'Core relaxado - contraição constante',
      'Pescoço tenso - mantenha relaxado'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/wkD8rjkodUI'
  },
  {
    id: '55',
    name: 'Leg Raise',
    slug: 'leg-raise',
    description: 'Deitado, eleve as pernas retas até 90 graus. Trabalha abdominal inferior, difícil de isolar. Melhora compressão do core e prepara para L-sit. Mantenha lombar no chão para evitar lesões. Respire controlado.',
    muscleGroups: ['Abdominal inferior', 'Hip flexors'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas com pernas estendidas',
      'Mãos ao lado do corpo ou sob o glúteo para suporte',
      'Mantenha lombar pressionada no chão',
      'Eleve pernas retas até 90° (perpendicular ao chão)',
      'Desça controladamente sem tocar o chão',
      'Expire ao subir, inspire ao descer',
      'Se difícil, dobre ligeiramente os joelhos'
    ],
    commonMistakes: [
      'Lombar saindo do chão - pode causar lesão',
      'Pernas descendo muito rápido - controle total',
      'Usar impulso para subir - força abdominal pura',
      'Descer até tocar o chão - mantenha tensão',
      'Prender a respiração - respire ritmicamente',
      'Pescoço tenso - relaxe cabeça e ombros'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/JB2oyawG9KI'
  },
  {
    id: '56',
    name: 'Flutter Kicks',
    slug: 'flutter-kicks',
    description: 'Deitado, alterne chutes rápidos com pernas elevadas. Fortalece abdominal inferior e resistência do core. Ótimo para queima de gordura. Mantenha pernas baixas para intensidade. Ideal para iniciantes melhorarem endurance.',
    muscleGroups: ['Abdominal inferior', 'Core'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Deite de costas com mãos sob o glúteo',
      'Eleve pernas 10-15cm do chão',
      'Alterne chutes rápidos para cima e para baixo',
      'Mantenha pernas retas e lombar no chão',
      'Respire continuamente - não prenda',
      'Comece com 20-30 segundos, aumente gradualmente',
      'Quanto mais baixas as pernas, maior a intensidade'
    ],
    commonMistakes: [
      'Lombar arqueada - pressione no chão',
      'Pernas muito altas - perde intensidade',
      'Movimento muito amplo - chutes pequenos e rápidos',
      'Prender a respiração - respire normalmente',
      'Pescoço tenso - relaxe cabeça',
      'Desistir muito cedo - mantenha constância'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/ANVdMDaYRts'
  },
  {
    id: '57',
    name: 'Reverse Crunch',
    slug: 'reverse-crunch',
    description: 'Deitado, puxe os joelhos para o peito contraindo o abdômen. Foco no inferior, melhor que crunch tradicional para "barriga baixa". Melhora estabilidade pélvica. Evite usar momentum — controle o movimento.',
    muscleGroups: ['Abdominal inferior', 'Oblíquos'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas com joelhos dobrados a 90°',
      'Mãos ao lado do corpo no chão',
      'Contraia abdômen para elevar quadris do chão',
      'Puxe joelhos em direção ao peito',
      'Desça controladamente sem balançar',
      'Expire ao subir quadris, inspire ao descer',
      'Movimento pequeno mas intenso - foco no abdominal inferior'
    ],
    commonMistakes: [
      'Usar impulso das pernas - use abdômen',
      'Balançar muito - movimento controlado',
      'Não elevar quadris - essencial para ativar inferior',
      'Descer rápido demais - controle a descida',
      'Empurrar com as mãos - apenas estabilização',
      'Amplitude muito grande - foco no inferior'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/gLdGQ2mfUVE'
  },
  {
    id: '58',
    name: 'Side Plank',
    slug: 'side-plank',
    description: 'Apoie no antebraço lateral, segure corpo reto. Fortalece oblíquos laterais, ombros e equilíbrio. Essencial para estabilidade em movimentos unilaterais. Alterne lados. Comece com 20s e progreda.',
    muscleGroups: ['Oblíquos', 'Core', 'Ombros'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de lado, cotovelo diretamente sob o ombro',
      'Empilhe pés ou coloque um na frente do outro',
      'Eleve quadris formando linha reta dos pés à cabeça',
      'Braço livre pode ficar no quadril ou estendido para cima',
      'Contraia oblíquos e glúteos constantemente',
      'Respire normalmente, não prenda',
      'Segure 20-60 segundos por lado'
    ],
    commonMistakes: [
      'Quadris caindo - linha reta é essencial',
      'Quadris muito elevados - alinhamento neutro',
      'Ombro longe do cotovelo - alinhamento vertical',
      'Core relaxado - contraição constante',
      'Prender respiração - respire normalmente',
      'Pescoço desalinhado - olhe para frente'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/K2VljzCC16g'
  },
  {
    id: '59',
    name: 'Heel Touches',
    slug: 'heel-touches',
    description: 'Deitado com joelhos dobrados, toque alternadamente os calcanhares com as mãos. Trabalha oblíquos e rotação. Simples para iniciantes definirem a "lateral". Mantenha contração constante.',
    muscleGroups: ['Oblíquos', 'Abdominal'],
    difficulty: 'beginner',
    category: 'Core',
    tips: [
      'Deite de costas com joelhos dobrados, pés no chão',
      'Eleve ligeiramente ombros do chão',
      'Deslize mão direita para tocar calcanhar direito',
      'Retorne ao centro e alterne para o lado esquerdo',
      'Mantenha ombros elevados durante todo exercício',
      'Expire a cada toque, movimento fluido',
      'Foque em flexão lateral, não rotação'
    ],
    commonMistakes: [
      'Deixar ombros caírem - mantenha elevados',
      'Movimento muito rápido - controle e sinta oblíquos',
      'Não tocar o calcanhar - amplitude completa',
      'Usar impulso - movimento controlado',
      'Pescoço tenso - relaxe cabeça',
      'Lombar arqueada - mantenha neutra'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/3K6F9ZSYU3o'
  },
  {
    id: '60',
    name: 'Jackknife Sit-up',
    slug: 'jackknife-sit-up',
    description: 'Deitado, eleve tronco e pernas simultaneamente tocando os pés. Trabalha core total com compressão. Avançado para força funcional. Mantenha movimento controlado.',
    muscleGroups: ['Abdominal completo', 'Hip flexors'],
    difficulty: 'advanced',
    category: 'Core',
    tips: [
      'Deite de costas com braços estendidos acima da cabeça',
      'Simultaneamente eleve tronco e pernas retas',
      'Toque os pés com as mãos no topo',
      'Desça controladamente à posição inicial',
      'Mantenha pernas e braços retos durante movimento',
      'Expire ao subir, inspire ao descer',
      'Core maximamente contraído no topo'
    ],
    commonMistakes: [
      'Dobrar joelhos ou cotovelos - mantenha retos',
      'Usar impulso excessivo - controle muscular',
      'Não tocar os pés - amplitude completa',
      'Descer muito rápido - controle total',
      'Lombar batendo no chão - desça suave',
      'Tentar sem base de força - fortaleça antes'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/UcVWjBE93js'
  },
  {
    id: '61',
    name: 'Toe Touches',
    slug: 'toe-touches',
    description: 'Deitado com pernas elevadas, toque os pés com as mãos. Foco no superior com alongamento. Melhora flexibilidade e força abdominal. Expire ao subir.',
    muscleGroups: ['Abdominal superior', 'Oblíquos'],
    difficulty: 'intermediate',
    category: 'Core',
    tips: [
      'Deite de costas com pernas elevadas a 90°',
      'Mantenha pernas retas e perpendiculares ao chão',
      'Estenda braços em direção aos pés',
      'Eleve ombros do chão contraindo abdômen superior',
      'Toque os pés ou chegue o mais próximo possível',
      'Desça controladamente sem relaxar totalmente',
      'Expire ao alcançar os pés, inspire ao descer'
    ],
    commonMistakes: [
      'Pernas inclinadas - mantenha perpendiculares',
      'Dobrar joelhos - pernas retas essencial',
      'Usar impulso dos braços - use abdômen',
      'Não elevar ombros - contração abdominal',
      'Descer rápido demais - controle',
      'Pescoço forçado - movimento vem do core'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/jOan6LhvTYc'
  },
  {
    id: '62',
    name: 'Flexão de Braço com Joelho no Chão',
    slug: 'flexao-joelho-chao',
    description: 'Versão facilitada da flexão tradicional, com joelhos no chão. Desenvolve força de empurrar para iniciantes, trabalhando peito, tríceps e ombros. Mantenha corpo reto dos joelhos aos ombros. Ideal para construir base antes da flexão completa.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Ajoelhe-se e coloque mãos na largura dos ombros',
      'Cruze os pés atrás elevados do chão',
      'Mantenha corpo reto dos joelhos aos ombros',
      'Desça controladamente até peito quase tocar o chão',
      'Cotovelos a 45° do corpo, não 90°',
      'Empurre de volta contraindo peito e tríceps',
      'Expire ao empurrar, inspire ao descer'
    ],
    commonMistakes: [
      'Quadris caindo - mantenha corpo reto',
      'Cotovelos muito abertos - mantenha 45°',
      'Amplitude incompleta - desça até quase tocar chão',
      'Pescoço desalinhado - olhe para frente e baixo',
      'Subir muito rápido - controle o movimento',
      'Core relaxado - mantenha contraído'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/jWxvty2KROs'
  },
  {
    id: '63',
    name: 'Flexão na Parede',
    slug: 'flexao-parede',
    description: 'Fique de pé em frente a uma parede, mãos na altura dos ombros. Incline o corpo e flexione os braços até tocar o nariz na parede, depois empurre de volta. Ideal para quem nunca treinou — constrói força básica sem sobrecarregar. Mantenha corpo reto e respire expirando ao empurrar. Progressão perfeita para flexão inclinada.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Fique de pé a um braço de distância da parede',
      'Coloque mãos na parede na altura dos ombros',
      'Incline corpo para frente mantendo-o reto',
      'Flexione braços até nariz quase tocar a parede',
      'Empurre de volta à posição inicial',
      'Mantenha cotovelos próximos ao corpo',
      'Expire ao empurrar, inspire ao descer'
    ],
    commonMistakes: [
      'Ficar muito próximo da parede - reduz dificuldade',
      'Corpo não reto - mantenha alinhamento',
      'Movimento muito curto - nariz deve chegar perto',
      'Empurrar só com os braços - use peito também',
      'Calcanhares saindo do chão - mantenha plantados',
      'Respiração irregular - mantenha ritmo'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/bw4sHkKbCN8'
  },
  {
    id: '64',
    name: 'Flexão Inclinada',
    slug: 'flexao-inclinada',
    description: 'Mãos apoiadas em superfície elevada (banco, escada ou sofá). Corpo reto, desça até peito tocar a superfície e empurre para cima. Reduz o peso corporal, facilitando para iniciantes. Trabalha peito superior mais que a tradicional. Comece alto e baixe a superfície conforme ganha força.',
    muscleGroups: ['Peito superior', 'Tríceps', 'Ombros'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Encontre superfície estável (banco, mesa, cadeira)',
      'Mãos na largura dos ombros sobre a superfície',
      'Corpo completamente reto dos pés à cabeça',
      'Desça até peito tocar a superfície',
      'Cotovelos a 45° do corpo',
      'Empurre explosivamente de volta',
      'Quanto mais alto, mais fácil - progrida baixando'
    ],
    commonMistakes: [
      'Superfície instável - pode causar lesão',
      'Quadris caindo - corpo reto essencial',
      'Amplitude incompleta - peito deve tocar',
      'Cotovelos muito abertos - 45° ideal',
      'Não progredir - baixe superfície gradualmente',
      'Core relaxado - mantenha firme'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/4dF1DOWzf20'
  },
  {
    id: '65',
    name: 'Flexão Negativa',
    slug: 'flexao-negativa',
    description: 'Comece na posição alta da flexão tradicional (ou com joelhos). Desça devagar (3-5 segundos) até o chão, controlando o movimento. Use joelhos se necessário. Desenvolve força excêntrica (descida) — essencial para aprender a subir. Foque na forma: corpo reto, cotovelos a 45°.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros', 'Core'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Posição alta: mãos na largura dos ombros, corpo reto',
      'Desça MUITO lentamente (3-5 segundos mínimo)',
      'Controle total durante toda a descida',
      'Cotovelos a 45° do corpo',
      'Quando chegar ao chão, volte à posição alta (com joelhos se precisar)',
      'Foque apenas na descida controlada',
      'Expire durante a descida'
    ],
    commonMistakes: [
      'Descer rápido demais - perde benefício excêntrico',
      'Corpo não reto - mantenha alinhamento',
      'Cotovelos muito abertos - 45° protege ombros',
      'Não contar o tempo - 3-5 segundos mínimo',
      'Tentar subir sem força - use joelhos ou pare',
      'Bater no chão - desça controlado até o fim'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/SHsUIZiaBzk'
  },
  {
    id: '66',
    name: 'Flexão com Apoio Elevado',
    slug: 'flexao-apoio-elevado',
    description: 'Similar à inclinada, mas com apoio mais alto (mesa ou cadeira). Desça controlado e empurre. Ótima para quem tem sobrepeso ou pouca força inicial. Progressão: baixe o apoio aos poucos até chegar ao chão.',
    muscleGroups: ['Peito', 'Tríceps', 'Ombros'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Use apoio bem alto e estável (mesa, cadeira firme)',
      'Mãos na largura dos ombros',
      'Corpo completamente reto - não deixe quadris caírem',
      'Desça controladamente até peito próximo do apoio',
      'Empurre de volta à posição inicial',
      'Conforme ficar mais forte, use apoios mais baixos',
      'Respire: inspire ao descer, expire ao empurrar'
    ],
    commonMistakes: [
      'Apoio instável - segurança primeiro',
      'Corpo arqueado ou quadris caídos - linha reta',
      'Movimento muito rápido - controle essencial',
      'Não progredir para apoios mais baixos',
      'Cotovelos muito abertos - mantenha próximos',
      'Amplitude incompleta - desça até quase tocar'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/4dF1DOWzf20'
  },
  {
    id: '67',
    name: 'Flexão com Mãos Largas',
    slug: 'flexao-maos-largas',
    description: 'Mãos mais afastadas que os ombros (facilita o movimento para iniciantes). Desça até peito quase tocar o chão e empurre. Menos carga nos tríceps, mais no peito. Ideal para construir base ampla antes da flexão padrão.',
    muscleGroups: ['Peito', 'Ombros', 'Tríceps'],
    difficulty: 'beginner',
    category: 'Push',
    tips: [
      'Posicione mãos mais largas que os ombros (1,5x aproximadamente)',
      'Dedos ligeiramente para fora (10-15°)',
      'Corpo completamente reto da cabeça aos pés',
      'Desça até peito quase tocar o chão',
      'Cotovelos naturalmente ficam mais abertos (60-70°)',
      'Empurre de volta focando no peito',
      'Pegada larga enfatiza mais o peito que tríceps'
    ],
    commonMistakes: [
      'Mãos muito largas - pode estressar ombros',
      'Amplitude incompleta - desça até peito quase tocar',
      'Quadris caindo - mantenha alinhamento',
      'Core relaxado - mantenha contraído',
      'Movimento muito rápido - controle é essencial',
      'Ombros encolhidos - mantenha afastados das orelhas'
    ],
    images: [
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/InQnuSKg7e8'
  }
];