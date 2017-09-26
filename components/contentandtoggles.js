var React = require('react');

class Content extends React.Component {
  render() {
    var rows = [];
    var category = this.props.data.category;
    this.props.data.forEach((info) => {
      if (info.content.indexOf(this.props.filterText) === -1) {
        return;
      }
       rows.push(<span className="content_items" key={info.content}> {info.content} </span>);
    });
    return (
      <div className="content">
        {rows}
      </div>
    )
  }
}

class Toggles extends React.Component {
  render() {
    var icons = [];
    var lastImg = null;
    this.props.data.forEach(function(element) {
      if (lastImg === null || lastImg !== element.toggleImg) {
        icons.push(<div className="toggle_container" key={element.toggleImg}><div className="toggle"><img src={element.toggleImg}/></div></div>);
        lastImg = element.toggleImg;
      }
    });
    return (
      <div className="togglesGroup">
        {icons}
      </div>
    )
  }
}

class ContentAndToggles extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userSearch: ''
    }
    this.searchUpdate = this.searchUpdate.bind(this);
  }

  searchUpdate(userSearch) {
    this.setState({
      userSearch: userSearch
    })
  }

  render() {
    return (
      <div>
        <Content
          data={this.props.data}
          filterText={this.props.filterText}
        />
        <Toggles data={this.props.data}/>
      </div>
    )
  }
}

module.exports = ContentAndToggles;
