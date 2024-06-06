import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
 
  const handleInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
 
    setContact({
      ...contact,
      [name]: value,
    });
  };
 
  const handleSubmit =  async(e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const contactRespone = await fetch(`http://localhost:5000/api/form/contact`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body : JSON.stringify(contact),
      })
      console.log(await contactRespone.json())

    } catch (error) {
      console.log("contact",error)
    }
  };
 
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>
 
        {/* contact page main */}
        <div className="container grid grid-two-col">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="contact form"
              width="500"
              height="500"
            />
          </div>
 
          {/* contact content actual */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>
 
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
 
              <div>
                <label htmlFor="email">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7219.400940005298!2d83.9589573959875!3d25.213321817504823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d950729479adb%3A0x90eca2ff88d86d9f!2sPrateek%20Pandey%20(Golden)!5e0!3m2!1sen!2sin!4v1717495734890!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};