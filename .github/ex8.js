let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}
console.log('nom : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageNombre = parseInt(age)
if (Number.isNaN(ageNombre) || ageNombre <= 0) {
    console.log("age : valeur invalide")
} else {
    console.log("age : " + ageNombre + " (valide)")
}

let positionArrobase = email.indexOf("@")
let valideEmail = false

if (positionArrobase !== -1) {
    let partieApres = email.slice(positionArrobase)
    if (partieApres.indexOf(".") !== -1) {
        valideEmail = true
    }
}

if (valideEmail) {
    console.log('email : "' + email + '" (valide)')
} else {
    console.log('email : "' + email + '" (invalide : pas de point après @)')
}

let score = parseInt(scoreJeu)
if (Number.isNaN(score)) {
    score = 0
}
console.log("scoreJeu : " + score + ' (extrait depuis "' + scoreJeu + '")')

let adminBool = false
if (estAdmin === "true") {
    adminBool = true
}
console.log("estAdmin : " + adminBool + ' (conversion manuelle requise)')

let connexion = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion : "' + connexion + '"')

let nbConn = Number(nombreConnexions)
if (nbConn === 0) {
    console.log('nombreConnexions : "Aucune connexion"')
} else {
    console.log("nombreConnexions : " + nbConn)
}

console.log("================================")