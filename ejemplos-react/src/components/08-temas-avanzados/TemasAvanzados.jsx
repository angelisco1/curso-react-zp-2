import { createContext, useState, useRef, Suspense, lazy } from "react"
import { SpinnerDotted } from 'spinners-react'
import CmpIntermedio from "./CmpIntermedio"

export const langCtx = createContext('fr')
const CmpPerezoso = lazy(() => import('./CmpPerezoso'))

const TemasAvanzados = () => {
  const [lang, setLang] = useState('en')
  const refVideo = useRef(null)
  const selectLang = (event) => {
    setLang(event.target.value)
  }
  const playVideo = () => {
    refVideo.current.play()
  }
  const pauseVideo = () => {
    refVideo.current.pause()
  }

  return (
    <div>
      <h2>Context API</h2>
      <select name="lang" id="lang" value={lang} onChange={selectLang}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <langCtx.Provider value={lang}>
        <CmpIntermedio />
      </langCtx.Provider>

      <h2>Suspense + lazy (Lazy loading)</h2>

      {lang === 'es' && (
          <Suspense fallback={<SpinnerDotted color="blue" />}>
            <CmpPerezoso />
          </Suspense>
        )}

      <h2>Referencias</h2>
      <video src="video1.mov" width="200" ref={refVideo}></video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  )
}

export default TemasAvanzados
