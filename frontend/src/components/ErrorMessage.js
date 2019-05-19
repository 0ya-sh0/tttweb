import React from 'react';

export default class ErrorMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.msg==null||this.props.msg===''?null:(
            <div className="alert alert-danger">
                <strong>Error!</strong> {this.props.msg}
            </div>
        )
    }
}