const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let index = params.index;
function setPage(){
    //reset page
    document.getElementById("cars").innerHTML = "";

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    let index = params.index;

    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("user").innerHTML = users[index].name + " " + users[index].surname;
    document.getElementById("mail").innerHTML = users[index].mail;
    document.getElementById("country").innerHTML = users[index].country;

    if (users[index].cars == null) {
        let li = document.createElement("li");
        li.innerHTML = "No cars to show";
        document.getElementById("cars").appendChild(li);
    }else {
        for (let i = 0; i < users[index].cars.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = "<a href='infoCar.html?index=" + index + "&car=" + i + "'>" + users[index].cars[i].model + "</a>";
                document.getElementById("cars").appendChild(li);
        }
    }
}

function deleteUser(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    let index = params.index;
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User deleted");
    window.location.href = "../index.html";
}

function addCarPage(){
    window.location.href = "addCar.html?index=" + index;
}

function addCar(){
    let users = JSON.parse(localStorage.getItem("users"));
    let brand = document.getElementById("brand");
    let model = document.getElementById("model");
    let year = document.getElementById("year");

    let car = {
        brand: brand.value,
        model: model.value,
        year: year.value
    }

    if (users[index].cars == null) {
        users[index].cars = [];
    }

    users[index].cars.push(car);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Car added");

    brand.value = "";
    model.value = "";
    year.value = "";

    window.location.href = "infoUser.html?index=" + index;
}

