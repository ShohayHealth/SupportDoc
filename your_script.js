document.getElementById('calculate').addEventListener('click', function() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var resultText = pregnancyWeightGainRecommendation(height, weight);
    document.getElementById('result').innerHTML = resultText;
});

function calculateBMI(height, weight) {
    return weight / ((height / 100) ** 2);
}

function pregnancyWeightGainRecommendation(height, weight) {
    var bmi = calculateBMI(height, weight);
    var recommendation = "<strong>Your Pregnancy Weight Gain Recommendation:</strong><br>";

    if (bmi < 18.5) {
        // Underweight
        recommendation += "Category: <strong>Underweight</strong> (BMI < 18.5)<br>Total Weight Gain: <strong>12.5-18 kg</strong> (28-40 lbs)<br>Weekly Gain (2nd & 3rd trimester): <strong>0.51 kg</strong> (1-1.3 lbs)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        // Normal weight
        recommendation += "Category: <strong>Normal Weight</strong> (BMI 18.5-24.9)<br>Total Weight Gain: <strong>11.5-16 kg</strong> (25-35 lbs)<br>Weekly Gain (2nd & 3rd trimester): <strong>0.42 kg</strong> (0.8-1 lbs)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        // Overweight
        recommendation += "Category: <strong>Overweight</strong> (BMI 25-29.9)<br>Total Weight Gain: <strong>7-11.5 kg</strong> (15-25 lbs)<br>Weekly Gain (2nd & 3rd trimester): <strong>0.28 kg</strong> (0.5-0.7 lbs)";
    } else {
        // Obese
        recommendation += "Category: <strong>Obese</strong> (BMI ≥ 30)<br>Total Weight Gain: <strong>5-9 kg</strong> (11-20 lbs)<br>Weekly Gain (2nd & 3rd trimester): <strong>0.22 kg</strong> (0.4-0.6 lbs)";
    }

    return recommendation;
}
