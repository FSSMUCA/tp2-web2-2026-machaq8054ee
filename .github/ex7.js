let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

let sousTotal = prix * quantite
console.log("Sous-total : " + sousTotal)

let reduction = 0

if (codePromo !== null && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100
}

console.log("Réduction : " + reduction)

let total = sousTotal - reduction
console.log("Total final : " + total)

let statut = ""

if (soldeCompte >= total) {
    statut = "Paiement accepté"
    console.log(statut)
    soldeCompte = soldeCompte - total
    console.log("Nouveau solde : " + soldeCompte)
} else {
    statut = "Solde insuffisant"
    console.log(statut)
}

console.log("===== RÉCAPITULATIF =====")
console.log("Produit   : " + nomProduit)
console.log("Quantité  : " + quantite)
console.log("Prix unit.: " + prix + " MAD")
console.log("Sous-total: " + sousTotal + " MAD")
console.log("Réduction : " + reduction + " MAD")
console.log("Total     : " + total + " MAD")
console.log("Statut    : " + statut)
console.log("Solde     : " + soldeCompte + " MAD")
console.log("=========================")