// Select all the span elements
const spanElements = document.querySelectorAll('.bubbles span');

// Loop through each span element and change its background color randomly
spanElements.forEach(span => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  span.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
