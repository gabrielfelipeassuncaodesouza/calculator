//TODO: colocar bootstrap
//Global variables
var firstValue
var operation
const visor = document.getElementById("visor")

function execute(value) {
  visor.value += value.toString()
}

function chooseOperator(operator) {
  firstValue = parseInt(visor.value)
  visor.value = ""
  operation = operator
}

function limpar() { 
    visor.value = ""
    firstValue = 0
    operation = ""
}

const doOperation = {
  plus: function(value1, value2) {
    visor.value = value1 + value2
  },
    
  minus: function(value1, value2) {
    visor.value = value1 - value2
  },
    
  times: function(value1, value2) {
    visor.value = value1 * value2
  },
    
  divided: function(value1, value2) {
    visor.value = value1 / value2
  }
}

function calcular() {
  const auxFunc = doOperation[operation]
  let secondValue= parseInt(visor.value)
  auxFunc(firstValue, secondValue)
}