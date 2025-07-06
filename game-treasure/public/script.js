let player = { x: 50, y: 550, speed: 0, size: 20, gridX: 1, gridY: 11 };
let grid = [];
let gems = [];
let enemies = [];
let lava = [];
let level = 1;
let score = 0;
let currentPuzzles = []; 
let currentPuzzle = {};
let puzzles = [];
const tileSize = 50;
const levelScores = [10, 20, 30, 50]; 

function preload() {
  loadJSON('data/puzzles.json', (data) => {
    puzzles = data.levels;
  });
  loadJSON(`data/map${level}.json`, (data) => {
    grid = data.grid;
    player.gridX = data.start.x;
    player.gridY = data.start.y;
    player.x = player.gridX * tileSize + tileSize / 2;
    player.y = player.gridY * tileSize + tileSize / 2;
    initElements();
    resetPuzzles();
  });
}

function setup() {
  let canvas = createCanvas(12 * tileSize, 13 * tileSize);
  canvas.parent('game-canvas');
  updateUI();
}

function draw() {
  background(50);
  drawMap();
  drawPlayer();
  checkCollisions();
}

function initMap(level) {
  loadJSON(`data/map${level}.json`, (data) => {
    grid = data.grid;
    player.gridX = data.start.x;
    player.gridY = data.start.y;
    player.x = player.gridX * tileSize + tileSize / 2;
    player.y = player.gridY * tileSize + tileSize / 2;
    initElements();
    resetPuzzles();
  });
}

function initElements() {
  gems = [];
  enemies = [];
  lava = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 'G') gems.push({ x: x * tileSize + tileSize / 2, y: y * tileSize + tileSize / 2 });
      if (grid[y][x] === 'E') enemies.push({ x: x * tileSize + tileSize / 2, y: y * tileSize + tileSize / 2 });
      if (grid[y][x] === 'L') lava.push({ x: x * tileSize, y: y * tileSize, w: tileSize, h: tileSize });
    }
  }
}

function drawMap() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      let posX = x * tileSize;
      let posY = y * tileSize;
      if (grid[y][x] === 'W') {
        fill(139, 69, 19); 
        rect(posX, posY, tileSize, tileSize);
      } else if (grid[y][x] === 'P') {
        fill(34, 139, 34); 
        rect(posX, posY, tileSize, tileSize);
      } else if (grid[y][x] === 'L') {
        fill(255, 215, 0); 
        rect(posX, posY, tileSize, tileSize);
      } else if (grid[y][x] === 'O') {
        fill(105, 105, 105); 
        rect(posX, posY, tileSize, tileSize);
      }
    }
  }
  fill(0, 191, 255);
  for (let g of gems) ellipse(g.x, g.y, 15, 15);
  fill(255, 69, 0);
  for (let e of enemies) ellipse(e.x, e.y, 20, 20);
}

function drawPlayer() {
  fill(0, 0, 255);
  ellipse(player.x, player.y, player.size, player.size);
}

function keyPressed() {
  let newGridX = player.gridX;
  let newGridY = player.gridY;

  if (keyCode === LEFT_ARROW && player.gridX > 0) newGridX--;
  if (keyCode === RIGHT_ARROW && player.gridX < 11) newGridX++;
  if (keyCode === UP_ARROW && player.gridY > 0) newGridY--;
  if (keyCode === DOWN_ARROW && player.gridY < 11) newGridY++;

  if (grid[newGridY][newGridX] !== 'W') {
    player.gridX = newGridX;
    player.gridY = newGridY;
    player.x = player.gridX * tileSize + tileSize / 2;
    player.y = player.gridY * tileSize + tileSize / 2;
  }
}

function checkCollisions() {
  for (let g of gems) {
    if (dist(player.x, player.y, g.x, g.y) < 20) {
      gems = gems.filter(item => item !== g);
      if (currentPuzzles.length > 0) {
        currentPuzzle = currentPuzzles.shift(); 
        updateUI();
        showDecodeScreen();
      }
      break;
    }
  }
  if (grid[player.gridY][player.gridX] === 'O' && score >= levelScores[level - 1]) {
    if (level < 4) {
      level++;
      score = 0; 
      currentPuzzles = []; 
      currentPuzzle = {};
      initMap(level);
      updateUI();
    } else {
      alert("Bạn đã hoàn thành trò chơi!");
    }
  }
}

function updateUI() {
  document.getElementById('level').innerText = level;
  document.getElementById('score').innerText = score;
  document.getElementById('current-puzzle').innerText = currentPuzzle.question || "Thu thập gem để nhận câu đố";
}

let decodeScreen = document.createElement('div');
decodeScreen.id = 'decode-screen';
decodeScreen.innerHTML = `
  <h3>Giải mã câu đố</h3>
  <p>Câu hỏi: <span id="puzzle-question"></span></p>
  <p>Chuỗi mã hóa: <span id="puzzle-msg"></span></p>
  <select id="cipher-type">
    <option value="caesar">Caesar Cipher</option>
    <option value="vigenere">Vigenère Cipher</option>
    <option value="rsa">RSA</option>
    <option value="aes">AES</option>
  </select>
  <input type="text" id="decode-input" placeholder="Nhập chuỗi giải mã">
  <button onclick="submitDecode()">Xác nhận</button>
  <button onclick="hideDecodeScreen()">Hủy</button>
`;
document.body.appendChild(decodeScreen);
decodeScreen.style.display = 'none';

function showDecodeScreen() {
  decodeScreen.style.display = 'block';
  let shift = currentPuzzle.cipher_type === 'caesar' ? floor(random(1, 26)) : null;
  if (currentPuzzle.cipher_type === 'caesar') {
    currentPuzzle.msg = caesarEncode(currentPuzzle.treasure, shift);
  } else if (currentPuzzle.cipher_type === 'rsa') {
    currentPuzzle.msg = "Encrypted RSA " + floor(random(1, 100));
  } else if (currentPuzzle.cipher_type === 'aes') {
    currentPuzzle.msg = "Encrypted AES " + floor(random(1, 100));
  }
  document.getElementById('puzzle-question').innerText = currentPuzzle.question;
  document.getElementById('puzzle-msg').innerText = currentPuzzle.msg;
}

function hideDecodeScreen() {
  decodeScreen.style.display = 'none';
}

function submitDecode() {
  let input = document.getElementById('decode-input').value.toLowerCase();
  let cipherType = document.getElementById('cipher-type').value;
  let feedback = document.createElement('div');
  feedback.id = 'feedback';
  document.body.appendChild(feedback);
  feedback.style.display = 'none';

  if (cipherType === currentPuzzle.cipher_type && input === currentPuzzle.treasure.toLowerCase()) {
    feedback.innerText = "Thông điệp đã được giải mã thành công! Tiếp tục.";
    score += 10; 
    hideDecodeScreen(); 
  } else {
    feedback.innerText = "Giải mã thất bại. Hãy chọn thuật toán đúng và nhập chuỗi phù hợp.";
  }
  feedback.style.display = 'block';
  setTimeout(() => feedback.style.display = 'none', 2000);
}

function caesarEncode(text, shift) {
  return text.toLowerCase().split('').map(char => {
    if (char.match(/[a-z]/)) {
      return String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
    }
    return char;
  }).join('');
}

function resetPuzzles() {
  currentPuzzles = [...puzzles[level - 1].puzzles]; 
  currentPuzzle = {}; 
}