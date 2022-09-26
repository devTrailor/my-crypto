import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'

import { Layout } from 'antd';
import AppFooter from './layout/footer';
import AppHeader from './layout/header';

const { Content } = Layout

const AppRouter = () => {
    return (
        <>
            <Layout>
                <AppHeader />
                <Layout>
                    {/* <AppSidebar /> */}
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Routes>
                                <Route exact path='/' element={<Home />} />
                            </Routes>
                        </div>
                    </Content>
                </Layout>
                <AppFooter />
            </Layout>
        </>
    )
}

export default AppRouter