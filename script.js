async function render(fi, si) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)
    let data = await response.json()
    console.log(data)
    // Your code goes here
// fetch data for both characters
let response1 = await fetch(`https://rickandmortyapi.com/api/character/${fi}`);
    let character1 = await response1.json();

    let response2 = await fetch(`https://rickandmortyapi.com/api/character/${si}`);
    let character2 = await response2.json();

    console.log(character1, character2); // Log the data to inspect it

    // Get the image elements from the DOM
    const character1Img = document.getElementById('character1');
    const character2Img = document.getElementById('character2');

    // Set the src attribute of the image elements to the character images
    character1Img.src = character1.image;
    character2Img.src = character2.image;
  } catch (error) {
    console.error('Error fetching character data:', error);
  }



render(20, 35);
