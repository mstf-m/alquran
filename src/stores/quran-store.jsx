import { create } from 'zustand'

export const useQuranStore = create((set) => ({
  surahId: 0,
  updateSurahId: (newBears) => set({ bears: newBears }),
}))