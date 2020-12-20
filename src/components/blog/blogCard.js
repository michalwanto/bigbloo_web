import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Link} from 'gatsby'

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    marginBottom:"10px",
    marginRight:"10px",
    backgroundColor:"rgb(236, 236, 236)"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  date: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BlogCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {props.date}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.timeToRead + "min"}
        </Typography>
        <Typography variant="body2" component="p">
          {props.excerpt}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/blog/${props.slug}`}>
        <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}