function diceroller() {
  const nodice = document.getElementById("dice").value;
  const result = document.getElementById("result");
  const images = document.getElementById("images");
  const values = [];
  const diceimages = [];
  for (let i = 0; i < nodice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    diceimages.push(`<img src="./images/${value}.png" class="dice_image">`);
  }
  result.innerText = `dice values: ${values.join(",")}`;
  images.innerHTML = diceimages.join(" ");
}
