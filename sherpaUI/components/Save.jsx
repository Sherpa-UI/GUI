import React, { Component } from 'react';

class Save extends Component {
    constructor() {
        super()
    }

    render() {
        let styles = {
            publishContainer: {
                width: '120px',
                height: '35px',
                alignSelf: 'center',
                float: 'right',
                margin: 'auto 140px auto 20px',
                zIndex: '1000'
                
            },
            button:{
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
                    onClick={this.props.saveFile}
                >{'+Save '+this.props.projectName}</button>
            </div>
        )
    }

}



export default Save;