'use strict';

const starOne = document.querySelector('#new-com-one-star');
const starTwo = document.querySelector('#new-com-two-star');
const starThree = document.querySelector('#new-com-three-star');
const starFour = document.querySelector('#new-com-four-star');
const starFive = document.querySelector('#new-com-five-star');

const starOneClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star_rate';
    starThree.innerHTML = 'star_rate';
    starFour.innerHTML = 'star_rate';
    starFive.innerHTML = 'star_rate';
}

const starTwoClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star_rate';
    starFour.innerHTML = 'star_rate';
    starFive.innerHTML = 'star_rate';
}

const starThreeClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star';
    starFour.innerHTML = 'star_rate';
    starFive.innerHTML = 'star_rate';
}

const starFourClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star';
    starFour.innerHTML = 'star';
    starFive.innerHTML = 'star_rate';
}

const starFiveClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star';
    starFour.innerHTML = 'star';
    starFive.innerHTML = 'star';
}

    starOne.addEventListener('click', starOneClick);
    starTwo.addEventListener('click', starTwoClick);
    starThree.addEventListener('click', starThreeClick);
    starFour.addEventListener('click', starFourClick);
    starFive.addEventListener('click', starFiveClick);

