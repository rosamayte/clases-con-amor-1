import express from 'express'
import {v4 as uid} from 'uuid'
import * as userctrl from '../controllers/users'
import { IUser } from '../models/IUser'

export const router = express.Router()

//get all
router.get('/',(req, res) => {
    userctrl.getUsers().then((users: Array<IUser>) => {
        res.status(200).json({msg: 'OK', data: users})
    })
})
// obtener x ID
router.get('/:id', (req, res) => {
    userctrl.getUser(req.params.id).then((user: IUser | null) => {
        if(!user) return res.status(403).json({msg: 'error'})
        delete user.uid 
        res.status(200).json({msg: 'OK', data: user})
    })
})
// crear usuario
router.post('/',(req, res) => {
    const u:IUser = req.body
    u.uid = uid()
    u.rented = []
    userctrl.createUser(u).then((user:IUser) => {
        if(!user) return res.status(500).json({msg: 'error'})
        res.status(201).json({msg: 'OK', data: user})
    })
})
// actualizar usuario
router.patch('/', (req, res) => {
    userctrl.updateUser(req.body).then((user: IUser | null) => {
        //console.log(user)
        if(!user) return res.status(404).json({msg: 'error', data: {}})
        res.status(200).json({msg: 'OK', data: user})
    })
})
// borrar
router.delete('/:id', (req, res) => {
    userctrl.deleteUser(req.params.id).then((user: IUser | null) => {
        if(!user) return res.status(404).json({msg:'error', data: {}})
        res.status(200).json({msg: 'OK', data: user})
    })
})
