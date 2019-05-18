import React from "react";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.previous}>
          Previous
        </button>
        <button type="button" onClick={this.props.next}>
          Next
        </button>
      </div>
    );
  }
}

export default Navigation;
