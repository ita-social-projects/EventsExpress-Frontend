import React from "react";
import propTypes from "prop-types";

class CheckboxGroup extends React.Component {
  checkboxGroup() {
    const { options, input } = this.props;
    input.value = input.value.notificationTypes || input.value;
    return options.map((option, index) => {
      return (
        <div className="checkbox" key={option.id}>
          <label htmlFor="checkboxGroup">
            <input
              id="checkboxGroup"
              type="checkbox"
              style={{ marginRight: "8px" }}
              name={`${input.name}[${index}]`}
              value={option || []}
              checked={input.value.find(x => x.id === option.id) !== undefined}
              onChange={event => {
                const newValue = [...input.value];
                if (event.target.checked) {
                  newValue.push(option);
                } else {
                  newValue.splice(
                    newValue.findIndex(op => op.id === option.id),
                    1,
                  );
                }
                return input.onChange(newValue);
              }}
            />
            {option.name}
          </label>
        </div>
      );
    });
  }

  render() {
    return <div>{this.checkboxGroup()}</div>;
  }
}

CheckboxGroup.propTypes = {
  options: propTypes.array,
  input: propTypes.object,
};

CheckboxGroup.defaultProps = {
  options: [],
  input: {},
};

export default CheckboxGroup;
