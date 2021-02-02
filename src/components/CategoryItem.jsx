import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem(props) {
	const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } = props
	return (
		<div className="card" id={idCategory}>
			<div className="card-image">
				<img src={strCategoryThumb} alt={strCategory} />
			</div>
			<div className="card-content">
				<span className="card-title">{strCategory}</span>
				<p>{strCategoryDescription.slice(0, 100)}...</p>
			</div>
			<div className="card-action">
				<Link to={`/category/${idCategory}`} className="btn">
					Watch category
				</Link>
			</div>
		</div>
	)
}

export default CategoryItem
