import React from 'react';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const SearchBar = ({ onSearch, onCategoryChange }) => {
  return (
    <div style={{ 
      marginBottom: 24,
      padding: '16px 0',
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: 16,
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <Search
          placeholder="搜索视频..."
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
          style={{ width: '60%' }}
        />
        <Select
          placeholder="选择分类"
          style={{ width: 200 }}
          onChange={onCategoryChange}
          allowClear
          size="large"
        >
          <Option value="all">全部分类</Option>
          <Option value="科技">科技</Option>
          <Option value="艺术">艺术</Option>
          <Option value="音乐">音乐</Option>
          <Option value="舞蹈">舞蹈</Option>
          <Option value="电影">电影</Option>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar; 