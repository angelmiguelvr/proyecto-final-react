export const Product = ({id, imagen, nombre}) => {
	return (
		<li key={id}>
			<p>{id}</p>
			<img src={imagen} alt={nombre}/>
			<p style={{marginBottom: 0}}>{nombre}</p>
		</li>
	)
}