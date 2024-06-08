let countValueEle = document.getElementById("countValue")

function onclickIncreseCount() {
    let previousValue = countValueEle.textContent
    let updetedValue = parseInt(previousValue) + 1 
    countValueEle.textContent = updetedValue
    if(updetedValue > 0) {
        countValueEle.style.color = "green"
    }else if (updetedValue < 0) {
        countValueEle.style.color = "red"
    }else {
        countValueEle.style.color = "black"
    }
}

function onclickRestCount() {
    countValueEle.textContent = 0
    countValueEle.style.color = "black"
}

function onclickDecreseCount() {
    let previousValue = countValueEle.textContent
    let updetedValue = parseInt(previousValue) - 1 
    countValueEle.textContent = updetedValue
    if(updetedValue > 0) {
        countValueEle.style.color = "green"
    }else if (updetedValue < 0) {
        countValueEle.style.color = "red"
    }else {
        countValueEle.style.color = "black"
    }
}