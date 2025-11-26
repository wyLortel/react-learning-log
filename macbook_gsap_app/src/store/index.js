import { create } from "zustand";

const useMacbookStore = create((set) => ({
  // 상태 정의
  color: "#2e2c2e",
  scale: 0.08,

  // 상태 업데이트 함수 정의
  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }),

  // 상태 초기화 함수
  reset: () => set({ color: "#2e2c3e", scale: 0.08 }),
}));

export default useMacbookStore;
