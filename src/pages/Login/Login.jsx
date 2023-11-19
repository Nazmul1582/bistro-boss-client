import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(5)
    }, [])

    const handleCaptcha = e => {
        const user_captch_value = e.target.value;
        if(validateCaptcha(user_captch_value, false)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }
  return (
    <section className="bg-base-200">
      <div className="hero min-h-screen container mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="mt-4">
                <LoadCanvasTemplate />
              </div>
              <div className="form-control">
                <label className='label'>
                    <span className='label-text'>Enter the code above here:</span>
                </label>
                <input
                  type="text"
                  onChange={handleCaptcha}
                  placeholder='Enter the code above here'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-warning">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
