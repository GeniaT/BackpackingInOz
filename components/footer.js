var React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <span className="textNearFooterIcon">Created by <a href="https://github.com/GeniaT" target="_blank">Genia</a> with</span><img className='footerIcon'src="images/reacticon.png" />
      </div>
    )
  }
}

module.exports = Footer;
