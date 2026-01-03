// NAVEGAÇÃO
function irPara(id) {
    document.querySelectorAll('.view').forEach(v => {
        v.style.opacity = '0';
        setTimeout(() => v.classList.add('hidden'), 300);
    });
    setTimeout(() => {
        const target = document.getElementById(id);
        target.classList.remove('hidden');
        setTimeout(() => target.style.opacity = '1', 50);
    }, 350);
}

// HORAS
function operarHoras(tipo) {
    const h1 = document.getElementById('h1').value;
    const h2 = document.getElementById('h2').value;
    if(!h1 || !h2) return;
    const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    let total = (tipo === 'soma') ? toMin(h1) + toMin(h2) : toMin(h1) - toMin(h2);
    const abs = Math.abs(total);
    const h = Math.floor(abs / 60);
    const m = abs % 60;
    document.getElementById('resHora').innerText = `${total < 0 ? '-' : ''}${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

// MATEMÁTICA
function math(op) {
    const n1 = parseFloat(document.getElementById('n1').value) || 0;
    const n2 = parseFloat(document.getElementById('n2').value) || 0;
    let res = 0;
    switch(op) {
        case 'soma': res = n1 + n2; break;
        case 'sub': res = n1 - n2; break;
        case 'mult': res = n1 * n2; break;
        case 'div': res = n2 !== 0 ? n1 / n2 : 'Erro'; break;
        case 'raiz': res = Math.sqrt(n1); break;
        case 'pot': res = Math.pow(n1, n2); break;
    }
    document.getElementById('resMath').innerText = typeof res === 'number' ? res.toFixed(2).replace('.00', '') : res;
}

// PORCENTAGEM
function calcPorcentagem() {
    const p = parseFloat(document.getElementById('porc_p').value) || 0;
    const v = parseFloat(document.getElementById('porc_v').value) || 0;
    document.getElementById('resPorc').innerText = ((p / 100) * v).toFixed(2);
}

// REGRA DE 3
function calcRegra3() {
    const a = parseFloat(document.getElementById('r3_a').value);
    const b = parseFloat(document.getElementById('r3_b').value);
    const c = parseFloat(document.getElementById('r3_c').value);
    if(a) document.getElementById('resR3').innerText = ((c * b) / a).toFixed(2);
}

// IMC
function calcIMC() {
    const p = parseFloat(document.getElementById('imc_peso').value);
    const a = parseFloat(document.getElementById('imc_alt').value);
    if(p && a) {
        const imc = p / (a * a);
        document.getElementById('resIMC').innerText = imc.toFixed(1);
        let s = imc < 18.5 ? "Abaixo do peso" : imc < 25 ? "Peso Normal" : imc < 30 ? "Sobrepeso" : "Obesidade";
        document.getElementById('statusIMC').innerText = s;
    }
}

// VALOR HORA
function calcValorHora() {
    const sal = parseFloat(document.getElementById('sal_mensal').value);
    const hrs = parseFloat(document.getElementById('horas_mes').value);
    if(sal && hrs) {
        const v = sal / hrs;
        document.getElementById('resValHora').innerText = `R$ ${v.toFixed(2).replace('.', ',')}`;
    }
}