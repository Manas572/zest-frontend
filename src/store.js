import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      login: (user) =>
        set({
          user,
          isLoggedIn: true,
        }),

      logout: () =>
        set({
          user: null,
          isLoggedIn: false,
        }),
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);

export default useAuthStore;