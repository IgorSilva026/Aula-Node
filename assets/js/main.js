const a = document.querySelector("#formulario")

a.addEventListener("submit", function(e){
    e.preventDefault();
    const x = e.target.querySelector("#valorUm")
    const y = e.target.querySelector("#valorDois")

    const valorUm = Number(x.value)
    const valorDois = Number(y.value)

    const z = soma(valorUm,valorDois)

    alert(z)
})

function soma (a,b){
    return (a+b)
}
