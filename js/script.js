
/* Criar uma variavel que sera uma constanste que pegara a classe .mario*/

const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const mostrando = document.getElementById("test");


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

//função que a cada que recebe uma função e um tempo, ela reinicia a função a cada tanto tempo
const posicao = setInterval(() => {
    // if para verificar se todos os lados do mario  colidirão com o cano 
    if (mario.x < pipe.x + pipe.width &&
        mario.x + mario.width > pipe.x &&
        mario.y < pipe.y + pipe.height &&
        mario.y + mario.height > pipe.y) {
         // collision detected!
         
         gameover();
     }else {
         
         
        
         
     }
},10)


//adiciona um evento(como , função) ouve um novo evento
document.addEventListener("keydown", jump);



function gameover() {
    pipe.style.height=0+"px"
    pipe.style.width=0+"px"
    mario.style.height=0+"px"
    mario.style.width=0+"px"
    return mostrando.innerHTML = `GAMEOVER`
        
    
}
