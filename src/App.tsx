import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { AppShell } from './components/AppShell'
import { Dados } from './screens/Dados'
import { Dedicatoria } from './screens/Dedicatoria'
import { Disciplina } from './screens/Disciplina'
import { Notas } from './screens/Notas'
import { Painel } from './screens/Painel'
import { Plano } from './screens/Plano'
import { Pratica } from './screens/Pratica'
import { Recompensas } from './screens/Recompensas'
import { Simulado } from './screens/Simulado'
import { Sobre } from './screens/Sobre'
import { Topico } from './screens/Topico'
import { useApp } from './state/store'

/**
 * Remonta a tela a cada mudanca de caminho: sem isso, ir de /topico/LP1/praticar para
 * /topico/LP2/praticar reaproveitaria o estado da sessao anterior (indice, acertos).
 */
function Telas() {
  const { pathname, search } = useLocation()
  const dedicatoriaVista = useApp((s) => s.settings.dedicatoriaVista)
  // chaves obrigatorias: no Chrome recente window.scrollTo() devolve uma Promise, e uma arrow sem
  // chaves a entregaria ao React como "funcao de limpeza" — quebra na desmontagem da tela
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  // primeira abertura: a dedicatoria vem antes de tudo (depois, so pelo menu)
  if (!dedicatoriaVista && pathname !== '/dedicatoria') return <Navigate to="/dedicatoria" replace />

  return (
    <AppShell>
      <Routes key={pathname + search}>
        <Route path="/" element={<Painel />} />
        <Route path="/plano" element={<Plano />} />
        <Route path="/disciplina/:id" element={<Disciplina />} />
        <Route path="/topico/:id" element={<Topico />} />
        <Route path="/topico/:id/praticar" element={<Pratica />} />
        <Route path="/simulado" element={<Simulado />} />
        <Route path="/simulado/:id" element={<Simulado />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/pendencias" element={<Navigate to="/notas" replace />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/dedicatoria" element={<Dedicatoria />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}

export default function App() {
  const ready = useApp((s) => s.ready)
  const init = useApp((s) => s.init)

  useEffect(() => {
    void init()
  }, [init])

  if (!ready) return <main className="screen screen-center">Carregando…</main>

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Telas />
    </BrowserRouter>
  )
}
