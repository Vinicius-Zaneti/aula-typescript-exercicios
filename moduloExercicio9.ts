//9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.
import promptSync from "prompt-sync";
let prompt = promptSync();


export function exercicio9() {

    let numero: number = parseInt(prompt("Digite um numero: "))
    
    while (numero != 0){
        numero--
        console.log (numero)
    }
    
}
