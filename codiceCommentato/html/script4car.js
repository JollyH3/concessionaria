const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let index = params.index;
let ncar = params.car;

function setPage(){
    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("car").innerHTML = users[index].name + "'s " +  users[index].cars[ncar].model;
    document.getElementById("brand").innerHTML = "Brand: " + users[index].cars[ncar].brand;
    document.getElementById("model").innerHTML = "Model: " + users[index].cars[ncar].model;
    document.getElementById("year").innerHTML = "Registration year: " + users[index].cars[ncar].year;
}

function removeCar(){
    let users = JSON.parse(localStorage.getItem("users"));
    users[index].cars.splice(ncar, 1);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Car deleted");
    window.location.href = "infoUser.html?index=" + index;
}

function editCar(){
    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("brand").innerHTML = "<input type='text' id='brand2' value='" + users[index].cars[ncar].brand + "'>";
    document.getElementById("model").innerHTML = "<input type='text' id='model2' value='" + users[index].cars[ncar].model + "'>";
    document.getElementById("year").innerHTML = "<input type='text' id='year2' value='" + users[index].cars[ncar].year + "'>";
    document.getElementById("edit").setAttribute("onclick", "saveCar()");
    document.getElementById("edit").innerHTML = "Save";
    document.getElementById("remove").setAttribute("onclick", "cancel()");
    document.getElementById("remove").innerHTML = "Cancel";

}

function saveCar(){
    let users = JSON.parse(localStorage.getItem("users"));
    users[index].cars[ncar].brand = document.getElementById("brand2").value;
    users[index].cars[ncar].model = document.getElementById("model2").value;
    users[index].cars[ncar].year = document.getElementById("year2").value;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Car edited");
    window.location.href = "infoCar.html?index=" + index + "&car=" + ncar;
}

function cancel(){
    window.location.href = "infoCar.html?index=" + index + "&car=" + ncar;
}