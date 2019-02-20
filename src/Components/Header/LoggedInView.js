import React from 'react';
import { withStyles, Button, AppBar, Toolbar } from '@material-ui/core'
import Create from '@material-ui/icons/Create'
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import HomeButton from './HomeButton';
import { connect } from 'react-redux';
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
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <HomeButton />
                    <div className={classes.buttons}>
                        <Button onClick={this.props.onClick}  className={classes.lang}>
                            {this.props.isEnglish ? 'CN' : '英文'}
                        </Button>

                        <Create className={classes.icon} />
                        <Link to="New">
                            <Button className={classes.label}>
                                {this.props.isEnglish ? 'Add Post' : '添加文章'}
                            </Button>
                        </Link>
                        <DirectionsRun className={classes.icon} />
                        <Link to="/">
                            <Button onClick={this.handleClick} className={classes.label}>
                                {this.props.isEnglish ? 'Log Out' : '退出登录'}
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default connect(() => ({}), mapDispatchToProps)(withStyles(styles)(LoggedInView));