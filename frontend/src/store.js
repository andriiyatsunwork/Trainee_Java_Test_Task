import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:8080/notes';

export const useNoteStore = create((set, get) => ({
    notes: [],

    // 1. (GET) all notes
    fetchNotes: async () => {
        try {
            const response = await axios.get(API_URL);
            set({ notes: response.data });
        } catch (error) {
            console.error("Downloading error:", error);
        }
    },

    // 2. (POST) create note
    addNote: async (note) => {
        const response = await axios.post(API_URL, note);
        // Add note to existing database
        set({ notes: [...get().notes, response.data] });
    },

    // 3. (PUT) update
    updateNote: async (id, updatedNote) => {
        const response = await axios.put(`${API_URL}/${id}`, updatedNote);

        set({
            notes: get().notes.map(note => (note.id === id ? response.data : note))
        });
    },

    // 4.  (DELETE) note
    deleteNote: async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        set({
            notes: get().notes.filter(note => note.id !== id)
        });
    }
}));