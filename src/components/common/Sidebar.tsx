import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from './List';
import Skelton from '../Skelton'

const sidebarStyle: React.CSSProperties = {
  width: '200px',
  border: 'solid 1px #ccc',
  marginRight: '10px',
  borderRadius: '4px',
}

interface SidebarProp {
  to?: string
  apiCalling?: boolean
  title : string
  list : listItem[] 

}



interface listItem {
  content?: string
  title: string
  to : string
}


const Sidebar: React.FC<SidebarProp> = ({children,to = '/',title,apiCalling, list}) => {

  // const contents = apiCalling ? <Skelton style={{margin: '10px'}} /> :  <MemoList {...props} />

  const hasMemos = list.length>0



  return (
    <aside style={sidebarStyle}>
      <SidebarBackButton to={to} />
      <SidebarTitle>{title}</SidebarTitle> 
      {hasMemos 
        ? <MemoList list={list} />
        : apiCalling 
          ? <Skelton style={{margin: '10px'}} />
          : null}
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
  


interface ListInterface {
  list : listItem[]
}

const MemoList = ({list}:ListInterface) => {

  // 제목 줄이기..
  const shortTitle = (content: string): string => {
    return content.substr(0, 15);
  }
  
  return (
    <List>
      {list&&list.map((item, idx) =>
        <ListItem key={idx} first={idx === 0}>
          <Link to={item.to} style={{  textDecoration: 'none', color: '#000' }}>
              { shortTitle(item.title)}
          </Link>
        </ListItem>
      )}
    </List>
  )
}