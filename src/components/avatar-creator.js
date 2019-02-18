import React, { Component } from 'react'
import { connect } from 'react-redux'
import Identicon from 'identicon.js';

export class AvatarCreator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			size: 420
		}
	}

	render() {
		return !this.props.searchField ? (<h2>Loading...</h2>) : (
			<div>
				<img alt="Avatar" src={`data:image/png;base64,${new Identicon(this.props.searchField.hash, this.state.size).toString()}`} />
				<br />
				<div className="dropdown">
					<button className="dropbtn">-- SIZE --</button>
					<div className="dropdown-content">
						<a onClick={() => {
							this.setState({
								size: 420
							})
						}}>420px</a>
						<a onClick={() => {
							this.setState({
								size: 256
							})
						}}>256px</a>
						<a onClick={() => {
							this.setState({
								size: 128
							})
						}}>128px</a>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
	   searchField : state.searchRobots.searchField,
	}
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarCreator)
