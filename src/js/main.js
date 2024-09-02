const loanAmountInput = document.getElementById("loan-amount--input");
const loanAmountSlider = document.getElementById("loan-amount--slider");
const repaymentInput = document.getElementById("repayment-input");
const repaymentSlider = document.getElementById("repayment-slider");
const button = document.getElementById("button");
const dailyPayment = document.getElementById("daily-payment");
const totalPayment = document.getElementById("total-payment");

loanAmountSlider.value = 1000;
repaymentSlider.value = 7;

const calculations = () => {
  const IR = 2.2;
  const LA = +loanAmountInput.value;
  const PR = +repaymentInput.value;

  if (loanAmountInput.value && repaymentSlider.value) {
    dailyPayment.value = ((LA + LA * (IR / 100) * PR) / PR).toFixed();
    totalPayment.value = (
      +dailyPayment.value * +repaymentInput.value
    ).toFixed();
  }
};

const isValid = () => {
  const amount =
    parseFloat(loanAmountInput.value) >= 1000 &&
    parseFloat(loanAmountInput.value) <= 50000;
  const repayment =
    parseFloat(repaymentInput.value) >= 7 &&
    parseFloat(repaymentInput.value) <= 60;

  if (repayment && amount) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }

  console.log(repayment, amount);
};

loanAmountInput.addEventListener("input", () => {
  loanAmountSlider.value = +loanAmountInput.value;
  calculations();
  isValid();
});

loanAmountSlider.addEventListener("input", () => {
  loanAmountInput.value = +loanAmountSlider.value;
  calculations();
  isValid();
});

repaymentInput.addEventListener("input", () => {
  loanAmountSlider.value = +loanAmountInput.value;
  calculations();
  isValid();
});

repaymentSlider.addEventListener("input", () => {
  repaymentInput.value = +repaymentSlider.value;
  calculations();
  isValid();
});

button.addEventListener("click", (a) => {
  a.preventDefault();

  repaymentInput.value = "";
  loanAmountInput.value = "";
  repaymentSlider.value = 7;
  loanAmountSlider.value = 1000;
  dailyPayment.value = "";
  totalPayment.value = "";
});
