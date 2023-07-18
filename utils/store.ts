import { create } from 'zustand';

const userStore = create((set) => ({
      user: { nickname: '', room: '' },
      users: [],
      messages: [],

      // Метод добавления пользователя
      addUser: (newUser: any) => set((state: any) => ({ user: newUser })),

      // Метод удаления пользователя
      removeUser: () => set((state: any) => ({ user: { nickname: '', room: '' } })),

      addUsers: (newUsers: any) => set((state: any) => ({ users: newUsers })),

      resetUsers: () => set(() => ({ users: [] })),

      setMessages: (message: any) => set((state: any) => ({ messages: [...state.messages, message] })),

      resetMessages: () => set(() => ({ messages: [] })),
}));

export default userStore;
