import React from 'react';
import styles from './Todo.module.css';
import {connect} from 'react-redux';

const Todo = (props) => {
    const {dispatch, count} = props;

    const handleIncrement = () => {
        dispatch({type: "INCREMENT"})
    }

    const handleDecrement = () => {
        dispatch({type: "DECREMENT"})
    }

    return (
        <div className={styles.div}>
            <div className={styles.innerDiv}>
                <h1>Counter</h1>
                <h4>{count}</h4>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Todo);