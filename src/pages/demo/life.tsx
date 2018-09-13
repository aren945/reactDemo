import * as React from 'react';

import Child from './Child';

interface Istates {
    count: number,
    name: string
}

class Life extends React.Component<{}, Istates>{ // state需要对Istates接口进行包装
    // public state:any;

    constructor(props: any) {
        super(props);
        this.state = {
            count: 1,
            name: ''
        }
    }

    public handleAdd = (): void => {
        this.setState({
            count: this.state.count + 1,
            name: this.state.name + this.state.count
        })
    };

    public render(): React.ReactNode {
        return(
            <div>
                <p>React生命周期介绍</p>
                <button onClick={ this.handleAdd }>点击一下</button>
                <p>{ this.state.count }</p>
                <Child name={this.state.name}/>
            </div>
        )
    }
}

export default Life