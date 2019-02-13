import React from 'react'
import { FormControl, withStyles, InputLabel, Select, MenuItem } from '@material-ui/core';

const styles = theme => ({
    selector: {
        width: theme.spacing.unit * 15,
        marginTop: theme.spacing.unit*2,
        marginLeft: '63%',
    },
});

class PostNumSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 5
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            num: event.target.value,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <FormControl className={classes.selector}>
                    <InputLabel>Posts per page:</InputLabel>
                    <Select
                        value={this.state.num}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(PostNumSelector);