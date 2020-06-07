import React from "react";
import { useForm } from "react-hook-form";
import './LogIn.scss'

export default function LogIn() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    
    <div className="signupform text-center">
    <form onSubmit={handleSubmit(onSubmit)}>

        <label>Enter Email </label>
        <br/>
        <input type="email" name="email" ref={register({ required: true })}  placeholder="Email"/>
        <br/>
        {errors.email && <span style={{color: 'red'}}>This field is required</span>}
        <br/>

        <label>Enter Password </label>
        <br/>
        <input type="password" name="password" ref={register({ required: true })}  placeholder="Password"/>
        <br/>
        {errors.password && <span style={{color: 'red'}}>This field is required</span>}
        <br/>


        <input class="btn btn-success" type="submit" value="Log In"/>
        </form>
    </div>
  );
}