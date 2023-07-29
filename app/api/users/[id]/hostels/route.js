import Hostel from "@models/hostel";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const hostels = await Hostel.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(hostels), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 