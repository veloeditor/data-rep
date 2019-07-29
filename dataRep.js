const cats = [
    {
      name: "Henry",
      bio: "Eat plants, meow, and throw up because I ate plants. Knock over christmas tree, stare at imaginary bug, and meow and walk away. Lick master's hand at first then bite because im moody purrrrrr do not try to mix old food with new one to fool me!"
    },
    {
      name: "Jessica",
      bio: "Spend all night ensuring people don't sleep. Sleep all day. Meowzer for when in doubt, destroy the couch."
    },
    {
      name: "Jake",
      bio: "Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked munch on tasty moths for meow meow mama meow all night murr I hate humans they are so annoying."
    }
  ]

  // Write out a brief list of steps needed to display this data.

  //1. Target where on the DOM we'll place this data. 
//   2. Create html component to create data structure. 
//   3. Then a forEach to iterate through each object and write it to the dom.

const catEntryComponent = document.querySelector(".entryLog")

const makeCatsComponent = (name, bio) => {
    // const HTMLRepresentation =
    // Create your own HTML structure for the cat entries
   return `
        <article class="entry">
        <header>
        <h1 class="concepts">${name}</h1>
        </header>
        <section>${bio}</section>
        <footer>
        </footer>
    </article>
    `
}

// create a forEach loop to go through the list of cats and publish to DOM.

cats.forEach(cat => {
    const htmlRep = makeCatsComponent(cat.name, cat.bio)
    catEntryComponent.innerHTML += htmlRep
  })


console.log(cats)