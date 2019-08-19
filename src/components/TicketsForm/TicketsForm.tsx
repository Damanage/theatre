import React, { PureComponent } from "react";
import { Grid, Switch, Typography, Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import FormLabel from "@material-ui/core/FormLabel";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";

class TicketsForm extends PureComponent<any, any> {
  state = {
    focusedInput: null
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { setFieldTouched, handleChange } = this.props;
    handleChange(event);
    setFieldTouched(name, true, true);
  };

  handleDateChange = (date: Date | null) => {
    const { setFieldTouched, setFieldValue } = this.props;
    setFieldValue("birthday", date, false);
    setFieldTouched("birthday", true, true);
  };

  handleChangePaymentType = () => {
    const { setFieldValue, values } = this.props;
    if (values.type === "card") {
      return setFieldValue("type", "cash", false);
    } else {
      return setFieldValue("type", "card", false);
    }
  };

  render() {
    const { handleSubmit, values, touched, errors, isValid } = this.props;
    const { first_name, last_name, email, birthday, type, agree } = values;
    const typePayment = type === "card";
    return (
      <>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <FormLabel
                required
                error={Boolean(touched.first_name && errors.first_name)}
              >
                Имя
              </FormLabel>
              <TextField
                variant="outlined"
                name="first_name"
                value={first_name}
                onChange={this.handleChange}
                error={Boolean(touched.first_name && errors.first_name)}
                helperText={touched.first_name ? errors.first_name : ""}
                placeholder="Имя"
                autoComplete="off"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel
                required
                error={Boolean(touched.last_name && errors.last_name)}
              >
                Фамилия
              </FormLabel>
              <TextField
                variant="outlined"
                name="last_name"
                value={last_name}
                onChange={this.handleChange}
                error={Boolean(touched.last_name && errors.last_name)}
                helperText={touched.last_name ? errors.last_name : ""}
                placeholder="Фамилия"
                autoComplete="off"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel
                required
                error={Boolean(touched.email && errors.email)}
              >
                Email
              </FormLabel>
              <TextField
                variant="outlined"
                name="email"
                value={email}
                onChange={this.handleChange}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email ? errors.email : ""}
                placeholder="Email"
                autoComplete="off"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  name="birthday"
                  error={Boolean(touched.birthday && errors.birthday)}
                  label="Дата рождения"
                  value={birthday}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid
              item
              xs={6}
              container
              alignItems="center"
              justify="space-around"
            >
              <Typography>Оплата наличными</Typography>
              <Switch
                color="primary"
                checked={typePayment}
                onClick={this.handleChangePaymentType}
              />
              <Typography>Оплата картой</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              alignItems="center"
              justify="space-between"
            >
              <Typography>Согласен с условиями</Typography>
              <Switch
                color="primary"
                name="agree"
                checked={agree}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
        </form>
        <Grid container justify="flex-end">
          <Button
            color="primary"
            variant="contained"
            disabled={!isValid}
            onClick={this.props.handleSubmit}
          >
            Далее
          </Button>
        </Grid>
      </>
    );
  }
}

export default TicketsForm;
