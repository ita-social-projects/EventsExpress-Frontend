import React, { Component } from "react";
import PropTypes from "prop-types";

class MultiCheckbox extends Component {
  checkboxGroup() {
    const { options, input } = this.props;
    if (input.value === "") input.value = [];

    return options.map(option => {
      return (
        <div className="checkbox" key={option.name}>
          <label htmlFor="checkbox">
            <input
              // TODO key = need properly to think
              type="checkbox"
              name={`${input.name}[${option.name}]`}
              value={option.value}
              checked={input.value.find(x => x === option.value) !== undefined}
              onChange={event => {
                const newValue = [...input.value];
                if (event.target.checked) {
                  newValue.push(option.value);
                } else {
                  newValue.splice(newValue.indexOf(option.value), 1);
                }
                return input.onChange(newValue);
              }}
            />
            {option.text}
          </label>
        </div>
      );
    });
  }

  render() {
    return <div>{this.checkboxGroup()}</div>;
  }
}

MultiCheckbox.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
  }),
  options: PropTypes.array,
};

MultiCheckbox.defaultProps = {
  input: {
    value: "",
    name: "",
    onChange: () => {},
  },
  options: [],
};

export default MultiCheckbox;
