import React, { useState } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import {
  FilterExpansionPanelDetails,
  FilterExpansionPanelSummary,
  FilterExpansionPanelWrapper,
} from "./filter-expansion-panel-parts";
import useFilterExpansionPanelStyles from "./filter-expansion-panel-styles";

<<<<<<< HEAD
const FilterExpansionPanel = ({
  title,
  children,
  onClearClick,
  clearDisabled,
}) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useFilterExpansionPanelStyles();
=======
export const FilterExpansionPanel = ({ title, children, onClearClick, clearDisabled = false, showClearButton = true }) => {
    const [expanded, setExpanded] = useState(false);
    const classes = useFilterExpansionPanelStyles();
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2

  const handleChange = panel => (event, newExpanded) => {
    if (
      event.target.localName === "button" ||
      event.target.localName === "span"
    ) {
      return;
    }

    setExpanded(newExpanded ? panel : false);
  };

  return (
    <FilterExpansionPanelWrapper
      square
      expanded={expanded}
      onChange={handleChange(true)}
    >
      <FilterExpansionPanelSummary
        key={expanded}
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <div className={classes.headingWrapper}>
          <i
            className={`fas ${expanded ? "fa-chevron-up" : "fa-chevron-down"}`}
          />
          <h6 className={classes.heading}>{title}</h6>
        </div>
        <Button
          color="secondary"
          size="small"
          onClick={onClearClick}
          disabled={clearDisabled}
        >
<<<<<<< HEAD
          Clear
        </Button>
      </FilterExpansionPanelSummary>
      <FilterExpansionPanelDetails>{children}</FilterExpansionPanelDetails>
    </FilterExpansionPanelWrapper>
  );
=======
            <FilterExpansionPanelSummary
                key={expanded}
                aria-controls="panel1d-content"
                id="panel1d-header"
            >
                <div className={classes.headingWrapper}>
                    <i className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                    <h6 className={classes.heading}>{title}</h6>
                </div>
                {showClearButton &&
                    <Button
                        color="secondary"
                        size="small"
                        onClick={onClearClick}
                        disabled={clearDisabled}
                    >
                        Clear
                    </Button>
                }
            </FilterExpansionPanelSummary>
            <FilterExpansionPanelDetails>
                {children}
            </FilterExpansionPanelDetails>
        </FilterExpansionPanelWrapper>
    );
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
};

FilterExpansionPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  onClearClick: PropTypes.func,
  clearDisabled: PropTypes.bool,
};

FilterExpansionPanel.defaultProps = {
  title: "",
  children: {},
  onClearClick: () => {},
  clearDisabled: false,
};

export default FilterExpansionPanel;
