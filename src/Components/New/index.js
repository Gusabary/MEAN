import React from 'react'
import { Paper, withStyles } from '@material-ui/core'
import Title from './Title'
import Image from './Image'
import Content from './Content'
import Save from './Save'
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        width: '82%',
        marginLeft: '9%',
        marginTop: theme.spacing.unit * 3,
    },
});

const mapStateToProps = state => ({
    userId: state.user.userId,
})

class New extends React.Component {
    render() {
        const { classes } = this.props;
        console.log(this.props.userId);
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

export default connect(mapStateToProps)(withStyles(styles)(New));