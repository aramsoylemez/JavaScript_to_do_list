let entryDOM = document.querySelector('#task');
let buttonDOM = document.querySelector('#button');
let listDOM = document.querySelector('#list');

buttonDOM.addEventListener('click', addItem);

function addItem () {
    let listElement = document.createElement('li');
    listElement.innerText = entryDOM.value;

    if (entryDOM) {
        listDOM.appendChild(listElement);
        localStorage.setItem('todo', listDOM)
    } if (entryDOM == "") {
        alert('Buraya bir şeyler yazmalısınız!!')
    }

entryDOM.value = ""; // value girildikten sonra sifirlansin

    // checked olmasi icin toggle ekleyelim

listElement.addEventListener('click', function() {
    listElement.classList.toggle('checked');
})


    // close butonu yapiyoruz

var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}


// close butonuna tiklaninca kapatacak fonk

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

}