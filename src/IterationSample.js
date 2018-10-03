import React, { Component } from 'react';

class IterationSample extends Component {

    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    };


    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleInsert = () => {
        // names 배열에 값을 추가하고, name 값을 초기화 한다.
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    };

    handleRemove = (index) => {
        const { names } = this.state;

        /*  배열을 자르는 내장함수 slice와
            전개연산자(...)를 사용해서 index번째 값을 제외한 값들을 배열에 넣어준다. */
        this.setState({
            names:[
                ...names.slice(0, index),
                ...names.slice(index + 1, names.length)
            ]

            //names: names.filter((item, i) => i !== index)
        });
    };

    render() {
        //const names = ['눈사람', '얼음', '눈', '바람'];
        const nameList = this.state.names.map(
            (name, index) => (
                <li
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>
            )
        );

        return (
            <div>
                <input onChange={this.handleChange}
                       value={this.state.name}/>
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>

    )
    }
}

export default IterationSample;