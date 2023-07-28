import Hostel from "@models/hostel";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const data = await request.json();
    console.log(data);

    try {
        await connectToDB();
        const newHostel = new Hostel(data);

        await newHostel.save();
        return new Response(JSON.stringify(newHostel), { status: 201 })
    } catch (error) {
        console.log("Error creating a new Hostel: ", error.message);
        return new Response("Failed to create a new Hostel", { status: 500 });
    }
}
