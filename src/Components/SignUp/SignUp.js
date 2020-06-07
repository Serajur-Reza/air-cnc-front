import React from "react";
import { useForm } from "react-hook-form";
import './SignUp.scss'

export default function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    
    <div className="signupform text-center">
    <form onSubmit={handleSubmit(onSubmit)}>

        <label>Enter Name </label>
        <br/>
        <input type="text" name="name" ref={register({ required: true })} placeholder="Name"/>
        <br/>
        {errors.name && <span style={{color: 'red'}}>This field is required</span>}
        <br/>

        {/* <input name="phone" ref={register({ required: true })}  placeholder="Phone Number"/>
        {errors.phone && <span>This field is required</span>}
        <br/> */}
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

        <label>Confirm Password </label>
        <br/>
        <input type="password" name="confirm_password" ref={register({ required: true })}  placeholder="Confirm Password"/>
        <br/>
        {errors.confirm_password && <span style={{color: 'red'}}>This field is required</span>}
        <br/>

        <input class="btn btn-success" type="submit" value="Sign Up" />
        </form>
    </div>
  );
}