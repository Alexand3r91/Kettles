const body = document.body;
body.style.fontFamily = "Poppins";

const Kettles = document.createElement('div');
Kettles.style.color = "white";
Kettles.style.padding = "100px 0px 150px 0px";
body.appendChild(Kettles);

const marginKettles = document.createElement('div');
marginKettles.style.margin = "0px 10px 0px 100px";
Kettles.appendChild(marginKettles);


const headerKettles = document.createElement('h1');
headerKettles.textContent = "Kettles";
headerKettles.style.fontSize = "150px";
headerKettles.style.margin = "0px";
marginKettles.appendChild(headerKettles);

const textKettles = document.createElement('p');
const textKettlesHTML = `
    The variable temperature kettle has been created for real tea lovers,<br> where precision of temperature is so important. 
`;
textKettles.innerHTML = textKettlesHTML;
marginKettles.appendChild(textKettles);

const photoTwoKettles = document.createElement('img');
marginKettles.appendChild(photoTwoKettles);
photoTwoKettles.style.position = "absolute";
photoTwoKettles.style.top = "156px";
photoTwoKettles.style.left = "1168px";

const photoOneKettles = document.createElement('img');
marginKettles.appendChild(photoOneKettles);
photoOneKettles.style.position = "absolute";
photoOneKettles.style.top = "138px";
photoOneKettles.style.left = "812px";

const shopNowKettles = document.createElement('button');
shopNowKettles.setAttribute('id', 'buttonShopNowKettles');
shopNowKettles.textContent = "Shop Now";
shopNowKettles.style.backgroundColor = "black";
shopNowKettles.style.color = "white";
shopNowKettles.style.fontSize = "16px";
shopNowKettles.style.width = "272px";
shopNowKettles.style.height = "52px";
shopNowKettles.style.marginTop = "40px";
marginKettles.appendChild(shopNowKettles);


const playOneKettles = document.createElement('div');
const playTwoKettles = document.createElement('div');
const playThreeKettles = document.createElement('div');
playTwoKettles.style.backgroundColor = "black";
playTwoKettles.style.width = "35px";
playTwoKettles.style.height = "35px";
playTwoKettles.style.borderRadius = "180px";
playTwoKettles.style.margin = "10px";
playOneKettles.style.border = "solid 1px black";
playOneKettles.style.width = "55px";
playOneKettles.style.height = "55px";
playOneKettles.style.borderRadius = "180px";
playOneKettles.style.position = "relative";
playOneKettles.style.top = "-55px";
playOneKettles.style.left = "325px";
playThreeKettles.style.width = 0;
playThreeKettles.style.height = 0;
playThreeKettles.style.borderTop = "10px solid transparent";
playThreeKettles.style.borderLeft = "15px solid white";
playThreeKettles.style.borderBottom = "10px solid transparent";
playThreeKettles.style.position = "absolute";
playThreeKettles.style.top = "18px";
playThreeKettles.style.left = "22px";
marginKettles.appendChild(playOneKettles);
playOneKettles.appendChild(playTwoKettles);
playTwoKettles.appendChild(playThreeKettles);

const textPlayKettles = document.createElement('div');
textPlayKettles.textContent = "watch Video";
textPlayKettles.style.color = "black";
textPlayKettles.style.position = "absolute";
textPlayKettles.style.top = "500px";
textPlayKettles.style.left = "600px";
textPlayKettles.style.fontSize = "18px";
textPlayKettles.style.fontWeight = "bold";
marginKettles.appendChild(textPlayKettles);


const buttonOneKettles = document.createElement('button');
buttonOneKettles.setAttribute('onclick', 'ButtonOneKettles()');
const buttonTwoKettles = document.createElement('button');
buttonTwoKettles.setAttribute('onclick', 'ButtonTwoKettles()');
const buttonThreeKettles = document.createElement('button');
buttonThreeKettles.setAttribute('onclick', 'ButtonThreeKettles()');
const buttonForeKettles = document.createElement('button');
buttonForeKettles.setAttribute('onclick', 'ButtonForeKettles()');

marginKettles.appendChild(buttonOneKettles);
marginKettles.appendChild(buttonTwoKettles);
marginKettles.appendChild(buttonThreeKettles);
marginKettles.appendChild(buttonForeKettles);

const imgOneKettlesHTML = `<img src="./img/KettleBlueBig.png" width="50px">`;
const imgTwoKettlesHTML = `<img src="./img/kettlesBigRed.png" width="50px">`;
const imgThreeKettlesHTML = `<img src="./img/kettlesBigPink.png" width="50px">`;
const imgForeKettlesHTML = `<img src="./img/kettlesBigBeige.png" width="50px">`;

buttonOneKettles.innerHTML = imgOneKettlesHTML;
buttonTwoKettles.innerHTML = imgTwoKettlesHTML;
buttonThreeKettles.innerHTML = imgThreeKettlesHTML;
buttonForeKettles.innerHTML = imgForeKettlesHTML;

buttonOneKettles.style.border = "solid 3px white";
buttonTwoKettles.style.border = "solid 3px white";
buttonThreeKettles.style.border = "solid 3px white";
buttonForeKettles.style.border = "solid 3px white";

buttonOneKettles.style.borderRadius = "10px";
buttonTwoKettles.style.borderRadius = "10px";
buttonThreeKettles.style.borderRadius = "10px";
buttonForeKettles.style.borderRadius = "10px";

buttonOneKettles.style.padding = "5px 15px 5px 15px";
buttonTwoKettles.style.padding = "5px 15px 5px 15px";
buttonThreeKettles.style.padding = "5px 15px 5px 15px";
buttonForeKettles.style.padding = "5px 15px 5px 15px";

