import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Upload, Icon, Modal, message,
} from 'antd';

/**
 * Based on antd Upload component, basic props type details can be refered from official docs:
 * https://ant.design/components/upload-cn/
 *
 * validType: PropTypes.string, valid image type string which can be uploaded, e.g. 'image/png,image/jpg,image/jpeg';
 * limitSize: PropTypes.number, limit size for uploaded image, default 10M;
 * files: PropTypes.array.isRequired, files accepted from/sent to parent component;
 * action: PropTypes.string.isRequired, remote url for uploading;
 * onFilesChange: PropTypes.func.isRequired, change event for uploading;
 */
export default class PicturesWall extends Component {
  static propTypes = {
    isMultiple: PropTypes.bool,
    validType: PropTypes.string,
    limitSize: PropTypes.number,
    files: PropTypes.array.isRequired,
    action: PropTypes.string.isRequired,
    onFilesChange: PropTypes.func.isRequired,
    outerProps: PropTypes.object,
  }

  static defaultProps = {
    limitSize: 10,
    isMultiple: false,
    outerProps: {},
    validType: 'image/png,image/jpg,image/jpeg',
  }

  state = {
    previewVisible: false,
    previewImage: '',
  }

  beforeUploadImage = (file) => {
    const { limitSize } = this.props;

    return new Promise((success, fail) => {
      const isValidSize = file.size < limitSize * 1024 * 1024;

      if (!isValidSize) {
        message.warning(`图片应小于${limitSize}M，请重新点击上传`);
        fail(file);
      }

      success(file);
    });
  }

  handleFileListChange = ({ fileList }) => {
    const files = fileList.filter((ele) => {
      if (ele.status === 'error') {
        message.error(`上传图片 ${ele.name} 失败，请重试`);
      }
      return ele.status !== 'error';
    });

    const { onFilesChange } = this.props;
    if (onFilesChange) {
      onFilesChange(files);
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
    const {
      files, action, validType, isMultiple, outerProps,
    } = this.props;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传图片</div>
      </div>
    );

    const props = {
      action,
      fileList: files,
      accept: validType,
      multiple: isMultiple,
      listType: 'picture-card',
      onPreview: this.handlePreview,
      onChange: this.handleFileListChange,
      beforeUpload: this.beforeUploadImage,
      ...outerProps,
    };

    return (
      <Fragment>
        <Upload
          {...props}
        >
          {files.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} onCancel={this.handleCancel}>
          <img alt="ima" src={previewImage} />
        </Modal>
      </Fragment>
    );
  }
}
