/* const sgMail = require("@sendgrid/mail");
require("dotenv").config(); // Load environment variables from .env file

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Only POST requests allowed" })
    };
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Email is required" })
    };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: "ryan@publicdesignjobs.co.uk", // Your verified SendGrid email
    templateId: "d-f04c548ce2bc4aeb9e0d8f4c49de529b", // Your SendGrid template ID
    dynamic_template_data: {
      email: email
    }
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" })
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email", error })
    };
  }
};
*/
