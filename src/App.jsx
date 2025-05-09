import React, { useState, useRef, useEffect } from 'react'
import { Layout, Typography } from 'antd'
import VideoGallery from './components/VideoGallery'
import SearchBar from './components/SearchBar'
import 'antd/dist/reset.css'

const { Header, Content } = Layout
const { Title } = Typography

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(64)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const handleCategoryChange = (value) => {
    setSelectedCategory(value)
  }

  return (
    <Layout style={{ minHeight: '100vh' ,marginTop: '100px'}}>
      {/* <Header
        ref={headerRef}
        style={{
          background: '#fff',
          padding: '0 24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Title level={3} style={{ margin: 0 }}>AI 视频网站</Title>
      </Header> */}
      <Content
        style={{
          padding: '24px 0',
          background: '#f0f2f5',
          paddingTop: headerHeight + 24, // 自动避开header
          minHeight: `calc(100vh - ${headerHeight}px)`
        }}
      >
        <div
          style={{
            width: '100%',
            margin: '0 auto',
            padding: '0 16px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: 24,
              minHeight: 400,
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <SearchBar
              onSearch={handleSearch}
              onCategoryChange={handleCategoryChange}
            />
            <VideoGallery
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default App
