import React, { Component } from "react";


export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                componentImport: null
            };
        }

        componentDidMount() {
            let that = this
            importComponent().then(mod => {
                that.setState({
                    componentImport: mod.default ? mod.default : mod
                })
            })
        }

        render() {
            const C = this.state.componentImport;
            // 可以在这里加上loading
            //return C ? <C {...this.props} /> : <Loading>;
            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}