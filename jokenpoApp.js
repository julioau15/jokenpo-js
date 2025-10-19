const prompt = require('prompt-sync')(); //para conseguir usar o prompt().

class Main{ //declaramos uma classe apenas com class nomeDaClasse{}
    
    escolhaJogador; //declaramos uma variavel apenas escrevendo o nome dela.
    escolhaComputador;
    escolhaComputadorEscrita;
    escolhaJogadorEscrita;
    jogarNovamente;
    resultado;


    iniciarJogo(){ // declaramos uma função (dentro de uma classe) apenas com o nome dela + () + {}
        console.log("-----------------------"); // para saida usamos o console.log e nao precisa do \n para quebrar linha
        console.log("********JOKENPÔ********");
        console.log("-----------------------");
        console.log("-- ESCOLHA SUA OPÇÃO --");
        console.log("|1 - PEDRA            |");
        console.log("|2 - PAPEL            |");
        console.log("|2 - TESOURA          |");
        console.log("-----------------------");

        this.receberDados(); //chamamos uma função com this.nomeDaFunção
    }

    receberDados(){
        this.escolhaJogador = parseInt(prompt("QUAL SUA OPÇÃO? ")); //parseInt para tratar a entrada como numero inteiro
        
        // isNaN foi adicionado porque ao adicionar uma letra no terminal ele retorna este erro que mais pra frente vai dar conflito com o 'definirVencedor'
        if(isNaN(this.escolhaJogador) || this.escolhaJogador > 3 || this.escolhaJogador < 1){
            console.log("ESCOLHA UMA OPÇÃO VALIDA");
            this.receberDados();
        }

        this.randomizarJogo();
    }

    randomizarJogo(){
        this.escolhaComputador = Math.floor(Math.random() * 3) + 1; // para usar o random
        this.definirVencedor();
    }

    definirVencedor(){
        if(this.escolhaJogador == this.escolhaComputador){
            this.resultado = "VOCÊ EMPATOU!";
        }else if(this.escolhaJogador == 1 && this.escolhaComputador == 2 || this.escolhaJogador == 2 && this.escolhaComputador == 3 || this.escolhaJogador == 3 && this.escolhaComputador == 1){
            this.resultado = "VOCÊ PERDEU!";
        }else{
            this.resultado = "VOCÊ GANHOU!";
        }
        this.definirEscolhaEscrita();
    }

    definirEscolhaEscrita(){
        if (this.escolhaJogador == 1){
            this.escolhaJogadorEscrita = "PEDRA";
        }else if(this.escolhaJogador == 2){
            this.escolhaJogadorEscrita = "PAPEL";
        }else{
            this.escolhaJogadorEscrita = "TESOURA";
        }

        if (this.escolhaComputador == 1){
            this.escolhaComputadorEscrita = "PEDRA";
        }else if(this.escolhaComputador == 2){
            this.escolhaComputadorEscrita = "PAPEL";
        }else{
            this.escolhaComputadorEscrita = "TESOURA";
        }

        this.exibirResultados();
    }

    exibirResultados(){
        console.log("-----------------------\n"); // ao adicionar o \n ele pula uma linha
        console.log("VOCÊ ESCOLHEU: " + this.escolhaJogadorEscrita);
        console.log("O COMPUTADOR ESCOLHEU: " + this.escolhaComputadorEscrita);
        console.log(this.resultado);
        console.log(" ");
        console.log("-----------------------\n");
        this.reiniciarJogo();
    }

    reiniciarJogo(){
        while(true){ // utilizei while pois a recursão comum estava acumulando chamadas no 'reiniciarJogo'.
            this.jogarNovamente = prompt("DESEJA JOGAR NOVAMENTE?(S/N) ");

            if(this.jogarNovamente == "s" || this.jogarNovamente == "S"){
                this.iniciarJogo();
                break; // para o fluxo

            }else if(this.jogarNovamente == "n" || this.jogarNovamente == "N"){
                console.log("OBRIGADO POR JOGAR!\n");
                break;

            }else{
                console.log("ESCOLHA UMA OPÇÃO VALIDA!\n");
            }
        }
    
    }
}

const jogo = new Main(); // para chamar uma classe é necessario tranforma-la em um objeto
jogo.iniciarJogo(); // o objeto consegue chamar as funções da classe