import { app } from '../config/express'
import { router as userroutes } from '../routes/users'
import { router as videosroutes } from '../routes/videos'

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'OK' })
})
app.use('/users', userroutes)
app.use('/videos', videosroutes)
app.listen(3000, () => { console.log('Escuchando en el puerto: 3000') })

