import React from "react";
import { Card, Row, Col } from "antd";
import videos from "../data/videos";

const VideoGallery = () => (
  <Row gutter={[16, 16]}>
    {videos.map((video, idx) => (
      <Col xs={24} sm={12} md={8} lg={8} xl={8} key={idx}>
        <Card title={video.title} bordered={false}>
          <video width="100%" controls>
            <source src={video.url} type="video/mp4" />
            您的浏览器不支持 video 标签。
          </video>
        </Card>
      </Col>
    ))}
  </Row>
);

export default VideoGallery; 