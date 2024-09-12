let a = parseFloat(prompt("p"));
let b = parseFloat(prompt("i"));
let c = parseFloat(prompt("n"));
let delta = (b*b)*(-4*a*c);
delta = Math.sqrt(delta);
let x_1 = (-b + delta)/(2*a);
let x_2 = (-b - delta)/(2*a);






function calcula() {
    const num1 = parseFloat(document.getElementById('zeroum').value);
    const num2 = parseFloat(document.getElementById('zerodois').value);
    const num3 = parseFloat(document.getElementById('zerotres').value);
    let resultado = 0;
    let oper = document.querySelector('input[name="operacao"]:checked').value;

    if(oper == 'soma'){
        resultado = num1 + num2;
    }else if(oper == 'subtracao'){
        resultado = num1 - num2;
    }else if(oper == 'multiplicacao'){
        resultado = num1 * num2;
    }else if(oper == 'divisao'){
        resultado = num1/num2;
    }else if(oper == 'porcentagem'){
        resultado = num1*num2/100;
    }

    document.getElementById('resultado').innerText = resultado;
}