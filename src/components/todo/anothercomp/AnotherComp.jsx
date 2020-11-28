import React from 'react';
import {connect} from 'react-redux';

const AnotherComp = (props) => {
    const {count} = props;

    return (
        <h1>{count}</h1>
    );
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(AnotherComp);