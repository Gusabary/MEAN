import React from 'react'
import { withStyles } from '@material-ui/core';
import Post from './Post'
import PostNumSelector from './PostNumSelector';
import PostNum from './PostNum';
import Toolbar from '@material-ui/core/Toolbar'
import Arrows from './Arrows';

/*const styles = theme => ({

});*/

class Posts extends React.Component {
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
        //const { classes } = this.props;
        return (
            <React.Fragment>
                <Post />
                <Toolbar>
                    <PostNumSelector />
                    <PostNum />
                    <Arrows />
                </Toolbar>
            </React.Fragment>
        )
    }
}

export default Posts;