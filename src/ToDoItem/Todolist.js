import React, {useState} from 'react';


// const ToDoItem = props => {
//     const resolvedClass = {
//         textDecoration : 'line-through'
//     }
//     return ()
// }
const Todolist = () => ({todo,handleChange,handleDelete,handleEdit}) => {
    const [edit, setEdit] = useState(false)
    const [newTodo, setnewTodo] = useState('')

    const handleRename = () => {
        setnewTodo(todo.name)
        setEdit(true)
    }


    const handleSave = () = {
         setEdit( false)
         setnewTodo('')
         handleEdit(todo, newTodo)
    }


    return (
        <div key={user.id} className={'user-wrapper'}>
            {!edit ?
                <h2>{user.name}</h2>
                :
                <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            }
            <input
                type="checkbox"
                onChange={(e) => handleChange(e, user)} checked={user.hired}
            />
            <button onClick={() => handleDelete(user)}>Delete</button>
            <button onClick={() => edit ? handleSave() : handleRename()}>
                {
                    edit ? 'save' : 'Edit'
                }
            </button>
        </div>
    );
};


export default ToDoItem;