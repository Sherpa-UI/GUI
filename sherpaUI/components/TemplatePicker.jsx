import React, { Component } from 'react';
import templates from '../components/frame_templates/FrameTemplates';
import FrameTemplate from '../components/FrameTemplate'

class TemplatePicker extends Component {
    render() {
        let templateArray = [];
        let templateKeys = Object.keys(templates)
        templateKeys.forEach((e, i) => {
            templateArray.push(<FrameTemplate
                data={this.props.data}
                template={e}
                num={i}
                key={i}
                changeTemplate={this.props.changeTemplate}
                styles={styles.frameTemplate}
            />
            )
        })

        let template = this.props.data.scenes[this.props.data.currScene].frames[this.props.data.currFrame].template
        
        return (
            <div style={styles.properties}>
                <label style={styles.label}>View Style:{this.props.data.currTemplate}</label>
                {templateArray}
            </div>
        )
    }
}

let styles = {
    properties: {
        height: '250px',
        width: '100%',
        minWidth: '250px',
        margin: '1.8%',
        backgroundColor: '#1e2538',
        padding: '10px',
        paddingRight: '15px',
        borderRadius: '3px',
        overflow: 'scroll'
    },
    label: {
        color: '#bdc2d8',
        width: '100%',
        fontSize: '14px',
        maxHeight: '20px',
        marginLeft: '8px',
        marginTop: '5px',
        float: 'left'
    }
}

export default TemplatePicker;