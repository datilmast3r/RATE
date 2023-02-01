import './Signup.css';

const Signup = () => {

     const signUp = e => {
        e.preventDefault()
     } 

  return (
    <>
        <h1 className="signUp-title">Sign up</h1>
        <main className="signUp-main">
            <form className="signUp-form" action="post" onSubmit={signUp}>

                <div className="input-container">
                    <label className='signUp-label' htmlFor="username">username</label>
                    <input className="signUp-input" name='username' type="text" />
                </div>

                <div className="input-container">
                    <label className='signUp-label' htmlFor="username">email</label>
                    <input className="signUp-input" name='email' type="email" />
                </div>

                <div className="input-container">
                    <label className='signUp-label' htmlFor="username">password</label>
                    <input className="signUp-input" name='password' type="password" />
                </div>

                <button className="createBtn">Create account</button>
            </form>
                
            <div className='signUp-continue-container'>
                <span>or</span>

                <button className='continueBtn'>Continue with Google</button>
                <button className='continueBtn'>Continue with Facebook</button>
                <button className='continueBtn'>Continue with Apple</button>
            </div>

        </main>
    </>
  )
}

export default Signup