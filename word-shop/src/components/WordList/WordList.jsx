import React, { useState, useEffect } from 'react';
import   './WordList.css';
import { observer } from "mobx-react";
import wordsStore from '../../stores/wordsStore';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { Provider } from 'mobx-react';



const WordList = observer(() => {
  const [editIndex, setEditIndex] = useState(-1);
    const [fields, setFields] = useState({ field1: '', field2: '', field3: '' });
    const [touched, setTouched] = useState({ field1: false, field2: false, field3: false });
  useEffect(() => {
    wordsStore.fetchWords();
  }, []);
  if (wordsStore.loading) {
    return <LoadingIndicator />;
  }
  

  const handleEdit = (index) => {
      
      // Заполняем поля для редактирования данными слова
      const word = wordsStore.data[index];
      setFields({ 
          field1: word.english, 
          field2: word.transcription, 
          field3: word.russian 
      });
      setEditIndex(index);
  };

const handleSave = (index) => {
  const id = wordsStore.data[index].id;
  wordsStore.editWord(wordsStore.data[index].id, {
    id: '',
    english: fields.field1,
    transcription: fields.field2,
    russian: fields.field3,
    tags: '',
    tags_json: ''
  });
  setEditIndex(-1);
};


const handleCancel = () => {
setEditIndex(-1);
};



const handleChange = (e) => {
  const { name, value } = e.target;
  setFields((prev) => ({
    ...prev,
    [name]: value,
  }));
  if (!isFormValid) 
    alert('Пожалуйста, заполните все поля перед сохранением.');
 
  
};

const handleBlur = (e) => {
  const { name } = e.target;
  setTouched((prev) => ({
    ...prev,

    [name]: true,
  }));
};

const isFieldEmpty = (field) => {
  return touched[field] && !fields[field];
};

const isFormValid = Object.values(fields).every((field) => field);

const handleSubmit = () => {
    if (!isFormValid) {
      alert('Пожалуйста, заполните все поля перед сохранением.');
    } else {
      console.log('Данные формы:', fields);
      wordsStore.addWord({
        id: '',
        english: fields.field1,
        transcription: fields.field2,
        russian: fields.field3,
        tags: '',
        tags_json: ''
      });
      setFields({ field1: '', field2: '', field3: '' }); // Очищаем поля
    };
      setEditIndex(-1) // Закрываем режим редактирования
    }
  

return (
<main className='card-container'>
    <table>
        <thead>
        <tr className='word-row'>
            <th>ID</th>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Actions</th>
        </tr>
        </thead>

        <tbody className='row-Container'>
        {wordsStore.data.map((word, index) => (
            <tr key={word.id} className="word-row">
            <td>{word.id}</td>
            {editIndex === index ? (
                <>
                <td><input 
                type="text" 
                className='input' 
                defaultValue={word.english}
                name="field1"
                value={fields.field1}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                    borderColor: isFieldEmpty('field1') ? 'red' : 'black',
                }}
                />
                </td>

                <td><input 
                type="text" 
                className='input' 
                defaultValue={word.transcription} 
                name="field2"
                value={fields.field2}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                    borderColor: isFieldEmpty('field2') ? 'red' : 'black',
                }}
                />
                </td>

                <td><input 
                type="text" 
                className='input' 
                defaultValue={word.russian} 
                name="field3"
                value={fields.field3}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                    borderColor: isFieldEmpty('field3') ? 'red' : 'black',
                }}
                />
                </td>
                <td>
                    <button disabled={!isFormValid} className='btn btn_save' onClick={() => { handleSave(index);}}>Save</button>
                    <button className='btn btn_cancel' onClick={handleCancel}>Cancel</button>
                </td>
                </>
            ) : (
                <>
                <td>{word.english}</td>
                <td>{word.transcription}</td>
                <td>{word.russian}</td>
                <td>
                    <button className='btn btn_edit' onClick={() => handleEdit(index)}>Edit</button>
                    <button className='btn btn_delete' onClick={() => wordsStore.deleteWord(word.id)}>Delete</button>
                </td>
                </>
            )}
            </tr>
        ))}
        </tbody>
    </table>
     {/* Добавление нового слова */}
     <div>
        <h3>Add New Word</h3>
        <input
          type="text"
          placeholder="English"
          value={fields.field1}
          name="field1"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Transcription"
          value={fields.field2}
          name="field2"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Russian"
          value={fields.field3}
          name="field3"
          onChange={handleChange}
        />
        <button disabled={!isFormValid} onClick={handleSubmit} className='btn btn_add'>
          Add
        </button>
      </div>
</main>

);
});

export default WordList;