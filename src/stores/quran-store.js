import { create } from 'zustand'

export const useQuranStore = create((set) => ({
  surahId: 1,
  ayahId: 1,
  updateSurahId: (newId) => set({ surahId: newId }),
  updateAyahId: (newId) => set({ ayahId: newId })
}))