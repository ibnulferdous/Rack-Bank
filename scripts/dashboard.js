let balanceTextElement = document.getElementById("balance-text")
let balanceValue = parseFloat(balanceTextElement.innerText)

// Storing the input value
function gettingInput(inputId) {
    const userInput = document.getElementById(inputId)
    const userValue = parseFloat(userInput.value)
    userInput.value = ""
    return userValue
}

// Updating the amount on the DOM
function updateAmount(textId, inputValue, isAdd) {
    const amountTextElement = document.getElementById(textId)
    let amountValue = parseFloat(amountTextElement.innerText)
    amountValue += inputValue
    amountTextElement.innerText = amountValue
    if(isAdd) {
        balanceValue += inputValue
        balanceTextElement.innerText = balanceValue
    } else {
        balanceValue -= inputValue
        balanceTextElement.innerText = balanceValue
    }
}


// Deposite button event handeler
document.getElementById("deposite-btn").addEventListener("click", function(e) {
    const depositeValue = gettingInput("deposite-input")
    if(depositeValue > 0) {
        updateAmount("deposite-text", depositeValue, true)
    }  
})

// Widthdraw button event handeler
document.getElementById("widthdraw-btn").addEventListener("click", function(e) {
    const widthdrawValue = gettingInput("widthdraw-input")
    if(widthdrawValue > 0 && balanceValue > widthdrawValue) {
        updateAmount("widthdraw-text", widthdrawValue, false)
    } 
    
})



