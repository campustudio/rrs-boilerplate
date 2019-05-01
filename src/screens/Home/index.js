import React, { Component } from 'react';
import { connect } from 'react-redux';
import PicturesWall from '@components/PicturesWall';

const jph = '//jsonplaceholder.typicode.com/posts/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onFilesChange = (files) => {
    console.log('filted files: ', files);
    this.setState({
      files
    });
  }

  render() {
    const { files } = this.state;

    return (
      <div>
        <PicturesWall
          onFilesChange={this.onFilesChange}
          files={files}
          action={jph}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
