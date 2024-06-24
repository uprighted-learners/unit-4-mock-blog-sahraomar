async function render(fi, si) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${fi},${si}`
  );
  const data = await response.json();
  console.log(data);
  // Your code goes here
  const firstImage = document.querySelector("#firstImage");
  const secondImage = document.querySelector("#secondImage");
  firstImage.setAttribute("src", data[0].image);
  secondImage.setAttribute("src", data[1].image);
}

render(20, 35);
