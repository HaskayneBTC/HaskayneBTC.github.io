import React, { Component } from "react";
import SideBar from "../views/navigation/sidebar.jsx";

class Page extends Component {
    state = {};
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <SideBar navLinks={this.props.navLinks} />
                    <div className="col-sm-9 col-8">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Page;
