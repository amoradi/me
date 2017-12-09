import React from 'react';

import { IMG_ME_AND_FAM } from '../constants';

const Info = (props) => {
	return (
		<div className="Stage-conform">
			<img
				className="ResponsiveImage"
				src={IMG_ME_AND_FAM}
			/>
			<div className="AtEnds">
				<p className="AtEnds-content">Aaron Bijan Moradi</p>
				<p className="AtEnds-content AtEnds-right">Front End Developer</p>
			</div>
		</div>
	);
};

export default Info;
