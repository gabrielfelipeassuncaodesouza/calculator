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

function returnValue() {
  
  switch(operation) {
      
      case '+': 
      visor.value = firstValue + parseInt(visor.value)
      break
      
      case '-': 
      visor.value = firstValue - parseInt(visor.value)
      break
      
      case 'x':
      visor.value = firstValue * parseInt(visor.value)
      break
      
      case '÷': 
      visor.value = firstValue /parseInt(visor.value)
      break
      
  }
}