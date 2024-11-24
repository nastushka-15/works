import { makeAutoObservable } from "mobx";

class WordsStore {
    data = []; // Массив для хранения слов
    loading = true; // Индикатор загрузки
    currentCardIndex = 0; // Индекс текущей карточки
    wordTranslate = 0; // Количество переведенных слов

    constructor() {
        makeAutoObservable(this);
        this.fetchWords(); // Запускаем загрузку слов при создании хранилища
    }

    fetchWords() {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then(response => response.json())
            .then(response => {
                this.data = response;
                this.loading = false;
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                this.loading = false;
            });
    }

    addWord(newWord) {
        fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWord),
        })
        .then(response => response.json())
        .then(addedWord => this.data.push(addedWord))
        .catch(error => console.error("Ошибка при добавлении слова:", error));
    }

    editWord(id, updatedWord) {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, { // Исправлены кавычки
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
        })
        .then(() => {
            const index = this.data.findIndex(word => word.id === id);
            if (index !== -1) {
                this.data[index] = { ...this.data[index], ...updatedWord };
            }
        })
        .catch(error => console.error("Ошибка при редактировании слова:", error));
    }

    deleteWord(id) {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, { // Исправлены кавычки
            method: 'POST',
        })
        .then(() => {
            this.data = this.data.filter(word => word.id !== id);
        })
        .catch(error => console.error("Ошибка при удалении слова:", error));
    }

    get cardCount() {
        return this.data.length; // Возвращает количество карточек
    }

    get currentCard() {
        return this.data[this.currentCardIndex]; // Возвращает текущую карточку
    }

    nextCard() {
        if (this.currentCardIndex === this.cardCount - 1) {
            this.currentCardIndex = 0; // Если текущая карточка последняя, переходим на первую
        } else {
            this.currentCardIndex += 1; // Иначе переходим к следующей
        }
    }

    prevCard() {
        if (this.currentCardIndex === 0) {
            this.currentCardIndex = this.cardCount - 1; // Если первая карточка, переходим на последнюю
        } else {
            this.currentCardIndex -= 1; // Иначе возвращаемся на одну карточку назад
        }
    }

    incrementWordTranslate() {
        this.wordTranslate += 1; // Увеличиваем счетчик переведенных слов
    }
}

const wordsStore = new WordsStore();
export default wordsStore;
