const convertButton = document.querySelector(".convert-button")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const dolarToday = 5.2
    const currencyConverted = inputCurrencyValue / dolarToday
    console.log(currencyConverted)
}


convertButton.addEventListener("click",convertValues )


