import React, { PureComponent, ReactNode } from "react";
import {
  withStyles,
  WithStyles,
  Dialog,
  Grid,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Step,
  Stepper,
  StepLabel,
  Button
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Formik } from "formik";
import styles from "./styles";
import { get } from "lodash";
import validationSchema from "../TicketsForm/validationSchema";
import TicketsForm from "../TicketsForm";
import { EmptyUserForm } from "../../constants";

class TicketsModal extends PureComponent<any & WithStyles> {
  state = {
    activeStep: 0,
    personalData: EmptyUserForm
  };
  handleCloseModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { close } = this.props;
    close();
  };

  setActiveStep = (step: number) => {
    this.setState({
      activeStep: step
    });
  };

  getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return this.renderOrderDescription();
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return this.renderOrderReview();
      default:
        return this.renderOrderReview();
    }
  };

  handleReset = () => {
    this.setActiveStep(0);
  };

  handleBack = () => {
    const { activeStep, personalData } = this.state;
    this.setActiveStep(activeStep - 1);

    if (personalData.type === "card") {
      return this.setActiveStep(activeStep - 1);
    } else {
      return this.setActiveStep(activeStep - 2);
    }
  };

  handleNext = () => {
    const { activeStep, personalData } = this.state;
    if (personalData.type === "card") {
      return this.setActiveStep(activeStep + 1);
    } else {
      return this.setActiveStep(activeStep + 2);
    }
  };

  handleSubmit = (form: any) => {
    this.setState({
      personalData: {
        ...form
      }
    });
    this.handleNext()
  };

  renderOrderDescription = () => {
    const { personalData } = this.state;
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={personalData}
        validationSchema={validationSchema}
        render={(props: any) => <TicketsForm {...props} />}
      />
    );
  };

  renderOrderReview = () => {
    const {classes} = this.props
    return (
      <Grid container justify="flex-end" spacing={4}>
        <Button color="primary" variant="outlined" onClick={this.handleBack} className={classes.button}>
          Назад
        </Button>
        <Button color="primary" variant="contained" className={classes.button}>
          Завершить
        </Button>
      </Grid>
    );
  };

  render(): ReactNode {
    const { classes, open, session, performance } = this.props;
    const { activeStep, personalData } = this.state;
    const title =
      "Приобрести билет - " + get(performance.attributes, "title", "-");
    const steps = ["Личная информация", "Оплата", "Описание заказа"];
    return (
      <Dialog
        open={open}
        onClose={this.handleCloseModal}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle disableTypography className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton
            aria-label="Close"
            className={classes.closeBtn}
            onClick={this.handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className={classes.content}>
          <div>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: { optional?: React.ReactNode } = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Заново
                  </Button>
                </div>
              ) : (
                <div>
                  <div className={classes.content}>
                    {this.getStepContent(activeStep)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TicketsModal);
