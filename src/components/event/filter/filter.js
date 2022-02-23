<<<<<<< HEAD
import React, { useState } from "react";
import { Drawer, Icon, IconButton, Typography } from "@material-ui/core";
import useFilterStyles from "./filter-styles";
import FilterForm from "./form/filter-form";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const classes = useFilterStyles();
=======
import React, { useState } from 'react';
import { Drawer, Icon, IconButton, Typography } from '@material-ui/core';
import { useFilterStyles } from './filter-styles';
import FilterForm from './form/filter-form';
import { useFilterInitialValues } from './filter-hooks';

export const Filter = () => {
    const [open, setOpen] = useState(false);
    const initialValues = useFilterInitialValues();
    const classes = useFilterStyles();
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2

  const toggleOpen = () => setOpen(!open);

<<<<<<< HEAD
  return (
    <div>
      <div className={classes.openButton}>
        <IconButton onClick={toggleOpen}>
          <Icon className="fas fa-arrow-circle-left" />
        </IconButton>
        <Typography variant="h6" component="span">
          Filters
        </Typography>
      </div>
      <Drawer
        open={open}
        variant="persistent"
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
      >
        <FilterForm toggleOpen={toggleOpen} />
      </Drawer>
    </div>
  );
=======
    return (
        <div>
            <div className={classes.openButton}>
                <IconButton onClick={toggleOpen}>
                    <Icon className="fas fa-arrow-circle-left" />
                </IconButton>
                <Typography variant="h6" component="span">
                    Filters
                </Typography>
            </div>
            <Drawer
                open={open}
                variant="persistent"
                anchor="right"
                classes={{ paper: classes.drawerPaper }}
            >
                <FilterForm toggleOpen={toggleOpen} initialValues={initialValues} />
            </Drawer>
        </div>
    );
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
};

export default Filter;
