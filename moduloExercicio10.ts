//10. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.
import promptSync from "prompt-sync";
let prompt = promptSync();


export function exercicio10() {

    let numero: number;

    do{
        numero = parseFloat (prompt("Digite um numero: "));
    }while (numero != 0)

}
