import React, {useState} from 'react'
import 'antd/dist/antd.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux';
import {addUsername } from '../store/actions';
import { Button, Form, Input } from 'antd';
import './InitialPage.css'


const InitialPage = () => {
    const navigate=useNavigate()
    const [isInputOpen, setIsInputOpen] = useState(true);
    const dispatch = useDispatch();

    const onFinish = (values) => {
    console.log('Success:', values);
    handleOptionClick()
    setIsInputOpen(false)
    dispatch(addUsername(values))
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleOptionClick = (e) => {
    
    navigate('/questions')
    
  }
 

  return (
    <div className='initial-page' >

    <Form
      name="basic"
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span: 4,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      open={isInputOpen}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
      
        label="Ваша имя"
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите имя пользователя!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      

     
      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 18,
        }}
      >
        <div>
        <Button className='btn'  type="primary" htmlType="submit"  >
          Начать тест
        </Button>

        </div>
      </Form.Item>
    </Form>
    </div>
  );
};

export default InitialPage;