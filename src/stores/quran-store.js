import { create } from 'zustand'

export const useQuranStore = create((set) => ({
  surahId: 1,
  updateSurahId: (newId) => set({ surahId: newId }),
}))