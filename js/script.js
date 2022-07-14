
//abrindo função que vai conter as colisoes
function colisão(){

    /* Criar uma variavel que sera uma constanste que pegara a classe .mario*/
    const mario = document.querySelector(".mario");
    /* Criar uma variavel que sera uma constanste que pegara a classe .pipe*/
    const pipe = document.querySelector(".pipe");
    

    //abrindo objeto para a colisão do cano
    const pipecolision = {
        height:60+`px`,
        width:60+`px`
    }
    //abrindo objeto para a colisão do mario
    const mariocolision  = {
        height:60+"px",
        width:60+"px"
    }

    //chamando a a altura da variavel pipe -> estilo(css) -> altura e colocando o objeto com a sua altura  
    pipe.style.height=pipecolision.height;
    pipe.style.width=pipecolision.width;

    
    mario.style.height=mariocolision.height;
    mario.style.width=mariocolision.width;


}
//função que vai iniciar o game
function gamestart() {

}
    
    


    const mostrando = document.getElementById("test");


    document.addEventListener("click")


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


    //function que nela costa o gameover tirando toda a altura e largura retornando um gameover 
    function gameover() {
        pipe.style.height=0+"px"
        pipe.style.width=0+"px"
        mario.style.height=0+"px"
        mario.style.width=0+"px"
        return mostrando.innerHTML = `GAMEOVER`
            
        
    }
