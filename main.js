const phrasesCookies = [
    "A persistência é o caminho do êxito.",
    "O sucesso na vida depende unicamente de insistência e ação.",
    "Não existe um caminho para a felicidade. A felicidade é o caminho.",
    "A vida trará coisas boas se tiver paciência.",
    "O saber a gente aprende com os mestres e os livros. A sabedoria se aprende é com a vida e com os humildes.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
];

const clickCloseCookie = document.querySelector("#close-cookie");
const clickOpenCookie = document.querySelector("#open-cookie");

const hideCloseCookieScreen = document.querySelector(".close-cookie");
const hideOpenCookieScreen = document.querySelector(".open-cookie");
const clickOpenOtherCookie = document.querySelector(".open-other-cookie");

let phraseLucky = document.querySelector("#lucky-phrase")

const randomNumber = Math.round(Math.random() * 5);
console.log(randomNumber)
let teste = []
let tentativas = 0;

for (phrase of phrasesCookies) {
    teste.push(phrase);

    phraseLucky.textContent = teste[randomNumber]

}

console.log(phraseLucky)

clickCloseCookie.addEventListener("click", handleclickCloseCookie);
// clickOpenOtherCookie.addEventListener("click", handleclickOpenCookie);

function handleclickCloseCookie() {
    toggleScreen()
}

// function handleclickOpenCookie() {
//     toggleScreen()
// }


function toggleScreen() {
    hideCloseCookieScreen.classList.toggle("hide")
    hideOpenCookieScreen.classList.toggle("hide")
}