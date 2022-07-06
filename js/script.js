
/* Criar uma variavel que sera uma constanste que pegara a classe .mario*/
const mario = document.querySelector(".mario");

/* Criado uma variavel constante chamada jump que recebera uma função vazia*/
const jump = () => {
    /*classList.add vai addicionar uma classe para constante mario*/
    // https://tableless.com.br/manipulando-o-uso-de-classes-com-classlist-api/
    mario.classList.add("jump");

    /*da tempo para uma função executar  ela recebe (função, tempo)*/
    setTimeout(() => {
        //remove a classe jump da constante mario
        mario.classList.remove("jump")
    }, 500);
}
//adiciona um evento(como , função)
document.addEventListener("keydown", jump);

