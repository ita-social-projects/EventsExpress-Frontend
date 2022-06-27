﻿import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy, MdCheck } from "react-icons/md";
import {
  minLength10,
  minLength20,
} from "../../helpers/validators/min-max-length-validators";
import "./NotificationTemplateForm.scss";

// TODO remake to functional component
class NotificationTemplateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { copiedPropName: null };
  }

  onCopied = propName => {
    this.setState({
      copiedPropName: propName,
    });

    setTimeout(() => {
      this.setState({
        copiedPropName: null,
      });
    }, 1000);
  };

  renderField = ({ input, meta: { error }, ...props }) => {
    return (
      <div className="form-group">
        <TextField
          {...input}
          {...props}
          error={Boolean(error)}
          helperText={error}
        />
      </div>
    );
  };

  renderProperties = properties => (
    <>
      <Typography variant="h6" className="m-0 mb-1 text-nowrap center">
        {"Available properties"}
      </Typography>
      <List className="d-flex flex-column align-items-center">
        {properties.map(property => (
          <CopyToClipboard
            key={property}
            text={property}
            onCopy={() => this.onCopied(property)}
          >
            <ListItem
              key={property}
              className="d-flex btn btn-outline-secondary rounded m-0 mb-3"
            >
              <ListItemText primary={property} />
              {this.state.copiedPropName === property ? (
                <MdCheck className="ml-4" />
              ) : (
                <MdContentCopy className="ml-4" />
              )}
            </ListItem>
          </CopyToClipboard>
        ))}
      </List>
    </>
  );

  render() {
    const { handleSubmit, submitting, reset, pristine, availableProps } =
      this.props;
    const { renderField, renderProperties } = this;

    return (
      <div className="d-flex">
        <form
          className="d-flex flex-grow-1 flex-column mt-3 ml-0 w-100 float-left"
          onSubmit={handleSubmit}
        >
          <Field
            name="title"
            type="text"
            component={renderField}
            label="Title"
            InputProps={{
              readOnly: true,
            }}
          />
          <Field
            name="subject"
            className="form-control"
            type="text"
            component={renderField}
            label="Subject"
            inputProps={{
              required: true,
            }}
            validate={[minLength10]}
          />
          <Field
            name="message"
            className="form-control"
            component={renderField}
            type="text"
            rows={15}
            label="Message"
            multiline
            inputProps={{
              required: true,
            }}
            variant="outlined"
            validate={[minLength20]}
          />
          <div className="align-self-end">
            <Button type="submit" disabled={submitting} color="primary">
              {"Save"}
            </Button>
            <Button
              type="button"
              color="secondary"
              disabled={pristine || submitting}
              onClick={reset}
            >
              {"Reset"}
            </Button>
          </div>
        </form>
        <div className="ml-4 mt-6">
          {availableProps && renderProperties(availableProps)}
        </div>
      </div>
    );
  }
}

NotificationTemplateForm.defaultProps = {
  handleSubmit: () => {},
  submitting: () => {},
  reset: false,
  pristine: () => {},
  availableProps: {},
};

NotificationTemplateForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.func,
  reset: PropTypes.bool,
  pristine: PropTypes.func,
  availableProps: PropTypes.object,
};

export default reduxForm({
  form: "NotificationTemplateForm",
  enableReinitialize: true,
})(NotificationTemplateForm);
