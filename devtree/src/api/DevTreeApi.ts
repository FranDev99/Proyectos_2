import { isAxiosError } from "axios";
import api from "../config/axios";
import type { FormType, ProfileFormType } from "../types";

export async function getUser() {
    try {
        const { data } = await api.get<FormType>('/user')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateProfile(formData: ProfileFormType) {
    try {
        const { data } = await api.patch<string>('/user', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function uploadImage(file: File) {
    let formData = new FormData()
    formData.append('file', file)

    try {
        const { data } = await api.post('/user/image', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}