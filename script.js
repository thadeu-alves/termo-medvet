const termos = [
    {
        termo: "dorsal",
        dica: "1",
        imagem: "./images/teste1.png",
    },
    {
        termo: "oral",
        dica: "2",
        imagem: "./images/teste1.png",
    },
    {
        termo: "ventral",
        dica: "3",
        imagem: "./images/teste1.png",
    },
    {
        termo: "transversal",
        dica: "4 - Plano",
        imagem: "./images/teste1.png",
    },
    {
        termo: "lateral",
        dica: "5",
        imagem: "./images/teste1.png",
    },
    {
        termo: "medial",
        dica: "6",
        imagem: "./images/teste1.png",
    },
    {
        termo: "cranial",
        dica: "1",
        imagem: "./images/parte2.png",
    },
    {
        termo: "transversal",
        dica: "2 - Plano",
        imagem: "./images/parte2.png",
    },
    {
        termo: "dorsal",
        dica: "3",
        imagem: "./images/parte2.png",
    },
    {
        termo: "caudal",
        dica: "4",
        imagem: "./images/parte2.png",
    },
    {
        termo: "palmar",
        dica: "5",
        imagem: "./images/parte2.png",
    },
    {
        termo: "proximal",
        dica: "6",
        imagem: "./images/parte2.png",
    },
    {
        termo: "dorsal",
        dica: "1",
        imagem: "./images/parte3.png",
    },
    {
        termo: "plantar",
        dica: "2",
        imagem: "./images/parte3.png",
    },
    {
        termo: "sagital",
        dica: "3 - Plano",
        imagem: "./images/parte3.png",
    },
    {
        termo: "transversal",
        dica: "4 - Plano",
        imagem: "./images/parte3.png",
    },
    {
        termo: "horizontal",
        dica: "5 - Plano",
        imagem: "./images/parte3.png",
    },
    {
        termo: "cranial",
        dica: "1",
        imagem: "./images/todo.png",
    },
    {
        termo: "dorsal",
        dica: "2",
        imagem: "./images/todo.png",
    },
    {
        termo: "ventral",
        dica: "3",
        imagem: "./images/todo.png",
    },
    {
        termo: "caudal",
        dica: "4",
        imagem: "./images/todo.png",
    },
    {
        termo: "medial lateral",
        dica: "5",
        imagem: "./images/todo.png",
    },
    {
        termo: "transversal",
        dica: "6 - Plano",
        imagem: "./images/todo.png",
    },
    {
        termo: "mediano",
        dica: "7 - Plano",
        imagem: "./images/todo.png",
    },
    {
        termo: "palpebra",
        dica: "1 - Pelos táteis ... superior",
        imagem: "./images/pelos1.png",
    },
    {
        termo: "palpebra",
        dica: "2 - Pelos táteis ...  inferior",
        imagem: "./images/pelos1.png",
    },
    {
        termo: "labio",
        dica: "3 - Pelos táteis ...  superior",
        imagem: "./images/pelos1.png",
    },
    {
        termo: "labio",
        dica: "4 - Pelos táteis ...  inferior",
        imagem: "./images/pelos1.png",
    },
    {
        termo: "bucais",
        dica: "5 - Pelos táteis",
        imagem: "./images/pelos2.png",
    },
    {
        termo: "mentuais",
        dica: "6 - Pelos táteis",
        imagem: "./images/pelos3.png",
    },
    {
        termo: "carpais",
        dica: "7 - Pelos táteis",
        imagem: "./images/pelos4.png",
    },
    {
        termo: "convergente",
        dica: "A - Remoinho piloso",
        imagem: "./images/pelosabc.png",
    },
    {
        termo: "divergente",
        dica: "B - Remoinho piloso",
        imagem: "./images/pelosabc.png",
    },
    {
        termo: "convergente",
        dica: "C - Linha pilosa",
        imagem: "./images/pelosabc.png",
    },
    {
        termo: "divergente",
        dica: "D - Linha pilosa",
        imagem: "./images/pelosabc.png",
    },
    {
        termo: "cruz pilosa",
        dica: "E",
        imagem: "./images/pelosabc.png",
    },
    {
        termo: "circum-anais",
        dica: "1 - Zona cutânea com glândulas",
        imagem: "./images/glandula1.png",
    },
    {
        termo: "canal anal",
        dica: "2",
        imagem: "./images/glandula1.png",
    },
    {
        termo: "anocutanea",
        dica: "3 - Linha",
        imagem: "./images/glandula1.png",
    },
    {
        termo: "zona colunar",
        dica: "4",
        imagem: "./images/glandula1.png",
    },
    {
        termo: "saco anal",
        dica: "5 - Glândula",
        imagem: "./images/glandula1.png",
    },
    {
        termo: "cauda",
        dica: "Glândula da",
        imagem: "./images/glcalda.png",
    },
    {
        termo: "circum-orais",
        dica: "1 - Glândulas",
        imagem: "./images/glsebacia.png",
    },
    {
        termo: "infraorbital",
        dica: "2 - Seio",
        imagem: "./images/glsebacia.png",
    },
    {
        termo: "interdigital",
        dica: "1 - Glândula do seio",
        imagem: "./images/glsb2.png",
    },
    {
        termo: "orificio",
        dica: "2 - ... da glândula",
        imagem: "./images/glsb2.png",
    },
    {
        termo: "digitais",
        dica: "1 - Coxins",
        imagem: "./images/glsb3.png",
    },
    {
        termo: "metacarpicos",
        dica: "2 - Coxins",
        imagem: "./images/glsb3.png",
    },
    {
        termo: "carpico",
        dica: "4 - Coxim",
        imagem: "./images/glsb3.png",
    },
    {
        termo: "carpica",
        dica: "5 - Glândula",
        imagem: "./images/glsb3.png",
    },
    {
        termo: "uropigeana",
        dica: "1 - Glândula",
        imagem: "./images/glsb4.png",
    },
    {
        termo: "papila",
        dica: "2 - ... da glândula",
        imagem: "./images/glsb4.png",
    },
    {
        termo: "pele",
        dica: "3",
        imagem: "./images/glsb4.png",
    },
    {
        termo: "foliculo",
        dica: "4 - ... da pena",
        imagem: "./images/glsb4.png",
    },
    {
        termo: "caudal",
        dica: "5 - Vértebra",
        imagem: "./images/glsb4.png",
    },
    {
        termo: "rostral",
        dica: "1 - Glândulas do plano",
        imagem: "./images/glsudi.png",
    },
    {
        termo: "nasolabial",
        dica: "2 - Glândulas do plano",
        imagem: "./images/glsudi.png",
    },
    {
        termo: "nasal",
        dica: "3 - Glândulas do plano",
        imagem: "./images/glsudi.png",
    },
    {
        termo: "crista",
        dica: "1",
        imagem: "./images/tgaves.png",
    },
    {
        termo: "barbela",
        dica: "2",
        imagem: "./images/tgaves.png",
    },
    {
        termo: "lobo da orelha",
        dica: "3",
        imagem: "./images/tgaves.png",
    },
    {
        termo: "metatarso",
        dica: "1",
        imagem: "./images/tgaves2.png",
    },
    {
        termo: "espora",
        dica: "2",
        imagem: "./images/tgaves2.png",
    },
    {
        termo: "interdigital",
        dica: "3 - Membrana",
        imagem: "./images/tgaves2.png",
    },
];

