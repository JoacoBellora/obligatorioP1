let users = [
    {
        id: 0,
        nombre: "JBellora",
        username: "admin",
        password: "369",
        admin: true // "admin" o "user"
    },
    {
        id: 1,
        nombre: "IDehoyos",
        username: "IDH",
        password: "777",
        admin: true // "admin" o "user"
    },
    {
        id: 2,
        nombre: "SFagnoni",
        username: "Sfg",
        password: "123",
        admin: true // "admin" o "user"
    }

]

class objUser {
    constructor(idU, nombreU, usernameUMin, passwordU, tarjetaU, cvcU, tipoU) {
        this.id = idU;
        this.nombre = nombreU;
        this.username = usernameUMin;
        this.password = passwordU;
        this.tarjeta = tarjetaU;
        this.cvc = cvcU;
        this.admin = tipoU; // "admin" o "user"
    }
    //metodos
}

document.querySelector("#btnRegisrarse").addEventListener("click", crearUser);

function crearUser() {
    let nombreU = document.querySelector("#txtNombre").value;

    let usernameU = document.querySelector("#txtUsername").value;
    let usernameUMin = usernameU.toLowerCase();

    let passwordU = document.querySelector("#password").value;
    let passUpr = passwordU.toUpperCase();
    let mayus = 0

    let tarjetaU = Number(document.querySelector("#nTarjeta").value)
    let cvcU = Number(document.querySelector("#cvc").value);
    let tipoU = false

    let idU = (users.length + 1)

    for (let i = 0; i < passwordU.length; i++) {
        if (passwordU[i] == passUpr[i]) {
            mayus++
        }



        if (passwordU.length < 4 || mayus == 0 || passwordU === passUpr /* || passwordU[i] == !isNaN(passwordU[i]) */) {
            alert("Error la contraseña no cuple con los requisitos de seguridad")
            return
        }

        /*      if(users.) */
        let usernameexiste = false
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === usernameU) {
                usernameexiste = true;
                break;

            }


        }

        if (usernameexiste) {
            alert("El Usuario ya existe");
            return;
        }

        let user = new objUser(idU, nombreU, usernameUMin, passwordU, tarjetaU, cvcU, tipoU);
        users.push(user);
        console.table(users)
        alert("Usuario creado")

    }


}
