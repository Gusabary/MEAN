import React from 'react'
import { withStyles, IconButton } from '@material-ui/core';
import Post from './Post'
import PostNumSelector from './PostNumSelector';
import PostNum from './PostNum';
import Toolbar from '@material-ui/core/Toolbar'
import Arrows from './Arrows';
import Add from '@material-ui/icons/Add'

/*const styles = theme => ({

});*/

class Posts extends React.Component {
    render() {
        //const { classes } = this.props;
        return (
            <React.Fragment>
                <Post />
                <Toolbar>
                    <PostNumSelector />
                    <PostNum />
                    <Arrows />
                </Toolbar>
                <a href="New">
                    <IconButton>

                        <Add />

                    </IconButton></a>
            </React.Fragment>
        )
    }
}

export default Posts;