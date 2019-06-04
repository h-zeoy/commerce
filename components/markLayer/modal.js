
import React from 'react';
import './modal.less';

class MarkLayer extends React.Component {
  componentDidMount() {
    const { active } = this.props;
    this.mark(active);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.active);
    this.mark(nextProps.active);
  }

  mark(show) {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    const wrap = document.getElementsByClassName('mark-layer-wrap')[0];
    if (show) {
      body.style.height = '100%';
      body.style.overflow = 'hidden';
      html.style.height = '100%';
      html.style.overflow = 'hidden';
      wrap.style.display = 'block';
    } else {
      body.style.height = 'auto';
      body.style.overflow = 'visible';
      html.style.height = 'auto';
      html.style.overflow = 'visible';
      wrap.style.display = 'none';
    }
  }

  render() {
    const { handleInputPass, value, title } = this.props;
    console.log(111);
    return (
      <div className="mark-layer-wrap">
        <div className="pay-wrap">
          <div />
          <div />
        </div>
      </div>
    );
  }
}
export default MarkLayer;
