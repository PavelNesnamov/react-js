import "./LoginForm.css"
import MyButton from "../myButton/MyButton"
import MyInput from "../myInput/MyInput"

const submitLog = () => console.log('Submited!');

function LoginForm() {
    return (
        <div className="container">
            <h3>Login</h3>
            <MyInput name="login" type="login" label="Login: " placeholder="input login"/>
            <MyInput name="email" type="email" label="Email: " placeholder="input email"/>
            <MyInput name="password" type="password" label="Password: " placeholder="input password"/>
            <MyButton func={submitLog} type="submit"/>
        </div>
    )
}

export default LoginForm;