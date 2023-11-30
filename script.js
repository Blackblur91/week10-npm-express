const rootElement = document.querySelector("#root")

const fetchUrl = async (url) => {
  const response = await fetch(url)
  return response.json()
}

const beerComponent = ({id, name, abv}) => `
  <div>
    <h2>${id}</h2>
    <h3>${name}</h3>
    <h4>${abv}</h4>
  </div>
`

const errorComponent = ({error, message}) => `
  <div>
    <h2>${error}</h2>
    <h3>${message}</h3>
  </div>
`

const inputComponent = () => `
  <div>
    <input type="text" name="beer-id">
    <button>fetch!</button>
  </div>
`

const makeDomFromData = (element, data) => {
  element.innerHTML = inputComponent()

  const buttonElement = document.querySelector("button")
  buttonElement.addEventListener("click", async () =>{
    const beerId = document.querySelector("input").value
    
    const newBeerData = await fetchUrl(`/beers/${beerId}`)
    
    makeDomFromData(rootElement, newBeerData)
  })

  if (data.id) element.insertAdjacentHTML("beforeend", beerComponent(data))
  else if (data.length) data.forEach(beer => element.insertAdjacentHTML("beforeend", beerComponent(beer))) 
  else element.insertAdjacentHTML("beforeend", errorComponent(data))
}

async function init() {
  const beerData = await fetchUrl("/beers")

  makeDomFromData(rootElement, beerData)
}

init()