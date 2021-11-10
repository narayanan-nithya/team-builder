import React from 'react';

const Form =(props)=>{

    const handleChange = event =>{
        const {name, value} = event.target;
        props.change(name, value);
    }

    handleSubmit = event =>{
        event.preventDefault();
        props
    }

    return (
        <form>
            <label>Name
            <input 
            placeholder ="Enter your name"
            value = {values.name}
            name ="name"
            onChange={handleChange}
        />
        </label>
    )
}