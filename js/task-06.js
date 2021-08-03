const validInput = document.getElementById('validation-input');

validInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget.dataset.length);

    if (event.currentTarget.value.length != event.currentTarget.dataset.length) {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
    } else {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    };
};