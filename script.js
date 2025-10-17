//your JS code here. If required.
// Get DOM elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Function that returns a promise resolving after given delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to handle button click
btn.addEventListener("click", async () => {
  const message = textInput.value;
  const delayTime = Number(delayInput.value);

  // Clear previous output
  output.innerText = "";

  // Wait for the specified delay using async/await
  await delay(delayTime);

  // Display the message after the delay
  output.innerText = message;
});

