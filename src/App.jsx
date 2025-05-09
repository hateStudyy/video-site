import React from 'react'
import { Layout, Typography } from 'antd'
import VideoGallery from './components/VideoGallery'
import 'antd/dist/reset.css'

const { Header, Content } = Layout
const { Title } = Typography

function App() {
  return (
    <Layout>
      <Header style={{ color: '#fff', fontSize: 24 }}>AI 视频网站</Header>
      <Content style={{ padding: '24px' }}>
        <Title level={2}>AI 生成视频推荐</Title>
        <VideoGallery />
      </Content>
    </Layout>
  )
}

export default App
