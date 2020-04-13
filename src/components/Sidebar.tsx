import * as React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle: React.CSSProperties = {
  width: '200px',
  border: 'solid 1px #ccc',
  marginRight: '10px',
  borderRadius: '4px',
}

const Sidebar: React.FC = ({children}) => {
  return (
    <aside style={sidebarStyle}>
      {children}
    </aside>  
  )
}

export default Sidebar;

export const SidebarTitle: React.FC = ({children}) => 
  <h1 style={{
    padding: '0 10px',
  }}>
    {children}
  </h1>

interface SidebarBackButtonProps {
  to: string;
}

const linkStyle= {
  textDecoration: 'none',
  fontSize: '24px',
  padding: '10px',
  display: 'block',
}

export const SidebarBackButton = ({to}:SidebarBackButtonProps) => 
  <Link style={linkStyle}   to={to} >Back</Link>
  