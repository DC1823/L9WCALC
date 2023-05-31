

const deleteLast = () =>{
    const input = document.getElementById("inputspan")
    const lastchild = input.lastChild
    input.removeChild(lastchild)
}

export {deleteLast}