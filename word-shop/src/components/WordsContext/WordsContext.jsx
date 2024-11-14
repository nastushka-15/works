import React, { useState, useEffect, createContext } from "react";

const WordsContext = createContext();

const WordsContextProvider = (props) => {
    const [data, setData] = useState([]);

    // Данный хук аналогичен методу componentDidMount
    useEffect(() => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => console.error("Ошибка при загрузке данных:", error));
    }, []);

    const addWord = (newWord) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWord),
        })
        .then((response) => response.json())
        .then((addedWord) => setData([...data, addedWord]))
        .catch((error) => console.error("Ошибка при добавлении слова:", error));
    };

    const editWord = (id, updatedWord) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
        })
        .then(() => {
            const updatedData = data.map(word => (word.id === id ? { ...word, ...updatedWord } : word));
            setData(updatedData);
        })
        .catch((error) => console.error("Ошибка при редактировании слова:", error));
    };

    const deleteWord = (id) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            
            method: 'POST',
        })
        .then(() => {
            const filteredData = data.filter(word => word.id !== id);
            setData(filteredData);
        })
        .catch((error) => console.error("Ошибка при удалении слова:", error));
    };

    return (
        <WordsContext.Provider value={{ data, addWord, editWord, deleteWord }}>
            {props.children}
        </WordsContext.Provider>
    );
};

export { WordsContextProvider, WordsContext };