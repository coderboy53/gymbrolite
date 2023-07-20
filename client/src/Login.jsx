import {useForm} from 'react-hook-form';
import axios from 'axios';
import {DevTool} from '@hookform/devtools';
const url = 'http://localhost:4242/'
const Login = () => {

  const {register, handleSubmit, control} = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios.post(url+'user/login',data).then();
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="uname" {...register("username")}/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" {...register("password")}/>
      <input type="submit" value="Login" />
    </form>
    <DevTool control={control}/>
    </>
  )
}

export default Login;