import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { createUser } = useAuth();
  const {register, handleSubmit, formState: { errors }} = useForm();

  const handleSignUp = (data) => {
    const {name, email, password} = data;

    createUser(email, password, name)
        .then(res => {
            updateProfile(res.user, {
                displayName: name
            })
                .then(() => {
                    alert("Sign up successfully done!")
                })
        })
        .catch(error => console.log(error.message))
  };

  return (
    <section className="bg-base-200">
      <div className="hero min-h-screen container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {required: true})}
                  placeholder="Type your Name"
                  className="input input-bordered"
                />
                {errors.name && <p className="text-red-500">Name is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {required: "Email is required"})}
                  placeholder="Type your email"
                  className="input input-bordered"
                />
                {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && <p className="text-red-500">Password is required!</p>}
                {errors.password?.type === "minLength" && <p className="text-red-500">Password must be 6 characters or longer.</p>}
                {errors.password?.type === "maxLength" && <p className="text-red-500">Password must be maximum 20 characters or lower.</p>}
                {errors.password?.type === "maxLength" && <p className="text-red-500">Password must be maximum 20 characters or lower.</p>}
                {errors.password?.type === "pattern" && <p className="text-red-500">Password should have at least one uppercase, one lowercase, one special character and one number.</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
