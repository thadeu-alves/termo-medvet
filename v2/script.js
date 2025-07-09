const termos = [
    {
        termo: "mandibula",
        dica: "1 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "maxilar",
        dica: "2 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "incisivo",
        dica: "3 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "nasal",
        dica: "4 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "lacrimal",
        dica: "5 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "zigomatico",
        dica: "6 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "frontal",
        dica: "7 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "pre-esfenoide",
        dica: "8 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "palatino",
        dica: "9 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "temporal",
        dica: "10 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "parietal",
        dica: "11 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "occipital",
        dica: "12 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    {
        termo: "interparietal",
        dica: "13 - Osso",
        imagem: "./imagens/figura7.jpeg",
    },
    // Figura 8
    {
        termo: "occipital",
        dica: "1 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "interparietal",
        dica: "2 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "parietal",
        dica: "3 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "temporal",
        dica: "4 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "frontal",
        dica: "5 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "nasal",
        dica: "6 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "lacrimal",
        dica: "7 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "zigomatico",
        dica: "8 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "maxilar",
        dica: "9 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },
    {
        termo: "incisivo",
        dica: "10 - Osso",
        imagem: "./imagens/figura8.jpeg",
    },

    // Figura 9
    {
        termo: "occipital",
        dica: "1 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "temporal",
        dica: "2 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "basisfenoide",
        dica: "3 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "pre-esfenoide",
        dica: "3' - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "pterigoide",
        dica: "4 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "vomer",
        dica: "5 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "palatino",
        dica: "6 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "zigomatico",
        dica: "7 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "maxilar",
        dica: "8 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "frontal",
        dica: "9 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },
    {
        termo: "incisivo",
        dica: "10 - Osso",
        imagem: "./imagens/figura9.jpeg",
    },

    // Figura 13 - Mandibula (termos ORIGINAIS)
    {
        termo: "mandibular",
        dica: "74 - Forame",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "mentual",
        dica: "75 - Forame",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "corpo",
        dica: "76 - ... da Mandibula",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "margem ventral",
        dica: "77",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "incisura",
        dica: "77' - ... do Vasos faciais",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "margem alveolar",
        dica: "78",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "ramo",
        dica: "80 - ... da Mandibula",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "angulo",
        dica: "81 - ... da Mandibula",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "fossa masseterica",
        dica: "83",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "processo condilar",
        dica: "86",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "incisura mandibular",
        dica: "88",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "processo coronoide",
        dica: "89",
        imagem: "./imagens/figura13.jpeg",
    },
    {
        termo: "margem interalveolar",
        dica: "90",
        imagem: "./imagens/figura13.jpeg",
    },

    // Figura 10 (com termos romanos)
    {
        termo: "frontal",
        dica: "I - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "processo zigomatico",
        dica: "1",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "forame supraorbital",
        dica: "1'",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "parietal",
        dica: "II - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "interparietal",
        dica: "III - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "temporal",
        dica: "IV - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "parte escamosa",
        dica: "18",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "processo zigomatico",
        dica: "19",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "occipital",
        dica: "VI - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "lacrimal",
        dica: "VIII - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "zigomatico",
        dica: "IX - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "nasal",
        dica: "X - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "processo rostral",
        dica: "X'",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "maxilar",
        dica: "XI - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "forame infraorbital",
        dica: "59",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "incisivo",
        dica: "XII - Osso",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "canal interincisivo",
        dica: "66'",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "meato temporal",
        dica: "h' - Aberturas para o ...",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "crista nucal",
        dica: "m",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "crista temporal",
        dica: "m'",
        imagem: "./imagens/figura10.jpeg",
    },
    {
        termo: "crista sagital",
        dica: "p - ... Externa",
        imagem: "./imagens/figura10.jpeg",
    },
    //Figura 11
    {
        termo: "frontal",
        dica: "I - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo zigomatico",
        dica: "1",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "etmoidal",
        dica: "2 - Forame",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "temporal",
        dica: "IV - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo mastoide",
        dica: "7",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo estiloide",
        dica: "10'",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo muscular",
        dica: "12",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "meato acustico",
        dica: "16 - Externo",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "bula timpanica",
        dica: "17",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo zigomatico",
        dica: "19 - Temporal",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "fossa mandibular",
        dica: "20",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "tuberculo articular",
        dica: "21",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo retroarticular",
        dica: "22",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "occipital",
        dica: "VI - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "condilo occipital",
        dica: "33",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "canal hipoglosso",
        dica: "35",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo paracondilar",
        dica: "36",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "esfenoide",
        dica: "VII - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "asa esfenoide",
        dica: "43",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "lacero",
        dica: "45' - Forame",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "crista pterigoide",
        dica: "46",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "canal alar",
        dica: "47",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "alar",
        dica: "48 - Forame rostral",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "alar",
        dica: "48' - Forame menor",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "alar",
        dica: "49 - Forame caudal",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "corpo esfenoide",
        dica: "50",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "lacrimal",
        dica: "VIII - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "fossa lacrimal",
        dica: "54",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "zigomatico",
        dica: "IX - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo temporal",
        dica: "55",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "nasal",
        dica: "X - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo rostral",
        dica: "X'",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "incisura nasoincisiva",
        dica: "X''",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "maxilar",
        dica: "XI - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo alveolar",
        dica: "65",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "incisivo",
        dica: "XII - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "processo palatino",
        dica: "68 - ... do osso Incisivo",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "palatino",
        dica: "XIII - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "pterigoide",
        dica: "XIV - Osso",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "sulco palatino",
        dica: "C'",
        imagem: "./imagens/figura11.jpeg",
    },
    {
        termo: "margem interalveolar",
        dica: "N",
        imagem: "./imagens/figura11.jpeg",
    },
    //Figura 12
    {
        termo: "frontal",
        dica: "I - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "supraorbital",
        dica: "1' - Forame",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "temporal",
        dica: "IV - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "bula timpanica",
        dica: "17",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "fossa mandibular",
        dica: "20",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "tuberculo articular",
        dica: "21",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "retroarticular",
        dica: "22 - Processo",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "occipital",
        dica: "VI - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "protuberancia occipital",
        dica: "31 - Externa",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "condilo occipital",
        dica: "33",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "canal hipoglosso",
        dica: "35",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "paracondilar",
        dica: "36 - Processo",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "magno",
        dica: "38 - Forame",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "tuberculo muscular",
        dica: "40",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "esfenoide",
        dica: "VII - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "corpo esfenoide",
        dica: "41",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "asa esfenoide",
        dica: "43",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "lacero",
        dica: "45' - Forame",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "canal alar",
        dica: "47",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "alar",
        dica: "49 - Forame caudal",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "corpo esfenoide",
        dica: "50",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "asa esfenoide",
        dica: "51",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "lacrimal",
        dica: "VIII - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "zigomatico",
        dica: "IX - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "temporal",
        dica: "55 - Processo",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "maxilar",
        dica: "XI - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "crista facial",
        dica: "57'",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "maxilar",
        dica: "58 - Forame",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "palatino",
        dica: "64 - Processo (Maxilar)",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "incisivo",
        dica: "XII - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "canal interincisivo",
        dica: "66'",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "palatino",
        dica: "68 - Processo (Incisivo)",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "palatino",
        dica: "XIII - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "lamina perpendicular",
        dica: "70",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "lamina horizontal",
        dica: "71",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "pterigoide",
        dica: "XIV - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "hamulo",
        dica: "72",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "vomer",
        dica: "XV - Osso",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "palatino",
        dica: "C - Forame maior",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "sulco palatino",
        dica: "C'",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "esfenopalatino",
        dica: "E - Forame",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "coana",
        dica: "F",
        imagem: "./imagens/figura12.jpeg",
    },
    {
        termo: "orbita",
        dica: "G",
        imagem: "./imagens/figura12.jpeg",
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

    imagem.addEventListener("click", startImageView);
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

function startImageView() {
    const container = document.querySelector(
        ".zoom-container"
    );
    container.classList.add("active");

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            container.classList.remove("active");
        }
    });
}

start();
