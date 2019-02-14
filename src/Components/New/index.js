import React from 'react'
import { Paper, withStyles } from '@material-ui/core'
import Title from './Title'
import Image from './Image'
import Content from './Content'
import Save from './Save'

const styles = theme => ({
    root: {
        width: '82%',
        marginLeft: '9%',
        marginTop: theme.spacing.unit * 3,
    },
});

class New extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Title /> <br />
                    <Image /> <br />
                    <Content /> <br />
                    <Save /> <br />
                </Paper>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(New);