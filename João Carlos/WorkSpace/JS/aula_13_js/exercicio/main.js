// Método getElementById

let titulo = document.getElementById('#getelementbyid');
const Clique = () => {
    document.querySelector('#getelementbyid').style.backgroundColor = '#CEFBBA';
};

// Método getElementsByClassName

let items = document.getElementsByClassName('getelementsbyclassname');

const Clique2 = () => {
    document.querySelector('#getelementsbyclassname').style.fontWeight = 'bold';

};

// Método getElementsByTagName

let li = document.getElementsByTagName('li');

const Clique3 = () => {

    for (let i = 0; i < li.length; i++) {
        if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
        else li[i].style.backgroundColor = '#fff';
    }

};

// Método getElementsByName

let nome = document.getElementsByName('#getelementsbyname');

const Clique4 = () => {

    document.querySelector('#getelementsbyname').style.border = "1px solid #000";

};

// Remove elemento do DOM

let item2 = document.getElementById('removeelemento');

const Clique5 = () => {

    item2.remove();

};

// Retornando o elemento

let item = document.getElementById('item');


const Clique6 = () => {

    lista.insertBefore(item2, item.nextSibling);

};


