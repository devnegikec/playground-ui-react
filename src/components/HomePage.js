import React from 'react';
import Graph from './Graph';
import Header from './common/header';
import Sidebar from './common/sidebar';

class HomePage extends React.Component {  
  render() {
    return (
      <div>
        <div className='row expanded small-up-2 medium-up-3 large-up-4'>        
          <Header />  
        </div>

        <div>
          <div className='large-2 medium-3 columns'>
           <Sidebar />
          </div>
          <div className='large-10 medium-9 columns'>
          </div>
        </div> 
      </div>
    );
  }
}

export default HomePage;
