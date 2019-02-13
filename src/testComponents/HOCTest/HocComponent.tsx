import * as React from 'react';

// export default class HOCComponent extends React.Component {
//   public render(): React.ReactNode {
//     return (
//       <div>
//         this is hoc component
//       </div>
//     )
//   }
// }

function getDisplayName(component: React.ComponentClass): string {
  return component.displayName || component.name || 'Component';
}


export default function withHeader(WrapperdComponent: React.ComponentClass): React.ComponentClass {
  return class HOC extends React.Component {
    // 如果这个高阶组件被使用了多次，那么在调试的时候，将会看到一大堆HOC，
    // 所以这个时候需要做一点小优化，就是在高阶组件包裹后，应当保留其原有名称。
    public static displayName = `HOC(${getDisplayName(WrapperdComponent)})`;
    public render(): React.ReactNode {
      window.console.log(this)
      return (
        <>
          <div className="demo-header">this is header</div>
          <WrapperdComponent {...this.props} />
        </>
      )
    }
  }
}