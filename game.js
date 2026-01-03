let score = 0;

const scoreDiv = document.getElementById("score");
const playBtn = document.getElementById("playBtn");
const nftDiv = document.getElementById("nft");

playBtn.addEventListener("click", () => {
  score += Math.floor(Math.random() * 10) + 1;
  scoreDiv.innerText = "Skor: " + score;

  if (score >= 20) {
    mintNFT();
  }
});

function mintNFT() {
  const nftId = Math.floor(Math.random() * 100000);
  const rarities = ["Common", "Rare", "Epic"];
  const rarity = rarities[Math.floor(Math.random() * rarities.length)];

  document.getElementById("nftId").innerText = nftId;
  document.getElementById("nftRarity").innerText = rarity;

  nftDiv.classList.remove("hidden");
  playBtn.disabled = true;
}
