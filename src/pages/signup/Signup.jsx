import GenderCheckboxes from "./GenderCheckboxes";

const Signup = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up ChatApp</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* gender check boxes */}

              <GenderCheckboxes/>
              <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                  Already have an account?
              </a>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-gray-100" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;
  