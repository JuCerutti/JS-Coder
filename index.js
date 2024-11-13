
//CLASE PARA CREAR USUARIO

class Usuario{
    constructor(idusuario, nombre, mail) {
        this.id = idusuario;
        this.nombre = nombre;
        this.mail = mail;
        
    }
}

//ARRAY PARA TODOS LOS USUARIOS 
let usuarios = [];

//CICLO FOR PARA CREAR 2 USUARIOS CON PROMPT
for (let i=0; i<2; i++) {
    let nombre;
    let mail;
    let esMail;
    esMail = false;

    nombre = prompt("Ingresar Nombre Usuario: ");
    mail = prompt("Ingresar mail: ");

    //USO FUNCIÓN PARA CONTROL DEL MAIL CON FORMATO @
    while (esMail == false){
        if (tieneArroba(mail) == true){
            esMail = true;
            
        }else { 
            mail = prompt("Valor incorrecto, reingresar mail: ");
        }
    }
     usuarios.push(new Usuario(i,nombre,mail));
}

//CREACION DE 2 USUARIOS HARDCODEADOS
usuarios.push(new Usuario(2,"Rukita","Rukimotors@gmail.com"));
usuarios.push(new Usuario(3,"Rukito","Rukitopl@gmail.com"));

for (const usuario of usuarios) {
    console.log("El usuario " + usuario.nombre + " tiene el mail: " + usuario.mail );
    console.log(usuario);
}

function tieneArroba (Texto){
    return Texto.includes("@");
}

