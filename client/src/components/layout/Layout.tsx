import {Layout as AntLayout} from "antd";
import s from './Layout.module.css'


type Props = {
    children: React.ReactNode
}
const Layout = ({children}: Props) => {
    return (
        <div className={s.main}>
            <AntLayout.Content style={{height: '100%'}}>
            { children }
            </AntLayout.Content>
        </div>
    );
};

export default Layout;