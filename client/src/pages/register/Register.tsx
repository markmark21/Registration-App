import Layout from "../../components/layout/Layout";
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/custom-input/CustomInput";
import CustomButton from "../../components/custom-button/CustomButton";
import {Link} from "react-router-dom";
import {Paths} from "../../path";
import {PasswordInput} from "../../components/password-input/PasswordInput";

const Login = () => {
    return (
        <div>
            <Layout>
                <Row align={'middle'} justify={'center'}>
                    <Card title={'Зарегистрируйтесь'} style={{width: "30rem"}}>
                        <Form onFinish={() => null}>
                            <CustomInput placeholder='Имя' name='name' />
                            <CustomInput placeholder='Email' name='email' type='email'/>
                            <PasswordInput name='password' placeholder='Пароль'/>
                            <PasswordInput name='confirmPassword' placeholder='Подтвердите пароль'/>
                            <CustomButton type='primary' htmlType='submit'>
                                Зарегистрироваться
                            </CustomButton>
                        </Form>
                        <Space direction='vertical' size='large'>
                            <Typography.Text>
                                Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
                            </Typography.Text>
                        </Space>
                    </Card>
                </Row>
            </Layout>
        </div>
    );
};

export default Login;