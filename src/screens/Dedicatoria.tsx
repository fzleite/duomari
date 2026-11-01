import { useNavigate } from 'react-router-dom'

import { DEDICATORIA } from '../content/carinho'
import { useApp } from '../state/store'

/** Mostrada sozinha na primeira abertura; depois, pelo menu ("Dedicatória"). */
export function Dedicatoria() {
  const { settings, mudarSettings } = useApp()
  const navigate = useNavigate()
  const primeiraVez = !settings.dedicatoriaVista
  // o texto aprovado termina com a assinatura; separo so para a diagramacao
  const [corpo] = DEDICATORIA.split(' Com carinho, Fernando.')

  const seguir = async () => {
    if (primeiraVez) await mudarSettings({ dedicatoriaVista: true })
    navigate('/')
  }

  return (
    <main className="screen screen-center dedicatoria">
      <div className="dedicatoria-carta">
        <img src={`${import.meta.env.BASE_URL}icons/icon-192.png`} alt="" width={64} height={64} />
        <p className="dedicatoria-texto">{corpo}</p>
        <p className="dedicatoria-assina">
          Com carinho,
          <br />
          <strong>Fernando</strong>
        </p>
      </div>
      <button type="button" className="btn btn-primary" onClick={seguir}>
        {primeiraVez ? 'Começar a jornada' : 'Voltar'}
      </button>
    </main>
  )
}
