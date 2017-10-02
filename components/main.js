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
        // selected: this.props.data[0].selected
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
      const newArray = this.state.data;
      // add code to get the right obj
      newArray[0].selected = true; //change this to dynamically update the right obj
      this.setState({
        data: newArray
      });
      // console.log(selected);
      // console.log(this.state.data);
   }

  render() {
    console.log(this.state.data);
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
          // onItemSelected={this.handleSelectEdit}
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
