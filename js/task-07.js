const rangeInput = document.getElementById('font-size-control');
const textOutput = document.getElementById('text');

rangeInput.addEventListener('input', onTargetInputChange);

function onTargetInputChange(event) {
    let control = event.currentTarget.value;
    textOutput.style.fontSize = 1 * control + 'px';
};