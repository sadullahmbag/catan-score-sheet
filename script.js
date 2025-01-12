document.getElementById("add-player").addEventListener("click", () => {
  const container = document.getElementById("player-container");

  const playerRow = document.createElement("div");
  playerRow.className = "player-row";

  playerRow.innerHTML = `
    <input type="text" placeholder="Player Name" required />
    <input type="number" placeholder="Wood" min="0" value="0" />
    <input type="number" placeholder="Brick" min="0" value="0" />
    <input type="number" placeholder="Sheep" min="0" value="0" />
    <input type="number" placeholder="Wheat" min="0" value="0" />
    <input type="number" placeholder="Ore" min="0" value="0" />
    <input type="number" placeholder="Victory Points" min="0" value="0" />
  `;

  container.appendChild(playerRow);
});
