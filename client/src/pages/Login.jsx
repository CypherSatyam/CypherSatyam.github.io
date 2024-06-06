import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
 
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
 
    setUser({
      ...user,
      [name]: value,
    });
  };
 
  const navigate = useNavigate();
  // handling the form submssion
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const loginResponse = await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user)
      })
      console.log(await loginResponse.json())

      if(loginResponse.ok){
        alert("Login successful")
        setUser({email:"",password:""})
        navigate("/")
      }else{
        alert("Invalida credentials")
      }
    } catch (error) {
      console.log('login',error)
    }
  };
 
  return (
    <>
      <section>
        <main>
          <div className="section-contact">
            <div className="content container grid grid-two-col ">
              <div className="contact-img">
                <img
                  src="/images/login.png"
                  alt="a typing to do login"
                  width="500"
                  height="500"
                />
              </div>
              <div className="section-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
 
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn bin-S">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};