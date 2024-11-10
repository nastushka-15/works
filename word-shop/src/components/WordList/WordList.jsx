import React, { useState } from 'react';
import  data from './data.json';
import   './WordList.css';
const WordList = ({words}) => {
const [editIndex, setEditIndex] = useState(-1);

const handleEdit = (index) => {
setEditIndex(index);
};

const handleSave = (index) => {
// реализация сохранения изменений

setEditIndex(-1);
};

const handleCancel = () => {
setEditIndex(-1);
};

const [fields, setFields] = useState({ field1: '', field2: '', field3: '' });
const [touched, setTouched] = useState({ field1: false, field2: false, field3: false });

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
      setEditIndex(-1) // Закрываем режим редактирования
    }
  };

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
        {data.map((word, index) => (
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
                    <button disabled={!isFormValid} className='btn btn_save' onClick={() => {handleSubmit(); handleSave(index);}}>Save</button>
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
                    <button className='btn btn_delete' >Delete</button>
                </td>
                </>
            )}
            </tr>
        ))}
        </tbody>
    </table>
</main>
);
};

export default WordList;