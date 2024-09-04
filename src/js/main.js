const loanAmountInput = document.getElementById("loan-amount--input");
const loanAmountSlider = document.getElementById("loan-amount--slider");
const repaymentInput = document.getElementById("repayment-input");
const repaymentSlider = document.getElementById("repayment-slider");
const button = document.getElementById("button");
const dailyPayment = document.getElementById("daily-payment");
const totalPayment = document.getElementById("total-payment");

const errorMessages = {
  repayment: {
    min: "Мінімальний період погашення 7 днів",
    max: "Максимальний період погашення 60 днів",
  },
  'loan-amount': {
    min: "Мінімальна сума 1000 грн",
    max: "Максимальна сума 50000 грн",
  },
};

const showError = (inputType, value) => {
  const errorMessageBlok = document.getElementById(
    `error-message__${inputType}`
  );
  const errorMessage = document.querySelector(`.error-message__${inputType}`);

  const minValue = inputType === "loan-amount" ? 1000 : 7;
  const maxValue = inputType === "loan-amount" ? 50000 : 60;

  if (value < minValue) {
    errorMessageBlok.style.opacity = 1;
    errorMessage.innerText = errorMessages[inputType].min;
  } else if (value > maxValue) {
    errorMessageBlok.style.opacity = 1;
    errorMessage.innerText = errorMessages[inputType].max;
  } else {
    errorMessageBlok.style.opacity = 0;
  }
};

const handleInputChange = (input, slider, inputType) => {
  input.addEventListener("input", () => {
    slider.value = +input.value;
    calculations();
    isValid();
  });

  input.addEventListener("blur", () => {
    showError(inputType, +input.value);
  });

  slider.addEventListener("input", () => {
    input.value = +slider.value;
    calculations();
    isValid();
  });

  slider.addEventListener("blur", () => {
    showError(inputType, +slider.value);
  });
};

loanAmountSlider.value = 1000;
repaymentSlider.value = 7;

const isValid = () => {
  const amount =
    +loanAmountInput.value >= 1000 && +loanAmountInput.value <= 50000;
  const repayment = +repaymentInput.value >= 7 && +repaymentInput.value <= 60;

  if (repayment && amount) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
const calculations = () => {
  const IR = 2.2;
  const LA = +loanAmountInput.value;
  const PR = +repaymentInput.value;

  if (LA && PR) {
    dailyPayment.value = ((LA + LA * (IR / 100) * PR) / PR).toFixed();

    totalPayment.value = (
      +dailyPayment.value * +repaymentInput.value
    ).toFixed();
  }
};

loanAmountInput.addEventListener("input", () => {
  loanAmountSlider.value = +loanAmountInput.value;
  calculations();
  isValid();
});

handleInputChange(loanAmountInput, loanAmountSlider, "loan-amount");
handleInputChange(repaymentInput, repaymentSlider, "repayment");

button.addEventListener("click", (a) => {
  a.preventDefault();

  repaymentInput.value = "";
  loanAmountInput.value = "";
  repaymentSlider.value = 7;
  loanAmountSlider.value = 1000;
  dailyPayment.value = "";
  totalPayment.value = "";
  button.disabled = true;
});
