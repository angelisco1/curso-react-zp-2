console.log('Inicio')

const getCocktails = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{nombre: 'mojito'}, {nombre: 'margarita'}])
  }, 1500)
})

getCocktails
  .then(datos => {
    console.log(datos)
  })
  .then(() => {
    console.log('Fin')
  })
