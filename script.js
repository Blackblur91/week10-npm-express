console.log('loaded')
const rootElement = document.querySelector("#root")

const fetchUrl = async (url) => {
  const data = await fetch (url)
  return data.json()
}

async function init() {
  const data = await fetchUrl("/kismacska")
  console.log(data)
}

init()