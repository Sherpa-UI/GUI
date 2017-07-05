import React, { Component } from 'react';

class DeleteScene extends Component {
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
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                opacity: this.state.opacity,
                backgroundColor: '#181b2a'
            }
        }
        return (
            <div
                style={styles.scene}
                onClick={()=>this.props.deleteScene(this.props.currScene)}
                onMouseEnter={() => this.setState({ opacity: '1' })}
                onMouseLeave={() => this.setState({ opacity: '0.75' })}
            >
                {'D'}
            </div>
        )

    }
}

export default DeleteScene;