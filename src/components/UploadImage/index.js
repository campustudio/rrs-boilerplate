import React from 'react';
import { Upload, Icon, message } from 'antd';
import { string, number } from 'prop-types';
import { beforeUploadImage } from '../../utils';

export default class UploadImage extends React.Component {
  static propTypes = {
    src: string,
    localUid: number.isRequired,
    fileStatus: string
  }

  static defaultProps = {
    src: '',
    fileStatus: 'uploading',
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleImageChange = (info) => {
    console.log('handleImageChange info: ', info);
    const {
      localUid, onImageChanging, onImageChange, onError
    } = this.props;

    if (!info || !info.file || !info.file.status) {
      return;
    }

    const file = info.file;

    if (file.status === 'uploading') {
      onImageChanging && onImageChanging(localUid);
      return;
    }

    if (file.status === 'done') {
      const response = file.response;
      if (response) {
        if (response.status === 0) {
          const { info = [] } = response.data;
          if (info.length > 0 && info[0].url) {
            onImageChange && onImageChange(info[0].url, localUid);
          }
        } else {
          onError && onError(localUid);
          message.error(response.message);
        }

        if (response.id) {
          message.info(response.id);
        }
      } else {
        onError && onError(localUid);
        message.error('上传失败，请重试。');
      }
    }
  }

  render() {
    const { src, fileStatus } = this.props;

    return (
      <div>
        <Upload
          name="image"
          accept="image/png,image/jpeg,image/jpg"
          listType="picture-card"
          action="//jsonplaceholder.typicode.com/posts/"
          showUploadList={false}
          beforeUpload={beforeUploadImage}
          onChange={info => this.handleImageChange(info)}
        >
          {
            (fileStatus != 'uploading') && src
              ? <img src={src} alt="上传图片预览" />
              : (
                <div>
                  <Icon type={fileStatus == 'uploading' ? 'loading' : 'plus'} />
                  <div className="ant-upload-text">上传图片</div>
                </div>
              )
          }
        </Upload>
      </div>
    );
  }
}
