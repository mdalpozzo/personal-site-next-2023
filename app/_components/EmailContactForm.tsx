'use client'

import { FormEventHandler, useState } from "react"
import { EmailRequestBody } from "../_types/ContactSendEmail"
import { DividerHorizontal } from "./DividerHorizontal"

export const EmailContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const body: EmailRequestBody = { name, email, subject, body: message }

        const response = await fetch('/api/contact/sendEmail', { // Replace with your actual endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // TODO - show snackbar or something change ui
        if (response.ok) {
            // Handle success - e.g., show a success message
        } else {
            // Handle error - e.g., show an error message
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
                className="contact-input"
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
            />

            {/* <DividerHorizontal className="my-2" /> */}

            <label htmlFor="email">Email</label>
            <input
                className="contact-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
            />

            {/* <DividerHorizontal className="my-2" /> */}

            <label htmlFor="subject">Subject</label>
            <input
                className="contact-input"
                type="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject/title"
                required
            />

            {/* <DividerHorizontal className="my-2" /> */}

            <label htmlFor="message">Message</label>
            <textarea
                className="contact-input"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Email message"
                required
            />

            <button type="submit" className="p-2 bg-slate-500 mt-4 rounded-md hover:bg-slate-600">Send email to me</button>
        </form>
    );
}