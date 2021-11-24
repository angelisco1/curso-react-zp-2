import { useState } from 'react';

const Carousel = (props) => {
  const [pos, setPos] = useState(0)

  const irAtras = () => {
    if (pos > 0) {
      setPos(pos - 1)
    } else {
      setPos(props.children.length - 1)
    }
  }

  const irAlante = () => {
    if (pos < props.children.length - 1) {
      setPos(pos + 1)
    } else {
      setPos(0)
    }
  }

  return (
    <div>
      <button onClick={irAtras}>{'<'}</button>
      <div>
        {props.children[pos]}
      </div>
      <button onClick={irAlante}>&gt;</button>
    </div>
  )
}

export default Carousel