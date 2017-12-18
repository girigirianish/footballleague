import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Header = () => {
    return (
        <div className="pannel pannel-default">
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-4">
                        <Button>
                            <Link to="/">Result</Link>
                        </Button>
                    </div>
                    <div className="col-sm-4 pull-left">
                        <Button>
                            <Link to="/addresult">New Result</Link>
                        </Button>
                    </div>
                    <div className="col-sm-4">
                        <Button>Table</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
