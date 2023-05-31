
const reset = () =>{
    const input = document.getElementById("inputspan")
    const res = document.createTextNode("")
    input.replaceChildren(res)
    const output = document.getElementById("outputspan")
    output.replaceChildren(0)
}

export {reset}