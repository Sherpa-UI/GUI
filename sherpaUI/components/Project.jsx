import React, { Component } from 'react';
import Attribute from '../components/Attribute';

class Project extends Component {
    render() {
        return (
            <div style={styles.properties}>
                Project Name
                <form style={styles.form}>
                    <textarea style={styles.inputMedium}
                        type="text"
                        wrap="soft"
                        name="projectName"
                        value={this.props.data.projectName}
                        onChange={this.props.updateName}
                        />
                </form>
            </div>
        )
    }
}

let styles = {
    properties: {
        width: '100%',
        marginBottom:'5px',
        height: 'auto',
        fontSize: '14px',
        backgroundColor: '#1e2538',
        padding: '10px 15px 10px 15px',
        borderRadius: '3px'
    },
    form: {
        margin: '5px 0px',
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '0px',
        
    },
    inputMedium: {
        borderRadius: '3px',
        borderWidth: '0px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '5px 0px 10px 0px',
        height: '25px',
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '5px 5px',
        fontSize: '11px'
    }
}

export default Project;