const letras = document.querySelector(".letras");
const imagem = document.querySelector("img");
const dica = document.querySelector(".dica");
let currentRow = null;
let termoAtual = "";
const random = getRandomIntInclusive(0, termos.length - 1);
const btnJogar = document.querySelector(".btnJogar");

let count = random;
console.log(termos.length);

async function start() {
    letras.innerHTML = "";
    termoAtual = termos[count].termo;
    imagem.src = termos[count].imagem;
    dica.innerText = termos[count].dica || "";
    createNewRow();
}

function createNewRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    currentRow = row;

    for (let i = 0; i < termoAtual.length; i++) {
        let input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.classList.add("letra");

        if (termoAtual.charAt(i) == " ") {
            input.value = " ";
            input.disabled = true;
            input.classList.add("espaco");
        } else {
            input.addEventListener("input", function () {
                if (this.value.length === 1) {
                    if (
                        this.nextElementSibling &&
                        this.nextElementSibling.classList.contains(
                            "letra"
                        )
                    ) {
                        this.nextElementSibling.focus();
                    }
                }
            });

            input.addEventListener("keydown", function (e) {
                if (
                    e.key === "Backspace" &&
                    this.value.length === 0
                ) {
                    if (
                        this.previousElementSibling &&
                        this.previousElementSibling.classList.contains(
                            "letra"
                        )
                    ) {
                        this.previousElementSibling.focus();
                    }
                } else if (e.key === "Enter") {
                    testar();
                }
            });
        }

        row.appendChild(input);
    }

    row.firstChild.focus();
    letras.appendChild(row);
}

function getTest(row) {
    const allLetras = row.querySelectorAll(".letra");
    let test = "";

    allLetras.forEach((input) => {
        test += input.value.toLowerCase();
    });

    return test;
}

function result(tentativa, termo, row) {
    const allLetras = row.querySelectorAll(".letra");
    const termoArray = termo.split("");
    const tentativaArray = tentativa.split("");
    const letrasMarcadas = new Array(termo.length).fill(
        false
    );

    for (let i = 0; i < termo.length; i++) {
        if (
            tentativaArray[i] === termoArray[i] &&
            tentativaArray[i] != " "
        ) {
            allLetras[i].classList.add("certa");
            letrasMarcadas[i] = true;
            termoArray[i] = null;
        }
    }

    for (let i = 0; i < termo.length; i++) {
        if (
            !letrasMarcadas[i] &&
            tentativaArray[i] != " "
        ) {
            const letraAtual = tentativaArray[i];
            const indexInTermo =
                termoArray.indexOf(letraAtual);

            if (indexInTermo !== -1) {
                allLetras[i].classList.add("lugar-errado");
                termoArray[indexInTermo] = null;
            } else {
                allLetras[i].classList.add("errada");
            }
        }
    }

    allLetras.forEach((input) => {
        input.disabled = true;
    });

    return tentativa === termo;
}

function howMutch(termo, char) {
    let count = 0;
    for (let i = 0; i < termo.length; i++) {
        if (termo.charAt(i) == char) {
            count += 1;
        }
    }
    return count;
}

function testar() {
    if (!currentRow) return;

    let tentativa = getTest(currentRow);
    console.log(tentativa);

    if (tentativa.length != termoAtual.length) {
        currentRow.classList.add("row-error");
        setTimeout(() => {
            currentRow.classList.remove("row-error");
        }, 100);
        return;
    }

    const acertou = result(
        tentativa,
        termoAtual,
        currentRow
    );

    if (!acertou) {
        createNewRow();
    } else {
        playAgain();
    }
}

function playAgain() {
    setTimeout(() => {
        btnJogar.style.display = "initial";
        btnJogar.addEventListener("click", () => {
            btnJogar.style.display = "none";
            count++;
            if (count == termos.length) {
                count = 0;
            }
            start();
            //window.location.reload();
        });
    }, 500);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
}

start();