buttonOneKettles.style.margin = "5px";
buttonTwoKettles.style.margin = "5px";
buttonThreeKettles.style.margin = "5px";
buttonForeKettles.style.margin = "5px";

buttonOneKettles.style.cursor = "pointer";
buttonTwoKettles.style.cursor = "pointer";
buttonThreeKettles.style.cursor = "pointer";
buttonForeKettles.style.cursor = "pointer";


// Slider
const ulSliderKettles = document.createElement('ul');
const liOneSliderKettles = document.createElement('li');
const liTwoSliderKettles = document.createElement('li');
const liThreeSliderKettles = document.createElement('li');
const liForeSliderKettles = document.createElement('li');

marginKettles.appendChild(ulSliderKettles);
ulSliderKettles.appendChild(liOneSliderKettles);
ulSliderKettles.appendChild(liTwoSliderKettles);
ulSliderKettles.appendChild(liThreeSliderKettles);
ulSliderKettles.appendChild(liForeSliderKettles);

ulSliderKettles.style.listStyle = "none";
ulSliderKettles.style.position = "absolute";
ulSliderKettles.style.top = "370px";
// ulSliderKettles.style.left = "1360px";
ulSliderKettles.style.right = "70px"

liOneSliderKettles.style.width = "8px";
liOneSliderKettles.style.height = "8px";
liOneSliderKettles.style.border = "solid 2px white";
liOneSliderKettles.style.borderRadius = "180px";
liOneSliderKettles.style.margin = "3px";

liTwoSliderKettles.style.width = "8px";
liTwoSliderKettles.style.height = "8px";
liTwoSliderKettles.style.border = "solid 2px white";
liTwoSliderKettles.style.borderRadius = "180px";
liTwoSliderKettles.style.margin = "3px";

liThreeSliderKettles.style.width = "8px";
liThreeSliderKettles.style.height = "8px";
liThreeSliderKettles.style.border = "solid 2px white";
liThreeSliderKettles.style.borderRadius = "180px";
liThreeSliderKettles.style.margin = "3px";

liForeSliderKettles.style.width = "8px";
liForeSliderKettles.style.height = "8px";
liForeSliderKettles.style.border = "solid 2px white";
liForeSliderKettles.style.borderRadius = "180px";
liForeSliderKettles.style.margin = "3px";

function ButtonOneKettles() {
    Kettles.style.backgroundColor = "#95cfd5";
    photoTwoKettles.setAttribute('src', './img/BLUE_text.png');
    photoOneKettles.setAttribute('src', './img/kettleBlueBig.png');
    buttonOneKettles.style.backgroundColor = "white";
    buttonTwoKettles.style.backgroundColor = "#95cfd5";
    buttonThreeKettles.style.backgroundColor = "#95cfd5";
    buttonForeKettles.style.backgroundColor = "#95cfd5";
    liOneSliderKettles.style.backgroundColor = "white";
    liTwoSliderKettles.style.backgroundColor = "#95cfd5";
    liThreeSliderKettles.style.backgroundColor = "#95cfd5";
    liForeSliderKettles.style.backgroundColor = "#95cfd5";
}

function ButtonTwoKettles() {
    Kettles.style.backgroundColor = "#c42129";
    photoOneKettles.setAttribute('src', './img/kettlesBigRed.png');
    photoTwoKettles.setAttribute('src', './img/RED.png');
    buttonOneKettles.style.backgroundColor = "#c42129";
    buttonTwoKettles.style.backgroundColor = "white";
    buttonThreeKettles.style.backgroundColor = "#c42129";
    buttonForeKettles.style.backgroundColor = "#c42129";
    liOneSliderKettles.style.backgroundColor = "#c42129";
    liTwoSliderKettles.style.backgroundColor = "white";
    liThreeSliderKettles.style.backgroundColor = "#c42129";
    liForeSliderKettles.style.backgroundColor = "#c42129";
}

function ButtonThreeKettles() {
    Kettles.style.backgroundColor = "#e3b9cc";
    photoOneKettles.setAttribute('src', './img/kettlesBigPink.png');
    photoTwoKettles.setAttribute('src', './img/PINK.png');
    buttonOneKettles.style.backgroundColor = "#e3b9cc";
    buttonTwoKettles.style.backgroundColor = "#e3b9cc";
    buttonThreeKettles.style.backgroundColor = "white";
    buttonForeKettles.style.backgroundColor = "#e3b9cc";
    liOneSliderKettles.style.backgroundColor = "#e3b9cc";
    liTwoSliderKettles.style.backgroundColor = "#e3b9cc";
    liThreeSliderKettles.style.backgroundColor = "white";
    liForeSliderKettles.style.backgroundColor = "#e3b9cc";
}

function ButtonForeKettles() {
    Kettles.style.backgroundColor = "#f7dacd";
    photoOneKettles.setAttribute('src', './img/kettlesBigBeige.png');
    photoTwoKettles.setAttribute('src', './img/Beige.png');
    buttonOneKettles.style.backgroundColor = "#f7dacd";
    buttonTwoKettles.style.backgroundColor = "#f7dacd";
    buttonThreeKettles.style.backgroundColor = "#f7dacd";
    buttonForeKettles.style.backgroundColor = "white";
    liOneSliderKettles.style.backgroundColor = "#f7dacd";
    liTwoSliderKettles.style.backgroundColor = "#f7dacd";
    liThreeSliderKettles.style.backgroundColor = "#f7dacd";
    liForeSliderKettles.style.backgroundColor = "white";
}
ButtonOneKettles();
