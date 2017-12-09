import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';
import ClassNames from 'classnames';

const Slice = ({link, image, text, bodyText, light, alternate}) => {
	const classNames = ClassNames(
		'Slice',
		{
			'Slice--light': light,
			'Slice--alternate': alternate,
		}
	);
  
	return (
		<Link to={link} className={classNames}>
			<img className="Slice-icon" src={image} />
			<div className="Slice-heading">
				{text} <ArrowIcon className="Slice-forwardIcon" />
			</div>
			<div className="Slice-meta">{bodyText}</div>
		</Link>
	);
};

export default Slice;
