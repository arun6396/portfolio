import React, { useState } from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { name, email, message };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setResponse('Thank you for your message!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setResponse('There was an error submitting your message.');
            }
        } catch (error) {
            setResponse('There was an error submitting your message.');
            console.error('Error:', error);
        }
    };
   
    return (
        <div className='form-container'>
            <form className="contact-form" onSubmit={handleSubmit}>
                
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
                {response && <p className="response-message">{response}</p>}
            </form>
          
        </div>
    );
};

export default ContactForm;
