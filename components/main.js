var React = require('react');
var Search = require('./Search');
var ContentAndToggles = require('./ContentAndToggles');
var UserSelection = require('./UserSelection');
var update = require('immutability-helper');

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        clickedToggle: null,
        data: this.props.data
      };
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
      this.handleToggleClick = this.handleToggleClick.bind(this);
      this.updateSelectPropInData = this.updateSelectPropInData.bind(this);
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

    updateSelectPropInData(text) {
      //creating a copy of the initial data, update it and replace the initial data with the updated copy
      const newArray = this.state.data;
      let index = newArray.findIndex(x => x.content === text);
      newArray[index].selected = true; //
      this.setState({
        data: newArray
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
          updateSelectPropInData = {this.updateSelectPropInData}
        />
        <UserSelection
          data={this.props.data}
        />
      </div>
    );
  }
}

module.exports = Main;
