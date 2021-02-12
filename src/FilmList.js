import React, { Component } from 'react'
import FilmTitle from './FilmTitle.js'

class FilmList extends Component {

    state = {
        filter: 'all'
    }

    filterCLick = (search) => {
        console.log('Filter by ' + search)
        this.setState({
            filter: search
        })
    }

    allClass
    faveClass

    render () {
        let films = this.props.TMDB.films.map(film => {
            return < FilmTitle film={film} />
        })

        if (this.state.filter === 'all') {
            this.allClass = 'film-list-filter is-active'
            this.faveClass = 'film-list-filter'
        } else {
            this.allClass = 'film-list-filter'
            this.faveClass = 'film-list-filter is-active'
        }

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div onClick={() => {this.filterCLick('all')}} className={this.allClass}>
                        ALL
                        <span className="section-count">{films.length}</span>
                    </div>
                    <div onClick={() => {this.filterCLick('fave')}} className={this.faveClass}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                { films }
            </div>
        )
    }
}

export default FilmList