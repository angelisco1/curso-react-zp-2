import { useState, useEffect } from 'react'

const ListaCocktails = () => {
  const [filtro, setFiltro] = useState('margarita')
  const [cocktails, setCocktails] = useState([])
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null)

  // useEffect(() => {
  //   console.log('Pasa por aquí')
  //   setFiltro('mojito')
  // }, [])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filtro}`)
      .then(resp => resp.json())
      .then(datos => {
        console.log(datos)
        setCocktails(datos.drinks)
      })

      return () => {
        console.log(filtro)
      }
  }, [filtro])

  const filtrar = (event) => setFiltro(event.target.value)

  const listaCocktails = cocktails.map(c => (
    <li
      key={c.idDrink}
      onClick={() => setCocktailSeleccionado(c)}
    >{c.strDrink}</li>
  ))

  return (
    <div>
      <h2>useEffect y http</h2>

      <input type="text" value={filtro} onChange={filtrar} />

      <ul>
        {listaCocktails}
      </ul>

      <hr />

      {cocktailSeleccionado !== null ? <pre>{JSON.stringify(cocktailSeleccionado, null, 2)}</pre> : <p>Selecciona un cocktail para ver su información</p>}

    </div>
  )
}

export default ListaCocktails
