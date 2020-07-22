import express from 'express'
import {v4 as uid} from 'uuid'
import * as videoctrl from '../controllers/videos'
import { IVideo} from '../models/IVideo'

export const router = express.Router()

//get all
router.get('/',(req, res) => {
    videoctrl.getVideos().then((videos: Array<IVideo>) => {
        res.status(200).json({msg: 'OK', data: videos})
    })
})
// obtener x ID
router.get('/:id', (req, res) => {
    videoctrl.getVideo(req.params.id).then((video: IVideo | null) => {
        if(!video) return res.status(403).json({msg: 'error'})
        delete video.uid
        res.status(200).json({msg: 'OK',data: video})
    })
})
//crear usuario
router.post('/',(req, res) => {
    const v:IVideo = req.body
    v.uid = uid()
    videoctrl.createVideo(v).then((video: IVideo) => {
        if(!video) return res.status(500).json({msg: 'error'})
        res.status(201).json({msg: 'OK', data: video})
    })
})
// borrar
router.delete('/:id', (req, res) => {
    videoctrl.deleteVideo(req.params.id).then((video: IVideo | null) => {
        if (!video) return res.status(404).json({msg: 'error', data: null})
        res.status(200).json({msg: 'OK', data: video})
    })
})
// actualizar Info
router.patch('/', (req, res) => {
    videoctrl.updateVideoInfo(req.body).then((video: IVideo | null) => {
        if(!video) return res.status(404).json({msg: 'error', data: {}})
        res.status(200).json({msg: 'OK',data: video})
    })
})
// Actualizar RentUp
router.patch('/rentup/:id', (req, res) =>{
    videoctrl.updateVideoRentUp(req.params.id).then((success: boolean) => {
        if (!success) return res.status(500).json({msg: 'error', data: false})
        res.status(200).json({msg: 'OK', data: true})
    })
})
// Actualizar RentDown
router.patch('/rentdown/:id', (req, res) =>{
    videoctrl.updateVideoRentDown(req.params.id).then((success: boolean) => {
        if (!success) return res.status(500).json({msg: 'error', data: false})
        res.status(200).json({msg: 'OK', data: true})
    })
})
