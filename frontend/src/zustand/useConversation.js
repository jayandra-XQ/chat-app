import { create } from 'zustand'

const useConverstion = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({messages}),
}))

export default useConverstion;
