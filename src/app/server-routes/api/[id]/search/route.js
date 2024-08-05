import { data } from "../../data"

export const GET = async(req, {params})=>{
    const searchParams = req.nextUrl.searchParams
    const query= await searchParams.get("query")
    const newData =  data.filter(item=> item.comment.includes(query))

    return Response.json(newData)
} 