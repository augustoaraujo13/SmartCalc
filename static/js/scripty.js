// Sistema de Navegação entre Visões
function irPara(id) {
    const views = document.querySelectorAll('.view');
    
    // Animação de saída
    views.forEach(v => {
        if (!v.classList.contains('hidden')) {
            v.style.transform = 'translateY(-20px)';
            v.style.opacity = '0';
            setTimeout(() => v.classList.add('hidden'), 400);
        }
    });

    // Animação de entrada
    setTimeout(() => {
        const target = document.getElementById(id);
        target.classList.remove('hidden');
        // Pequeno timeout para o CSS perceber a remoção do hidden e aplicar a transição
        setTimeout(() => {
            target.style.transform = 'translateY(0)';
            target.style.opacity = '1';
        }, 50);
    }, 450);
}

// Lógica da Calculadora de Horas
function operarHoras(tipo) {
    const h1 = document.getElementById('h1').value;
    const h2 = document.getElementById('h2').value;
    
    if(!h1 || !h2) {
        alert("Por favor, selecione os dois horários.");
        return;
    }

    const parseMinutes = (timeStr) => {
        const [h, m] = timeStr.split(':').map(Number);
        return (h * 60) + m;
    };

    const min1 = parseMinutes(h1);
    const min2 = parseMinutes(h2);
    
    let totalMinutos = (tipo === 'soma') ? (min1 + min2) : (min1 - min2);

    const isNegativo = totalMinutos < 0;
    totalMinutos = Math.abs(totalMinutos);

    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;

    const resultadoFormatado = `${isNegativo ? '-' : ''}${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
    
    document.getElementById('resHora').innerText = resultadoFormatado;
}

// Lógica da Calculadora Matemática
function math(op) {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let res = 0;

    if (isNaN(n1) && op !== 'raiz') return alert("Insira ao menos o primeiro número.");

    switch(op) {
        case 'soma': res = n1 + n2; break;
        case 'sub':  res = n1 - n2; break;
        case 'mult': res = n1 * n2; break;
        case 'div':  res = n2 !== 0 ? n1 / n2 : 'Erro'; break;
        case 'raiz': res = Math.sqrt(n1); break;
        case 'pot':  res = Math.pow(n1, n2); break;
    }

    const display = document.getElementById('resMath');
    if (typeof res === 'number') {
        // Formata para no máximo 4 casas decimais e usa padrão brasileiro
        display.innerText = Number.isInteger(res) ? res : res.toFixed(4).replace('.', ',');
    } else {
        display.innerText = res;
    }
}

// Efeito de clique nos botões (feedback tátil visual)
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
    btn.addEventListener('mouseup', () => btn.style.transform = 'scale(1)');
});