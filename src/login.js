const Login = ()=>{
    return (
        <div className="login-container">
        <form className="login-form">
            <label>Email: <br></br>
            <input type="email"/>
            </label>

            <label>Password: <br></br>
            <input type="password"/>
            </label>

            <label>Login: <br></br>
            <input type="submit"/>
            </label>
            
        </form>
        </div>
    )
}
export default Login;