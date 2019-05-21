
import React from 'react';
import ImagePicker from 'antd-mobile/lib/image-picker'; // 加载 JS
import 'antd-mobile/lib/image-picker/style/css'; // 加载 CSS

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}];

class ImagePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: data,
    };
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
      </div>
    );
  }
}

export default ImagePickerExample;
