import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import VideoCard from './VideoCard';
import videos from '../data/videos';

const VideoGallery = ({ searchQuery, selectedCategory }) => {
  const [filteredVideos, setFilteredVideos] = useState(videos);

  useEffect(() => {
    let filtered = videos;

    // 搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // 分类过滤
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }

    setFilteredVideos(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: 24,
        marginTop: 12,
        minHeight: 400,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        {filteredVideos.map((video) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={video.id}>
            <VideoCard video={video} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoGallery; 