import { EmailRequestBody } from '@/app/_types/ContactSendEmail'
// import { google } from 'googleapis'
import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

// TODO - use my junk email for sending these communication emails

// ! Nodemailer is responsible for authenticating with Gmail (and refreshing accessToken) and sending the email
// required api scope: https://www.googleapis.com/auth/gmail.send

// const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
    // const oauth2Client = new OAuth2(
    //     process.env.GMAIL_OAUTH2_CLIENT_ID,
    //     process.env.GMAIL_OAUTH2_CLIENT_SECRET,
    //     'https://developers.google.com/oauthplayground' // Redirect URL
    // )

    // oauth2Client.setCredentials({
    //     refresh_token: process.env.GMAIL_OAUTH2_CLIENT_REFRESH_TOKEN,
    // })

    // const accessToken = await oauth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_EMAIL_ADDRESS,
            clientId: process.env.GMAIL_OAUTH2_CLIENT_ID,
            clientSecret: process.env.GMAIL_OAUTH2_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_OAUTH2_CLIENT_REFRESH_TOKEN,
            // accessToken,
        },
    })

    return transporter
}

const sendEmail = async (emailOptions: Mail.Options) => {
    let emailTransporter = await createTransporter()
    return await emailTransporter.sendMail(emailOptions)
}

// TODO types for request body?
export async function POST(request: NextRequest, res: Response) {
    // Ensure the content-type is application/json
    if (request.headers.get('content-type') === 'application/json') {
        const { name, email, subject, body } =
            (await request.json()) as EmailRequestBody

        const bodyWithSenderInfo = `${name}\n${email}\n\n${body}`

        try {
            const response = await sendEmail({
                subject: `${name} - ${subject}`,
                from: process.env.GMAIL_EMAIL_ADDRESS,
                text: bodyWithSenderInfo,
                to: process.env.GMAIL_EMAIL_ADDRESS,
            })

            if (response.rejected.length) {
                console.error('Email rejected: ', response.rejected)
                throw new Error(
                    `Email was rejected: ${response.rejected.join('; ')}`
                )
            }

            const confirmationEmailResponse = await sendEmail({
                subject: `Message sent to Marlin successfully: ${subject}`,
                from: process.env.GMAIL_EMAIL_ADDRESS,
                text: `Thank you for reaching out!  I will get back to you as soon as possible.`,
                to: email,
            })

            if (confirmationEmailResponse.rejected) {
                return new Response(
                    JSON.stringify({
                        message:
                            'Email sent successfully, but confirmation email failed to send',
                    }),
                    {
                        status: 200,
                    }
                )
            } else {
                return new Response(
                    JSON.stringify({
                        message: 'Email sent successfully',
                    }),
                    {
                        status: 200,
                    }
                )
            }
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            console.error('Send email POST error: ', error)

            return new Response(
                JSON.stringify({
                    message: `Failed to send the email.  ${
                        errorMessage ? `Error: ${errorMessage}` : ''
                    }`,
                }),
                {
                    status: 500,
                }
            )
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
