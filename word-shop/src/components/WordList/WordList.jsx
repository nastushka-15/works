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
                <td><input type="text" className='input' defaultValue={word.english} /></td>
                <td><input type="text" className='input' defaultValue={word.transcription} /></td>
                <td><input type="text" className='input' defaultValue={word.russian} /></td>
                <td>
                    <button className='btn btn_save' onClick={() => handleSave(index)}>Save</button>
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