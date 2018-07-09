import React, {Component} from 'react';
import TracksLoop from '../../components/TracksLoop';

class TracksLoopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoop: false
        }
    }

    render() {
        const {id, elem} = this.props;
        return (
            <TracksLoop id={id} elem={elem} loop={this.loop} isLoop={this.state.isLoop}/>
        );
    }

    loop = (id, el) => {
        el.autoplay = !this.state.isLoop;

        this.setState((prevState) => {
            return { isLoop: !prevState.isLoop}
        });
    }
}

export default TracksLoopContainer;
