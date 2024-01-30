import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				<div style={{fontSize: "14px", background: "white", width: "10%", textAlign: "center", margin: "auto", marginBottom: "10px"}}>
					<IconButton style={{color: "black"}} onClick={() => window.location.href="https://github.com/SyedImtiaz-1"}>
						<GitHubIcon />
					</IconButton>
				</div>
				
				<div>
					<h1 style={{ fontSize: "45px" }}>We Share - A Meeting Web-App</h1>
					<p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your Friends, Colleagues, Family.</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
				</div>
			</div>
		)
	}
}

export default Home;