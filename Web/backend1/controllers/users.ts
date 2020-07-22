import fs from 'fs'
import path from 'path'
import { IUser } from '../models/IUser'

const dir = path.join(__dirname, '../data')
let data: Array<IUser> = JSON.parse(fs.readFileSync(`${dir}/users.json`).toString())

export const createUser = async (user: IUser): Promise<IUser> => {
    await data.push(user)
    await fs.writeFileSync(`${dir}/users.json`, JSON.stringify(data, null, 2))
    return await user
}

export const getUsers = async (): Promise<Array<IUser>> => {
    return await data
}

export const getUser = async (id: string): Promise<IUser | null> => {
    // const user = await data.filter((u: IUser) => u.uid === id)[0]
    const index = await data.findIndex((u: IUser) => u.uid === id)
    if (index < 0) return null
    return await data[index]
}

export const updateUser = async (user: IUser): Promise<IUser | null> =>{
    const index = await data.findIndex((u: IUser) => u.uid === user.uid)
    if (index !== -1){
        data[index]= await user 
        await fs.writeFileSync(`${dir}/users.json`, JSON.stringify(data, null, 2))
        return await user
    }
    return await null
}

export const deleteUser = async (id:string): Promise<IUser | null> => {
    const index = await data.findIndex((u: IUser) => u.uid === id)
    if (index !== -1){
        const user = await data[index]
        await data.splice(index, 1)
        await fs.writeFileSync(`${dir}/users.json`, JSON.stringify(data, null, 2))
        return await user
    }
    return await null 
}