import { Cycle } from '@/types';

export const cycles: Cycle[] = [
  {
    id: '1',
    name: 'CaliForce Iniciante',
    description: 'Ciclo de 4 semanas para iniciantes na calistenia. Foque na técnica e construa sua base sólida.',
    duration: '4 semanas',
    weeks: [
      {
        weekNumber: 1,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 3, reps: '8-12', rest: '90s' },
              { name: 'Agachamento Livre', sets: 3, reps: '15-20', rest: '90s' },
              { name: 'Prancha', sets: 3, reps: '20-30s', rest: '60s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Barra Fixa', sets: 3, reps: '3-6', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 3, reps: '5-8', rest: '90s' },
              { name: 'Prancha', sets: 3, reps: '20-30s', rest: '60s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 3, reps: '8-12', rest: '90s' },
              { name: 'Agachamento Livre', sets: 3, reps: '15-20', rest: '90s' },
              { name: 'Burpees', sets: 3, reps: '5-8', rest: '2min' }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 4, reps: '10-15', rest: '90s' },
              { name: 'Agachamento Livre', sets: 4, reps: '18-22', rest: '90s' },
              { name: 'Prancha', sets: 3, reps: '30-40s', rest: '60s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Barra Fixa', sets: 4, reps: '4-8', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 4, reps: '6-10', rest: '90s' },
              { name: 'Prancha', sets: 3, reps: '30-40s', rest: '60s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 4, reps: '10-15', rest: '90s' },
              { name: 'Agachamento Livre', sets: 4, reps: '18-22', rest: '90s' },
              { name: 'Burpees', sets: 3, reps: '8-12', rest: '2min' }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 4, reps: '12-18', rest: '90s' },
              { name: 'Agachamento Livre', sets: 4, reps: '20-25', rest: '90s' },
              { name: 'L-sit', sets: 3, reps: '10-15s', rest: '90s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Barra Fixa', sets: 4, reps: '6-10', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 4, reps: '8-12', rest: '90s' },
              { name: 'L-sit', sets: 3, reps: '10-15s', rest: '90s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 4, reps: '12-18', rest: '90s' },
              { name: 'Agachamento Livre', sets: 4, reps: '20-25', rest: '90s' },
              { name: 'Burpees', sets: 4, reps: '10-15', rest: '2min' }
            ]
          }
        ]
      },
      {
        weekNumber: 4,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 5, reps: '15-20', rest: '90s' },
              { name: 'Agachamento Livre', sets: 5, reps: '22-30', rest: '90s' },
              { name: 'L-sit', sets: 3, reps: '15-20s', rest: '90s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Barra Fixa', sets: 5, reps: '8-12', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 5, reps: '10-15', rest: '90s' },
              { name: 'L-sit', sets: 3, reps: '15-20s', rest: '90s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 5, reps: '15-20', rest: '90s' },
              { name: 'Agachamento Livre', sets: 5, reps: '22-30', rest: '90s' },
              { name: 'Burpees', sets: 4, reps: '12-18', rest: '2min' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'CaliForce Intermediário',
    description: 'Ciclo de 4 semanas para calistenistas intermediários. Aumente intensidade e domine novos movimentos.',
    duration: '4 semanas',
    weeks: [
      {
        weekNumber: 1,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 4, reps: '20-25', rest: '90s' },
              { name: 'Pistol Squat', sets: 3, reps: '3-5 cada', rest: '2min' },
              { name: 'L-sit', sets: 3, reps: '20-30s', rest: '90s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Muscle-up', sets: 3, reps: '2-4', rest: '3min' },
              { name: 'Barra Fixa', sets: 4, reps: '12-15', rest: '2min' },
              { name: 'Prancha', sets: 3, reps: '45-60s', rest: '60s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Paralelas / Dips', sets: 4, reps: '15-20', rest: '90s' },
              { name: 'Handstand Push-up (HSPU)', sets: 3, reps: '3-6', rest: '2min' },
              { name: 'Burpees', sets: 4, reps: '15-20', rest: '2min' }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 4, reps: '22-28', rest: '90s' },
              { name: 'Pistol Squat', sets: 4, reps: '4-6 cada', rest: '2min' },
              { name: 'L-sit', sets: 3, reps: '25-35s', rest: '90s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Muscle-up', sets: 4, reps: '3-5', rest: '3min' },
              { name: 'Barra Fixa', sets: 4, reps: '14-18', rest: '2min' },
              { name: 'Prancha', sets: 3, reps: '50-70s', rest: '60s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Paralelas / Dips', sets: 4, reps: '18-22', rest: '90s' },
              { name: 'Handstand Push-up (HSPU)', sets: 4, reps: '4-8', rest: '2min' },
              { name: 'Burpees', sets: 4, reps: '18-22', rest: '2min' }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 5, reps: '25-30', rest: '90s' },
              { name: 'Pistol Squat', sets: 4, reps: '5-8 cada', rest: '2min' },
              { name: 'L-sit', sets: 4, reps: '30-40s', rest: '90s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Muscle-up', sets: 4, reps: '4-6', rest: '3min' },
              { name: 'Barra Fixa', sets: 5, reps: '15-20', rest: '2min' },
              { name: 'Prancha', sets: 4, reps: '60-90s', rest: '60s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Paralelas / Dips', sets: 5, reps: '20-25', rest: '90s' },
              { name: 'Handstand Push-up (HSPU)', sets: 4, reps: '6-10', rest: '2min' },
              { name: 'Burpees', sets: 5, reps: '20-25', rest: '2min' }
            ]
          }
        ]
      },
      {
        weekNumber: 4,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 5, reps: '28-35', rest: '90s' },
              { name: 'Pistol Squat', sets: 5, reps: '6-10 cada', rest: '2min' },
              { name: 'L-sit', sets: 4, reps: '35-45s', rest: '90s' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'Muscle-up', sets: 5, reps: '5-8', rest: '3min' },
              { name: 'Barra Fixa', sets: 5, reps: '18-22', rest: '2min' },
              { name: 'Prancha', sets: 4, reps: '90-120s', rest: '60s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Paralelas / Dips', sets: 5, reps: '22-28', rest: '90s' },
              { name: 'Handstand Push-up (HSPU)', sets: 5, reps: '8-12', rest: '2min' },
              { name: 'Burpees', sets: 5, reps: '22-28', rest: '2min' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'CaliForce Avançado',
    description: 'Ciclo de 4 semanas para calistenistas avançados. Domine movimentos complexos e alcance seu máximo potencial.',
    duration: '4 semanas',
    weeks: [
      {
        weekNumber: 1,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Muscle-up', sets: 5, reps: '6-10', rest: '3min' },
              { name: 'Handstand Push-up (HSPU)', sets: 5, reps: '10-15', rest: '2min' },
              { name: 'Pistol Squat', sets: 4, reps: '8-12 cada', rest: '2min' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'L-sit', sets: 4, reps: '45-60s', rest: '2min' },
              { name: 'Barra Fixa', sets: 5, reps: '20-25', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 5, reps: '25-30', rest: '90s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 5, reps: '35-40', rest: '90s' },
              { name: 'Burpees', sets: 5, reps: '25-30', rest: '2min' },
              { name: 'Prancha', sets: 3, reps: '2-3min', rest: '90s' }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Muscle-up', sets: 5, reps: '8-12', rest: '3min' },
              { name: 'Handstand Push-up (HSPU)', sets: 5, reps: '12-18', rest: '2min' },
              { name: 'Pistol Squat', sets: 5, reps: '10-15 cada', rest: '2min' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'L-sit', sets: 4, reps: '60-75s', rest: '2min' },
              { name: 'Barra Fixa', sets: 5, reps: '22-28', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 5, reps: '28-35', rest: '90s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 5, reps: '38-45', rest: '90s' },
              { name: 'Burpees', sets: 5, reps: '28-35', rest: '2min' },
              { name: 'Prancha', sets: 3, reps: '3-4min', rest: '90s' }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Muscle-up', sets: 6, reps: '10-15', rest: '3min' },
              { name: 'Handstand Push-up (HSPU)', sets: 6, reps: '15-20', rest: '2min' },
              { name: 'Pistol Squat', sets: 5, reps: '12-18 cada', rest: '2min' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'L-sit', sets: 5, reps: '75-90s', rest: '2min' },
              { name: 'Barra Fixa', sets: 6, reps: '25-30', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 6, reps: '30-40', rest: '90s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 6, reps: '40-50', rest: '90s' },
              { name: 'Burpees', sets: 6, reps: '30-40', rest: '2min' },
              { name: 'Prancha', sets: 4, reps: '4-5min', rest: '90s' }
            ]
          }
        ]
      },
      {
        weekNumber: 4,
        workouts: [
          {
            day: 'Segunda-feira',
            exercises: [
              { name: 'Muscle-up', sets: 6, reps: '12-18', rest: '3min' },
              { name: 'Handstand Push-up (HSPU)', sets: 6, reps: '18-25', rest: '2min' },
              { name: 'Pistol Squat', sets: 5, reps: '15-22 cada', rest: '2min' }
            ]
          },
          {
            day: 'Quarta-feira',
            exercises: [
              { name: 'L-sit', sets: 5, reps: '90-120s', rest: '2min' },
              { name: 'Barra Fixa', sets: 6, reps: '28-35', rest: '2min' },
              { name: 'Paralelas / Dips', sets: 6, reps: '35-45', rest: '90s' }
            ]
          },
          {
            day: 'Sexta-feira',
            exercises: [
              { name: 'Flexões de Braço', sets: 6, reps: '45-55', rest: '90s' },
              { name: 'Burpees', sets: 6, reps: '35-45', rest: '2min' },
              { name: 'Prancha', sets: 4, reps: '5-6min', rest: '90s' }
            ]
          }
        ]
      }
    ]
  }
];