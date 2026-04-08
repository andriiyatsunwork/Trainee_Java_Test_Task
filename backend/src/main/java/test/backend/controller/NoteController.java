package test.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import test.backend.entity.Note;
import test.backend.service.NoteService;

import java.util.List;

import java.util.List;

@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = "*")
public class NoteController {

    private static final Logger log = LoggerFactory.getLogger(NoteController.class);

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    // GET all notes
    @GetMapping
    public List<Note> getAllNotes() {
        log.info("Called getAllNotes");
        return noteService.getAllNotes();
    }

    // GET specified note by id
    @GetMapping("/{id}")
    public Note getNoteById(@PathVariable Long id) {
        // If not found from Service (automatically 404)
        log.info("Called getNoteById with id {}", id);
        return noteService.getNoteById(id);
    }

    // CREATE node
    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
        Note createdNote = noteService.createNote(note);
        log.info("Called createNote with id: {}, title: {}", createdNote.getId(), createdNote.getTitle());

        // 201 for POST successfully created.
        return ResponseEntity.status(HttpStatus.CREATED).body(createdNote);
    }

    // UPDATE node by id
    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note updatedNote) {
        log.info("Called updateNote with id: {}", id);
        return noteService.updateNote(id, updatedNote);
    }

    // DELETE node by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
        log.info("Called deleteNote with id: {}", id);
        // Return 204 No Content
        return ResponseEntity.noContent().build();
    }
}
