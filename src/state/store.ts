import { create } from 'zustand'

import {
  DEFAULT_SETTINGS,
  atualizarNota,
  carregarTudo,
  criarNota,
  marcarLeitura,
  registrarRespostas,
  removerNota,
  salvarSettings,
  salvarSimulado,
  type RespostaInput,
} from '../data/repo'
import type { Leitura, Nota, Settings, Simulado, Tentativa, TipoNota } from '../data/types'

interface AppState {
  ready: boolean
  tentativas: Tentativa[]
  notas: Nota[]
  leituras: Leitura[]
  simulados: Simulado[]
  settings: Settings

  init: () => Promise<void>
  responder: (respostas: RespostaInput[]) => Promise<Tentativa[]>
  registrarSimulado: (simulado: Simulado, respostas: RespostaInput[]) => Promise<Tentativa[]>
  alternarLeitura: (topicoId: string, lida: boolean) => Promise<void>
  adicionarNota: (input: { topicoId: string; tipo: TipoNota; texto: string; referencia?: string }) => Promise<Nota>
  editarNota: (nota: Nota, patch: Partial<Pick<Nota, 'texto' | 'referencia' | 'resolvida'>>) => Promise<void>
  apagarNota: (id: string) => Promise<void>
  mudarSettings: (patch: Partial<Settings>) => Promise<void>
}

export const useApp = create<AppState>((set, get) => ({
  ready: false,
  tentativas: [],
  notas: [],
  leituras: [],
  simulados: [],
  settings: DEFAULT_SETTINGS,

  init: async () => {
    set({ ...(await carregarTudo()), ready: true })
  },

  responder: async (respostas) => {
    const novas = await registrarRespostas(respostas)
    set((s) => ({ tentativas: [...s.tentativas, ...novas] }))
    return novas
  },

  registrarSimulado: async (simulado, respostas) => {
    const novas = await registrarRespostas(respostas)
    await salvarSimulado(simulado)
    set((s) => ({ tentativas: [...s.tentativas, ...novas], simulados: [...s.simulados, simulado] }))
    return novas
  },

  alternarLeitura: async (topicoId, lida) => {
    const leitura = await marcarLeitura(topicoId, lida)
    set((s) => ({
      leituras: leitura ? [...s.leituras.filter((l) => l.topicoId !== topicoId), leitura] : s.leituras.filter((l) => l.topicoId !== topicoId),
    }))
  },

  adicionarNota: async (input) => {
    const nota = await criarNota(input)
    set((s) => ({ notas: [...s.notas, nota] }))
    return nota
  },

  editarNota: async (nota, patch) => {
    const nova = await atualizarNota(nota, patch)
    set((s) => ({ notas: s.notas.map((n) => (n.id === nova.id ? nova : n)) }))
  },

  apagarNota: async (id) => {
    await removerNota(id)
    set((s) => ({ notas: s.notas.filter((n) => n.id !== id) }))
  },

  mudarSettings: async (patch) => {
    const settings = { ...get().settings, ...patch }
    await salvarSettings(settings)
    set({ settings })
  },
}))
