const player = document.getElementById("player");
const gameContainer = document.getElementById("gameContainer")
const enemy = document.getElementById("alien");

let playerPosition = { x:5, y:5};
let enemyVelocity = {x:3, y:3};
let enemyPosition = {x :15, y:100};


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
    const containerStyle = getComputedStyle(gameContainer);
    const borderWidth = parseInt(containerStyle.borderWidth) || 0;
    const containerWidth = gameContainer.offsetWidth - borderWidth *2;
    const containerHeight = gameContainer.offsetHeight - borderWidth *2;

    enemyPosition.x += enemyVelocity.x;
    enemyPosition.y += enemyVelocity.y;

    if (enemyPosition.x + enemy.offsetWidth >= containerWidth) {
        enemyVelocity.x *= -1;
        enemyPosition.x = containerWidth - enemy.offsetWidth; 
    }
    if (enemyPosition.x <= 0) {
        enemyVelocity.x *= -1;
        enemyPosition.x = 0;
    }

    if (enemyPosition.y + enemy.offsetHeight >= containerHeight) {
        enemyVelocity.y *= -1;
        enemyPosition.y = containerHeight - enemy.offsetHeight; 
    }
    if (enemyPosition.y <= 0) {
        enemyVelocity.y *= -1;
        enemyPosition.y = 0; 
    }

    enemy.style.transform = `translate(${enemyPosition.x}px, ${enemyPosition.y}px)`;

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

