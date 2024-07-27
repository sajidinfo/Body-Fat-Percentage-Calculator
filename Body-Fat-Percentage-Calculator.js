// Body Fat Percentage Calculator (using YMCA formula)
function calculateBodyFatPercentage(weight, waistCircumference, gender) {
    let bodyFatPercentage;
    if (gender === 'male') {
        bodyFatPercentage = 86.010 * Math.log10(waistCircumference - weight * 0.5) - 70.041 * Math.log10(weight) + 36.76;
    } else {
        bodyFatPercentage = 163.205 * Math.log10(waistCircumference + hipCircumference - neckCircumference) - 97.684 * Math.log10(weight) - 78.387;
    }

    return bodyFatPercentage.toFixed(1); // Return body fat percentage rounded to 1 decimal place
}

// Example usage:
const personWeightKg = 70; // Weight in kilograms
const waistCircumferenceCm = 80; // Waist circumference in centimeters
const personGender = 'male'; // 'male' or 'female'

const bodyFatPercentage = calculateBodyFatPercentage(personWeightKg, waistCircumferenceCm, personGender);
console.log(`Estimated Body Fat Percentage: ${bodyFatPercentage}%`);
