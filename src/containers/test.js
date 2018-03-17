import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Test extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props);
    if (this.props.stuff.length === 0) return <div>Container Test</div>;

    return <div>{this.props.stuff.data.name}</div>;
  }
}

const mapStateToProps = state => ({
  stuff: state.stuff
});

export default connect(mapStateToProps)(Test);
