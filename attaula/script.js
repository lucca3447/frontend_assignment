// 1. Elementos da Interface
const form = document.getElementById('meuFormulario');
const imcNumero = document.getElementById('imc-numero');
const imcDiagnostico = document.getElementById('imc-diagnostico');
const statusChip = document.getElementById('status-chip');
const gaugeMarker = document.getElementById('gauge-marker');

// 2. Manipulação do envio do formulário
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Lê os valores digitados
  const peso = Number(document.getElementById('peso').value);
  const altura = Number(document.getElementById('altura').value);

  // Validação simples
  if (!peso || !altura || peso <= 0 || altura <= 0) {
    imcDiagnostico.textContent = 'Por favor, insira valores válidos para peso e altura.';
    return;
  }

  // Fórmula do IMC: peso / (altura * altura)
  const imc = peso / (altura * altura);

  // Variáveis para a classificação e estilo
  let diagnosticoTexto = '';
  let statusTexto = '';
  let statusClasse = '';
  let markerPercent = 50;

  // Classificação pela tabela da Organização Mundial da Saúde (OMS)
  if (imc < 18.5) {
    statusTexto = 'ABAIXO DO PESO';
    diagnosticoTexto = 'Seu índice está abaixo da faixa recomendada. Consulte um nutricionista.';
    statusClasse = 'status-under';
    // Mapeia visualmente para a zona 1 da barra (5% a 25%)
    markerPercent = Math.max(5, 5 + ((imc - 14) / (18.5 - 14)) * 20);
  } else if (imc < 25) {
    statusTexto = 'PESO IDEAL';
    diagnosticoTexto = 'Excelente! Sua relação de peso e estatura está em perfeito equilíbrio.';
    statusClasse = 'status-normal';
    // Mapeia visualmente para a zona 2 da barra (25% a 50%)
    markerPercent = 25 + ((imc - 18.5) / (25 - 18.5)) * 25;
  } else if (imc < 30) {
    statusTexto = 'SOBREPESO';
    diagnosticoTexto = 'Atenção aos hábitos alimentares e pratique atividades físicas regulares.';
    statusClasse = 'status-over';
    // Mapeia visualmente para a zona 3 da barra (50% a 75%)
    markerPercent = 50 + ((imc - 25) / (30 - 25)) * 25;
  } else {
    statusTexto = 'OBESIDADE';
    diagnosticoTexto = 'Índice elevado. Recomenda-se acompanhamento médico preventivo.';
    statusClasse = 'status-obese';
    // Mapeia visualmente para a zona 4 da barra (75% a 95%)
    markerPercent = Math.min(95, 75 + ((imc - 30) / (40 - 30)) * 20);
  }

  // 3. Atualiza a tela com os resultados
  imcNumero.textContent = imc.toFixed(2);
  imcDiagnostico.textContent = diagnosticoTexto;
  
  statusChip.textContent = statusTexto;
  statusChip.className = `status-chip ${statusClasse}`;

  // 4. Move o ponteiro luminoso na régua de zonas
  gaugeMarker.classList.add('active');
  gaugeMarker.style.left = `${markerPercent}%`;
});
