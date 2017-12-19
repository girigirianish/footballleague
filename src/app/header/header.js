import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Header = () => {
    return (
        <div className="pannel pannel-default">
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-5 text-left">
                        <Link to="/">
                            <Button>Result</Button>
                        </Link>
                    </div>
                    <div className="col-sm-2 text-center">
                        <Link to="/addresults">
                            <Button>New Result</Button>
                        </Link>
                    </div>
                    <div className="col-sm-5 pull-right">
                        <Link to="/viewleague" className="pull-right">
                            <Button>Table</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
