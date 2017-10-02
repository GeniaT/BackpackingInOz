var React = require('react');

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
    this.props.handleToggleClick(null);//setting the clickedToggle to null when searching
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </form>
    )
  }
}

class UnderSearchText extends React.Component {
  render() {
    return (
      <div>
        <h4>Use Search to find the information you need!</h4>
      </div>
    )
  }
}

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <SearchBox
          filterText={this.props.filterText}
          onFilterTextInput={this.props.onFilterTextInput}
          //passing to modifiy the value of clickedToggle when searching
          clickedToggle={this.props.clickedToggle}
          handleToggleClick={this.props.handleToggleClick}
        />
        <UnderSearchText />
      </div>
    )
  }
}

module.exports = Search;
