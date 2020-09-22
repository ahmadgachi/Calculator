const calculate = function () {
  const input = document.querySelector(".cal");
  const answer = document.querySelector(".answer");
  const eqaulTo = document.querySelector(".equals button");
  π = 3.141592653;
  e = 2.718281828;

  function insert(num) {
    if (num === "." && input.value.slice(-1) === ".") return;
    input.value += num;
  }

  function recursiveFactorial(num) {
    if (input.value.includes(".")) {
      answer.innerHTML = "<p class='org'>Domain error!</p>";
      input.value = "";
      return;
    } else if (num === "") {
      return;
    } else {
      if (num < 0) {
        return (answer.innerHTML = -1);
      } else if (num == 0) {
        return (answer.innerHTML = 1);
      } else if (num > 150) {
        return (answer.innerHTML = "infinity");
      } else {
        return (answer.innerHTML = `${num * recursiveFactorial(num - 1)}`);
      }
    }
  }

  function equal() {
    if (input.value === "") {
      return;
    }
    answer.innerHTML = `${eval(input.value)}`;
    input.value = "";
  }

  function sqrt() {
    if (input.value != "") {
      answer.innerHTML = `${Math.sqrt(eval(input.value))}`;
      input.value = "";
    }
  }

  function percenTage() {
    if (input.value != "") {
      π = 3.141592653;
      e = 2.718281828;
      answer.innerHTML = `${eval(input.value) / 100}`;
      input.value = "";
    }
  }

  function sinE() {
    if (input.value != "") {
      answer.innerHTML = `${Math.sin(eval(input.value))}`;
      input.value = "";
    }
  }
  function cosE() {
    if (input.value != "") {
      answer.innerHTML = `${Math.cos(eval(input.value))}`;
      input.value = "";
    }
  }
  function tanE() {
    if (input.value != "") {
      answer.innerHTML = `${Math.tan(eval(input.value))}`;
      input.value = "";
    }
  }
  function logE() {
    if (input.value != "") {
      answer.innerHTML = `${Math.log10(eval(input.value))}`;
      input.value = "";
    }
  }
  function lnE() {
    if (input.value != "") {
      answer.innerHTML = `${Math.log(eval(input.value))}`;
      input.value = "";
    }
  }

  function deletelast() {
    input.value = input.value.slice(0, -1);
  }

  function deleteAll() {
    input.value = "";
    answer.textContent = "";
  }

  const adding = function () {
    const signs = document.querySelectorAll(".signs li button");
    const rad = document.querySelector(".rad button");
    const numbers = document.querySelectorAll(".numbers li button");
    const operators = document.querySelectorAll(".operators li button");
    const topDeg = document.querySelector(".deg");

    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        number.classList.add("animate-pop");
        setTimeout(() => {
          number.classList.remove("animate-pop");
        }, 600);
        return insert(number.textContent);
      });
    });

    operators.forEach((operator) => {
      operator.addEventListener("click", () => {
        operator.classList.add("animate-pop");
        setTimeout(() => {
          operator.classList.remove("animate-pop");
        }, 600);
        if (input.value.slice(-1) === operator.textContent) {
          return;
        } else {
          return insert(operator.textContent);
        }
      });
    });

    signs.forEach((sign) => {
      sign.addEventListener("click", () => {
        sign.classList.add("animate-pop2");
        setTimeout(() => {
          sign.classList.remove("animate-pop2");
        }, 600);
        if (sign.classList.contains("ok")) {
          if (sign.textContent == "^") {
            if (input.value != "" && input.value.slice(-1) != "*") {
              return insert("**");
            }
          } else {
            return insert(sign.textContent);
          }
        } else if (sign.parentElement.classList.contains("percentage")) {
          return percenTage();
        } else if (sign.parentElement.classList.contains("sin")) {
          return sinE();
        } else if (sign.parentElement.classList.contains("cos")) {
          return cosE();
        } else if (sign.parentElement.classList.contains("tan")) {
          return tanE();
        } else if (sign.parentElement.classList.contains("log")) {
          return logE();
        } else if (sign.parentElement.classList.contains("ln")) {
          return lnE();
        } else if (sign.parentElement.classList.contains("sqaure-root")) {
          return sqrt();
        } else if (sign.parentElement.classList.contains("factorial")) {
          return recursiveFactorial(input.value);
        }
      });
    });

    rad.addEventListener("click", (e) => {
      if (e.target.classList.contains("radd")) {
        rad.innerHTML = "DEG";
        topDeg.textContent = "RAD";
      } else {
        rad.innerHTML = "RAD";
        topDeg.textContent = "DEG";
      }
      rad.classList.toggle("radd");
    });
    topDeg.addEventListener("click", (e) => {
      if (e.target.classList.contains("radd")) {
        rad.innerHTML = "RAD";
        topDeg.textContent = "DEG";
      } else {
        rad.innerHTML = "DEG";
        topDeg.textContent = "RAD";
      }
      topDeg.classList.toggle("radd");
    });
  };

  eqaulTo.addEventListener("click", equal);
  document.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      equal();
    } else {
      e.preventDefault();
    }
  });

  const deleting = function () {
    const backspace = document.querySelector(".backspace button");
    const clearBtn = document.querySelector(".clear button");

    backspace.addEventListener("click", deletelast);
    clearBtn.addEventListener("click", deleteAll);
  };

  adding();
  deleting();
};

calculate();
