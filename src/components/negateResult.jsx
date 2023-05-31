const negative = (Ans) =>{
    const newans = Ans * -1
    const output = document.getElementById("outputspan")
    output.replaceChildren(newans)
}

export {negative}