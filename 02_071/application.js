// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const dobInput = document.getElementById('dob');
    const ageDisplay = document.getElementById('age');

    function calculateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    dobInput.addEventListener('change', function () {
        const dob = dobInput.value;
        if (dob) {
            const age = calculateAge(dob);
            ageDisplay.textContent = `Age: ${age}`;
        } else {
            ageDisplay.textContent = 'Age: ';
        }
    });
});
