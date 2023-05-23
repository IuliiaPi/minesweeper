document.body.setAttribute('class', 'page');

const container = document.createElement('div');
container.setAttribute('class', 'page__inner container');
document.body.append(container);

// POP UP
// START GAME

const gameStart = document.createElement('div');
gameStart.setAttribute('class', 'pop-up game-start');
container.append(gameStart);

const gameTitle = document.createElement('h1');
gameTitle.setAttribute('class', 'game-start__title');
gameTitle.textContent = ('Minesweeper');
gameStart.append(gameTitle);

const btnStartGame = document.createElement('button');
btnStartGame.setAttribute('class', 'btn game-start__btn');
btnStartGame.textContent = ('Start');
gameStart.append(btnStartGame);

btnStartGame.addEventListener('click', () => {
    gameStart.classList.add('hidden');
});


// GAME 

// header 
// Burger menu

const header = document.createElement('header');
header.setAttribute('class', 'header');
container.append(header);

const headerContainer = document.createElement('div');
headerContainer.setAttribute('class', 'header__container');
header.append(headerContainer);

const title = document.createElement('h1');
title.setAttribute('class', 'title');
title.innerText = `Minesweeper`;
headerContainer.append(title);

const subtitle = document.createElement('h2');
subtitle.setAttribute('class', 'subtitle subtitle_options');
subtitle.innerText = `Options`;
headerContainer.append(subtitle);

// main

const main = document.createElement('main');
main.setAttribute('class', 'main');
container.append(main);

const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container main__container');
main.append(mainContainer);

const score = document.createElement('div');
score.setAttribute('class', 'score');
mainContainer.append(score);

const blockBoard = document.createElement('div');
blockBoard.setAttribute('class', 'block-board');
mainContainer.append(blockBoard);

let blockBoardBtn;

function displayFrame10x10() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            blockBoardBtn = document.createElement('button');
            blockBoardBtn.setAttribute('class', 'block-board__btn block-board__btn_10x10');
            blockBoard.append(blockBoardBtn);
        }
    }
};
displayFrame10x10();

// blockBoardBtn.forEach(item).addEventListener('click', () => {
//     blockBoardBtn.classList.add('block-board__btn_active');
//     blockBoardBtn.innerHTML = 1;
// });

// footer 

const footer = document.createElement('footer');
footer.setAttribute('class', 'footer');
container.append(footer);

const footerContainer = document.createElement('div');
footerContainer.setAttribute('class', 'container footer__container');
footer.append(footerContainer);

const footerContent = document.createElement('div');
footerContent.setAttribute('class', 'footer__content');
footerContainer.append(footerContent);

const myGithub = document.createElement('div');
myGithub.setAttribute('class', 'my-github');
footerContent.append(myGithub);

const myGithubLink = document.createElement('a');
myGithubLink.setAttribute('class', 'link my-github__link');
myGithubLink.setAttribute('href', 'https://github.com/IuliiaPi');
myGithubLink.target = (`_blank`);
myGithub.append(myGithubLink);

const myGithubImg = document.createElement('img');
myGithubImg.setAttribute('class', 'my-github__img');
myGithubImg.setAttribute('src', './assets/svg/github.png');
myGithubImg.setAttribute('alt', 'github IuliiaPi');
myGithubLink.append(myGithubImg);

const copyright = document.createElement('div');
copyright.setAttribute('class', 'copyright');
copyright.innerHTML = `&copy; 2023`;
footerContent.append(copyright);

// POP UP 
// FINISH GAME 

const gameFinish = document.createElement('div');
gameFinish.setAttribute('class', 'pop-up game-finish hidden');
container.append(gameFinish);

const message = document.createElement('h2');
message.setAttribute('class', 'game-finish__message');
message.textContent = (`Hooray! You found all mines in ${timerMinutes} : ${timerSeconds} and N moves!`);
// message.textContent = (`Game over. Try again`);
gameFinish.append(message);

const btnNewGame2 = document.createElement('button');
btnNewGame2.setAttribute('class', 'btn game-finish__btn_new-game');
btnNewGame2.textContent = ('New Game');
gameFinish.append(btnNewGame2);

btnNewGame2.addEventListener('click', () => {
    gameFinish.classList.add('hidden');
    gameStart.classList.add('hidden');
});