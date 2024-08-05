import { redirect } from "next/navigation"
import { data } from "../data"

export const GET= async(req, {params})=>{
    if(params.id> data.length){
        redirect('/server-routes/api')
    }

    const cmt= data.filter(item=> item.id == params.id)
    return new Response(JSON.stringify(cmt))
} 

export const PATCH = async(req, {params})=>{
    const body = await req.json()

    const index= data.findIndex(item=> item.id==params.id)
     data[index].comment=body.comment

    return new Response(JSON.stringify(data[index]))
} 

export const DELETE=async(req, {params})=>{
    
    const index= data.findIndex(item=> item.id==params.id)
    const deletedEle=data[index] 
    data.splice(index, 1)

    return Response.json(deletedEle)
} 

