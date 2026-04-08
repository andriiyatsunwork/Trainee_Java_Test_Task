package test.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import test.backend.entity.Note;

/**
 * This Note repository gives us ability to do CRUD operation to our entity.
 */
public interface NoteRepository extends JpaRepository<Note, Long> {
}
