import React from 'react';
import {Button, Sizes, isDropdown} from 'react-foundation';
import FA from 'react-fontawesome';
import SearchInput from './search';

class Header extends React.Component {  
  render() {
    return (
     <header>
        <div className="header-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li>
                    <h1>logo</h1>
                    </li>                    
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <SearchInput />
                    </li>
                    <li>
                        <select className="search-by-item">
                            <option value='option1'>Name</option>
                            <option value='option2'>GUID</option>
                            <option value='option3'>SerialNumber</option>
                        </select>
                    </li>          
                    <li><a href="#"><FA name='comments' size='2x' /></a></li>                    
                    <li><a href="#"><FA name='group' size='2x' /></a></li>
                    <li className='divider'></li>
                    <li><a href="#"><FA name='cog' size='2x' /></a></li>
                    <li><a href="#"><FA name='user' size='2x' /></a></li>
                    <li><a href="#"><FA name='sign-out' size='2x'/></a></li>
                </ul>
            </div>
        </div>
    </header>

    );
  }
}

export default Header;

 // <li><button className="button search-term-button" type="button">Search</button></li> 