import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink'
import Icon from 'material-icons-react';
import './style.css';

/** This is the component for show messages */

function Message({ text, type, visible, onClick }) {

    return (
        <div className={`messageComponent`}>
            <div className={`notify ${type} ${visible ? '' : 'invisible'}`}>
                <div className="message-icon">
                    <div className={`isSuccess ${type}`} >
                        <Icon icon={'check_circle'}/>
                    </div>
                    <div className={`isWarning ${type}`}>
                        <Icon icon='warning' />
                    </div>
                    <div className={`isFail ${type}`}>
                        <Icon icon={'error'} />
                    </div>
                    <p>{text}</p>
                </div>
                <div className={'close-icon'} onClick={onClick}>
                    <Icon icon={'close'}/>
                    <Ink />
                </div>
            </div>
        </div>
    );
}

Message.defaultProps = {
    type: 'success',
    visible: true,
    onClick: function(){}
}

Message.propTypes = {
    /** The text of the message */
    text: PropTypes.string,
    /** The type of the message, success, fail and warning*/
    type: PropTypes.string,
    /** Show or hidden message */
    visible: PropTypes.bool,
    /** this is the callBack receives */
    onClick: PropTypes.func,
}

export default Message;