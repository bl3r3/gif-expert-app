import React from 'react';

export const GifGridItems = ({ title, url }) => {
	return (
		<div className='card animate__animated animate__fadeIn animate_slow'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
