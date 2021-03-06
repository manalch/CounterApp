import React, { Component } from 'react';

class CounterSizeGenerator extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            size: 0
        };
    }

    onChange(event) {
        const value = event.target.value;

        this.setState(() => {
            return { size: value };
        }, () => this.props.onGenerate(value));
    }

    render() {
        const mystyle = {
            color: "black",
            padding: "10px",
            fontFamily: "Arial"
          };

        return (
            <div>
                <label htmlFor="size"></label>
                <h2>Generate</h2>
                <input
                    style={mystyle}
                    type="number"
                    name="size"
                    id="size"
                    value={this.state.size}
                    onChange={this.onChange} />
                <h2>Counters</h2>
            </div>
        );
    }
}

export default CounterSizeGenerator;