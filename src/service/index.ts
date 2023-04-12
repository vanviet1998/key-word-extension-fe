import axios from 'axios';
import { CreateContentChatGPTReponse, CreateContentChatGPTRequest, IContentChatGPT } from 'commons';

const httpRequest = axios.create({
    baseURL: "http://localhost:3001",
    headers:{
        "Content-Type": "application/json",
    }
})

export const createContentChatGPT = async (payload: CreateContentChatGPTRequest): Promise<CreateContentChatGPTReponse> => {
    const res = await httpRequest.post("/chat-gpt", payload)
    return  res.data
}

export const getListContentChatGPT = async (): Promise<IContentChatGPT[]> => {
    const res = await httpRequest.get("/chat-gpt")
    return  res.data
}