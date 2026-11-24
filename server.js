import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API funcionando!',
    date: new Date().toLocaleString('pt-BR')
  })
})

app.listen(PORT, () => {
console.log('Servidor funcionando em http://localhost:' + PORT)
})