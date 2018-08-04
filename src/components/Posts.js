import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/postActions';

class Posts extends Component{
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		posts : []
	// 	}

	componentWillMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItems = this.props.posts.map((post) => (
			<li key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</li>
		));
		return (
			<div className="Posts">
				<h1>Posts</h1>
				<ul>{ postItems }</ul>
			</div>
		)
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
}

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.post.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);