import { useContext } from 'react'
import { langCtx } from './TemasAvanzados'
import { translate } from '../../utils/traducciones'

const CmpConTraducciones = () => {
  const lang = useContext(langCtx)
  console.log(lang)

  return (
    <div>
      {/* Con useContext */}
      <p>{translate('hola_mundo', lang)}</p>

      {/* Sin useContext, pero con Consumer */}
      <langCtx.Consumer>
        {(lang) => {
          return <p>{translate('hola_mundo', lang)}</p>
        }}
      </langCtx.Consumer>

    </div>
  )
}

export default CmpConTraducciones