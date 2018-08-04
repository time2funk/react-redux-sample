import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createPost } from '../actions/postActions';

class PostsForm extends Component{
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState( {[e.target.name] : e.target.value} )
	}
	onSubmit(e){
		e.preventDefault();

		const post = {
			title : this.state.title,
			body : this.state.body
		}

		this.props.createPost(post);
	}

	componentWillMount() {	}
	
	render() {
		return (
			<div className="PostsForm">
				<form onSubmit={this.onSubmit}>
					<div>
						<label>title</label> <br/>
						<input onChange={this.onChange}
							type='text' 
							name='title' 
							ref='title' 
							value={this.state.title}/>
					</div>
					<div>
						<label>body</label> <br/>
						<textarea  onChange={this.onChange}
							ref='body' 
							name='body' 
							value={this.state.body}/>
					</div>
					<div>
						<input type='submit' value='add post'/>
					</div>
				</form>
			</div>
		)
	}
}

PostsForm.propTypes = {
	createPost: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({

// })

export default connect(null, { createPost })(PostsForm);