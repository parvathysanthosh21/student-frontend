import {commonAPI} from './commonAPI'
import {serverURL} from './serverURL'

// upload student details

export const uploadDetails = async (reqBody)=>{
    return await commonAPI ("POST",`${serverURL}/students`,reqBody)
}

// get all student details

export const getDetails = async ()=>{
    return await commonAPI ("GET",`${serverURL}/students`,"")
}


// delete a video

export const deleteDetails = async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/students/${id}`,{})
}


