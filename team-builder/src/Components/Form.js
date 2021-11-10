import React from 'react';

const Form =(props)=>{

    const handleChange = event =>{
        const {name, value} = event.target;
        props.change(name, value);
    }

   const handleSubmit = event =>{
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label>Name
            <input 
                placeholder ="Enter your name"
                value = {props.values.name}
                name ="name"
                onChange={handleChange}
            />
            </label>
            <label>Email
            <input
                placeholder = "Enter your email"
                value ={props.values.email}
                name= "email"
                onChange ={handleChange}
            />
            </label>
            <label>Role
                <select value = {props.values.role}
                name ="role"
                onChange = {handleChange}>
                    <option value="">-- Select a Role --</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Manager">Manager</option>
                </select>
            </label>
           
            <div className ='submit'>
                <button disabled = {!props.values.name || !props.values.email || !props.values.role}>Create Your Team</button>
            </div>
        </form>
    )
}
export default Form;