
/* Criar uma variavel que sera uma constanste que pegara a classe .mario*/

const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const mostrando = document.getElementById("test");
const marioco = mario.x;

//var direira = pipe.style.left=75+"px";
//var cima = ;
/* Criado uma variavel constante chamada jump que recebera uma função vazia*/


 


const jump = () => {
    /*classList.add vai addicionar uma classe para constante mario*/
    // https://tableless.com.br/manipulando-o-uso-de-classes-com-classlist-api/
    mario.classList.add("jump");
    
  
    setTimeout(() => {

        
        mario.classList.remove("jump")
        
    }, 500);
    

}

const posicao = setInterval(() => {
    if (mario.x < pipe.x + pipe.width &&
        mario.x + mario.width > pipe.x &&
        mario.y < pipe.y + pipe.height &&
        mario.y + mario.height > pipe.y) {
         // collision detected!
         mostrando.innerHTML = `bateu`;
     }else {
         mostrando.innerHTML = `não beteu`;
         mario.style.x = 50+"px";
        
         
     }
},10)


//adiciona um evento(como , função) ouve um novo evento
document.addEventListener("keydown", jump);
