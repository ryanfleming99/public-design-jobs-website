// Function to create a snowflake
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.textContent = "❄"; // You can use other snowflake symbols or emojis
  snowflake.classList.add("snowflake");

  // Set random position and animation duration
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2s to 5s

  // Append the snowflake to the body
  document.body.appendChild(snowflake);

  // Remove the snowflake after animation completes
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// Create a snowflake every 300ms
setInterval(createSnowflake, 300);
