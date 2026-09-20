import { beforeEach, describe, expect, it } from 'vitest'
import {
  CONVERSATION_STORAGE_KEY,
  CONVERSATION_TTL_MS,
  restoreConversation
} from '../../src/components/Tarot/hooks/useConversation'

describe('tarot conversation persistence', () => {
  let storage

  beforeEach(() => {
    const values = new Map()
    storage = {
      getItem: key => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
      removeItem: key => values.delete(key)
    }
  })

  it('restores a conversation saved within the last 24 hours', () => {
    const now = Date.now()
    const turns = [{ id: 'recent', timestamp: new Date(now - 1000).toISOString() }]
    storage.setItem(CONVERSATION_STORAGE_KEY, JSON.stringify({ turns, updatedAt: now - 1000 }))

    expect(restoreConversation(now, storage)).toEqual(turns)
  })

  it('removes a conversation once it is 24 hours old', () => {
    const now = Date.now()
    const updatedAt = now - CONVERSATION_TTL_MS
    storage.setItem(CONVERSATION_STORAGE_KEY, JSON.stringify({
      turns: [{ id: 'expired', timestamp: new Date(updatedAt).toISOString() }],
      updatedAt
    }))

    expect(restoreConversation(now, storage)).toEqual([])
    expect(storage.getItem(CONVERSATION_STORAGE_KEY)).toBeNull()
  })

  it('migrates legacy array storage using the latest turn timestamp', () => {
    const now = Date.now()
    const turns = [{ id: 'legacy', timestamp: new Date(now - 2000).toISOString() }]
    storage.setItem(CONVERSATION_STORAGE_KEY, JSON.stringify(turns))

    expect(restoreConversation(now, storage)).toEqual(turns)
  })
})
