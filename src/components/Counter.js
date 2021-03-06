import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            number: 0
        };
    }

    onIncrease() {
        this.setState((prevState) => ({ number: prevState.number + 1 }), () => this.props.addCounterValues(1));
    }

    onDecrease() {
        this.setState((prevState) => ({ number: prevState.number - 1 }), () => this.props.addCounterValues(-1));
    }

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={(event) => { this.onIncrease() }} />
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={(event) => { this.onDecrease() }} />
            </section>
        );
    }
}

export default Counter;