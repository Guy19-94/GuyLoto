
function generateLotoDraw() {
    // Générer 5 numéros principaux entre 1 et 49
    let mainNumbers = [];
    while (mainNumbers.length < 5) {
        let num = Math.floor(Math.random() * 49) + 1;
        if (!mainNumbers.includes(num)) {
            mainNumbers.push(num);
        }
    }

    // Générer le numéro chance entre 1 et 10
    let luckyNumber = Math.floor(Math.random() * 10) + 1;

    // Trier les numéros principaux
    mainNumbers.sort((a, b) => a - b);

    // Afficher les résultats
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>Numéros principaux : <strong>${mainNumbers.join(", ")}</strong></p>
        <p>Numéro chance : <strong>${luckyNumber}</strong></p>
    `;
}
