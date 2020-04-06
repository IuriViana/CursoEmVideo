function verificar(){
var data = new Date();
var dat = data.getFullYear();
var caixa= document.getElementById('txto');
var res = document.getElementById('res');
var valor = Number(caixa.value);
var texto = document.getElementsByClassName('sla')[0];
texto.style.display = "none";


if(valor == 0 || valor > dat || valor<0){
res.innerHTML = 'Valor inválido tente novamente!'
}
else{
    
    var Sex = document.getElementsByName('sex');
    var idade = dat - valor;
    var gen = '';
    var img = document.createElement('img');
    var per = '';
    img.setAttribute('id', 'foto');
    img.setAttribute('Id', 'foto');
    img.style.borderRadius = '50%';
    img.style.width = '200px';
    img.style.height = '200px';
    img.style.marginTop = '50px';


    if(Sex[0].checked){
        gen = 'Homem';

        if(idade> 0 && idade<10){
            per = "criança";
            img.setAttribute('src', 'img/criança2.jpg');
        }
        else if(idade<21){
            per = "jovem";
            img.setAttribute('src', 'img/jovem.jpg')
        
        }
        else if(idade>21 && idade<60){
            per = "adulto";
            img.setAttribute('src', 'img/adulto.jpg')

        }
        else if(idade<=120){
            per = "idoso";
            img.setAttribute('src', 'img/idoso.jpg')
        }
        else if(idade>120){
            per = "fantasma";
            img.setAttribute('src', 'img/fantasma.jpg')


        }


    }
    else if(Sex[1].checked){
        gen = 'Mulher';

        if(idade> 0 && idade<10){
            per = "criança";
            img.setAttribute('src', 'img/criança.jpg');
        }
        else if(idade<21){
            per = "jovem";
            img.setAttribute('src', 'img/jovem2.jpg')
        
        }
        else if(idade>21 && idade<60){
            per = "adulta";
            img.setAttribute('src', 'img/adulto2.jpg')

        }
        else if(idade<=150){
            per = "idosa";
            img.setAttribute('src', 'img/idoso2.jpg')
        }
        else if(idade>150){
            per = "fantasma";
            img.setAttribute('src', 'img/fantasma.jpg')


        }
    }
    res.innerHTML = `Detectamos ${gen} ${per} com ${idade} anos de idade`;
    res.appendChild(img);
}


}




var evento =document.getElementsByName('txto')[0];
evento.addEventListener('keypress', enter)

function enter(e){
    if(e.which == 13){
       verificar();
    }
 }