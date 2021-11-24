import { useState } from 'react';
import CmpA from "./CmpA"
import CmpB from "./CmpB"

const ComunicacionEntreCmps = () => {
  const [nombre, setNombre] = useState('Charly')

  return (
    <div>
      <h2>Comunicación entre componentes</h2>

      <CmpA nombre={nombre} />

      <CmpB
        nombre={nombre}
        handleChangeNombre={setNombre}
      />
    </div>
  )
}

export default ComunicacionEntreCmps
