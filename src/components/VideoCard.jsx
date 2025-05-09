import React, { useState } from 'react';
import { Card, Typography, Space, Tag, Modal } from 'antd';
import { EyeOutlined, LikeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const VideoCard = ({ video }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        hoverable
        onClick={handleCardClick}
        cover={
          <div style={{ position: 'relative' }}>
            <img
              alt={video.title}
              src={video.thumbnail}
              style={{ width: '100%', height: 180, objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '2px 4px',
                borderRadius: 4,
              }}
            >
              {video.duration}
            </div>
          </div>
        }
      >
        <Title level={5} ellipsis={{ rows: 2 }}>
          {video.title}
        </Title>
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Text type="secondary">{video.creator}</Text>
          <Space>
            <Text type="secondary">
              <EyeOutlined /> {video.views.toLocaleString()}
            </Text>
            <Text type="secondary">
              <LikeOutlined /> {video.likes.toLocaleString()}
            </Text>
          </Space>
          <Space wrap>
            {video.tags.map((tag, index) => (
              <Tag key={index} color="blue">
                {tag}
              </Tag>
            ))}
          </Space>
        </Space>
      </Card>

      <Modal
        title={video.title}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width="80%"
        style={{ top: 20 }}
      >
        <div style={{ width: '100%', aspectRatio: '16/9' }}>
          <video
            controls
            style={{ width: '100%', height: '100%' }}
            src={video.url}
          >
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div style={{ marginTop: 16 }}>
          <Text type="secondary">{video.description}</Text>
        </div>
      </Modal>
    </>
  );
};

export default VideoCard; 