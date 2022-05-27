import {useState} from 'react'
import "./ContactForm.css"

const FORM_ENDPOINT = "https://submit-form.com/48S3pn6x"

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        setTimeout(()=> {
            setSubmitted(true)
        }, 100)
    }
    if (submitted){
        return (
            <>
                <div className='thank-you'>Thank you!</div>
                <div className='talk-soon'>Talk to you soon</div>
            </>
        )
    }
    return (
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
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
            <button
              className="contact-button"
              type="submit"
            >
              - Send -
            </button>
          </div>
        </form>
      );
    };

export default ContactForm