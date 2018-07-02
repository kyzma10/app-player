import React, {Component} from 'react';
import ControlButton from '../../components/control-button';

class ControlButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }


    render() {
        return (
            <ControlButton
                id={this.props.id}
                elem={this.props.elem}
                active={this.state.active}
                on={this.props.on}
                playOn={this.playOn}
                playOf={this.playOf}
            />
        );
    }

    playOn = (id, el) => {
            this.props.playTrack(id, el);
            this.setState({active: true});
    };

    playOf = (el) => {
        this.props.pauseTrack(el);
        this.setState({active: false})
    }
}


export default ControlButtonContainer;
