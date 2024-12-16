const player = document.getElementById("player");
const gameContainer = document.getElementById("gameContainer")
const enemy = document.getElementById("enemy");

let playerPosition = { x:5, y:5};
let enemyVelocity = {x:3, y:3};
let enemyPosition = {x :150, y:170};


document.addEventListener("keydown", (evt) => {
    switch(evt.key.toLowerCase()) {
        case "w":
                playerPosition.y -= 20;
            break;

        case "s":
                playerPosition.y += 20;
            break;

        case "a":
                playerPosition.x -= 20;
            break;

        case "d":
                playerPosition.x += 20;
            break;
        }
    player.style.transform = `translate(${playerPosition.x}px, ${playerPosition.y}px)`;

});

function moveEnemy() {
    const containerBounds = gameContainer.getBoundingClientRect();
    const enemyBounds = enemy.getBoundingClientRect();

    enemyPosition.x += enemyVelocity.x;
    enemyPosition.y += enemyVelocity.y;

    if(enemyBounds.right >= containerBounds.right || enemyBounds.left <= containerBounds.left) 
        enemyVelocity.x *= -1;

    if(enemyBounds.bottom >= containerBounds.bottom || enemyBounds.top <= containerBounds.top)
        enemyVelocity.y *= -1;

    enemy.style.tranform = `translate(${enemyPosition.x}px, ${enemyPosition.y}px`;

    requestAnimationFrame(moveEnemy)
}

moveEnemy();







/*
selectElementByID()
querySelector()

createElement()

appendChild() || prependChild()

innerHTML, innerText, textContent

addEventListener()

addEventListener()

BOM

BOM 
*/

