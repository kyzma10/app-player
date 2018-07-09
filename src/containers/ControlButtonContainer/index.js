import React, {Component} from 'react';
import ControlButton from '../../components/ControlButton';

class ControlButtonContainer extends Component {

    render() {
        return (
            <ControlButton
                id={this.props.id}
                elem={this.props.elem}
                isActive={this.props.isActive}
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
