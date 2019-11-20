var nombre ="Oscar";
var edad = "21";

var colores = ["amarillo", "blanco", "negro", "cafe"];
var numeros = [1, 80, 100, 0];

var alumnos = {
    "nombre":"Oscar",
    "edad":26,
    "colorFavorito":"azul"
};

var usuarios = [
    {
    "nombre":"Oscar",
    "edad":21,
    "colorFavorito":["amarillo", "cafe"]
    },
    {
        "nombre":"Carlos",
        "edad":26,
        "colorFavorito":"azul"
    }
]
var total = usuarios.length;
for(var a = 0; a <= total;a++ ){
alert(usuarios[a].nombre)
}
//alert(usuarios[0].colorFavorito[1]);