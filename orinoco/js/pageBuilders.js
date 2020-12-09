//Fonction de création de la page index.html
function indexFill() {
    for (let i=0; i<ours.length; i++) {
        //Gestion des paramètres URL envoyés par les liens vignettes
        let urlProduit = new URL("http://127.0.0.1:5500/orinoco/pages/produit.html");
        urlProduit.searchParams.set("id",ours[i]._id);
        
        //Création des vignettes contenant les articles
        let article = document.getElementById("main");
        let link = document.createElement("a");
        link.setAttribute("href", urlProduit);
        link.setAttribute("class", "vignette");
        link.setAttribute("id", [i]);
        article.appendChild(link);
        let pic = document.createElement("picture");
        link.appendChild(pic);
        let image = document.createElement("img");
        image.setAttribute("src", ours[i].imageUrl);
        image.setAttribute("alt", "photo ours en peluche");
        pic.appendChild(image);
        let div1 = document.createElement("div");
        div1.setAttribute("class", "vignette__title");
        link.appendChild(div1);
        let title = document.createElement("h2");
        title.innerHTML = ours[i].name;
        div1.appendChild(title);
        let div2 = document.createElement("div");
        div2.setAttribute("class", "add");
        div1.appendChild(div2);
        let fas = document.createElement("i");
        fas.setAttribute("class", "fas fa-search");
        div2.appendChild(fas);
        let div3 = document.createElement("div");
        div3.setAttribute("class", "price");
        div3.innerHTML = ours[i].price/100+"€";
        div1.appendChild(div3);
    };
    //MàJ du nombre d'articles du panier
    let currentScore = document.getElementById("nb-articles");
    updateNbArticles(currentScore);
};

//Fonction de création de la page produit
function productFill() {
    let productImg = document.getElementById("ours__imageUrl");
    let productName = document.getElementById("ours__name");
    let productId = document.getElementById("ours__id");
    let productDescript = document.getElementById("ours__description");
    let productPrice = document.getElementById("ours__price");
    productImg.setAttribute("src", ours.imageUrl);
    productName.innerHTML = ours.name;
    productId.innerHTML = "ref:"+ours._id;
    productPrice.innerHTML = ours.price/100+" €";
    productDescript.innerHTML = ours.description;
    //MàJ du nombre d'articles du panier
    let currentScore = document.getElementById("nb-products");
    updateNbArticles(currentScore);
};

//Fonction de création du panier
function caddyListFill() {
    if (localStorage.getObject('carts')) {
        let teddies = localStorage.getObject('carts');
        console.log(teddies)
        //Création du panier
        teddies.forEach(element => {
            let list = document.getElementById("list");
            let box = document.createElement("div");
            box.setAttribute("aria-label",`${element.name}, ${element.color}`);
            list.appendChild(box);
            let teddyNb = document.createElement("input");
            teddyNb.setAttribute("class", `${element.name}/${element.color}/ teddyNb`);
            teddyNb.setAttribute("type", "number");
            teddyNb.setAttribute("required","true");
            teddyNb.setAttribute("role", "spinbutton");
            teddyNb.setAttribute("aria-label", "nombre d'ours");
            teddyNb.setAttribute("min", "1");
            teddyNb.value = element.nb;
            box.appendChild(teddyNb);
            let teddyId = document.createElement("p");
            teddyId.setAttribute("class", "mini");
            teddyId.innerHTML = `ref: ${element.id}`;
            box.appendChild(teddyId);
            let teddyName = document.createElement("p");
            teddyName.setAttribute("class", "maxi bold");
            teddyName.innerHTML = element.name;
            box.appendChild(teddyName);
            let teddyColor = document.createElement("p");
            teddyColor.innerHTML = element.color;
            teddyColor.setAttribute("class", "bold");
            box.appendChild(teddyColor);
            let listPrice = document.createElement("p");
            listPrice.setAttribute("class", "bold");
            listPrice.innerHTML = "Prix : ";
            box.appendChild(listPrice);
            let teddyPrice = document.createElement("span");
            teddyPrice.innerHTML = element.price+" €/pièce TTC";
            teddyPrice.setAttribute("class", "bold");
            listPrice.appendChild(teddyPrice);
            let kill = document.createElement("button");
            kill.setAttribute("class",`${element.name}/${element.color}/ kill`);
            kill.setAttribute("aria-label", "Retirer l'article du panier.");
            kill.innerHTML = 'X';
            box.appendChild(kill);
            let line = document.createElement("HR");
            box.appendChild(line);
        });
        updateTotalPrice(total);    
    };   
};
