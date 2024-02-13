import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
        <form action="" className="addForm" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="addItem">Add Item</label>
            <input
                ref={inputRef}
                type="text"
                autoFocus
                id='addItem'
                placeholder="Add Item"
                required
                value={newItem}
                onChange={(e) => { setNewItem(e.target.value) }}
                autoComplete='off'
            />
            <button
                type="submit"
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
