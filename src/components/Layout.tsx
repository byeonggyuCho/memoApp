import * as React from 'react';

const style: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  margin: '10px',
}

const Layout: React.FC = ({children}) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Layout;