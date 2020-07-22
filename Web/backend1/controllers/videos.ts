import fs from 'fs'
import path from 'path'
import { IVideo } from '../models/IVideo'
import { IUser } from '../models/IUser'

const dir = path.join(__dirname, '../data')
let data: Array<IVideo> = JSON.parse(fs.readFileSync(`${dir}/videos.json`).toString())

export const createVideo = async (video: IVideo): Promise<IVideo> => {
    await data.push(video)
    await fs.writeFileSync(`${dir}/videos.json`, JSON.stringify(data, null, 2))
    return await video
}

export const getVideos = async (): Promise<Array<IVideo>> => {
    return await data
}

export const getVideo = async (id: string): Promise<IVideo | null> => {
    const index = await data.findIndex((v: IVideo) => v.uid === id)
    if (index < 0) return null
    return await data[index]
}

// export const updateVideo = async( video: IVideo): Promise<IVideo | null> => {
//     const index = await data.findIndex((v: IVideo) => v.uid === video.uid)
//     if(index < 0) return await null
//     data[index] = await video
//     await fs.writeFileSync(`${dir}/videos.json`, JSON.stringify(data,null,2))
//     return await video
// }

export const updateVideoInfo = async (video: IVideo): Promise<IVideo | null> => {
    const index = await data.findIndex((v: IVideo) => v.uid === video.uid)
    if(index < 0) return await null
    if(video.description) data[index].description = await video.description
    data[index].genres = await video.genres
    data[index].price = await video.price
    await fs.writeFileSync(`${dir}/videos.json`, JSON.stringify(data,null,2))
    return await video 
}

export const updateVideoRentUp = async (id: string): Promise<boolean> => {
    const index = await data.findIndex((v: IVideo) => v.uid === id)
    if (index < 0) return await false
    await data[index].forRent++
    await fs.writeFileSync(`${dir}/videos.json`, JSON.stringify(data, null, 2))
    return await true
}

export const updateVideoRentDown = async (id: string): Promise<boolean> => {
    const index = await data.findIndex((v: IVideo) => v.uid === id)
    if (index < 0) return await false
    await data[index].forRent
    await fs.writeFileSync(`${dir}/videos.json`, JSON.stringify(data, null, 2))
    return await true
}

export const deleteVideo = async (id: string): Promise<IVideo | null> => {
    const index = await data.findIndex((v: IVideo) => v.uid === id)
    if (index < 0) return await null
    const video = await data[index]
    await data.splice(index, 1)
    await fs.writeFileSync(`${dir}/videos.json`, JSON.stringify(data, null, 2))
    return await video
}