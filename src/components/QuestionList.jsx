import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import { Modal} from 'antd';
import './QuestionList.css'

import 'antd/dist/antd.css';

import { Col, Row, Statistic } from 'antd';

const { Countdown } = Statistic;




export const QuestionList = () => {
   
    const questions = useSelector(store => store.questions)
    const username = useSelector((store) => store.username)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [values, setValues] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [timeOut, setTimeOut] = useState(null);
    const deadline = Date.now() + 2000 * 25; 

    const newUserName = Object.values(username)
    

    const onTimerFinish = () => {
        showModal(false)
        setTimeOut(true)
    };


    const calculateResults = () => {

        let correct = 0;
        Object.values(values).forEach((value) => {
            if (value === 'true') {
                console.log(value)
                correct++
            }
        })
        setCorrectAnswers(correct)
        console.log(correct)
    }
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Derived Results: ", values);
    };


    const showModal = () => {
        setIsModalOpen(true);
        calculateResults()
        setTimeOut(false)

    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    console.log('questions', questions)
    const title = timeOut? 'Ваше время истекло' : 'Результат'
    console.log('render')
    return (
        <div>
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Countdown title="Тик-так" value={deadline} onFinish={onTimerFinish} />
                    </Col>
                </Row>
            </div>
            <div className='wrapper-upper'>
            <h1>Хорошо ли ты знаешь Dota 2?</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit} >
                    {questions.map(question => {
                        return question.multiple ?

                            <div key={question.id} className='wrapper'>
                                <h2 className='question-text'>{question.question}</h2>
                                <div className='input-wrapper'>
                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[0].correct}></input>
                                    <label  className='answer-text'htmlFor="html"><b >  1:</b>   {question.answers[0].answer}</label>

                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[1].correct} />
                                    <label className='answer-text' htmlFor="css"><b>  2:</b>   {question.answers[1].answer}</label>

                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[2].correct} />
                                    <label className='answer-text' htmlFor="javascript"><b>  3:</b>   {question.answers[2].answer}</label>

                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[3].correct} />
                                    <label className='answer-text' htmlFor="javascript"><b>  4:</b>   {question.answers[3].answer}</label>
                                </div>
                            </div>
                            :
                            <div key={question.id} className='wrapper'>
                                <h2 className='question-text'>{question.question}</h2>
                                <div className='input-wrapper'>
                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[0].correct}></input>
                                    <label className='answer-text' htmlFor="html"><b>  1:</b>   {question.answers[0].answer}  </label>

                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[1].correct} />
                                    <label className='answer-text' htmlFor="css"><b>  2:</b>   {question.answers[1].answer}</label>

                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[2].correct} />
                                    <label className='answer-text' htmlFor="javascript"><b> 3:</b>   {question.answers[2].answer}</label>

                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[3].correct} />
                                    <label className='answer-text' htmlFor="javascript"><b>  4:</b>   {question.answers[3].answer}</label>
                                </div>
                            </div>
                    })}
                    <button className='button' type="submit" onClick={showModal}>Завершить</button>

                    <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Гость: <b>{newUserName}</b></p>
                        <p>Ваш результат:{correctAnswers} из {questions.length}</p>
                        <p>Успешно:{Math.floor((correctAnswers / questions.length) * 100)}%</p>
                    </Modal>
                </form>
            </div>

        </div >
    )
}
