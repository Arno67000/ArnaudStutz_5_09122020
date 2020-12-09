onload = function() {
    let total = document.getElementById("totalPrice");
    let id = document.getElementById("server-id");
    let button = document.getElementById("back");
    let custName = document.getElementById("custName");

    custName.innerHTML = localStorage.getItem("custName");
    total.innerHTML = localStorage.getItem("totalPrice");
    id.innerHTML = localStorage.getItem("orderId");
    button.addEventListener('click', function() {
        localStorage.clear();
    });
};