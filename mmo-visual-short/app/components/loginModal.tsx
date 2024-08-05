export default function loginModal() {
    return (
    <>

        <div id="login-popup" className="popup">
            <div className="popup-content">
                <span className="close" id="close-popup">&times;</span>
                <h2>Login</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <button type="submit">Login</button>
            </div>
        </div>

    </>
)
}