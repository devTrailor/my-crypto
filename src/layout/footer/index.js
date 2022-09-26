import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout
const AppFooter = () => {
  return (
    <section className='app-footer'>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </section>
  )
}

export default AppFooter