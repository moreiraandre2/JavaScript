import React, { useState } from 'react';
import api from '../../services/api';
import './style.css';

function CliTable({cli}) {
  const [id, setId] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    const data = {"id":id};
    
    await api.delete('./clients', data);

  }

  return (
        <tr>
          <td>{cli.ID}</td>
          <td>{cli.Nome}</td>
          <td>{cli.CPF}</td>
          <td>
            <form onSubmit={handleSubmit()}>
              <input 
                name="id" 
                id="id" 
                type="hidden" 
                value={cli.ID} 
                onChange={e => setId(e.target.value)}
              />
              <button className="btn-rm">Remover</button>
            </form>
          </td>
        </tr>
            
    );
}

export default CliTable;