import Hostel from "@models/hostel";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const hostels = await Hostel.find({}).populate('creator')

        return new Response(JSON.stringify(hostels), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 