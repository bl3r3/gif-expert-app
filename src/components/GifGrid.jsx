import React from 'react';
import { GifGridItems } from './GifGridItems';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { loading, data } = useFetchGifs(category);

	return (
		<>
			<h2 className='animate__animated animate__fadeIn slow'>{category}</h2>
			<p className='animate__animated animate__flash'>
				{loading && 'Loading...'}
			</p>
			<div className='card-grid'>
				{data.map(img => (
					<GifGridItems key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
