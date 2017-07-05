import React, { Component } from 'react';

class Page extends Component {
    constructor() {
        super()
        this.state = {
            opacity: '0.75'
        }
    }

    render() {
        let styles = {
            page: {
                height: '21%',
                width: '95%',
                backgroundColor: (this.props.page === this.props.currFrame) ? '#707f9c' : '#1e2538',
                margin: 'auto',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: (this.props.page === this.props.currFrame) ? 'white' : '#707f9c',
                fontSize: '16px',
                opacity: this.state.opacity,
                cursor: 'hand'
            }
        }

        return (
            <div style={styles.page}
                onMouseEnter={() => this.setState({ opacity: '1' })}
                onMouseLeave={() => this.setState({ opacity: '0.75' })}
                onClick={() => this.props.selectPage(this.props.page)}
            >
                {this.props.name}
            </div>
        )
    }

}



export default Page;