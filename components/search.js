var React = require('react');

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
      console.log('in searchbox' + this.props);
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
        <p>Have a question? Use Search to find more information!</p>
      </div>
    )
  }
}

class Search extends React.Component {
  render() {
    console.log('in search' + this.props);

    return (
      <div className="search">
        <SearchBox
          filterText={this.props.filterText}
          onFilterTextInput={this.props.onFilterTextInput}/>
        <UnderSearchText />
      </div>
    )
  }
}

module.exports = Search;
