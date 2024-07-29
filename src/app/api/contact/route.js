import dbConnect from '@/utils/dbConn';
import Contact from '@/models/contactmodel';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    // Log the request body to check the received data
    console.log("Received request body:", body);

    console.log("Connecting to database...");
    await dbConnect();
    console.log("Database connected.");

    console.log("Creating contact document...");
    await Contact.create(body);
    console.log("Contact document created.");

    // Ensure a response is returned after successful document creation
    return NextResponse.json({
      message: "Message sent successfully!"
    }, {
      status: 200
    });

  } catch (e) {
    // Log and handle errors properly
    console.error("Error occurred:", e);
    return NextResponse.json({
      message: "Server error"
    }, {
      status: 500
    });
  }
}
