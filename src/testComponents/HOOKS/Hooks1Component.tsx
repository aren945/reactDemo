import * as React from 'react';

function Example() {
  window.console.log(React.useState(10))
  const [count, setCount] = React.useState(10);

  function a() {
    setCount(count + 1)
  }

  React.useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={a}>
        加一
      </button>
    </div>
  )
}

export default class HOOKS1 extends React.Component {
  public render() {
    return(
      <>
        <Example />
      </>
    )
  }
}