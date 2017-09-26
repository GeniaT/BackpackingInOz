var React = require('react');
var Search = require('./Search');
var ContentAndToggles = require('./ContentAndToggles');
var UserSelection = require('./UserSelection');

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: ''
      };

      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }

  render() {
    console.log(this);
    return (
      <div className="main">
        <Search
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <ContentAndToggles
          data={this.props.data}
          filterText={this.state.filterText}
        />
        <UserSelection />
      </div>
    );
  }
}

module.exports = Main;
