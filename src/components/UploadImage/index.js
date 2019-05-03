import React from 'react';
import { Upload, Icon, message } from 'antd';
import { string, number } from 'prop-types';
import { beforeUploadImage } from '../../utils';

export default class UploadImage extends React.Component {
  static propTypes = {
    src: string,
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
