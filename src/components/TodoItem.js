import React, { Component } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';

import './TodoItem.css'
import checkImg from '../image/icon/check.svg'
import checkComplete from '../image/icon/check-complete.svg';


class TodoItem extends Component {

    render() {
        const item = this.props.item;
        const onClicked = this.props.onClick;

        let logoImg = checkImg;

        if (item.isComplete === true) {
            logoImg = checkComplete;
        }

        return (
            <div className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete })} >
                <img onClick={onClicked} src={logoImg} width={32} height={32}></img>
                <p>{item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        isComplete: PropTypes.bool
    }),
    onClick: PropTypes.func
}



export default TodoItem;