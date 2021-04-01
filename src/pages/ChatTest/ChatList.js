import { Divider, Checkbox ,  Form, Input } from 'antd'
import React, { useState } from 'react'
import CChatListItem from '../../uiComponents/shared/CChatListItem/CChatListItem'
import { Menu, Dropdown } from 'antd';
import { DownOutlined , FilterOutlined } from '@ant-design/icons';

const menu = (

    

    <Menu >
      <Menu.Item key="Employers">
        <a href="#">Employers</a>
      </Menu.Item>
      <Menu.Item key="Agencies">
        <a href="#">Agencies</a>
      </Menu.Item>
     
      
    </Menu>
  );

  const menuFilter = (

    

    <Menu >
      <Menu.Item key="starred">
        <a href="#">starred</a>
      </Menu.Item>
      <Menu.Item key="unread">
        <a href="#">unread</a>
      </Menu.Item>
     
      
    </Menu>
  );

 

const ChatList = () => {
    const [selected, setSelected] = useState("Employers")
    const [employerNotifs, setEmployerNotifs] = useState(5)
    const [agencyNotifs, setAgencyNotifs] = useState(null)

    

    return (
        <div className='chat-list-panel'>



                <Form className='search-inner-div'>
                            
                             <Form.Item name="search" className="c-input c-input-with-icon w-100" >

                                    <img className="input-icon" src={require('../../assets/images/icons/search_icon.svg')} alt="" />
                            
                                    <Input placeholder="Job title" size="small" className="xs w-100" type="text" ></Input>
                            
                             </Form.Item>
                            

                            <Dropdown overlayClassName="c-overlay-filter-menu" overlay={menuFilter} placement="bottomRight" trigger={['click']} className='dropdown'>
    
                            <div className="filters">
                            <img className="filter-icon" src={require('../../assets/images/icons/filter_icon_black.svg')} alt="" />
                            </div>

                            </Dropdown>   
            
        
                                    

                            
                </Form>


        <Divider/>

<div className='selector-div'>
            

            <Checkbox/>

            <Dropdown overlay={menu} trigger={['click']} className='dropdown'>
    
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {selected} <DownOutlined />
                </a>
    
            </Dropdown>
            <div className='notification-count'>5</div>


</div>

            <Divider/>

        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
        <CChatListItem/>
            
        </div>
    )
}

export default ChatList
