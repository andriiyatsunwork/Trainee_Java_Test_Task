import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "app_title": "Notes App",
            "title_placeholder": "Note title...",
            "content_placeholder": "Note content...",
            "save_btn": "Save Note",
            "update_btn": "Update Note",
            "delete_btn": "Delete",
            "edit_btn": "Edit",
            "switch_lang": "Українська"
        }
    },
    uk: {
        translation: {
            "app_title": "Мої Нотатки",
            "title_placeholder": "Заголовок...",
            "content_placeholder": "Текст нотатки...",
            "save_btn": "Зберегти нотатку",
            "update_btn": "Оновити нотатку",
            "delete_btn": "Видалити",
            "edit_btn": "Редагувати",
            "switch_lang": "English"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "uk", // мова за замовчуванням
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;