var React = require('react');
var PropTypes = require('prop-types');


class UserSelection extends React.Component {
  render() {
    var rows = [];
    // console.log(this.props.data);
    this.props.data.forEach((item) => {
      item.selected === true ? rows.push(<p key={item.content}>{item.content}</p>) : null;
    });
    return (
      <div className="userSelection">
        <h2>Selected items to keep in mind</h2>
        {rows}
      </div>
    )
  }
}

UserSelection.propTypes = {
  data: PropTypes.array.isRequired,
}

module.exports = UserSelection;
