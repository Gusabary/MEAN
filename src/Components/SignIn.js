import React from 'react'
import { Paper, withStyles, Typography, Toolbar, TextField, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { connect } from 'react-redux'
import agent from '../agent'

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 55,
        marginLeft: theme.spacing.unit * 55,
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 6,
        //paddingLeft: theme.spacing.unit * 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        paddingLeft: theme.spacing.unit * 2
    },
    textField: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: -theme.spacing.unit * 5,
        marginRight: -theme.spacing.unit * 5,
        width: '70%',
    },
    button: {
        marginTop: theme.spacing.unit * 7,
    },
});

const mapStateToProps = state => ({
    redirectTo: state.common.redirectTo,
    isEnglish: state.common.isEnglish,
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (email, password) =>
        dispatch({ type: 'SIGN_IN', payload: agent.User.signIn(email, password) }),
    onRedirect: () =>
        dispatch({ type: 'REDIRECTED' }),
})

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;
        //console.log(2);
        this.props.onSubmit(email, password);
    }

    componentWillReceiveProps(nextProps) {
        //console.log(this.props.redirectTo);
        //console.log(nextProps.redirectTo);
        if (nextProps.redirectTo) {
            this.props.history.push(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.paper}>
                    <Toolbar>
                        <AccountCircle fontSize="large" />
                        <Typography variant="h4" className={classes.text} >
                            {this.props.isEnglish ? 'Sign In' : '登录'}
                        </Typography>
                    </Toolbar>

                    <TextField
                        type="email"
                        label={this.props.isEnglish ? 'Email Address' : '邮箱地址'}
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        required

                    />
                    <TextField
                        type="password"
                        label={this.props.isEnglish ? 'Password' : '密码'}
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        required

                    /><form onSubmit={this.handleSubmit}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}
                        >
                            <Typography>
                                {this.props.isEnglish ? 'Sign In' : '登录'}
                            </Typography>
                        </Button>
                    </form>
                </Paper>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));