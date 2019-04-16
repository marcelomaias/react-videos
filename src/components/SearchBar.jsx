import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="term"
            id="search"
            value={this.state.term}
            onChange={this.handleChange}
            placeholder="Search Video..."
          />
        </form>
      </div>
    )
  }
}

export default SearchBar
