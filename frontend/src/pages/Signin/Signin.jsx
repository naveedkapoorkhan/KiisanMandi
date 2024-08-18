import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let auth = localStorage.getItem("user"); //yeah jo "user" ha wo localstorage ma key ha  

        if (auth) {
            navigate('/home')
        }
    });


    const accountlogin = async () => {
        console.warn(email, password);
        try {

            let fetchapi = await fetch('http://localhost:3000/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
        
            fetchapi = await fetchapi.json();
        
            console.warn(fetchapi);
            if (fetchapi.email) {
                localStorage.setItem("user", JSON.stringify(fetchapi));
                navigate('/home');
            } else {
                alert("Please enter correct credentials");
            }
          
          } catch (error) {
            
            alert("Error: Login failed");
          } 
    
      
    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full lg:max-w-xl p-6 space-y-5 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center pb-5">
                            LOGIN
                        </h2>
                        <div className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={email}
                                    onChange={(e) => { setemail(e.target.value) }} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter your Email Address" required></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input value={password}
                                    onChange={(e) => { setpassword(e.target.value) }} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"></input>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                                </div>
                                <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button onClick={accountlogin} type="submit" className=" w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOGIN</button>
                            </div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Not registered yet? <a onClick={()=>{navigate('/register');}} className="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin;