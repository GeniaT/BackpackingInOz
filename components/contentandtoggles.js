var React = require('react');

class Content extends React.Component {
  render() {
    var rows = [];

    if (this.props.clickedToggle === null) {
      this.props.data.forEach((info) => {
        if (info.content.indexOf(this.props.filterText) === -1) {
          return;
        }
         rows.push(<span className="content_items" key={info.content}> {info.content} </span>);
      });
    } else {
      this.props.data.forEach((info) => {
        if (info.category === this.props.clickedToggle) {
          rows.push(<span className="content_items" key={info.content}> {info.content} </span>);
        }
      });
    }

    return (
      <div className="content">
        {rows}
      </div>
    )
  }
}

class Toggles extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleClickChange = this.handleToggleClickChange.bind(this);
  }

  handleToggleClickChange(e) {
    this.props.handleToggleClick(e.currentTarget.id);
    this.props.onFilterTextInput('');//clearing the searchbox to show only results related to the toggle
  }

  render() {
    // console.log(this);
    var icons = [];
    var lastImg = null;
    this.props.data.forEach((element) => {
      if (lastImg === null || lastImg !== element.toggleImg) {
        icons.push(<div className="toggle_container" id={element.category} onClick={this.handleToggleClickChange} key={element.toggleImg}><div className="toggle"><img src={element.toggleImg}/></div></div>);
        lastImg = element.toggleImg;
      }
    });
    return (
      <div
        className="togglesGroup">
        {icons}
      </div>
    )
  }
}

class ContentAndToggles extends React.Component {
  render() {
    return (
      <div>
        <Content
          data={this.props.data}
          filterText={this.props.filterText}
          clickedToggle={this.props.clickedToggle}
        />
        <Toggles
          data={this.props.data}
          onFilterTextInput={this.props.onFilterTextInput}//passing to clear the search when clicking on toggles
          clickedToggle={this.props.clickedToggle}
          handleToggleClick={this.props.handleToggleClick}
        />
      </div>
    )
  }
}

module.exports = ContentAndToggles;
