document.getElementById('userInput').addEventListener('input', showValue);

function showValue() {
    let userValue = document.getElementById('userInput').value;
    if (userValue == 3) {
        document.getElementById('showSomething').innerText = 'try again';
    } else {

        document.getElementById('showSomething').innerText = userValue;
    }
    return userValue;
}