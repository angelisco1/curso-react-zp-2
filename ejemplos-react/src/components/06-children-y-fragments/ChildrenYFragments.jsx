import Carousel from './Carousel'
import Acordeon from './Acordeon'
import Button from './Button'
import Sugus from '../02-propiedades/Sugus'
import { useState } from 'react'

const ChildrenYFragments = () => {
  const [sugus] = useState([
    { id: 1, color: 'blue', sabor: 'piña' },
    { id: 2, color: 'orange', sabor: 'naranja' },
    { id: 3, color: 'yellow', sabor: 'limón' },
    { id: 4, color: 'red', sabor: 'fresa' },
  ])

  const listaSugus = sugus.map((s, pos) => {
    return <Sugus color={s.color} sabor={s.sabor} key={s.id} />
  })

  return (
    <>
      <h2>Propiedad children y React Fragments</h2>

      {/* <Button texto="Un botón" /> */}
      <Button>Un botón</Button>

      <Acordeon titulo="Lorem Ipsum">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, iste? Reiciendis eveniet veritatis voluptas, dolorum ipsa suscipit voluptatibus. Officiis sit aspernatur quibusdam at exercitationem suscipit nesciunt obcaecati veniam accusantium hic?</p>
        <p>Lorem ipsum</p>
      </Acordeon>

      <Acordeon titulo="Lista de sugus">
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          {listaSugus}
        </div>
      </Acordeon>

      <Carousel>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </Carousel>

    </>
  )
}

export default ChildrenYFragments
