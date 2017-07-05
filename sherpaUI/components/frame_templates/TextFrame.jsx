import React, { Component } from 'react';
import { TextInput } from 'react-desktop/macOs';

class TextFrame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: '#bdc2d8',
            color: '#1e2538',
        }
    }

    render() {
        let button = {
            width: '120px',
            height: '30px',
            color: this.state.color,
            backgroundColor: this.state.backgroundColor,
            borderColorBottom: 'black',
            borderColorRight: 'black',
            borderWidth: '1px',
            borderRadius: '3px',
            margin: '0 auto',
            fontSize: '12px'
        }
        let currFrameData = this.props.data.scenes[this.props.data.currScene].frames[this.props.data.currFrame]
        return (
            <div style={styles.attributeContainer}>
                Title
                <form style={styles.form}>
                    <label style={styles.label}>Title</label>
                    <textarea style={styles.inputLarge}
                        type="text"
                        wrap="soft"
                        name="title"
                        value={currFrameData.title}
                        onChange={this.props.updateProperties} />
                </form>
                Paragraph
                <form style={styles.form}>
                    <label style={styles.label}>Text</label>
                    <textarea style={styles.inputLarge}
                        type="text"
                        wrap="soft"
                        name="text"
                        value={currFrameData.text}
                        onChange={this.props.updateProperties} />
                </form>
            </div>
        )
    }
}

let styles = {
    attributeContainer: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        fontSize: '14px',
        backgroundColor: '#1e2538',
        padding: '15px',
        borderRadius: '3px',
    },
    text: {
        color: 'black',
        alignItems: 'left',
        backgroundColor: 'white'
    },
    form: {
        margin: '10px 0px',
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '2px',

    },
    label: {
        padding: '3px',
        fontSize: '12px',
        width: '50px',
        alignSelf: 'center',
        opacity: '0.5'
    },
    inputLarge: {
        borderRadius: '3px',
        borderWidth: '0px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px 5px',
        height: '50px',
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '5px',
        fontSize: '11px'
    },
    inputMedium: {
        borderRadius: '3px',
        borderWidth: '0px',
        width: '200px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px -3px',
        height: '25px',
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '5px',
        fontSize: '11px'
    },
    inputSmall: {
        borderRadius: '3px',
        borderWidth: '0px',
        width: '25px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px -3px',
        height: '25px',
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '5px',
        fontSize: '11px'
    }
}

export default TextFrame;