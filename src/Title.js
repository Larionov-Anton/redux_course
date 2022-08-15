import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/action";



function Tittle(props) {
	console.log('props title >', props);

	const dispatch = useDispatch();
	const text = useSelector(state => {
		const { inputReducer } = state;
		return inputReducer.text;
	})

	const handleChange = (e) => {
		console.log('handle text >>', e.target.value)
		dispatch(inputText(e.target.value))
	}

	return (
		<div className="card-tittle" >
			<div className="card-title-top" >
				<input type='text' onChange={handleChange} />
			</div>
			<p>{ text }</p>
		</div>
	)
}

export default Tittle;