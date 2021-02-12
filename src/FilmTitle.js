import React, { Component } from 'react'
import Poster from './Poster.js'
import Fave from './Fave.js'

class FilmTitle extends Component {

    handleDetails = (film) => {
        console.log('Fetching details for ' + film.title)
    }

    render () {
        return (
            <div onClick={()=>{this.handleDetails(this.props.film)}} className="film-row">
                < Poster film={this.props.film}/>

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                    < Fave />
                </div>
            </div>
        )
    }
}

export default FilmTitle