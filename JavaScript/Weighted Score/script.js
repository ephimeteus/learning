function weightedAverage() {
    const textbox1 = parseInt(document.getElementById("textbox1").value);
    const textbox2 = parseInt(document.getElementById("textbox2").value);
    const textbox3 = parseInt(document.getElementById("textbox3").value);
    const scores = [textbox1, textbox2, textbox3];
    const weights = [0.35,0.35,0.30];
    let acc = 0;
    for (let i = 0; i< weights.length; i++){
        acc = acc + weights[i] * scores[i];
        
    };
    //let weightedAverage = result.reduce((acc,curr) => acc + curr, 0); // itera: guarda el valor en accumulator y le suma el current
    console.log("Result:" + acc); 
    document.querySelector(".result h2").textContent = "Result: " + acc; //HTML                                  
}


