import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const testHtml = `<!DOCTYPE html>
<html>
<head>
    <title>Teste de Imagens - CaliForce</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .test-container { display: flex; flex-wrap: wrap; gap: 20px; }
        .exercise-test { border: 2px solid #ccc; padding: 20px; margin: 10px; }
        .image-test { margin: 10px 0; }
        img { max-width: 150px; max-height: 150px; border: 1px solid #ddd; }
        .success { border-color: green; }
        .error { border-color: red; }
    </style>
</head>
<body>
    <h1>Teste de Imagens - CaliForce</h1>
    <p>Testando todas as imagens dos exercícios...</p>
    
    <div class="test-container">
        <div class="exercise-test">
            <h3>Flexões de Braço</h3>
            <div class="image-test">
                <img src="/exercicios/flexoes-de-braco/flexoes.jpg" alt="Flexões 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/flexoes-de-braco/flexoes%202.jpg" alt="Flexões 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/flexoes-de-braco/flexoes%203.jpg" alt="Flexões 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/flexoes-de-braco/flexoes%204.jpg" alt="Flexões 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/flexoes-de-braco/flexoes%205.jpg" alt="Flexões 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Burpees</h3>
            <div class="image-test">
                <img src="/exercicios/burpees/burpees.png" alt="Burpees 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/burpees/burpees%202.png" alt="Burpees 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/burpees/burpees%203.png" alt="Burpees 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/burpees/burpees%204.png" alt="Burpees 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/burpees/burpees%205.png" alt="Burpees 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Barra Fixa</h3>
            <div class="image-test">
                <img src="/exercicios/barra-fixa/barra-fixa.jpg" alt="Barra Fixa 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/barra-fixa/barra-fixa%202.jpg" alt="Barra Fixa 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/barra-fixa/barra-fixa%203.jpg" alt="Barra Fixa 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/barra-fixa/barra-fixa%204.jpg" alt="Barra Fixa 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/barra-fixa/barra-fixa%205.jpg" alt="Barra Fixa 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Agachamento Livre</h3>
            <div class="image-test">
                <img src="/exercicios/agachamento-livre/agachamento-livre.jpg" alt="Agachamento 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/agachamento-livre/agachamento-livre%202.jpg" alt="Agachamento 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/agachamento-livre/agachamento-livre%203.jpg" alt="Agachamento 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/agachamento-livre/agachamento-livre%204.jpg" alt="Agachamento 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/agachamento-livre/agachamento-livre%205.jpg" alt="Agachamento 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Pistol Squat</h3>
            <div class="image-test">
                <img src="/exercicios/pistol-squat/pistol-squat.jpg" alt="Pistol 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/pistol-squat/pistol-squat%202.jpg" alt="Pistol 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/pistol-squat/pistol-squat%203.jpg" alt="Pistol 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/pistol-squat/pistol-squat%204.jpg" alt="Pistol 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/pistol-squat/pistol-squat.avif" alt="Pistol 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Paralelas Dips</h3>
            <div class="image-test">
                <img src="/exercicios/paralelas-dips/paralelas-dips.jpg" alt="Paralelas 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/paralelas-dips/paralelas-dips%202.jpg" alt="Paralelas 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/paralelas-dips/paralelas-dips%203.jpg" alt="Paralelas 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/paralelas-dips/paralelas-dips%204.jpg" alt="Paralelas 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/paralelas-dips/paralelas-dips%205.jpg" alt="Paralelas 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Muscle Up</h3>
            <div class="image-test">
                <img src="/exercicios/muscle-up/muscle-up.jpeg" alt="Muscle 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/muscle-up/muscle-up%202.jpg" alt="Muscle 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/muscle-up/muscle-up%203.jpeg" alt="Muscle 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/muscle-up/muscle-up%204.jpeg" alt="Muscle 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/muscle-up/muscle-up%205.jpg" alt="Muscle 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>L-Sit</h3>
            <div class="image-test">
                <img src="/exercicios/l-sit/i-sit%201.png" alt="L-Sit 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/l-sit/i-sit%202.png" alt="L-Sit 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/l-sit/i-sit%203.png" alt="L-Sit 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/l-sit/i-sit%204.png" alt="L-Sit 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/l-sit/i-sit%205.png" alt="L-Sit 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Handstand Push Up</h3>
            <div class="image-test">
                <img src="/exercicios/handstand-push-up/handstand-push-up.png" alt="Handstand 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/handstand-push-up/handstand-push-up%202.png" alt="Handstand 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/handstand-push-up/handstand-push-up%203.png" alt="Handstand 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/handstand-push-up/handstand-push-up%204.png" alt="Handstand 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/handstand-push-up/handstand-push-up%205.png" alt="Handstand 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
        
        <div class="exercise-test">
            <h3>Prancha</h3>
            <div class="image-test">
                <img src="/exercicios/prancha/prancha.jpg" alt="Prancha 1" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/prancha/prancha%202.jpg" alt="Prancha 2" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/prancha/prancha%203.jpg" alt="Prancha 3" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/prancha/prancha%204.jpg" alt="Prancha 4" onload="this.className='success'" onerror="this.className='error'">
                <img src="/exercicios/prancha/prancha%205.jpg" alt="Prancha 5" onload="this.className='success'" onerror="this.className='error'">
            </div>
        </div>
    </div>
    
    <script>
        // Verificar estatísticas após carregamento
        window.addEventListener('load', function() {
            const images = document.querySelectorAll('img');
            const loaded = document.querySelectorAll('img.success').length;
            const failed = document.querySelectorAll('img.error').length;
            
            const stats = document.createElement('div');
            stats.innerHTML = '<h2>Estatísticas:</h2><p>Carregadas: ' + loaded + '</p><p>Falhadas: ' + failed + '</p><p>Total: ' + images.length + '</p>';
            stats.style.cssText = 'position: fixed; top: 10px; right: 10px; background: #f0f0f0; padding: 15px; border: 2px solid #333;';
            document.body.appendChild(stats);
        });
    </script>
</body>
</html>`;

  return new NextResponse(testHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}