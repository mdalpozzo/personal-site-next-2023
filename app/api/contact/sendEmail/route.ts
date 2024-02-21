import { EmailRequestBody } from '@/app/_types/ContactSendEmail'
import { google } from 'googleapis'
import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

// TODO try/catches error handling?

const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
    const oauth2Client = new OAuth2(
        process.env.GMAIL_OAUTH2_CLIENT_ID,
        process.env.GMAIL_OAUTH2_CLIENT_SECRET,
        'https://developers.google.com/oauthplayground' // Redirect URL
    )

    oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_OAUTH2_CLIENT_REFRESH_TOKEN,
    })

    // const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        // @ts-ignore
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_EMAIL_ADDRESS,
            // accessToken: accessToken.token,
            clientId: process.env.GMAIL_OAUTH2_CLIENT_ID,
            clientSecret: process.env.GMAIL_OAUTH2_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_OAUTH2_CLIENT_REFRESH_TOKEN,
        },
    })

    return transporter
}

const sendEmail = async (emailOptions: Mail.Options) => {
    let emailTransporter = await createTransporter()
    await emailTransporter.sendMail(emailOptions)
}

// TODO types for request body?
export async function POST(request: NextRequest, res: Response) {
    // Ensure the content-type is application/json
    if (request.headers.get('content-type') === 'application/json') {
        const { name, email, subject, body } =
            (await request.json()) as EmailRequestBody

        try {
            await sendEmail({
                subject: `${name} - ${subject}`,
                from: email,
                text: body,
                to: process.env.GMAIL_EMAIL_ADDRESS,
            })

            // res.status(200).json({ message: "Email sent successfully" });
            return new Response('Email sent successfully', {
                status: 200,
            })
        } catch (error) {
            console.error('Send email POST error: ', error)
            // res.status(500).json({ error: "Failed to send the email" });
            return new Response('Failed to send the email.', {
                status: 500,
            })
        }
    } else {
        // Handle other content-types, or throw an error
        console.error(
            'Send email POST error: content-type is not application/json'
        )
        // res.status(500).json({ error: "Failed to send the email: content-type must be application/json" });
        return new Response(
            'Failed to send the email: content-type must be application/json.',
            {
                status: 500,
            }
        )
    }
}
