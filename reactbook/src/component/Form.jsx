import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Form.css'

function Form() {
    const { register, watch, handleSubmit, formState: { errors }} = useForm();
    const [submit, setSubmit] = useState(false)
    const onSubmit =  () => {
        setSubmit(true)
    }
    return (
        <div id='form-page'>
            <div className='form-container'>
                {submit && (<h2>Registration Successful </h2>)}
                <form className='flex-column'>
                <input placeholder='First Name' 
                    type="text"             
                    {...register("name", {
                    required: "Name is required",
                    minLength: {
                        value: 3,
                        message: 'Name should be more than 3 characters'
                        }, 
                    maxLength:{
                        value: 30,
                        message: 'Name should be less than 30 characters'
                        }
                    })}
                />
                {errors.name && <h3>{errors.name.message}</h3>}
                <input placeholder='Email' 
                    {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email"
                        }  
                    })}
                />
                {errors.email && <h3>{errors.email.message}</h3>}
                <input  type='password' placeholder='Password'
                    {...register("password", {
                    required: "Password is required",
                    pattern:{
                        value: /.*[\W]+.*/i,
                        message: "Password must contain at least one special character"
                        },
                    minLength: {
                        value: 10,
                        message: "Password must have at least 10 characters"
                        }
                    })}
                />
                {errors.password && <h3>{errors.password.message}</h3>}
                <input type='password' placeholder='Confirm Password'
                    {...register('confirm',{
                    required: "Confirm Your Password",
                    validate: (value) => value === watch('password') || "Passwords don't match"
                    })}
                />
                {errors.confirm && <h3>{errors.confirm.message}</h3>}
                <div id='signup'>
                    <button onClick={handleSubmit(onSubmit)}>Sign Up</button>
                </div>
                </form>
            </div>
        </div>
    )
}
export default Form