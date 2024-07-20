import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contactmodel";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();

        console.log("Connecting to database...");
        await dbConnect();
        console.log("Database connected.");

        console.log("Creating contact document...");
        await Contact.create(body);
        console.log("Contact document created.");

        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        });

    } catch (e) {
        console.error("Error occurred:", e);
        return NextResponse.json({
            message: "Server error"
        }, {
            status: 500
        });
    }
}
