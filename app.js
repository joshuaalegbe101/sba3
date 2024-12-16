const player = document.getElementById("player");
const gameContainer = document.getElementById("gameContainer")
const enemy = document.getElementById("alien");
const textDisplay = document.querySelector("#textBox p");

let playerPosition = { x:5, y:5};
let enemyVelocity = {x:3, y:3};
let enemyPosition = {x :15, y:100};
let playerHealth = 3;

const keysPressed = new Set();

document.addEventListener("keydown", (evt) => keysPressed.add(evt.key.toLowerCase()));
document.addEventListener("keyup", (evt) => keysPressed.delete(evt.key.toLowerCase()));

function movePlayer() {
    const containerStyle = getComputedStyle(gameContainer);
    const borderWidth = parseInt(containerStyle.borderWidth) || 0;
    const containerWidth = gameContainer.offsetWidth - borderWidth *2;
    const containerHeight = gameContainer.offsetHeight - borderWidth *2;

    const speed = 4;

    if(keysPressed.has("w")) playerPosition.y -= speed;
    if(keysPressed.has("s")) playerPosition.y += speed;
    if(keysPressed.has("a")) playerPosition.x -= speed;
    if(keysPressed.has("d")) playerPosition.x += speed;

    if (playerPosition.x < 0) playerPosition.x = 0;
    if (playerPosition.y < 0) playerPosition.y = 0;
    if (playerPosition.x + player.offsetWidth > containerWidth) {
        playerPosition.x = containerWidth - player.offsetWidth;
    }
    if (playerPosition.y + player.offsetHeight > containerHeight) {
        playerPosition.y = containerHeight - player.offsetHeight;
    }

    player.style.transform = `translate(${playerPosition.x}px, ${playerPosition.y}px)`;

    collisionCheck();

    requestAnimationFrame(movePlayer);
}

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

function collisionCheck() {
    const playerRect = player.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();

    if(
        playerRect.left < enemyRect.right && playerRect.right > enemyRect.left && playerRect.top < enemyRect.bottom && playerRect.bottom > enemyRect.top) {
            document.querySelector("#textDisplay").style.backgroundColor = "red";
            textDisplay.textContent = "Game Over! You hit the alien.";

            const newElement = document.createElemenet("h2");
            window.prompt("Game Over! Press OK to restart.")
            window.location.reload();
        }
    
}
moveEnemy();
movePlayer();






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

