//chama a função carregar()
function carregar() {
    var atual = new Date(); /*define var para o tempo atual, definindo com 
    new Date(); serve para importar o tempo do computador para o JS;*/
    var msg = window.document.getElementById('msg'); /*var msg para o primeiro
    elemento de texto que ditará as horas;*/
    var msg2 = window.document.getElementById('msg2'); /*var msg2 para o segundo 
    elemento de texto, este ditará o período do dia;*/
    var msg3 = window.document.getElementById('msg3'); /*var msg3 para o terceiro
    elemento de texto, este definirá o dia da semana;*/
    var msg4 = window.document.getElementById('msg4');/*var msg4 para o quarto 
    elemento de texto, este definirá a data;*/
    var imagem = window.document.getElementById('imagem');/*var imagem linkada 
    à unica imagem do elemento, útil para depois substituir por outras dependendo
    do período do dia;*/

    
    //Definindo variáveis para o tempo

    var dat = atual.getDate(); /*var dat recebe atual.getDate();
    ou seja o dia do mês;*/
    var mes = atual.getMonth(); /*var mes recebe atual.getMonth(); 
    ou número equivalente ao mês, depois convertido para o seu nome;*/
    var ano = atual.getFullYear(); /*var ano recebe atual.getFullYear(); 
    ou seja o ano completo, por exemplo 2020;*/
    var h = atual.getHours();/*var h recebe atual.getHours(); 
    ou seja o valor das horas;*/
    var m = atual.getMinutes();/*var m recebe autal.getMinutes();
     ou seja o valor dos minutos;*/
    var s = atual.getSeconds();/*var s recebe atual.getSeconds(); 
    ou seja o valor dos segundos;*/
    var d = atual.getDay();/*var d recebe atual.getDay(); 
    recebe o dia da semana em número depois convertido para string;*/
    var hora = atual.getHours(); +":" + atual.getMinutes() + ":" + atual.getSeconds();
    //var hora recebe a hora completa em horas, minutos e segundos;


    //representando as h/min/s como relógio é necessário 0 quando ainda o valor não é em dezena, para adicionar:


    if (h < 10) { //se h for menor que 10;
        var h = "0" + atual.getHours();
        //variável h passa a valer string "0" concatenada com a hora atual;
    }
    if (m < 10) { //se for m menor que 10;
        var m = "0" + atual.getMinutes();
        //variável m agora recebe string "0" concatenada com a hora atual;
    }
    if (s < 10) {//se s for menos que 10;
        var s = "0" + atual.getSeconds();
        //variável s agora recebe string "0" concatenada com a hora atual;
    }

    msg.innerHTML = `Agora são ${h}:${m}:${s}`; /*vai imprimir um texto no lugar 
    do id "msg", neste caso vai representar o tempo em relógio;*/


    /*parte do código responsável por carregar imagem e fundo diferente para 
    cada período do dia, neste caso vai basear no valor da var hora;*/


    if (hora < 12 && hora > 5) {/*se hora for menor que 12 e maior que 5,
    ou seja estando entre 5 e 12; de 6 a 11 será carregado imagem, fundo 
    e mensagem relacionado ao Dia;*/
        imagem.src = 'img/manha.jpg'
        //elemento imagem agora vai carregar um nova imagem;
        document.body.style.background = '#ECD18B';
        /*elemento body agora vai carregar um novo estilo de fundo, 
        cor baseada no dia;*/
        msg2.innerHTML = `BOM DIA!`
        //vai imprimir no lugar do id msg2 o período do dia, neste caso "bom dia!";
    }
    else if (hora >= 0 && hora <= 5) {
        /*senão se hora for maior ou igual a 0 e menor ou igual a 5, 
        ou seja entre 0 e 5, será carregado imagem,fundo e mensagem relacionado 
        a Madrugada;*/
        imagem.src = 'img/madrugada.jpg'
        document.body.style.background = '#002949';
        msg2.innerHTML = `BOA MADRUGADA!`
    }
    else if (hora < 18 && hora > 12) { /*senão se hora for menor que 18 hrs e 
    maior que 12 hrs, tarde;*/
        imagem.src = 'img/tarde.jpg'
        document.body.style.background = '#CD8338'
        msg2.innerHTML = `BOA TARDE!`

    }
    else if (hora > 17) {
        //senão se hora for maior que 17, noite;
        imagem.src = 'img/noite.jpg'
        document.body.style.background = '#444857';
        msg2.innerHTML = `BOA NOITE!`
    }
    else if (hora == 12) {
        //senão se hora foir igual a 12, meio dia;
        imagem.src = 'img/Meiodia.jpg';
        document.body.style.background = '#F4AF3C';
        msg2.innerHTML = `MEIO DIA!`;
    }

    /*switch, vai ser responsável para converter o dia retornado em forma de número 
    pelo atual.getDay(); tornando uma "string"*/

    switch (d) {
        case 0: //caso retornar 0 imprime no lugar do id "msg3" o dia da semana;
            msg3.innerHTML = 'Hoje é domingo!'; //Domingo;
            break;
        case 1: //caso retornar 1 ...;
            msg3.innerHTML = 'Hoje é segunda!';//Segunda;
            break;/*break; fundamental em estruturas switch, 
            delimita o bloco de comando;*/
        case 2:
            msg3.innerHTML = 'Hoje é terça!';//Terça;
            break;
        case 3:
            msg3.innerHTML = 'Hoje é quarta!';//Quarta;
            break;
        case 4:
            msg3.innerHTML = 'Hoje é quinta!';//Quinta;
            break;
        case 5:
            msg3.innerHTML = 'Hoje é sexta!';//Sexta;
            break;
        case 6:
            msg3.innerHTML = 'Hoje é sábado!';//Sábado;
            break;
    }




    /*Novamente switch, neste caso vai converter atual.getMonth(); que retorna 
    número para uma string que represente o nome do mês*/
    switch (mes) {
        case 0://caso retorne 0, vai imprimir janeiro...;
            msg4.innerHTML = `${dat} de Janeiro de ${ano}`;
            break;
        case 1://fevereiro... Mesma coisa do anterior;
            msg4.innerHTML = `Dia ${dat} de Fevereiro de ${ano}`;
            break;
        case 2:
            msg4.innerHTML = `Dia ${dat} de Março de ${ano}`;
            break;
        case 3:
            msg4.innerHTML = `Dia ${dat} de Abril de ${ano}`;
            break;
        case 4:
            msg4.innerHTML = `Dia ${dat} de Maio de ${ano}`;
            break;
        case 5:
            msg4.innerHTML = `Dia ${dat} de Junho de ${ano}`;
            break;
        case 6:
            msg4.innerHTML = `Dia ${dat} de Julho de ${ano}`;
            break;
        case 7:
            msg4.innerHTML = `Dia ${dat} de Agosto de ${ano}`;
            break;
        case 8:
            msg4.innerHTML = `Dia ${dat} de Setembro de ${ano}`;
            break;
        case 9:
            msg4.innerHTML = `Dia ${dat} de Outubro de ${ano}`;
            break;
        case 10:
            msg4.innerHTML = `Dia ${dat} de Novembro de ${ano}`;
            break;
        case 11:
            msg4.innerHTML = `Dia ${dat} de Dezembro de ${ano}`;
            break;
    }
}

window.setInterval("carregar()", 1000);/*Parte do código fundamental, ela que 
garante que o "relógio" funcione em tempo real; Sempre que a função é finalizada
este comando vai recarregá-la posterior à um intervalo de 1000 milisegundos, que
equivale a 1 segundo; Ou seja fica sempre atualizando*/





