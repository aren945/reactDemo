import * as React from 'react'

interface Iprops {
    name: string
}

class Child extends React.Component<Iprops, {}>{
    constructor(props: Iprops) {
        super(props);
        this.state = {
            count: 1
        }
    }

    public componentWillMount(): void {
        window.console.log('will mount')
    }

    public componentDidMount(): void {
        window.console.log('did mount')
    }

    public componentWillReceiveProps(newProps: Iprops): void {
        window.console.log('will props', newProps.name)
    }

    public shouldComponentUpdate(): boolean {
        window.console.log('should update');
        return true
    }

    public componentWillUpdate(): void {
        window.console.log('will update')
    }

    public componentWillUnmount(): void {
        window.console.log('did update')
    }

    public render(): React.ReactNode {
        return(
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Child