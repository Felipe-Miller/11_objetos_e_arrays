const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

const indicePreto = rainbow.indexOf("Preto");
if (indicePreto !== -1) {
    rainbow.splice(indicePreto, 1);
}

rainbow.splice(2, 0, "Amarelo", "Verde");

rainbow.push("Roxo");

console.log(rainbow);