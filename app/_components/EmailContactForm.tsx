'use client'

import { FormEventHandler, forwardRef, useState } from 'react'
import { EmailRequestBody } from '../_types/ContactSendEmail'
import { LinearProgress, Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const EmailContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [isSending, setIsSending] = useState(false)
    const [sendSuccess, setSendSuccess] = useState(false)
    const [sendError, setSendError] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const clearAllFields = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()

        setIsSending(true)

        const body: EmailRequestBody = { name, email, subject, body: message }

        const response = await fetch('/api/contact/sendEmail', {
            // Replace with your actual endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        // TODO - show snackbar or something change ui
        if (response.ok) {
            // Handle success - e.g., show a success message
            setSendSuccess(true)
            setSendError(false)
            clearAllFields()
        } else {
            // Handle error - e.g., show an error message
            setSendSuccess(false)
            setSendError(true)
        }

        setSnackbarOpen(true)
        setIsSending(false)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col relative">
            <label htmlFor="name">Name</label>
            <input
                className="contact-input"
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                disabled={isSending}
            />

            <label htmlFor="email">Email</label>
            <input
                className="contact-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                disabled={isSending}
            />

            <label htmlFor="subject">Subject</label>
            <input
                className="contact-input"
                type="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject/title"
                required
                disabled={isSending}
            />

            <label htmlFor="message">Message</label>
            <textarea
                className="contact-input"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Email message"
                required
                disabled={isSending}
            />

            <button
                disabled={isSending}
                type="submit"
                className="p-2 bg-slate-500 mt-4 rounded-md hover:bg-slate-600"
            >
                Send
            </button>

            {isSending && (
                <div className="absolute rounded-md top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-purple-400 bg-opacity-50 p-6">
                    <LinearProgress className="w-full h-10 rounded-md" />
                </div>
            )}

            <Snackbar open={snackbarOpen} autoHideDuration={6000}>
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity={sendSuccess ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                >
                    {sendSuccess
                        ? 'Email sent successfully!'
                        : `Error sending email`}
                </Alert>
            </Snackbar>
        </form>
    )
}
