import * as React from 'react';
import './Footer.less'

class Footer extends React.Component {
  public render(): React.ReactNode {
    return(
      <div className="footer">
        <span>共享单车管理后台</span>
      </div>
    )
  }
}

export default Footer;