const a = document.querySelector("#formulario")

a.addEventListener("submit", function(e){
    e.preventDefault();
    const x = e.target.querySelector("#peso")
    const y = e.target.querySelector("#altura")

    const peso = Number(x.value)
    const altura = Number(y.value)

    const z = imc(peso,altura)

    const d = z.toFixed(2)

    alert(d)
})

function imc (a,b){
    return (a/(b*b))
}
