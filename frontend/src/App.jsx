import { useEffect, useState } from 'react';
import { useNoteStore } from './store';
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();
    const { notes, fetchNotes, addNote, deleteNote, updateNote } = useNoteStore();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchNotes();
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'uk' ? 'en' : 'uk';
        i18n.changeLanguage(newLang);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        if (editId) {
            updateNote(editId, { title, content });
            setEditId(null);
        } else {
            addNote({ title, content });
        }
        setTitle('');
        setContent('');
    };

    const handleEdit = (note) => {
        setEditId(note.id);
        setTitle(note.title);
        setContent(note.content);
    };

    return (
        <div className="app-container">

            <header className="header">
                <h1>{t('app_title')}</h1>
                <button className="btn-outline" onClick={toggleLanguage}>
                    {t('switch_lang')}
                </button>
            </header>

            <form className="note-form" onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={t('title_placeholder')}
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={t('content_placeholder')}
                    rows="4"
                />
                <button type="submit" className="btn-primary">
                    {editId ? t('update_btn') : t('save_btn')}
                </button>
            </form>

            <ul className="notes-list">
                {notes.map(note => (
                    <li key={note.id} className="note-card">
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <div className="note-actions">
                            <button className="btn-outline" onClick={() => handleEdit(note)}>
                                {t('edit_btn')}
                            </button>
                            <button className="btn-danger" onClick={() => deleteNote(note.id)}>
                                {t('delete_btn')}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default App;