import React from 'react';
import { withStyles, Button, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeButton from './HomeButton';

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

class LoggedInView extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <HomeButton />
                    <Button onClick={this.props.onClick}>
                        {this.props.isEnglish ? 'CN' : '英文'}
                    </Button>
                    <div className={classes.buttons}>
                        <AccountCircle className={classes.icon} />
                        <Link to="SignIn">
                            <Button className={classes.label}>
                                {this.props.isEnglish ? 'Sign In' : '登录'}
                            </Button>
                        </Link>
                        <AccountCircle className={classes.icon} />
                        <Link to="SignUp">
                            <Button onClick={this.props.onClick} className={classes.label}>
                                {this.props.isEnglish ? 'Sign Up' : '注册'}
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(LoggedInView);