import React, {useEffect, useState} from 'react';
import api from './services/api';

import './App.css';
import CliTable from './components/table';

function App() {
  const [clis, setClients] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    async function loadClients(){
      const response = await api.get('./');
      setClients(response.data);
    }
    loadClients();
  },[]);

  async function handleSubmit(e){
    e.preventDefault();

    const data = {"nome":nome,"cpf":cpf};
    
    const response = await api.post('./clients', data);
    
    setClients([...clis, response.data]);

  }

  return (
    <div className="App">
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <h3>Cadastro de Pessoa</h3>
            <div id="input-name">
              <label>Nome:</label>
              <input 
                type="text" 
                id="nome"
                name="nome"
                required
                onChange={e => setNome(e.target.value)}
              />
            </div>
            <div id="input-cpf">
              <label>CPF:</label>
              <input 
                type="text" 
                id="cpf"
                name="cpf"
                required
                onChange={e => setCpf(e.target.value)}
              />
            </div>

            <button type="submit">Salvar</button>
          </form>
        </div>
        <table className="">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clis.map(cli  => (
              <CliTable key={cli.id} cli={cli}/>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
