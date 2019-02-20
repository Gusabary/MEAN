import React from 'react';
import { withStyles, Button, AppBar, Toolbar } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeButton from './HomeButton';
import { Link } from 'react-router-dom'

const styles = theme => ({
    bar: {
        backgroundColor: theme.palette.secondary.main,
    },
    buttons: {
        marginLeft: '68%',
    },
    lang: {
        marginTop: -theme.spacing.unit * 1.5,
    },
    icon: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 3,
    },
    label: {
        marginTop: -theme.spacing.unit * 1.5,
    },



})

class LoggedInView extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <HomeButton />
                    <div className={classes.buttons}>
                        <Button onClick={this.props.onClick} className={classes.lang}>
                            {this.props.isEnglish ? 'CN' : '英文'}
                        </Button>
                        <AccountCircle className={classes.icon} />
                        <Link to="SignIn">
                            <Button className={classes.label}>
                                {this.props.isEnglish ? 'Sign In' : '用户登录'}
                            </Button>
                        </Link>
                        <AccountCircle className={classes.icon} />
                        <Link to="SignUp">
                            <Button className={classes.label}>
                                {this.props.isEnglish ? 'Sign Up' : '用户注册'}
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(LoggedInView);