import React, { Component } from 'react';


class FrameTemplate extends Component {
    constructor() {
        super()
        this.state = {
            opacity: '0.75'
        }
    }

    render() {
        let styles = {
            frameTemplate: {
                height: '80px',
                width: '42.2%',
                backgroundColor: (this.props.template === this.props.data.currTemplate) ? '#707f9c' : '#181b2a',
                color: (this.props.template === this.props.data.currTemplate) ? 'white' : '#707f9c',
                borderColor: 'white',
                margin: '10px',
                borderRadius: '3px',
                borderWidth: '1px',
                float: 'left',
                opacity: this.state.opacity,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '100',
                fontSize: '13px'
            },
            frameHolder: {
                display: 'inline'
            }
        }
        return (
            <div style={styles.frameHolder}>
                <div
                    style={styles.frameTemplate}
                    onClick={()=>{
                        this.props.changeTemplate(this.props.template)
                        }}
                    onMouseEnter={() => this.setState({ opacity: '1' })}
                    onMouseLeave={() => this.setState({ opacity: '0.75' })}
                >{this.props.template}</div>
            </div>
        )
    }
}



export default FrameTemplate;