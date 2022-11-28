const images = ['P1','P2','P4'];
const imgElem = document.querySelector('img');

function randomValueFromArray(array){
    let randomNo = Math.floor(Math.random() * array.length);
    return array[randomNo];
}

setInterval(function(){
    let randomChoice = randomValueFromArray(images);
    imgElem.src = 'images/' + randomChoice + '.jpg';
}, 2000)
