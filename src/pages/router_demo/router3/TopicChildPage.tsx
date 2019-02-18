import * as React from 'react'
import { RouteComponentProps } from 'react-router';

export default class TopicChildPageComponent extends React.Component<RouteComponentProps> {
  
  public render(): React.ReactNode {
    const params: any = this.props.match.params
    return (
      <div>
       <h2> this is TopicChild Page</h2>
       {Object.keys(params).map((item, index) => {
         return (
           <div key={index}>param is:{params[item]}</div>
         )
       })}
       {this.getParams()}
      </div>
    )
  }

  private getParams(): React.ReactNode[] {
    const params: any = this.props.match.params
    return Object.keys(params).map((item, index) => {
      return (
        <div key={index}>param is:{params[item]}</div>
      )
    })
  }
}