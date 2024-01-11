import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {

  render() {
    return (
      <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about"><b>About</b></Link></li>
                <li><Link to="/contact"><b>Contact</b></Link></li>
            </ul>
        </nav>
      </div>
    )
  }
}
