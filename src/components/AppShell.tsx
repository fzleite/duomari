import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { DISCIPLINAS } from '../content/concurso'
import { useApp } from '../state/store'

/**
 * Casca constante (herdada do DuoMath): barra de titulo fixa e navegacao — barra lateral no
 * computador, gaveta (hamburguer) no celular. A mesma marcacao; quem decide e o CSS.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false)
  const pendenciasAbertas = useApp((s) => s.notas.filter((n) => n.tipo === 'pendencia' && !n.resolvida).length)
  const fechar = () => setAberto(false)
  const cls = ({ isActive }: { isActive: boolean }) => `nav-item ${isActive ? 'nav-item-on' : ''}`

  return (
    <div className="app">
      <header className="titlebar">
        <button
          type="button"
          className="menu-toggle"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto((a) => !a)}
        >
          {aberto ? '✕' : '☰'}
        </button>
        <Link to="/" className="brand-link" onClick={fechar}>
          <img src={`${import.meta.env.BASE_URL}icons/icon-192.png`} alt="" width={30} height={30} />
          <span className="brand-name">DuoMari</span>
        </Link>
        <div className="titlebar-right">
          <NavLink to="/notas" className="titlebar-pend" onClick={fechar}>
            Pendências{pendenciasAbertas > 0 && <span className="badge">{pendenciasAbertas}</span>}
          </NavLink>
        </div>
      </header>

      <div className="app-body">
        <nav className={`side-nav ${aberto ? 'side-nav-open' : ''}`} aria-label="Navegação">
          <NavLink to="/" end className={cls} onClick={fechar}>
            Painel
          </NavLink>
          <NavLink to="/plano" className={cls} onClick={fechar}>
            Plano de estudo
          </NavLink>

          <p className="nav-group">Trilhas</p>
          {DISCIPLINAS.map((d) => (
            <NavLink key={d.id} to={`/disciplina/${d.id}`} className={cls} onClick={fechar}>
              <span className="nav-dot" style={{ background: d.cor }} />
              {d.nomeCurto}
              <span className="nav-peso">{d.questoesNaProva}q × {d.peso}</span>
            </NavLink>
          ))}

          <p className="nav-group">Praticar</p>
          <NavLink to="/simulado" className={cls} onClick={fechar}>
            Simulado da prova
          </NavLink>
          <NavLink to="/notas" className={cls} onClick={fechar}>
            Notas e pendências
            {pendenciasAbertas > 0 && <span className="badge badge-sm">{pendenciasAbertas}</span>}
          </NavLink>

          <p className="nav-group">DuoMari</p>
          <NavLink to="/dados" className={cls} onClick={fechar}>
            Backup e configurações
          </NavLink>
          <NavLink to="/sobre" className={cls} onClick={fechar}>
            Sobre o concurso
          </NavLink>
        </nav>
        {aberto && <button type="button" className="nav-backdrop" aria-hidden onClick={fechar} />}

        <div className="app-main">{children}</div>
      </div>
    </div>
  )
}
