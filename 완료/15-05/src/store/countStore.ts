import { create } from 'zustand';
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type CountStore = {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
};

export const useCountStore = create<CountStore>()(
  subscribeWithSelector(
    persist(
      // 핵심 2: immer 내부에서는 state를 직접 수정할 수 있습니다.
      immer((set) => ({
        count: 0,
        increment: (amount, amount2) => {
          set((state) => {
            state.count += amount + amount2; // immer의 마법: 직접 수정 가능!
          });
        },
        decrement: () =>
          set((state) => {
            state.count -= 1;
          }),
        reset: () => set({ count: 0 }),
      })),
      {
        name: 'count-storage',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
