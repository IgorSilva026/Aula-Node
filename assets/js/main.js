const a = document.querySelector("#formulario")

a.addEventListener("submit", function(e){
    e.preventDefault();
    const x = e.target.querySelector("#peso")
    const y = e.target.querySelector("#altura")

    const peso = Number(x.value)
    const altura = Number(y.value)

    const z = imc(peso,altura)

    const d = z.toFixed(2)

    const classificacao = Parametros(z)

    const result = (`Seu IMC é: ${d} Voce esta ${classificacao}`); 

    alert(result)
})

function imc (a,b){
    return (a/(b*b))

}

function Parametros(imc){
    let classificacao
    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc < 25) {
        classificacao = "Peso ideal"
    } else if (imc < 30) {
        classificacao = "Sobrepeso"
    } else {
        classificacao = "Obesidade"
    }
    return classificacao
}