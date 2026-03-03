let compteur = 0

let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
]

for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0]
    let b = paires[i][1]

    let egal = (a == b)
    let strict = (a === b)

    if (egal && !strict) {
        compteur++
    }

    console.log(a + " == " + b + " -> " + egal + " | " +
        a + " === " + b + " -> " + strict)
}

console.log("---")
console.log(compteur + " paire(s) où == et === donnent des résultats différents")