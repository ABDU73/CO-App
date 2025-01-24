import {received_Contact_Message,  sent_Contact_Message, received_Apply_Message, sent_Apply_Message} from "./emailTemplates.js"
import { getFileExtension } from "../config/multer.js"
import { nodeMailer } from "./nodeMailer.config.js";
import dotenv from "dotenv"
dotenv.config();


export const clientContact = async (name, email) => {
    try {
        const response = await nodeMailer(
            email,
            "Dear seeker!",
            received_Contact_Message.replace("{user_name}", name).replace("{user_email}", email),
        );
        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Error sending to email: ${error}`);
    }
}  // it done


export const adminContact = async (name, email, message) => {
    try {
        const response = await nodeMailer(
            process.env.ADMIN_EMAIL,
            "From the seeker!",
            sent_Contact_Message.replace( "{user_name}", name ).replace( "{user_email}", email ).replace( "{message}", message ),
        );
        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Error sending to email: ${error}`);
    }
} // it done


export const clientApply = async (name, email, position) => {
    try {
        const dateSubmitted = new Date().toLocaleDateString();
        const response = await nodeMailer(
            email,
            "Dear seeker!",
            received_Apply_Message
            .replace("{user_name}", name)
            .replace("{user_email}", email)
            .replace("{position}", position)
            .replace("{date_submitted}", dateSubmitted),
        );
        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Error sending to email: ${error}`);
    }
}
export const adminApply = async (name, email, phoneNum, position, qualifications, resume, firstTime, workRemotely, interest, experience, skills, motivation, future, companyCulture, message) => {
    try {
        const attachment = resume ? [{
            filename: resume.originalname || `resume${getFileExtension(resume.mimetype)}`,  // Dynamically set filename
            content: resume.buffer,  // Send the file as a Buffer
        }] : [];
  
        const dateSubmitted = new Date().toLocaleDateString(); // Get current date
  
        const response = await nodeMailer(
            process.env.ADMIN_EMAIL,
            "From the seeker!",
            sent_Apply_Message
                .replace("{user_name}", name)
                .replace("{user_email}", email)
                .replace("{user_phone}", phoneNum)
                .replace("{position}", position)
                .replace("{qualifications}", qualifications)
                .replace("{firstTime}", firstTime)
                .replace("{workRemotely}", workRemotely)
                .replace("{interest}", interest)
                .replace("{experience}", experience)
                .replace("{skills}", skills)
                .replace("{motivation}", motivation)
                .replace("{future}", future)
                .replace("{company_culture}", companyCulture)
                .replace("{message}", message)
                .replace("{date_submitted}", dateSubmitted),
            attachment
        );
  
        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Error sending to email: ${error}`);
    }
};