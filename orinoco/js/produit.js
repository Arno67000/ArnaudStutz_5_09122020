//Variable de stockage des données de l'API
let ours = [];

//Récupération de l'id de l'ours sélectionné
let id = new URLSearchParams(document.location.search.substring(1)).get("id");

onload = async function() {
    await apiFetchProduct();
    try {
        productFill();

        //Création du sélecteur de couleur
        let colorArea = document.getElementById("colorArea");
        let colorTitle = document.createElement("label");
        colorTitle.setAttribute("for", "ours_color");
        colorTitle.setAttribute("id", "colorTitle");
        colorTitle.innerHTML = 'Choisir sa couleur: ';
        colorArea.appendChild(colorTitle);
        let colorSelect = document.createElement("select");
        colorSelect.setAttribute("name", "color");
        colorSelect.setAttribute("id", "ours__color");
        colorSelect.setAttribute("required", "true");
        colorArea.appendChild(colorSelect);
        let productColor = document.getElementById("ours__color");
        for (let i=0; i<ours.colors.length; i++) {
            let color = document.createElement("option");
            color.setAttribute("value", ours.colors[i]);
            color.setAttribute("aria-label", ours.colors[i]);
            color.innerHTML = ours.colors[i];
            productColor.appendChild(color);
        };
        
        //EventListener de selection de couleur
        let colorChoice = productColor.value;
        productColor.addEventListener("change", function(){
            colorChoice = productColor.value;
        })

        //EventListener Nombre d'ours
        let productNb = document.getElementById("productNb");
        productNb.addEventListener("change", function() {
            if(productNb.value > 1) {
                colorTitle.innerHTML = "Choisir leur couleur:";
            }
            else {
                colorTitle.innerHTML = "Choisir sa couleur:";
            }
        })
        
        //Gestion du bouton => ajouter au panier
        let order = document.getElementById("ajout");
        order.addEventListener("click", function(e) {
            let teddy = {
                id: ours._id,
                color: colorChoice,
                price: ours.price/100,
                name : ours.name,
                nb : productNb.value,
                };

            addTeddy(teddy);      
        });
    }
    catch (e) {
        console.log(e);
        alert("Chargement de la page impossible. Nous avons actuellement un problème de connexion au serveur. Veuillez réessayer ultérieurement ou contacter nos servieces.");
    };
};
