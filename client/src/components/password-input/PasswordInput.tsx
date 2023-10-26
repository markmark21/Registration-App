import {Form, Input} from 'antd';
import { NamePath } from 'antd/es/form/interface';
import React from 'react';


type Props = {
    name: string,
    placeholder: string,
    dependencies?: NamePath[]
}
const PasswordInput = ({
    name,
    placeholder,
    dependencies
                       }: Props) => {
    return (
        <div>
            <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback
            rules={[{
                required: true,
                message: 'Обязательное поле'
            }, ({getFieldValue}) => ({
                validator(_, value) {
                    if(!value){
                        return Promise.resolve();
                    }

                    if(name === 'confirmPassword'){
                        if(!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                         return Promise.reject(new Error('Пароли должны совпадать'))
                    } else {
                        if(value.length < 6) {
                            return Promise.reject(new Error('Пароль должен быть больше 6 символов'))
                        }
                    }
                }
            })]}
            >
              <Input.Password placeholder={placeholder} size={'large'}/>
            </Form.Item>
        </div>
    );
};

export default PasswordInput;