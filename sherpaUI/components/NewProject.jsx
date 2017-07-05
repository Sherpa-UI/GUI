import React, { Component } from 'react';

class NewProject extends Component {
    constructor() {
        super()
    }

    render() {
        let styles = {
            publishContainer: {
                width: '120px',
                height: '35px',
                alignSelf: 'left',
                float: 'left',
                margin: 'auto 10px auto 20px'

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
                    onClick={this.props.newProject}
                >New Project</button>
            </div>
        )
    }

}



export default NewProject;