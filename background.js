function mainJuris() {
/*
  document.querySelector('.btn.btn--blue').click();
let getText = [...document.querySelector(".CopyContentModal-body").querySelectorAll('p')].reduce((text, p)=> text += p.textContent, '');
alert(getText);
*/

const downloadTXT = ()=> {

  document.querySelector('.btn.btn--blue').click();
  const text = [...document.querySelector(".CopyContentModal-body").querySelectorAll('p')]
    .reduce((text, p)=> text += p.textContent, '');
  
  const elem = document.createElement('textarea');
  elem.value = text;
  document.body.appendChild(elem); //adiciona o elemento que tem o text no body do html
  elem.select(); //seleciona o teste daquele trecho do html no body
  document.execCommand('copy'); //copia o text
  document.body.removeChild(elem);


  const blob = new Blob([text], {type: 'text/plain'});
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  
  a.download = 'Jurisprudência.txt';
  a.click();
  window.URL.revokeObjectURL(url);
};

downloadTXT();
document.querySelector('.CopyContentModal-closeButton.btn.btn--md.btn--flat').click();
alert("Jurisprudência copiada e baixada!");


}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: mainJuris
  });
});
