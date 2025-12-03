import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useGameStore = create(
  persist(
    (set, get) => ({
      tokyoSolved: false,
      kyotoSolved: false,
      osakaSolved: false,
      
      solveEnigma: (city) => set((state) => ({
        [`${city}Solved`]: true
      })),
      
      resetGame: () => set({
        tokyoSolved: false,
        kyotoSolved: false,
        osakaSolved: false
      }),
      
      canAccessKyoto: () => get().tokyoSolved,
      canAccessOsaka: () => {
        const state = get();
        return state.tokyoSolved && state.kyotoSolved;
      },
      canAccessFinal: () => {
        const state = get();
        return state.tokyoSolved && state.kyotoSolved && state.osakaSolved;
      }
    }),
    {
      name: 'voyage-japon-progress',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGameStore;
