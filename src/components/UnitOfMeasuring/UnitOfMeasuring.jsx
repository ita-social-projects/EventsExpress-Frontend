import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UnitOfMeasuringAddWrapper from "../../containers/UnitsOfMeasuringContainer/UnitOfMeasuringAddContainer";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import UnitOfMeasuringListWrapper from "../../containers/UnitsOfMeasuringContainer/UnitOfMeasuringListContainer";
import getUnitsOfMeasuring from "../../actions/unitOfMeasuring/unitsOfMeasuringListAction";

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
            <SpinnerContainer showContent={unitsOfMeasuring}>
              <UnitOfMeasuringListWrapper data={unitsOfMeasuring} />
            </SpinnerContainer>
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
