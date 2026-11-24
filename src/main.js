import './style.css'

document.querySelector('#app').innerHTML = `
  <main>
    <h1>Projeto Integrador II</h1>
    <h2>Minha primeira aplicação</h2>
    <p id="status">Verificando a API...</p>
    <p id="data"></p>
  </main>
`

async function verificarAPI() {
  try {
    const resposta = await fetch('http://localhost:3000/api/health')
    const dados = await resposta.json()

    document.querySelector('#status').textContent =
      'Status da API: ' + dados.status

    document.querySelector('#data').textContent =
      'Data e horário: ' + dados.date

  } catch (erro) {
    document.querySelector('#status').textContent =
      'Não foi possível conectar à API.'
  }
}

verificarAPI()