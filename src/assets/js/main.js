var btnCript = document.querySelector('#cript');
var btnDescript = document.querySelector('#descript');

btnCript.addEventListener('click', () => {
    event.preventDefault();

    var inputText = getText();

    var cript = criptografar(inputText);

    var view = setText(cript);

    outputView(view);
});


btnDescript.addEventListener('click', () => {
    event.preventDefault();

    var inputText = getText();

    var descript = descriptografar(inputText);

    var view = setText(descript);

    outputView(view);
});

// Descriptografar texto
function descriptografar(text){
    var list = [
        {'enter':'e'},
        {'imes':'i'},
        {'ai':'a'},
        {'ober':'o'},
        {'ufat':'u'}
    ];

    var descrip = '';

    list.forEach(function(obj){
        for( var chave in obj)      
        if(chave == 'enter'){descrip = text.replace(/enter/g, obj[chave])}
        else if(chave == 'imes'){descrip = descrip.replace(/imes/g, obj[chave])}
        else if(chave == 'ai'){descrip = descrip.replace(/ai/g, obj[chave])}
        else if(chave == 'ober'){descrip = descrip.replace(/ober/g, obj[chave])}
        else if(chave == 'ufat'){descrip = descrip.replace(/ufat/g, obj[chave])}
    })
    return descrip;
}


//criptografar texto
function criptografar(text){
    var list = [
        {'e':'enter'},
        {'i':'imes'},
        {'a':'ai'},
        {'o':'ober'},
        {'u':'ufat'}
    ];

    var cript = '';

    list.forEach(function(obj){
        for( var chave in obj)      
        if(chave == 'e'){cript = text.replace(/e/g, obj[chave])}
        else if(chave == 'i'){cript = cript.replace(/i/g, obj[chave])}
        else if(chave == 'a'){cript = cript.replace(/a/g, obj[chave])}
        else if(chave == 'o'){cript = cript.replace(/o/g, obj[chave])}
        else if(chave == 'u'){cript = cript.replace(/u/g, obj[chave])}
    })
    return cript;
}



// pega o texto do input
function getText(){
    var text = document.querySelector("#textArea").value
    return text.toLowerCase();
}


//seta o texto ja criptografado para saida
function setText(text){
    var outputText = document.querySelector('#outputText');

    if(text.length > 3){
        outputText.textContent = text
        return true;
    }

    return false;
}


//retorna a view de acordo com a resposta do setText
function outputView(value){
    var notMessage = document.querySelector('#notMessage');
    var isMessage = document.querySelector('#isMessage');

    if(value === true){
        notMessage.classList.add('hidden');
        notMessage.classList.remove('flex')
        isMessage.classList.remove('hidden');
        isMessage.classList.add('flex');
    }else{
        notMessage.classList.remove('hidden');
        notMessage.classList.add('flex')
        isMessage.classList.add('hidden');
        isMessage.classList.remove('flex');
    }
}

