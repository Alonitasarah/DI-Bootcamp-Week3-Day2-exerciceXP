let elementH1 = document.querySelector('h1');
console.log(elementH1);

let elementParagraph = document.getElementsByTagName('p');
let lastPara = elementParagraph[3];
lastPara.remove();

let clickH2 = document.querySelector('h2');
clickH2.addEventListener('click', function onClick(event){clickH2.style.background = 'red'})

let clickH3 = document.querySelector('h3');
clickH3.addEventListener('click', function onClick(event){clickH3.style.display = 'none'})


button.addEventListener("click", infos);
function infos(){
        
    let elementP = document.querySelectorAll('p');
        for(let p of elementP){
            p.style.fontWeight = "bold";
        }
}


elementH1.onmouseover = function(){
    this.style.fontSize = "50px";
}

let elementParagraph2 = document.getElementById('p2');
    elementParagraph2.addEventListener('mouseover',() => {
        elementParagraph.style.animation = "fadeOut 1s";
    })


