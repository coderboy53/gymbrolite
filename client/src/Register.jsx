import {useForm} from 'react-hook-form';
import axios from 'axios';
import {DevTool} from '@hookform/devtools';
const url = 'http://localhost:4242/'
const Register = () => {

  const {register, handleSubmit, control} = useForm();

  const onSubmit = (data) => {
    axios.post(url+'user/register', data);
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" id="name" {...register("name")}/>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="uname" {...register("username")}/>
      <label htmlFor="email">Email ID</label>
      <input type="email" name="email" id="email" {...register("email")} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" {...register("password")}/>
    </form>
    <DevTool control={control}/>
    </>
  )
}

export default Register;