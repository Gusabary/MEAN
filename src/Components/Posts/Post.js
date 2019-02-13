import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
    firstPost: {
        marginTop: theme.spacing.unit * 15,
        width: '70%',
        marginLeft: '15%',
    },
    post: {
        marginTop: theme.spacing.unit * 5,
        width: '70%',
        marginLeft: '15%',
    },
});

class Post extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                
                <ExpansionPanel className={classes.firstPost}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        1
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        2
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Post);