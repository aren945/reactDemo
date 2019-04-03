import * as React from "react";
import { Button } from "antd";
import { any } from "prop-types";
/**
 * 
 * 错误边界。错误边界是能够捕获子组件的错误并对其做优雅处理的组件。
 * 定义了componentDidCatch(err, info)这个方法的组件将成为一个错误边界。
 * 
 */


 interface Istate {
     hasError: boolean,
     user: any
 }

 interface IChildProps {
     user: {name: string}
 }

 interface IChildState {
    hasError: boolean
}

class ChildComponent extends React.Component<IChildProps, IChildState> {

    constructor(props: IChildProps) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err: any, info: any) {
        this.setState({
            hasError: true
        })

        console.log('err  is', err, 'info is:', info)
    }
   
    public render(): React.ReactNode {

    //    const { name } = this.props.user
       
        console.log(this.props.user);

       return (
        <div>
            {this.state.hasError ? 'childComponent has error' : ''}
            this is childeComponent  ----- {this.props.user.name}
        </div>
       )
   } 
}


export default class ErrorBoundariesPageComponent extends React.Component<{}, Istate> {

    constructor(props: any) {
        super(props)
        this.state = {
            hasError: false,
            user: {name: 'zhengxinglun'}
        }
    }

    componentDidCatch(err: any, info: any) {
        this.setState({
            hasError: true
        })

        console.log('err  is', err, 'info is:', info)
    }

    public changeName = (): void => {
        this.setState({
            user: null
        })
    }


    public render(): React.ReactNode {
        const a:any = 1;
        return(
            <div>
                this is error-boundaries-page.
                <ChildComponent user={this.state.user} />
                {this.state.hasError ? 'childComponent has error' : ''}
                <Button onClick={ this.changeName }>点击修改姓名</Button>
            </div>
        )
    }
}