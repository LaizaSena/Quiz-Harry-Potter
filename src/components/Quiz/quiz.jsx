import React from 'react';

import './style.css';

function quiz() {
    return (
        <div className='container'>
            <div className='form-questions'>
                <section className='perguntas'>
                    ⚡⚡⚡
                    <p>Aqui ficam as perguntas.</p>
                    ⚡⚡⚡
                </section>

                <section className='alternativas'>
                    <button>alternativa 1</button>
                    <button>alternativa 1</button>
                    <button>alternativa 1</button>
                    <button>alternativa 1</button>
                </section>
            </div>
        </div>
    )
}

export default quiz
