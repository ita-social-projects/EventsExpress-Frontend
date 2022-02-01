import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UnitOfMeasuringAddWrapper from "../../containers/unitsOfMeasuring/unitOfMeasuring-add";
import SpinnerWrapper from "../../containers/spinner";
import UnitOfMeasuringListWrapper from "../../containers/unitsOfMeasuring/UnitOfMeasuringListWrapper";
import getUnitsOfMeasuring from "../../actions/unitOfMeasuring/unitsOfMeasuring-list-action";

class UnitsOfMeasuring extends Component {
  componentWillMount = () => this.props.getUnitsOfMeasuringDispatch();

  render() {
    const { unitsOfMeasuring } = this.props;
    return (
      <div>
        <table className="table w-100 m-auto">
          <tbody>
            <UnitOfMeasuringAddWrapper
              item={{
                id: "00000000-0000-0000-0000-000000000000",
                unitName: "",
                shortName: "",
                category: "",
              }}
            />
            <SpinnerWrapper showContent={unitsOfMeasuring}>
              <UnitOfMeasuringListWrapper data={unitsOfMeasuring} />
            </SpinnerWrapper>
          </tbody>
        </table>
      </div>
    );
  }
}

UnitsOfMeasuring.defaultProps = {
  getUnitsOfMeasuringDispatch: () => {},
  unitsOfMeasuring: [],
};

UnitsOfMeasuring.propTypes = {
  getUnitsOfMeasuringDispatch: PropTypes.func,
  unitsOfMeasuring: PropTypes.array,
};

const mapStateToProps = state => ({
  unitsOfMeasuring: state.unitsOfMeasuring.units,
});

const mapDispatchToProps = dispatch => {
  return {
    getUnitsOfMeasuringDispatch: () => dispatch(getUnitsOfMeasuring()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitsOfMeasuring);
