import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Upload, Icon, Modal, message,
} from 'antd';

/**
 * Based on antd Upload component, basic props type details can be refered from official docs:
 * https://ant.design/components/upload-cn/
 *
 * action: PropTypes.string.isRequired, remote url for uploading;
 * onFilesChange: PropTypes.func.isRequired, change event for uploading;
 * files: PropTypes.array, files accepted from/sent to parent component;
 * validType: PropTypes.string, valid image type string which can be uploaded, e.g. 'image/png,image/jpg,image/jpeg';
 * limitSize: PropTypes.number, limit size for uploaded image, default 10M;
 */
export default class PicturesWall extends Component {
  static propTypes = {
    action: PropTypes.string.isRequired,
    onFilesChange: PropTypes.func.isRequired,
    files: PropTypes.array,
    validType: PropTypes.string,
    limitSize: PropTypes.number,
    isMultiple: PropTypes.bool,
    outerProps: PropTypes.object,
  }

  static defaultProps = {
    files: [],
    validType: 'image/png,image/jpg,image/jpeg',
    limitSize: 10,
    isMultiple: false,
    outerProps: {},
  }

  state = {
    fileList: this.props.files ? this.props.files : [],
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

    this.setState({
      fileList: files,
    });
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    console.log('render fileList: ', fileList);
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
      fileList,
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
