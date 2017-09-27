var React = require('react');
var Search = require('./Search');
var ContentAndToggles = require('./ContentAndToggles');
var UserSelection = require('./UserSelection');

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        clickedToggle: null
      };
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    handleToggleClick(clickedToggle) {
      this.setState({
        clickedToggle: clickedToggle
      });
    }

  render() {
    return (
      <div className="main">
        <Search
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
          //passing to modifiy the value of clickedToggle when searching
          clickedToggle={this.state.clickedToggle}
          handleToggleClick={this.handleToggleClick}
        />
        <ContentAndToggles
          data={this.props.data}
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}//passing to clear the search box when clicking on toggles
          clickedToggle={this.state.clickedToggle}
          handleToggleClick={this.handleToggleClick}
        />
        <UserSelection />
      </div>
    );
  }
}

module.exports = Main;
