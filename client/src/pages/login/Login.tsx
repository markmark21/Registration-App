import React, {useState} from 'react';
import Layout from "../../components/layout/Layout";
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/custom-input/CustomInput";

import CustomButton from "../../components/custom-button/CustomButton";
import {Link} from "react-router-dom";
import {Paths} from "../../path";
import {PasswordInput} from "../../components/password-input/PasswordInput";
import {useLoginMutation, UserData} from "../../app/services/auth";
import {isErrorWithMessage} from "../../utils/is-error-with-message";
import ErrorMessage from "../../components/error-message/ErrorMessage";

const Login = () => {
    const [loginUser, loginUserResult] = useLoginMutation()
    const [error, setError] = useState('')

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap()
        } catch(err) {
            const mayBeError = isErrorWithMessage(err)

            if(mayBeError) {
                setError(err.data.message)
            } else {
                setError('Неизвестная ошибка')
            }
        }
    }

    return (
        <div>
            <Layout>
                <Row align={'middle'} justify={'center'}>
                    <Card title={'Войдите'} style={{width: "30rem"}}>
                        <Form onFinish={login}>
                            <CustomInput placeholder='Email' name='email' type='email'/>
                            <PasswordInput name='password' placeholder='Пароль'/>
                            <CustomButton type='primary' htmlType='submit'>
                                Войти
                            </CustomButton>
                        </Form>
                        <Space direction='vertical' size='large'>
                            <Typography.Text>
                                Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
                            </Typography.Text>
                            <ErrorMessage message={ error }/>
                        </Space>
                    </Card>
                </Row>
            </Layout>
        </div>
    );
};

export default Login;