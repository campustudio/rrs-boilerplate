import React, { Component } from 'react';
import { connect } from 'react-redux';
import PicturesWall from '@components/PicturesWall';
import AsyncCascader from '@components/AsyncCascader';
import { message } from 'antd';

const jph = '//jsonplaceholder.typicode.com/posts/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      options: null,
      address: null,
    };
    this.targetOption = null;
  }

  componentDidMount = async () => {
    // async to get options and address
    const newOptions = [{
      value: '000',
      label: 'Zhejiang',
      isLeaf: false,
    }, {
      value: '111',
      label: 'Jiangsu',
      isLeaf: false,
    }];
    const newAddress = ['111', '111001'];

    // if page type is edit, add no need
    // get targetOption loading data by address[0]
    newOptions.forEach((ele) => {
      if (ele.value === newAddress[0]) {
        this.targetOption = ele;
      }
    });

    this.targetOption.loading = true;
    // load options lazily
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      this.targetOption.loading = false;
      this.targetOption.children = [{
        label: `${this.targetOption.label}city001`,
        value: `${this.targetOption.value}001`,
      }, {
        label: `${this.targetOption.label}city002`,
        value: `${this.targetOption.value}002`,
      }];

      this.setState({
        options: newOptions,
        address: newAddress,
      });

      return res;
    } catch (err) {
      message.error(err.toString());
      return err;
    }







    // if (this.targetOption) {
    //   this.onLoad(this.targetOption, newOptions, newAddress);
    // }



    // then
    // this.newOptions = options.map((ele) => {
    //   return ele.value === address[0] ? {
    //     ...ele,
    //     children
    //   } : ele;
    // });
    // console.log('this.newOptions: ', this.newOptions);

    // this.setState({
    //   options: this.newOptions,
    // });
  }

  onFilesChange = (files) => {
    console.log('filted files: ', files);
    this.setState({
      files
    });
  }

  onLoad = async (targetOption) => {
    const { options } = this.state;
    targetOption.loading = true;

    // load options lazily
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label}city001`,
        value: `${targetOption.value}001`,
      }, {
        label: `${targetOption.label}city002`,
        value: `${targetOption.value}002`,
      }];

      this.setState({
        options
      });

      return res;
    } catch (err) {
      message.error(err.toString());
      return err;
    }
  }

  onCascaderChange = ({ value }) => {
    console.log('onCascaderChange value: ', value);
    this.setState({
      address: value
    });
  }

  render() {
    const { files, options, address } = this.state;

    return (
      <div>
        <PicturesWall
          onFilesChange={this.onFilesChange}
          files={files}
          action={jph}
        />
        {
          options
          && (
            <AsyncCascader value={address} options={options} asyncLoad={this.onLoad} onCascaderChange={this.onCascaderChange} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
