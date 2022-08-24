import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

function Spin (props) {

	const spinner = useSelector(state => state.appReducer.loader);

	return (
		<div className="loader-styles" >
			<TailSpin
			height="80"
			width="80"
			color="#4fa94d"
			ariaLabel="tail-spin-loading"
			radius="1"
			wrapperStyle={{}}
			wrapperClass=""
			visible={spinner}
		/>
		</div>
	)
}

export default Spin;