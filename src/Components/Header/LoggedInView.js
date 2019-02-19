import React from 'react';
import { withStyles, Button, AppBar, Toolbar, Radio } from '@material-ui/core'
import Create from '@material-ui/icons/Create'
import DirectionsRun from '@material-ui/icons/DirectionsRun';
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
                    <Button onClick={this.props.onClick}>
                        {this.props.isEnglish ? 'CN' : '英文'}
                    </Button>
                    <div className={classes.buttons}>
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