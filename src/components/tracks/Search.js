import React, { Component } from 'react'
import axios from 'axios' 
import { Consumer } from '../../context'

class Search extends Component {

	state = {
		trackTitle: ''
	}

	onChange = e => {
		this.setState({ trackTitle: e.target.value})
	}

	findTrack = (e, dispatch) => {
		e.preventDefault()
		axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
		.then(res => {
			dispatch({
				type: 'SEARCH_TRACKS',
				payload: res.data.message.body.track_list
			})
			this.setState({ trackTitle: ''})
		})
	}
	render() {
		return (
			<Consumer>
				{
					value => {
						const { dispatch } = value
						return (
							<div className="card cardy-body mb-4 p-4">
								<h1 className="display-4 text-center">
									 <i className="fas fa-music" aria-hidden="true"></i> Search a Song
								</h1>
								<p className="lead text-center">Get the lyrics for any song</p>

								<form onSubmit={e => this.findTrack(e, dispatch)}>
									<div className="form-group">
										<input 
											type="text" 
											className="form-control form-control-lg"
											name="trackTitle" 
											placeholder="Song title"
											value={this.state.trackTitle}
											onChange={this.onChange}/>
									</div>
									<button type="submit" className="btn btn-primary btn-lg btn-block mb-5">
										Get Track Lyrics
									</button>
								</form>
							</div>
						)
					}
				}
			</Consumer>
		)
	}
}

export default Search
