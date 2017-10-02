var React = require('react');
var PropTypes = require('prop-types');

class Content extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleItemSelectedChange = this.handleItemSelectedChange.bind(this);
  // }
  //
  // handleItemSelectedChange() {
  //   this.props.onItemSelected(e);
  // }
  //

  constructor(props) {
    super(props);
    this.handleSelectedPropChange=this.handleSelectedPropChange.bind(this);
  }

  handleSelectedPropChange(e) {
    // console.log(this.props.data);
    // console.log('test: ' + e.currentTarget.innerText);
    // console.log("data[0] from content: " + this.props.data[0].content);
    this.props.updateSelectPropInData(e.currentTarget.innerText);
    console.log(this.props.data[0]);
  }

  render() {
    var rows = [];
    var data = this.props.data;

    if (this.props.clickedToggle === null) {
      this.props.data.forEach((info) => {
        if (info.content.indexOf(this.props.filterText) === -1) {
          return;
        }
        if (info.link !== null) {
          rows.push(<span key={info.content}><span className="content_items" key={info.content} onClick={this.handleSelectedPropChange}><a href={info.link} target="_blank">{info.content}</a></span> | </span>);
        } else if (info.link === null) {
          rows.push(<span key={info.content}><span className="content_items" key={info.content} onClick={this.handleSelectedPropChange}>{info.content}</span> | </span>);
        }
      });
    } else {
      rows.push(<h2 key={this.props.clickedToggle}>#{this.props.clickedToggle}</h2>);
      this.props.data.forEach((info) => {
        if (info.category === this.props.clickedToggle) {
          if (info.link !== null) {
            rows.push(<span key={info.content}><span className="content_items" key={info.content} onClick={this.handleSelectedPropChange}><a href={info.link} target="_blank">{info.content}</a></span> | </span>);
          } else if (info.link === null) {
            rows.push(<span key={info.content}><span className="content_items" key={info.content} onClick={this.handleSelectedPropChange}>{info.content}</span> | </span>);
          }
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
          // onItemSelected={this.props.onItemSelected}
          updateSelectPropInData={this.props.updateSelectPropInData}
        />
        <Toggles
          data={this.props.data}
          onFilterTextInput={this.props.onFilterTextInput}
          clickedToggle={this.props.clickedToggle}
          handleToggleClick={this.props.handleToggleClick}
        />
      </div>
    )
  }
}
Content.propTypes = {
  filterText: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

Toggles.propTypes = {
  data: PropTypes.array.isRequired,
}

ContentAndToggles.propTypes = {
  onFilterTextInput: PropTypes.func.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

module.exports = ContentAndToggles;
