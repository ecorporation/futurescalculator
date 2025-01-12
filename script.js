let pointval = 1.25;

function updatePointValue() {
    let symbol = document.getElementById("symbol").value;
    pointval = (symbol === "mnq") ? 0.5 : 1.25;
}

document.getElementById("symbol").addEventListener("change", updatePointValue);

document.getElementById("submit").addEventListener("click", () => {
    const contract = parseFloat(document.getElementById("contract").value);
    const ticksl = parseFloat(document.getElementById("ticksl").value);
    const ticktp = parseFloat(document.getElementById("ticktp").value);
    const loss = (ticksl * contract) * pointval;
    const profit = (ticktp * contract) * pointval;
    document.getElementById("resultProfit").innerHTML = 
    `<h3 style="color:lime">Profit</h3>${profit}$`;
    document.getElementById("resultLoss").innerHTML = 
    `<h3 style="color:red">Loss</h3>${loss}$`;

    showResult();
});

function showResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'flex'; // Make it visible
    resultDiv.style.flexDirection = 'column'; // Arrange children vertically
}

function showRiskResult() {
    const riskResultDiv = document.getElementById('riskResult');
    riskResultDiv.style.display = 'flex'; // Make it visible
    riskResultDiv.style.flexDirection = 'column'; // Arrange children vertically
}


document.getElementById("calculateRisk").addEventListener("click", () => {
    const accountSize = parseFloat(document.getElementById("accountSize").value);
    const riskTolerance = parseFloat(document.getElementById("riskTolerance").value) / 100;
    const riskTicksl = parseInt(document.getElementById("riskTicksl").value);

    updatePointValue();

    const riskAmount = accountSize * riskTolerance;
    const contractSize = Math.floor(riskAmount / (riskTicksl * pointval));

    document.getElementById("resultContracts").innerHTML = 
    `<h3 style="color:lime">Contracts</h3>You can trade ${contractSize} contract(s).`;

    showRiskResult();
});