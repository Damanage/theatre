import React, { PureComponent, ReactNode } from "react";
import {
  withStyles,
  WithStyles,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import styles from "./styles";
import TicketsCard from "../../components/TicketsCard";
import TicketsModal from "../../components/TicketsModal";
import { IPerformance, ISession } from "../../interfaces";

class Tickets extends PureComponent<any & WithStyles> {
  static defaultProps = {
    performanceData: [
      {
        id: "1",
        type: "performances",
        attributes: {
          title: "Не найдено",
          genres: null
        }
      }
    ]
  };
  state = {
    ticketModalOpen: false,
    selectedSession: {},
    selectedPerformance: {}
  }
  openModal = (session: ISession, performance: IPerformance) => {
    this.setState({
      ticketModalOpen: true,
      selectedSession: session,
      selectedPerformance: performance,
    })
  }
  closeModal = () => {
    this.setState({
      ticketModalOpen: false
    })
  }

  render(): ReactNode {
    const { performanceData, sessionData, classes } = this.props;
    const { ticketModalOpen, selectedSession, selectedPerformance } = this.state
    return (
      <div>
        <Typography color="primary" variant="h5" component="h2">
          Спектакли
        </Typography>

        <Paper>
          <Grid container direction="column">
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              className={classes.cardRoot}
            >
              {performanceData.map((perfItem: IPerformance, index: number) => {
                const sessionsList = sessionData.filter((sessionItem: ISession) => perfItem.id === sessionItem.relationships.performance.data.id);
                return <TicketsCard key={index} performanceData={perfItem} sessions={sessionsList} showModal={this.openModal}/>;
              })}
            </Grid>
          </Grid>
        </Paper>
        <TicketsModal open={ticketModalOpen} close={this.closeModal} session={selectedSession} performance={selectedPerformance}/>
      </div>
    );
  }
}

export default withStyles(styles)(Tickets);
