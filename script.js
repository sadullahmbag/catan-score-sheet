document.getElementById("add-player").addEventListener("click", () => {
  const container = document.getElementById("player-container");

  const playerRow = document.createElement("div");
  playerRow.className = "player-row";

  playerRow.innerHTML = `
    <input type="text" placeholder="Player Name" required />
    <div>
      <label>Settlements:</label>
      <input type="number" min="0" value="0" class="settlements" />
    </div>
    <div>
      <label>Cities:</label>
      <input type="number" min="0" value="0" class="cities" />
    </div>
    <div>
      <label>Roads:</label>
      <input type="number" min="0" value="0" class="roads" />
    </div>
    <div>
      <label>Longest Road:</label>
      <input type="checkbox" class="longest-road" />
    </div>
    <div>
      <label>Largest Army:</label>
      <input type="checkbox" class="largest-army" />
    </div>
    <div>
      <label>Development Cards:</label>
      <input type="number" min="0" value="0" class="dev-cards" />
    </div>
    <div>
      <label>Total Points:</label>
      <span class="total-points">0</span>
    </div>
  `;

  container.appendChild(playerRow);

  // Add event listener for updating points
  playerRow.addEventListener("input", () => calculatePoints(playerRow));
});

function calculatePoints(playerRow) {
  const settlements = parseInt(playerRow.querySelector(".settlements").value) || 0;
  const cities = parseInt(playerRow.querySelector(".cities").value) || 0;
  const roads = parseInt(playerRow.querySelector(".roads").value) || 0;
  const longestRoad = playerRow.querySelector(".longest-road").checked ? 2 : 0;
  const largestArmy = playerRow.querySelector(".largest-army").checked ? 2 : 0;
  const devCards = parseInt(playerRow.querySelector(".dev-cards").value) || 0;

  const totalPoints = settlements * 1 + cities * 2 + longestRoad + largestArmy + devCards;
  playerRow.querySelector(".total-points").textContent = totalPoints;
}
