import React, { useState } from 'react';

function ListForm() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const addItems = (e) => {
        e.preventDefault();
        setItems([...items, { id: items.length, value: inputValue }]);
        setInputValue('');
    }

    return (
        <div>
            <form onSubmit={addItems}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul className='list'>
                {
                    items.map(
                        item => <li key={item.id} className='listItem'>{item.value}<button
                        >Delete</button></li>
                        
                    )
                }
            </ul>
        </div>
    )
}

export default ListForm;
