import React, {useState} from 'react';




const Todo = () => ({todo,handleChange,handleDelete,handleEdit}) => {
    const [edit, setEdit] = useState(false)
    const [Todolist, setTodolist] = useState('')

    const handleRename = () => {
        setTodolist(todo.name)
        setEdit(true)
    }


    const handleSave = (todo) = {
         setEdit(false)
         setTodolist('')
         handleEdit(todo, Todolist)
    }


    return (
        <div key={todo.id} className={'user-wrapper'}>
            {!edit ?
                <h2>{Todo.name}</h2>
                :
                <input
                    value={Todolist}
                    onChange={(e) => setTodolist(e.target.value)}
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


export default Todo;