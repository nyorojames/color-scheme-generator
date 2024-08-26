document.getElementById("get-color").addEventListener("click", () => {
  const seedColor = document
    .querySelector("input[type='color']")
    .value.slice(1);
  const mode = document.getElementById("color-mode").value;

  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
    .then((response) => response.json())
    .then(({ colors }) => {
      const colorContainer = document.getElementById("color-container");
      colorContainer.innerHTML = colors
        .map(
          (color) => `
                <div class="color-item">
                    <div class="color-box" style="background-color: ${color.hex.value};"></div>
                    <p class="hex-code">${color.hex.value}</p>
                </div>
            `
        )
        .join("");
    });
});
