import React from 'react';
import HP from '../../assets/icon-hp.png';

import './style.css';

function Index() {
    return (
        <div className='container-login'>
            <form>
                <img src={HP} width='100px' />
                <h2 className='text-login'>
                    Olá, bruxinha(o), está pronta(o) para nosso quiz?
                    Insira seu nome, selecione sua casa e vamos começar!
                </h2>
                <input type='text' placeholder='Nome'/>
                <select name='select' placeholder='Casa'>
                    <option value='casa' selected>Casa</option>
                    <option value='corvinal'>Corvinal</option>
                    <option value='grifinoria'>Grifinória</option>
                    <option value='lufa-lufa'>Lufa-Lufa</option>
                    <option value='sonserina'>Sonserina</option>
                </select>
                <button className='btn-login'>Começar</button>
            </form>
        </div>
    )
}

export default Index
