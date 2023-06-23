import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

require("dotenv").config();

// Create an api key in sendgrid and store someplace safe
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();
  // I know the formData I sent in my request has name, email, and message fields so I'm just manually grabbing them to format a message
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: "calebbugnacki@gmail.com",
    from: "calebbugnacki@gmail.com",
    subject: "Contact Message via CalebBugnacki.com",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  // Send the data and create a response object. I'm using status and message to display a success or fail notification in the UI
  await sgMail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}
