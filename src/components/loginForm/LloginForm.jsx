import "./LoginForm.css";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";

const submitLog = () => console.log("Submited!");

function LoginForm() {
    return (
        <div className="container">
            <h3>Login</h3>
            <MyInput name="login" label="login: " placeholder="input login"/>
            <MyInput name="email" label="Email: " placeholder="input e-mail"/>
            <MyInput name="password" label="Password: " placeholder="input password"/>
            <MyButton func={submitLog} type="submit"/>
        </div>
    );
}

export default LoginForm;