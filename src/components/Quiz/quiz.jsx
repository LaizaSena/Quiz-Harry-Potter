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
    const [questionAtual, setQuestionAtual] = useState(0);

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setScore(score + 1); // se estiver correto, adiciona 1 à pontuação
        }

        const proximaQuestion = questionAtual + 1;
        if (proximaQuestion < questions.length) {
            setQuestionAtual(proximaQuestion);
        } else {
            setShowScore(true);
        }
    }

    return (
        <div className='container'>
            {showScore ? ( // ternário que vai indicar a quantidade de questões que pontuou
                <section className='score'>
                    Você pontuou {score} de {questions.length}
                </section>
            ) : (
                <>
                    <section className='count-questions'>
                        <span>------------------ Questão {questionAtual + 1}</span> de {questions.length} ------------------ {/* Calcula em qual questão a pessoa está */}
                    </section>
                    <div className='form-questions'>
                        <section className='question'>
                            ⚡⚡⚡
                            <p><b>{questions[questionAtual].question}</b></p> {/* Para acessar a questão desejada dentro do array */}
                            ⚡⚡⚡
                        </section>

                        <section className='answer'>
                            {questions[questionAtual].options.map((options, index) => (
                                <button className='btn-answer' onClick={() => handleAnswer(options.isCorrect)} key={index}>
                                    {options.answer}
                                </button>
                            ))}
                        </section>
                    </div>
                </>
            )}
        </div>
    )
}

export default quiz
