import {data} from './data'

export const GET=async()=>{
    return new Response(JSON.stringify(data))
} 

export const POST = async(req)=>{
const body= await req.json()

let newObj={
    id:data.length+1,
    comment:body.comment
}

data.push(newObj)
return new Response(JSON.stringify(newObj),{
    headers:{
        "Context-Type":"application/json",
    },
    status:200
})
} 