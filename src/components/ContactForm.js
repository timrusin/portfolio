import {useState} from 'react'
import "./ContactForm.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/ef4a2090-dd44-11ec-8be6-4f814e368566"

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        setTimeout(()=> {
            setSubmitted(true)
        }, 100)
    }
    if (submitted){
        return (
            <div className='submitted-message' >
                <h1 className='thank-you'>Thank you!</h1>
                <h2 className='talk-soon'>Talk soon</h2>
            </div>
        )
    }
    return (
      <form className='contact-form' action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
        <div className="input-field">
          <input
            type="text"
            placeholder="And you are...?"
            name="name"
            className="input name"
            required
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input email"
            required
          />
        </div>
        <div className="input-field">
          <textarea
            placeholder="What's up?"
            name="message"
            className="input message"
            required
          />
        </div>
        <div className="input-field">
          <button className="contact-button" type="submit">
            - Send -
          </button>
        </div>
      </form>
    );
    };

export default ContactForm