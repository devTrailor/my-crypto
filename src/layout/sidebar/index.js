import React from 'react'
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const AppSidebar = () => {
    return (
        <section className='app-sidebar'>
            <Sider breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}>
                <div className="logo" />
                gfgfg

            </Sider>

        </section>
    )
}

export default AppSidebar