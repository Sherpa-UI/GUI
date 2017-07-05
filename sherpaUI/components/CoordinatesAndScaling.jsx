import React, { Component } from 'react';
import templates from '../components/frame_templates/FrameTemplates';

class CoordinatesAndScaling extends Component {
    render() {
        const TemplateFrame = templates[this.props.data.scenes[this.props.data.currScene].frames[this.props.data.currFrame].template]
        return (
            <div style={styles.properties}>
                <TemplateFrame
                    data={this.props.data}
                    updateProperties={this.props.updateProperties}
                    writeToFile={this.props.writeToFile}
                />
            </div>
        )
    }
}

let styles = {
    properties: {
        width: '100%',
        height: '100%',
        overflow: 'scroll'
    }
}

export default CoordinatesAndScaling;