
/*const jmeno = "Michal"
const elZprava = document.querySelector("#zprava")
let vek

// null = vypln
if(elZprava === null) {
  console.log("Pozadovany element neni nalezen")
} else {
  console.log(elZprava)
}

// undefined = nedefinovana hodnota
if(vek === undefined) { 
  vek = Number(prompt("Zadej svuj vek"))
} else { 
  console.log(vek)
}*/
const Sude = (cislo)=>{
    if(cislo % 2 === 0){
        return true;
    } else{
        return false;
    }
};

const jeSude = (cislo) =>{
    return cislo % 2 === 0 ? true:false;
}