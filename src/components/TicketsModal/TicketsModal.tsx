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
  Button,
  TextField,
  FormLabel,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Formik } from "formik";
import styles from "./styles";
import { get } from "lodash";
import validationSchema from "../TicketsForm/validationSchema";
import TicketsForm from "../TicketsForm";
import { EmptyUserForm } from "../../constants";
import moment from "moment";

class TicketsModal extends PureComponent<any & WithStyles> {
  state = {
    activeStep: 0,
    personalData: EmptyUserForm,
    number: "",
    cvv: "",
    date: "",
    nameHolder: ""
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
        return this.renderCardPayment();
      case 2:
        return this.renderOrderReview();
      default:
        return this.renderOrderReview();
    }
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
    } else if (activeStep === 2) {
      return this.setActiveStep(activeStep + 1);
    } else {
      return this.setActiveStep(activeStep + 2);
    }
  };

  handleReset = () => {
    this.setActiveStep(0)
  }

  handleFinish = () => {
    this.handleNext();
    console.log(this.serializeData())

  };

  componentWillUnmount(): void {
    this.handleReset()
  }

  serializeData = () => {
    const {session} = this.props
    const {personalData, number, cvv, nameHolder, date} = this.state
    const data = {
      data: {
        type: "orders",
        attributes: {
          session: session.id,
          first_name: personalData.first_name,
          last_name: personalData.last_name,
          birthday: personalData.birthday,
          email: personalData.email,
          paypent: {
            type: personalData.type,
            card: personalData.type === 'cash' ? null : {
              number: number,
              valid_thru: date,
              name: nameHolder,
              cvv: cvv
            }
          }
        }
      }
    };
    return data
  };

  handleSubmit = (form: any) => {
    this.setState({
      personalData: {
        ...form
      }
    });
    this.handleNext();
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

  handleCloseModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.handleCloseModal(event)
    this.handleReset()
  }

  renderOrderReview = () => {
    const { classes, performance, session } = this.props;
    const { personalData } = this.state;
    return (
      <>
        <Grid container justify="space-evenly" direction="column">
          <Typography variant="h6" gutterBottom>
            Описание заказа
          </Typography>
          <Grid item xs={12} md={12} lg={12}>
            <List>
              <ListItem>
                <ListItemText primary="Имя" />
                <Typography>{personalData.first_name}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Фамилия" />
                <Typography>{personalData.last_name}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Представление" />
                <Typography>{performance.attributes.title}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Выбранное время" />
                <Typography>
                  {moment(session.attributes.from).format("DD.MM.YYYY в HH:mm")}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Тип оплаты" />
                <Typography>
                  {personalData.type === "card"
                    ? "Оплата картой"
                    : "Оплата наличными"}
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={4}>
          <Button
            color="primary"
            variant="outlined"
            onClick={this.handleBack}
            className={classes.button}
          >
            Назад
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={this.handleFinish}
          >
            Завершить
          </Button>
        </Grid>
      </>
    );
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    this.setState({
      [target.name]: target.value
    });
  };

  renderCardPayment = () => {
    const { classes } = this.props;
    const { number, cvv, nameHolder, date } = this.state;

    return (
      <div>
        <Grid container spacing={4} direction="row">
          <Grid item xs={6} md={6} lg={6}>
            <FormLabel required>Номер карты</FormLabel>
            <TextField
              variant="outlined"
              name="number"
              value={number}
              onChange={this.handleChange}
              placeholder="Номер карты"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <FormLabel required>CVC-код</FormLabel>
            <TextField
              variant="outlined"
              name="cvv"
              value={cvv}
              onChange={this.handleChange}
              placeholder="CVC Код"
              autoComplete="off"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <FormLabel required>Имя держателя карты</FormLabel>
            <TextField
              variant="outlined"
              name="nameHolder"
              value={nameHolder}
              onChange={this.handleChange}
              placeholder="Имя держателя"
              autoComplete="off"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <FormLabel required>Срок истечения</FormLabel>
            <TextField
              variant="outlined"
              name="date"
              value={date}
              onChange={this.handleChange}
              placeholder="Срок истечения"
              autoComplete="off"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={4}>
          <Button
            color="primary"
            variant="outlined"
            onClick={this.handleBack}
            className={classes.btnSubmit}
          >
            Назад
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleNext}
            className={classes.btnSubmit}
          >
            Далее
          </Button>
        </Grid>
      </div>
    );
  };

  render(): ReactNode {
    const { classes, open, performance } = this.props;
    const { activeStep } = this.state;
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
                    Покупка проведена успешно
                  </Typography>
                  <Grid container justify="flex-end" spacing={4}>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.handleCloseModalWindow}
                      className={classes.btnSubmit}
                    >
                      Завершить
                    </Button>
                  </Grid>
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
