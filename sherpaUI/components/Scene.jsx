import React, { Component } from 'react';

class Scene extends Component {
    constructor() {
        super()
        this.state = {
            opacity: '0.75'
        }
    }

    render() {
        let styles = {
            scene: {
                margin: '3px auto',
                height: '50px',
                width: '85%',
                maxWidth: '50px',
                backgroundColor: (this.props.scene === this.props.data.currScene) ? '#707f9c' : '#1e2538',
                borderRadius: '3px',
                color: (this.props.scene === this.props.data.currScene) ? 'white' : '#707f9c',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                opacity: this.state.opacity
            }
        }
        return (
            <div
                style={styles.scene}
                onClick={() => this.props.changeScene(this.props.scene)}
                onMouseEnter={() => this.setState({ opacity: '1' })}
                onMouseLeave={() => this.setState({ opacity: '0.75' })}
            >
                {`S${this.props.num + 1}`}
            </div>
        )

    }
}

export default Scene;