// creation de damier
let unDamier = document.createElement("table");
document.body.appendChild(unDamier);


    // creation d'une ligne
for (let row = 1; row <= 8; row++){
    let maTr = document.createElement("tr");
    unDamier.appendChild(maTr);


    // creation d'une cellule
    for (let cell = 1; cell <= 8; cell++){
        let maTd = document.createElement("td");
        if (row % 2 == 1 && cell % 2 ==0) {
            maTd.classList.add("case-noire");    
        }
        if (row % 2 == 0 && cell % 2 == 1){
            maTd.classList.add("case-noire");
        }
        maTr.appendChild(maTd);
    }
}
let eltunDamier = document.querySelector("table");
eltunDamier.addEventListener("click", (detailEvenement) => {//

    console.log("Voici les détails de l'évènement : ", detailEvenement);
    console.log("infos de la target : ", detailEvenement.target.classList);
    if (detailEvenement.target.classList.contains("case-noire")) {
        console.log("Oui, il y a une classe case_noir");
        detailEvenement.target.classList.remove("case-noire");
    } else {
        console.log("Non, il n'y a pas de classe case_noir sur la td");
        detailEvenement.target.classList.add("case-noire");
    }
});