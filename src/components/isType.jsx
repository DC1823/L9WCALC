const isNumber = (char) =>{
    return char == '1' || char =='2' || char == '3' || char =='4' || char == '5' || char =='6'
    || char == '7' || char =='8' || char == '9' || char =='0'
}

const isOperator = (char) =>{
    return char == '+' || char == '-'  || char == '/' || char == 'x' || char == '%'
}

export {isNumber, isOperator}