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

// lexical scoping 
const hummus = factor => {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      return console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

  console.log(hummus(2));

  