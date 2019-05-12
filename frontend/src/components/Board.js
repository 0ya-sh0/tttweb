import React from 'react';
import Cell from './Cell';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-1">
                        <Cell></Cell>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>  
        )
    }
}