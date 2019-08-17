import React, { PureComponent, ReactNode } from "react";
import {
  withStyles,
  WithStyles,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import styles from "./styles";
import { IProps } from "./interfaces";
import TicketsCard from "../../components/TicketsCard";
import { IPerformance } from "../../interfaces";

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
  render(): ReactNode {
    const { performanceData } = this.props;
    return (
      <div>
        <Paper>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography color="primary" variant="h5" component="h2">
                Спектакли
              </Typography>
            </Grid>
            <Grid>
              {performanceData.map((perfItem: IPerformance, index: number) => (
                  <TicketsCard key={index} performanceData={perfItem} />
                )
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Tickets);
