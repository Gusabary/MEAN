import React from 'react'
import { FormControl, withStyles, InputLabel, Select, MenuItem } from '@material-ui/core';

const styles = theme => ({
    selector: {
        width: theme.spacing.unit * 15,
        marginTop: theme.spacing.unit*2,
        marginLeft: '60%',
    },
});

class PostNumSelector extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <FormControl className={classes.selector}>
                    <InputLabel>
                    {this.props.isEnglish ? 'Post per page:' : '每页文章数：'}
                    </InputLabel>
                    <Select
                        value={this.props.num}
                        onChange={this.props.onChange}
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