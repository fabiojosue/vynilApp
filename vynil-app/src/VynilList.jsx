import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import vynilsData from './vynils.json';
import Vynil from './Vynil.jsx';
import './VynilList.css'; // Import the CSS file for vinyl list styles

const VynilList = () => {
	return (
		<div className="vynil-container">
			{vynilsData.vynils.map((vynil) => (
				<Vynil 
					key={uuidv4()}
					title={vynil.title}
					artist={vynil.artist}
					price={vynil.price}
					coverImage={vynil.coverImage}
				/>
			))}
		</div>
	);
};

export default VynilList;
