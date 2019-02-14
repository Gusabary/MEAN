import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
    firstPost: {
        //marginTop: theme.spacing.unit * 15,
        width: '70%',
        marginLeft: '15%',
    },
    post: {
        marginTop: theme.spacing.unit * 2,
        width: '70%',
        marginLeft: '15%',
    }, 
    padding: {
        marginTop: theme.spacing.unit*8,
    },
});

class Post extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.padding}></div>
                <ExpansionPanel className={classes.firstPost}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        1
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        2
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.post}>
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