const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  curValue++;
  updateMessages();
});

btnDecrement.addEventListener('click', () => {
  if (curValue > 0) {
    curValue--;
    updateMessages();
  }
});

btnReset.addEventListener('click', () => {
  curValue = 0;
  updateMessages();
});

function updateMessages() {
  mainTitle.textContent = curValue;
  
  if (curValue >= 10 && curValue < 20) {
    displayFreeShippingMessage();
    removeOutOfStockMessage();
    btnIncrement.style.backgroundColor = '';
  } else if (curValue >= 20) {
    displayOutOfStockMessage();
    removeFreeShippingMessage();
    btnIncrement.style.backgroundColor = 'red';
  } else {
    removeFreeShippingMessage();
    removeOutOfStockMessage();
    btnIncrement.style.backgroundColor = '';
  }
}

function displayFreeShippingMessage() {
  const freeShippingMessage = document.querySelector('.free-shipping');
  if (!freeShippingMessage) {
    const message = document.createElement('span');
    message.textContent = ' You have free shipping!';
    message.classList.add('free-shipping');
    mainTitle.insertAdjacentElement('afterend', message);
  }
}

function removeFreeShippingMessage() {
  const freeShippingMessage = document.querySelector('.free-shipping');
  if (freeShippingMessage) {
    freeShippingMessage.remove();
  }
}

function displayOutOfStockMessage() {
  const outOfStockMessage = document.querySelector('.out-of-stock');
  if (!outOfStockMessage) {
    const message = document.createElement('span');
    message.textContent = ' Out of stock!';
    message.classList.add('out-of-stock');
    mainTitle.insertAdjacentElement('afterend', message);
  }
}

function removeOutOfStockMessage() {
  const outOfStockMessage = document.querySelector('.out-of-stock');
  if (outOfStockMessage) {
    outOfStockMessage.remove();
  }
}
