
import { useEffect, useState } from 'react';
import uniqid from 'uniqid'; 
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import { commentCreate, commentsLoad } from './redux/action';

function Comments(props) {

	const [textComment, setComment] = useState('');
	const dispatch = useDispatch();
	const comments = useSelector(state => {
		const { commentsReducer } = state;
		return commentsReducer.comments;
	})
	// console.log('comments >>', comments);

	const handleInput = (e) => {
		setComment(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = uniqid();
		dispatch(commentCreate(textComment, id));
	}

	useEffect(() => {
		dispatch(commentsLoad());
	}, []);

	return (
		<div className="card-comments" >
			<form onSubmit = { handleSubmit } className="comments-item-create" >
				<input type='text' value = {textComment} onChange = { handleInput } />
				<input type='submit' hidden />
			</form>
			{ !!comments.length && comments.map(res => {
				return <SingleComment key = {res.id} data = { res } />
			}) }
			
		</div>
	)
}

export default Comments;