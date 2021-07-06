'use strict'

let form = document.getElementById('movies');
let movList = document.getElementById('movlist')
let tableH = document.createElement('table')
movList.appendChild(tableH);
let heading = ['Movie Name', 'Released', 'Category','image'];
function tableHeading(){
for (let c=0; c<heading.length; c++){
    let th = document.createElement('th');
    tableH.appendChild(th);
    th.textContent = heading[c];
}
}
tableHeading();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function Movie(name, category, year){
    this.name = name;
    this.category = category;
    this.year = year;
    
    Movie.arrOfMov.push(this);
    savToLs();
}

Movie.arrOfMov = [];

form.addEventListener('submit', handleSubmit);
function handleSubmit(e){
    e.preventDefault();
    console.log(e);

    let movName = e.target.name.value;
    let categ = e.target.category.value;
    let proyear = getRandomInt(1990, 2021);

    new Movie(movName, categ, proyear);
    render();
}


function savToLs(){
    let savArr = JSON.stringify( Movie.arrOfMov);
    localStorage.setItem('movies',savArr);
}


function getFromLs(){
    let arr2 = localStorage.getItem('movies');
    let convArr = JSON.parse(arr2);

    render();


}

let src = ['img/action.png', 'img/adventure.png', 'img/animation.png','img/comedy.png', 'img/detective.png','img/fantasy.png', 'img/horror.png','img/musical.png','img/pirate.png', 'img/romantic.png','img/sci-fi.png','img/war.png', 'img/western.png' ];
function render(){
    
    for (let i=0; i<Movie.arrOfMov.length; i++){
        let tr = document.createElement('tr')
        tableH.appendChild(tr);
        let td1 = document.createElement('td');
        tr.appendChild(td1);
        td1.textContent = Movie.arrOfMov[i].name

        let td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.textContent = Movie.arrOfMov[i].year;

        let td3 = document.createElement('td');
        tr.appendChild(td3);
        td3.textContent = Movie.arrOfMov[i].category

        let td4 = document.createElement('td')
        tr.appendChild(td4);
        td4.setAttribute(src[i])

    }
}


