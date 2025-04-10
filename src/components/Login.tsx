import { Link } from "react-router-dom";

const Login = () => {
    return (
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-black">
            <img className="w-26 h-19 mr-2" src="https://assets.teacherseat.com/bd84f2e7-0f4c-42b3-b76f-6104fcdb0ae6/assets/logo-light.svg" alt="logo" />
                
          </a>
          <div className="w-full bg-white rounded-lg shadow border sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Login in to your account
              </h1> 
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"  />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-black">Remember me</label>
                    </div>
                  </div>
                 <Link to="/PasswordRecovery"> <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a></Link>
                </div>
                <button type="submit" className="w-full text-black bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-5 py-2.5 text-center">Login in</button>
                <p className="text-sm font-light text-black">
                  Don’t have an account yet? 
                  <Link to="/register"><a href="#" className="font-medium text-primary-600 hover:underline">Sign up</a></Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Login;