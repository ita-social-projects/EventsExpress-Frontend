import React, { useState } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import {
  FilterExpansionPanelDetails,
  FilterExpansionPanelSummary,
  FilterExpansionPanelWrapper,
} from "./filter-expansion-panel-parts";
import useFilterExpansionPanelStyles from "./filter-expansion-panel-styles";

const FilterExpansionPanel = ({
  title,
  children,
  onClearClick,
  clearDisabled = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useFilterExpansionPanelStyles();

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
          Clear
        </Button>
      </FilterExpansionPanelSummary>
      <FilterExpansionPanelDetails>{children}</FilterExpansionPanelDetails>
    </FilterExpansionPanelWrapper>
  );
};

FilterExpansionPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  onClearClick: PropTypes.func,
  clearDisabled: PropTypes.func,
};

FilterExpansionPanel.defaultProps = {
  title: "",
  children: {},
  onClearClick: () => {},
  clearDisabled: () => {},
};

export default FilterExpansionPanel;
