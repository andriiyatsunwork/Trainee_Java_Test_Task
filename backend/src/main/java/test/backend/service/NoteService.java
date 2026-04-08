package test.backend.service;

import org.springframework.stereotype.Service;
import test.backend.entity.Note;
import test.backend.exception.NoteNotFoundException;
import test.backend.repository.NoteRepository;

import java.util.List;

/**
 * Service for business logic.
 */
@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
         this.noteRepository = noteRepository;
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note getNoteById(Long id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(id));
    }

    public Note createNote(Note note) {
        if (note.getTitle() == null || note.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Title cannot be empty");
        }
        return noteRepository.save(note);
    }

    public void deleteNote(Long id) {
        if (!noteRepository.existsById(id)) {
            throw new NoteNotFoundException(id);
        }
        noteRepository.deleteById(id);
    }

    public Note updateNote(Long id, Note updatedNote) {
        // 1.Find existing Note
        Note existingNote = getNoteById(id);

        // 2. Validating title
        if (updatedNote.getTitle() == null || updatedNote.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Title cannot be empty");
        }

        // 3. Update data
        existingNote.setTitle(updatedNote.getTitle());
        existingNote.setContent(updatedNote.getContent());

        // 4. Save
        return noteRepository.save(existingNote);
    }
}
