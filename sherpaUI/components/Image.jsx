import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: '0.75'
        }
    }

    render() {
        let styles = {
            page: {
                height: '10%',
                width: '95%',
                // backgroundColor: (this.props.page === this.props.currView) ? '#707f9c' : '#1e2538',
                backgroundImage: `url("./reactVR/static_assets/${this.props.imageURL}")`,
                backgroundSize: 'cover',
                margin: 'auto',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '16px',
                opacity: this.state.opacity,
                cursor: 'hand',
                textShadow: '1px 1px black'
            },
        }

        return (
            <div style={styles.page}
                onMouseEnter={() => this.setState({ opacity: '1' , text:"Change Image"})}
                onMouseLeave={() => this.setState({ opacity: '0.75', text: this.props.imageURL })}
                onClick={this.props.chooseImage}
            >
                {this.props.imageURL}
            </div>
        )
    }

}



export default Image;