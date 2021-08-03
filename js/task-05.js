const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', onTargetInputChange);

function onTargetInputChange(event) {
    if (event.currentTarget.value === "") {
        nameOutput.textContent = 'незнакомец';
    } else {
        nameOutput.textContent = event.currentTarget.value;
    };
}