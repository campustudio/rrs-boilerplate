import React, { Component } from 'react';
import { connect } from 'react-redux';
import PicturesWall from '@components/PicturesWall';
import AsyncCascader from '@components/AsyncCascader';

const jph = '//jsonplaceholder.typicode.com/posts/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      // files: [{
      //   uid: 'rc-upload-1556800838178-4',
      //   status: 'done',
      //   name: 'galaxy.png'
      // }],
    };
  }

  onFilesChange = (files) => {
    console.log('filted files: ', files);
  }

  render() {
    const { files } = this.state;

    return (
      <div>
        <PicturesWall
          action={jph}
          onFilesChange={this.onFilesChange}
          files={files}
        />
        <AsyncCascader type="edit" fieldNames={{ label: 'label', value: 'value', children: 'children' }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
