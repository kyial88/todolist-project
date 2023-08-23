import React from 'react';
import './App.css';
import {useEffect} from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';


 const App = () => {


    useEffect(() => {
        axios(`https://64e2f0aebac46e480e77efad.mockapi.io/todo`)
            .then(({dat}) => setTodo(data))
    }, [])

    const handleChange = (e, todo) => {
        const newData = {...todo, hired: e.target.checked}
        axios.put(`https://64e2f0aebac46e480e77efad.mockapi.io/todo/${todo.id}`, newData)
            .then(({data}) => {
                setTodo(todo.map(todo => todo.id === data.id ? data : todo))
            })
    }

    const handleDelete = (todo) => {
        axios.delete(`https://64e2f0aebac46e480e77efad.mockapi.io/todo/${todo.id}`)
            .then(({todo}) => {
                setTodo(todo.filter(todo => todo.id !== data.id))
            })
    }


     const {
        register,
        handleSubmit,
        formState: {errors},}
        = useForm();
       return (
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register('name')} />
            <input {...register('task', { required: true })} />
            {errors.task && <p>Last name is required.</p>}
            <input {...register('completed', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <input type="priority" />
          </form>
       );





}


export default App;
