import React, { Component } from 'react';

class Publish extends Component {
    constructor() {
        super()
    }

    render() {
        let styles = {
            publishContainer: {
                width: '120px',
                height: '35px',
                alignSelf: 'right',
                float: 'right',
                margin: 'auto 20px auto -120px'

            },
            button: {
                width: '100%',
                height: '100%',
                fontSize: '12px',
                borderRadius: '3px',
                borderWidth: '1px',
                borderColor: '#bdc2d8',
                backgroundColor: '#181b2a'
            }
        }

        return (
            <div style={styles.publishContainer}>
                <button
                    style={styles.button}
                    onClick={this.props.publish}
                >{this.props.publishingStatus}</button>
            </div>
        )
    }

}



export default Publish;