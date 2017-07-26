import React from 'react';
import FA from 'react-fontawesome';

class Sidebar extends React.Component {  
  render() {
    return (
    <div className='hide-for-small'>
		<div className='sidebar'>
			<div className='row user-sort-info'>
				<div className='large-3 medium-4 columns'>
					<FA name='user-circle-o' size='2x' color='blue' />
				</div>
				
				<div className='large-9 medium-9 columns user-name'>Devendra Singh Negi</div>
			</div>			
		</div>
	</div>

    );
  }
}

export default Sidebar;
