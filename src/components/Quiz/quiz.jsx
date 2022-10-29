import React, { useState } from 'react';
import './style.css';

const questions = [
    {
        question: 'Que dia é o aniversário do Harry?',
        options: [
            { answer: '31 de julho', isCorrect: true },
            { answer: '09 de janeiro', isCorrect: false },
            { answer: '15 de janeiro', isCorrect: false },
            { answer: '31 de agosto', isCorrect: false },
        ],
    },
    {
        question: 'Em "Harry Potter e a Pedra Filosofal", de que animal Voldemort bebe o sangue?',
        options: [
            { answer: 'Cobra', isCorrect: false },
            { answer: 'Unicórnio', isCorrect: true },
            { answer: 'Acromântula', isCorrect: false },
            { answer: 'Hippogrifo', isCorrect: false },
        ],
    },
    {
        question: 'Quem era o herdeiro de Salazar Sonserina na câmara secreta?',
        options: [
            { answer: 'Harry Potter', isCorrect: false },
            { answer: 'Tom Riddle', isCorrect: true },
            { answer: 'Dumbledore', isCorrect: false },
            { answer: 'Rony Weasley', isCorrect: false },
        ],
    },
    {
        question: 'O que Sirius Black é de Harry Potter?',
        options: [
            { answer: 'Padrasto', isCorrect: true },
            { answer: 'Irmão', isCorrect: false },
            { answer: 'Primo', isCorrect: false },
            { answer: 'Padrinho', isCorrect: true },
        ],
    },
]

function quiz() {
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    return (
        <div className='container'>
            <form className='form-questions'>
                {showScore ? ( // ternário que vai indicar a quantidade de questões que pontuou
                    <section className='score'>
                        Você pontuou {score} de {questions.length}
                    </section>
                ) : (
                    <>
                        <section className='question'>
                            ⚡⚡⚡
                            <p>{questions[0].question}</p> {/* Para acessar a questão desejada dentro do array */}
                            ⚡⚡⚡
                        </section>

                        <section className='answer'>
                            {questions[0].options.map[(options, index) => (
                                <button onClick={() => handleAnswer(options.isCorrect)} key={index}>
                                    {options.answer}
                                </button>
                            )]}
                        </section>
                    </>
                )}
            </form>


        </div>
    )
}

export default quiz
