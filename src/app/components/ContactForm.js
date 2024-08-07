'use client'

import styles from "@/app/contact/contact.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
});

const ContactForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState(null);
 
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)  // Simplified body assignment
            });

            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setStatus('success');
            } else {
                setStatus('error');
            }

        } catch (e) {
            console.log(e);
            setStatus('error');
        }
    };

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="name" className={styles.label}>
                    Enter your name
                    <input type="text" name="name" id="name"
                        placeholder="Enter your name"
                        className={mulish.className}
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                        placeholder="Enter your email"
                        className={mulish.className}
                        value={user.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="text" name="phone" id="phone"
                        placeholder="Enter your phone"
                        className={mulish.className}
                        value={user.phone}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea name="message" id="message" rows={5}
                        placeholder="Enter your Message"
                        className={mulish.className}
                        value={user.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={mulish.className}>Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;
