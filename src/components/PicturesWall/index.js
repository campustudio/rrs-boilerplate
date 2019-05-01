import React, { Component } from 'react';
import {
  Upload, Icon, Modal, message
} from 'antd';

const MAX_LIMIT = 9;
const isMultiple = true;
const IMAGE_SIZE_LIMIT = 10 * 1024 * 1024;

const beforeUploadImage = file => new Promise((success, fail) => {
  const isValidType = ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type);
  const isValidSize = file.size < IMAGE_SIZE_LIMIT;

  if (!isValidType) {
    message.error('仅支持jpg、png、jpeg格式');
    fail(file);
  }

  if (!isValidSize) {
    message.error('图片应小于10M，请重新点击上传');
    fail(file);
  }

  success(file);
});

export default class PicturesWall extends Component {
  static defaultProps = {
    fileList: [],
    limit: MAX_LIMIT,
  }

  state = {
    previewVisible: false,
    previewImage: '',
  }

  handleFileListChange = ({ fileList }) => {
    const files = fileList.filter((ele) => {
      if (ele.status === 'error') {
        message.error(`上传图片 ${ele.name} 失败，请重试`);
      }
      return ele.status !== 'error';
    });

    const { onFileListChange } = this.props;
    if (onFileListChange) {
      onFileListChange(files);
    }
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  render() {
    const { previewVisible, previewImage } = this.state;
    const { limit, files } = this.props;

    return (
      <div>
        <Upload
          multiple={isMultiple}
          accept="image/png,image/jpg,image/jpeg"
          listType="picture-card"
          action="//jsonplaceholder.typicode.com/posts/"
          beforeUpload={beforeUploadImage}
          fileList={files}
          onPreview={this.handlePreview}
          onChange={this.handleFileListChange}
        >
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">上传图片</div>
          </div>
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="ima" src={previewImage} />
        </Modal>
      </div>
    );
  }
}
