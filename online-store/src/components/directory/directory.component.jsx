import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

	constructor(){
		super();

		this.state = {
			sections: [{
				title: 'hats',
				imageUrl: null,
				id: 1
			},{
				title: 'hats',
				imageUrl: null,
				id: 2
			},{
				title: 'hats',
				imageUrl: null,
				id: 3
			},{
				title: 'hats',
				imageUrl: null,
				id: 4
			},{
				title: 'hats',
				imageUrl: null,
				id: 5
			}]
		}

	}

	render(){

		return(
			<div className='directory-menu'>
				{
					this.state.sections.map( ({title,imageUrl,id}) => (
						<MenuItem key={id} title={title}  />
					))
				}
			</div>
		)
	}
}

export default Directory;
