let coinCount = 0;
const sound = document.getElementById("coin-sound");
const coinImage = document.getElementById("coin");

// Функция для обработки кликов по монете
function collectCoin() {
  coinCount += 1;
  document.getElementById("coins").innerText = "Nog: " + coinCount;
  sound.play(); // Проигрываем звук
}

// Назначаем обработчик клика
coinImage.addEventListener("click", collectCoin);
