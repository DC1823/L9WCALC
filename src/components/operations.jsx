
const sum = (num1,num2) =>{
    const res = num1 + num2
    if(verifyNegatives(res) && No_More_Than_999999999(res) && No_More_Than_9_Chars(res))
        return fixZeros(res)
    else return 'ERROR.'
}

const dif = (num1,num2) => {
    const res = num1 - num2
    if(verifyNegatives(res) && No_More_Than_999999999(res) && No_More_Than_9_Chars(res))
        return fixZeros(res)
    else return 'ERROR.'
}

const mult = (num1,num2) => {
    const res = num1 * num2
    if(verifyNegatives(res) && No_More_Than_999999999(res) && No_More_Than_9_Chars(res))
        return fixZeros(res)
    else return 'ERROR.'
}

const div = (num1,num2) => {
    const res = num1 / num2
    if(verifyNegatives(res) && No_More_Than_999999999(res) && No_More_Than_9_Chars(res))
        return fixZeros(res)
    else return 'ERROR.'
}

const mod = (num1,num2) => {
    const temp = parseInt(div(num1,num2))
    const res = num1 - (temp * num2)
    if(res < 0)
        res *= -1
    return res
}

const verifyNegatives = (value) =>{
    if(value > 0)
        return true
    else    
        return false
}

const No_More_Than_999999999 = (value) =>{
    if(value > 999999999)
        return false
    else 
        return true
}

const No_More_Than_9_Chars = (value) =>{
    if(value.toString().length > 9)
        return false
    else
        return true
}

const fixZeros = (value) =>{
    return parseFloat(value.toFixed(7))
}

export {sum,dif,mult,div,mod}