import s from './Header.module.css'
import {Button, Layout, Space} from "antd";
import {TeamOutlined} from "@ant-design/icons";

const Header = () => {
    return (
        <div>
            <Layout.Header className={s.header}>
                <Space>
                    <TeamOutlined className={s.teamIcon}/>
                    <Button type='link'>Click</Button>
                </Space>
            </Layout.Header>
        </div>
    );
};

export default Header;