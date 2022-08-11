
function Tittle(props) {
	console.log('props title >', props);

	const handleChange = (e) => {
		console.log('handle text >>', e.target.value)
	}

	return (
		<div className="card-tittle" >
			<div className="card-title-top" >
				<input type='text' onChange={handleChange} />
			</div>
		</div>
	)
}

export default Tittle;