import React, { Component } from 'react';
import CoordinatesAndScaling from '../components/CoordinatesAndScaling';

class Properties extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: '#bdc2d8',
            color: '#1e2538'
        }
    }

    render() {

        let styles = {
            properties: {
                height: '100%',
                minHeight: '200px',
                width: '100%',
                minWidth: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                margin: '1.8%'
            },
            button: {
                width: '120px',
                height: '30px',
                color: this.state.color,
                backgroundColor: this.state.backgroundColor,
                borderColorBottom: 'black',
                borderColorRight: 'black',
                borderWidth: '1px',
                borderRadius: '3px',
                margin: '10px auto 0px auto',
                fontSize: '12px'
            }
        }
        let template = this.props.data.scenes[this.props.data.currScene].frames[this.props.data.currFrame].template
        return (
            <div style={styles.properties}>
                <CoordinatesAndScaling
                    data={this.props.data}
                    updateProperties={this.props.updateProperties}
                    writeToFile={this.props.writeToFile}
                />
                <button style={styles.button}
                    onMouseEnter={() => this.setState({ backgroundColor: '#1e2538', color: '#bdc2d8' })}
                    onMouseLeave={() => this.setState({ backgroundColor: '#bdc2d8', color: '#1e2538' })}
                    onClick={this.props.writeToFile}
                >Update</button>
            </div>
        )
    }
}

export default Properties;