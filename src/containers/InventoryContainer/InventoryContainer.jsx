import { connect } from "react-redux";
import { getFormSyncErrors } from "redux-form";
import getUnitsOfMeasuring from "../../actions/unitOfMeasuring/unitsOfMeasuring-list-action";
import Inventory from "../../components/Inventory/Inventory";

const mapStateToProps = state => ({
  unitOfMeasuringState: state.unitsOfMeasuring,
  syncErrors: getFormSyncErrors("event-form")(state),
});

const mapDispatchToProps = dispatch => {
  return {
    getUnitsOfMeasuring: () => dispatch(getUnitsOfMeasuring()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
