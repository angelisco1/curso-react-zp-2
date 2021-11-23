import PropTypes from 'prop-types'
import './Sugus.css';

const Sugus = (props) => {
  console.log(props)

  const styles = {
    envoltorio: {
      backgroundColor: props.color
    }
  }

  return (
    <div className="sugus" style={styles.envoltorio}>
      <p>{props.sabor}</p>
    </div>
  )
}

Sugus.defaultProps = {
  color: 'black',
  sabor: '?????'
}

Sugus.propTypes = {
  sabor: PropTypes.string,
  color: function(props, propName) {
    // console.log({props})
    // console.log({propName})
    switch(props.sabor) {
      case 'limón':
        return props[propName] === 'yellow' ? null : new Error('Tiene que ser amarillo')
      case 'naranja':
        return props[propName] === 'orange' ? null : new Error('Tiene que ser naranja')
      case 'piña':
        return props[propName] === 'blue' ? null : new Error('Tiene que ser azul')
    }
  }
}

export default Sugus
