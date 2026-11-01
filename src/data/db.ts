import { openDB, type DBSchema, type IDBPDatabase } from 'idb'

import type { Leitura, Nota, Recompensa, Simulado, Tentativa } from './types'

/**
 * ATENCAO ao adicionar uma object store nova depois que o app ja esta instalado: o bloco
 * `if (!contains(...)) createObjectStore(...)` NAO roda sozinho — e obrigatorio subir DB_VERSION
 * no mesmo commit, senao quem ja tem o app instalado nunca recebe a store nova. Indices tambem
 * precisam ser criados no mesmo bloco da store. (Gotcha herdado do DuoMath.)
 *
 * DB_NAME, o `format` do backup e o BASE do vite.config sao identificadores de DADOS: mudar
 * qualquer um orfana o IndexedDB instalado ou quebra backups antigos.
 */
export const DB_NAME = 'duomari'
// v2: store 'recompensas' (presente do Fernando)
export const DB_VERSION = 2

interface DuomariDB extends DBSchema {
  tentativas: {
    key: string
    value: Tentativa
    indexes: { questaoId: string; topicoId: string }
  }
  notas: {
    key: string
    value: Nota
    indexes: { topicoId: string }
  }
  leituras: { key: string; value: Leitura }
  simulados: { key: string; value: Simulado }
  recompensas: {
    key: string
    value: Recompensa
    indexes: { faseId: string }
  }
  settings: { key: string; value: unknown }
}

let dbPromise: Promise<IDBPDatabase<DuomariDB>> | null = null

export function getDB(): Promise<IDBPDatabase<DuomariDB>> {
  dbPromise ??= openDB<DuomariDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('tentativas')) {
        const store = db.createObjectStore('tentativas', { keyPath: 'id' })
        store.createIndex('questaoId', 'questaoId')
        store.createIndex('topicoId', 'topicoId')
      }
      if (!db.objectStoreNames.contains('notas')) {
        const store = db.createObjectStore('notas', { keyPath: 'id' })
        store.createIndex('topicoId', 'topicoId')
      }
      if (!db.objectStoreNames.contains('leituras')) {
        db.createObjectStore('leituras', { keyPath: 'topicoId' })
      }
      if (!db.objectStoreNames.contains('simulados')) {
        db.createObjectStore('simulados', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('recompensas')) {
        const store = db.createObjectStore('recompensas', { keyPath: 'id' })
        store.createIndex('faseId', 'faseId')
      }
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings')
      }
    },
  })
  return dbPromise
}
