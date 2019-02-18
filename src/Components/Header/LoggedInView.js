import React from 'react';
import { withStyles, Button, AppBar, Toolbar } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeButton from './HomeButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const styles = theme => ({
    icon: {
        marginTop: theme.spacing.unit,
        //marginRight: -theme.spacing.unit * 0.5,
        marginLeft: theme.spacing.unit,
    },
    label: {
        marginTop: -theme.spacing.unit * 1.5,
    },
    bar: {
        backgroundColor: theme.palette.secondary.main,
    },

    buttons: {
        marginLeft: theme.spacing.unit * 108,
    },
})

const mapDispatchToProps = dispatch => ({
    onLogOut: () =>
        dispatch({ type: 'LOG_OUT' }),
})

class LoggedInView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onLogOut();
    }

    render() {
        //console.log(this.props.userId);
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <HomeButton />
                    <div className={classes.buttons}>
                        <AccountCircle className={classes.icon} />
                        <Link to="New">
                            <Button className={classes.label}>
                                Add Post
                            </Button>
                        </Link>
                        <AccountCircle className={classes.icon} />
                        <Link to="/">
                            <Button onClick={this.handleClick} className={classes.label}>
                                Log Out
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default connect(()=>({}), mapDispatchToProps)(withStyles(styles)(LoggedInView));