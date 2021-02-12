import React, { Component } from 'react'

class Fave extends Component {

    state = {
        isFave: false,
    }

    className = ''
    
    handleFave = (e) => {
        console.log('Handling fave')
        e.stopPropagation()
        this.setState({
            isFave: !this.state.isFave
        })
    }

    render () {
        {
            if (this.state.isFave) {
                this.className = "film-row-fave remove_from_queue"
            } else {
                this.className = "film-row-fave add_to_queue"
            }
        }

        return (
            <div
             className={this.className}
             >
                <p className="material-icons" onClick={this.handleFave}>add_to_queue</p>
            </div>
        )
    }
}

export default Fave