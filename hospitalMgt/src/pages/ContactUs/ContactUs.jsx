import React from 'react'

import Footer from '../../components/Footer/Footer'
import './styles/contactus.css'

export default function ContactUs() {
    return(
        <>
            <form>
                    <h1>Get in Touch</h1>
                    <p>we'd love to hear you! Reach out with questions,feedback, or just to say hi.</p>
                    <label>
                        Name
                        <input type="text" placeholder='Your Name'/>
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder='Your Email'/>
                    </label>
                    <label>
                        Message
                        <textarea placeholder='Message'></textarea>
                    </label>
                    <button type='submit'>Send Message</button>
            </form>
            <Footer/>
        </>
    )
}
