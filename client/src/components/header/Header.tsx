import s from './Header.module.css'
import {Button, Layout, Space, Typography} from "antd";
import {TeamOutlined} from "@ant-design/icons";
import CustomButton from "../custom-button/CustomButton";
import {Link} from "react-router-dom";
import {Paths} from "../../path";

const Header = () => {
    return (
        <div>
            <Layout.Header className={s.header}>
                <Space>
                    <TeamOutlined className={s.teamIcon}/>
                    <Link to={Paths.home}>
                        <CustomButton type="ghost">
                            <Typography.Title level={1}>Сотрудники</Typography.Title>
                        </CustomButton>
                    </Link>
                </Space>
                <Space>
                    <Link to={Paths.register}>
                        <CustomButton type={'ghost'}>
                            Зарегистрировать
                        </CustomButton>
                    </Link>
                    <Link to={Paths.login}>
                        <CustomButton type={'ghost'}>
                            Войти
                        </CustomButton>
                    </Link>
                </Space>
            </Layout.Header>
        </div>
    );
};

export default Header;