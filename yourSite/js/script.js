"use strict"

let firstTeamButton = document.getElementById('our-team__first-button')
let secondTeamButton = document.getElementById('our-team__second-button')
let thirdTeamButton = document.getElementById('our-team__third-button')

let firstColumn = document.getElementsByClassName('our-team__first-row');
firstColumn = firstColumn[0];
let secondColumn = document.getElementsByClassName('our-team__second-row');
secondColumn = secondColumn[0];
let thirdColumn = document.getElementsByClassName('our-team__third-row');
thirdColumn = thirdColumn[0];
let fourthColumn = document.getElementsByClassName('our-team__fourth-row');
fourthColumn = fourthColumn[0];
let fifthColumn = document.getElementsByClassName('our-team__fifth-row');
fifthColumn = fifthColumn[0];
let sixthColumn = document.getElementsByClassName('our-team__sixth-row');
sixthColumn = sixthColumn[0];
let seventhColumn = document.getElementsByClassName('our-team__seventh-row');
seventhColumn = seventhColumn[0];
let eigthColumn = document.getElementsByClassName('our-team__eight-row');
eigthColumn = eigthColumn[0];
let ninthColumn = document.getElementsByClassName('our-team__ninth-row');
ninthColumn = ninthColumn[0];

fourthColumn.style['display'] = 'none';
fifthColumn.style['display'] = 'none';
sixthColumn.style['display'] = 'none';
seventhColumn.style['display'] = 'none';
eigthColumn.style['display'] = 'none';
ninthColumn.style['display'] = 'none';


firstTeamButton.addEventListener('focus', () => {firstBlock()});
secondTeamButton.addEventListener('focus', () => {secondBlock()});
thirdTeamButton.addEventListener('focus', () => {thirdBlock()});

function firstBlock(){
    firstColumn.style['display'] = 'block';
    secondColumn.style['display'] = 'block';
    thirdColumn.style['display'] = 'block';
    fourthColumn.style['display'] = 'none';
    fifthColumn.style['display'] = 'none';
    sixthColumn.style['display'] = 'none';
    seventhColumn.style['display'] = 'none';
    eigthColumn.style['display'] = 'none';
    ninthColumn.style['display'] = 'none';
    firstTeamButton.style['background-color'] = '#3949ab';
    secondTeamButton.style['background-color'] = '#00897b';
    thirdTeamButton.style['background-color'] = '#00897b';
}

function secondBlock(){
    firstColumn.style['display'] = 'none';
    secondColumn.style['display'] = 'none';
    thirdColumn.style['display'] = 'none';
    fourthColumn.style['display'] = 'block';
    fifthColumn.style['display'] = 'block';
    sixthColumn.style['display'] = 'block';
    seventhColumn.style['display'] = 'none';
    eigthColumn.style['display'] = 'none';
    ninthColumn.style['display'] = 'none';
    firstTeamButton.style['background-color'] = '#00897b';
    secondTeamButton.style['background-color'] = '#3949ab';
    thirdTeamButton.style['background-color'] = '#00897b';
}

function thirdBlock(){
    firstColumn.style['display'] = 'none';
    secondColumn.style['display'] = 'none';
    thirdColumn.style['display'] = 'none';
    fourthColumn.style['display'] = 'none';
    fifthColumn.style['display'] = 'none';
    sixthColumn.style['display'] = 'none';
    seventhColumn.style['display'] = 'block';
    eigthColumn.style['display'] = 'block';
    ninthColumn.style['display'] = 'block';
    firstTeamButton.style['background-color'] = '#00897b';
    secondTeamButton.style['background-color'] = '#00897b';
    thirdTeamButton.style['background-color'] = '#3949ab';
}

let burgerOn = document.getElementById('toggle');
let burgerOff = document.getElementById('exit');
let menuItems = document.querySelectorAll('.menu__items');
menuItems.forEach(item => {item.addEventListener('click', burgerMenuClose)})

burgerOff.addEventListener('click', burgerMenuClose)
burgerOn.addEventListener('click', burgerMenu);

function burgerMenu(){
    let burgerMen = document.getElementById('burger-menu');
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    console.log(main)
    burgerMen.style['display'] = 'block';
    main.style['display'] = 'none';
    header.style['display'] = 'none';
    footer.style['display'] = 'none';
}
function burgerMenuClose(){
    let burgerMen = document.getElementById('burger-menu');
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    burgerMen.style['display'] = 'none'
    main.style['display'] = 'block';
    header.style['display'] = 'block';
    footer.style['display'] = 'block';
}