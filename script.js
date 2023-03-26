const btns = document.querySelector(".calculator-buttons");
let resultScreen = document.querySelector(".calculator-screen__bottom");
let topResultScreen = document.querySelector(".calculator-screen__top");

const figures = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "/", "*"];
let a = "";
let b = "";
let sign = "";

btns.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return false;

  const valueKey = e.target.value;

  if (figures.includes(valueKey) || operators.includes(valueKey)) {
    resultScreen.textContent += valueKey;
    if (operators.includes(valueKey)) {
      if (sign.length > 0) {
        sign = "";
      }

      sign += valueKey;
    }
  }

  if (figures.includes(valueKey)) {
    if (b === "" && sign === "") {
      a += valueKey;
    } else {
      b += valueKey;
    }
  }

  if (operators.includes(valueKey)) {
    resultScreen.textContent = `${a} ${sign} ${b}`;
  }

  if (valueKey === "=") {
    switch (sign) {
      case "+":
        resultScreen.textContent = (+a + +b).toFixed(3);
        a = (+a + +b).toFixed(3);
        break;
      case "-":
        resultScreen.textContent = (+a - +b).toFixed(3);
        a = (+a - +b).toFixed(3);
        break;
      case "*":
        resultScreen.textContent = (+a * +b).toFixed(3);
        a = (+a * +b).toFixed(3);
        break;
      case "/":
        resultScreen.textContent = (+a / +b).toFixed(3);
        a = (+a / +b).toFixed(3);
        break;
    }
    b = "";
    topResultScreen.textContent = "=" + (a + b);
  }

  switch (valueKey) {
    case "C":
      a = "";
      b = "";
      sign = "";
      resultScreen.textContent = "";
      topResultScreen.textContent = "";
      break;
    case "CE":
      a = "";
      b = "";
      sign = "";
      resultScreen.textContent = "";
      break;

    case "%":
      a = +a / 100;
      resultScreen.textContent = +a / 100;
      break;

    case ".":
      resultScreen.textContent += ".";
      if (b === "" && sign === "") {
        a += ".";
      } else {
        b += ".";
      }
      break;

    case "+/-":
      if (b === "") {
        if (Math.sign(a) > 0) {
          a *= -1;
          resultScreen.textContent = a;
        } else {
          a *= -1;
          resultScreen.textContent = a;
        }
      } else {
        if (Math.sign(b) > 0) {
          b *= -1;
          resultScreen.textContent = b;
        } else {
          b *= -1;
          resultScreen.textContent = b;
        }
      }
      break;
  }
});
