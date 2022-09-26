import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom';

// styles
import "./style.scss"

const { Header } = Layout;
const AppHeader = () => {
    return (
        <section className='app-header'>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                <Menu theme="dark">
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/hello">Cryptocurrencies</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </section>
    )
}

export default AppHeader