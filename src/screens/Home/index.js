import React, { Component } from 'react';
import { connect } from 'react-redux';
import PicturesWall from '@components/PicturesWall';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onFileListChange = (files) => {
    console.log('filted files: ', files);
    this.setState({
      files
    });
  }

  render() {
    const { files } = this.state;

    return (
      <div>
        <PicturesWall onFileListChange={this.onFileListChange} files={files} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
