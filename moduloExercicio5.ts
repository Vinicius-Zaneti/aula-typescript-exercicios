//5. Imprimir os primeiros 10 números da sequência de Fibonacci.
export function exercicio5() {
    let numeroAnterior: number = 0;
    let numeroAtual: number = 1;
    
    console.log(numeroAnterior)
    console.log(numeroAtual)
    
    for (let contador: number = 3; contador <= 10; contador++){
        let proximoNumero: number = numeroAnterior + numeroAtual
    
        console.log(proximoNumero)
        numeroAnterior = numeroAtual
        numeroAtual = proximoNumero
    }
   }