boxes.forEach((box) => {
  box.addEventListener("click", handleClick);
  box.addEventListener("touchstart", handleClick);
});

function handleClick(e) {
  let box = e.target;

  if (box.innerText !== "") return;

  box.innerText = turnX ? "X" : "O";
  turnX = !turnX;

  checkWinner();
}