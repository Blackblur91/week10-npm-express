console.log('loaded')
const rootElement = document.querySelector("#root")

const fetchUrl = async (url) => {
  const data = await fetch(url)
  console.log(data)
  if (data.status !== 200) {
    return "bad request"
  } else {
    return data.json()
  }
}

async function init() {
  const beerData = await fetchUrl("/beers/5")
  if (beerData === "bad request") {
    rootElement.innerHTML = "BAD USER"
  } else {
    rootElement.innerHTML = JSON.stringify(beerData)
  }
}

init()