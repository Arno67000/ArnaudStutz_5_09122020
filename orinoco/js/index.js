//Variable de stockage des données de l'API
let ours = []; 

onload = async function() {
    await apiFetch();
    try{
        if(ours.length>=0) {
            indexFill();
            console.log("indexPage OK"); //Vérification console de l'intégration des éléments
        }
        else {
            console.log("error fetch");
            alert("Chargement de la page impossible. Nous avons actuellement un problème de connexion au serveur. Veuillez réessayer ultérieurement ou contacter nos servieces.");
        };
    }
    catch(e) {
        console.log(e);
        alert("Chargement de la page impossible. Nous avons actuellement un problème de connexion au serveur. Veuillez réessayer ultérieurement ou contacter nos servieces.");
    };
};
