import React, { PureComponent, ReactNode } from "react";
import {
  withStyles,
  WithStyles,
  Card,
  CardHeader,
  Avatar,
  Chip,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Collapse,
  Link,
  Divider
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./styles";
import moment from "moment";
import { get } from "lodash";
import star from "../../assets/superstar.jpg";
import wolf from "../../assets/wolf.jpg";
import {IPerformance, ISession} from "../../interfaces";

class TicketsCard extends PureComponent<any & WithStyles> {
  state = {
    expanded: false
  };
  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  handleShowModal = (session: ISession, performance: IPerformance) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const { showModal } = this.props;
    showModal(session, performance);
  };

  render(): ReactNode {
    const { classes, performanceData, sessions } = this.props;
    const { expanded } = this.state;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              ТЪ
            </Avatar>
          }
          title={get(performanceData, "attributes.title", "-")}
          subheader={get(performanceData, "attributes.genres").map(
            (genre: string, index: number) => (
              <Chip
                key={index}
                className={classes.chip}
                color="primary"
                variant="outlined"
                size="small"
                label={genre}
              />
            )
          )}
        />
        <CardMedia
          className={classes.media}
          image={performanceData.id === '1' ? wolf : star}
          title={get(performanceData, "attributes.title", "-")}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           Данное представление пройдет в нашем театре в ближайщие сроки, выбрать удобное время и купить билет Вы можете ниже.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            size="small"
            color="primary"
            aria-label="show more"
            aria-expanded={expanded}
            onClick={this.handleExpandClick}
          >
            Расписаниие и билеты
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={this.handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Выступления:</Typography>
            <div className={classes.linkWrapper}>
              {sessions.map((session: ISession, index: number) => (
                <React.Fragment key={index}>
                  <Link
                    className={classes.link}
                    component="button"
                    variant="body2"
                    onClick={this.handleShowModal(session, performanceData)}
                  >
                    {moment(session.attributes.from).format(
                      "DD.MM.YYYY в HH:mm"
                    )}
                  </Link>
                  <Divider />
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(TicketsCard);
