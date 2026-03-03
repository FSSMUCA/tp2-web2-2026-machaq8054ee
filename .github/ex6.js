let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("nom -> " + (nom ?? "valeur par défaut"))
console.log("age -> " + (age ?? "valeur par défaut"))
console.log("ville -> " + (ville ?? "valeur par défaut"))
console.log("score -> " + (score ?? "valeur par défaut"))
console.log("actif -> " + (actif ?? "valeur par défaut"))

console.log("---")

console.log("nom -> " + (nom || "valeur par défaut"))
console.log("age -> " + (age || "valeur par défaut"))
console.log("ville -> " + (ville || "valeur par défaut"))
console.log("score -> " + (score || "valeur par défaut"))
console.log("actif -> " + (actif || "valeur par défaut"))

console.log("---")

let vars = [
    ["nom", nom],
    ["age", age],
    ["ville", ville],
    ["score", score],
    ["actif", actif]
]

for (let i = 0; i < vars.length; i++) {
    let nomVar = vars[i][0]
    let valeur = vars[i][1]

    let r1 = valeur ?? "valeur par défaut"
    let r2 = valeur || "valeur par défaut"

    if (r1 === r2) {
        console.log(nomVar + " : ?? et || -> même résultat")
    } else {
        console.log(nomVar + " : ?? et || -> résultat différent")
    }
}