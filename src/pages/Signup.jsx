import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router';

const Signup = () => {

    const { createUser, setUser, user, updateUser } = use(AuthContext);
      const navigate = useNavigate()
    console.log(user)
    const handleSignUp = e => {
        e.preventDefault()
            const name = e.target.name.value;
    const url = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, url, email, password);

    // Create user
    createUser(email, password)
    .then(result => {
        console.log(result);

              updateUser({displayName: name, photoURL: url})
      .then(() => {
      setUser({...result, displayName: name, photoURL: url})
      navigate('/')
      })
      .catch(error => {
        console.log(error)
        setUser(result)
      })
    })
    .catch(error => {
        console.log(error)
    })
    }

    return (
        <div>
            <div  >

                <div className="hero min-h-screen bg-[url('https://i.ibb.co/7tyCkg2p/il-1588x-N-3771147591-89li.jpg')] bg-cover bg-center">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <p className="py-6 text-center">
        A prominent plant care tracker which helps you to track the watering time of your plants <br /> and also provide  services of get rid from plant desease
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignUp}>
          <label className="label">Name</label>
          <input required name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input required name='photo' type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          {/* Password */}
          <label className="input validator">
  <input
    type="password"
    required
    name='password'
    placeholder="Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4 w-full hover:bg-green-800 bg-[#234823] trxt-lg font-bold  text-green-300">SignUp</button>
          <button className="btn w-full mt-4 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Register with Google
</button>
        </form>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Signup;