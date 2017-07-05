import React, { Component } from 'react';
import SceneContainer from '../components/SceneContainer';
import Page from '../components/Page';
import Canvas from '../components/Canvas';
import Properties from '../components/Properties';
import Image from '../components/Image';
import TemplatePicker from '../components/TemplatePicker'

class Gui extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: '#bdc2d8',
            color: '#1e2538'
        }
    }

    render() {
        return (
            <div style={styles.gui}>
                <SceneContainer
                    data={this.props.data}
                    changeScene={this.props.changeScene}
                    addScene={this.props.addScene}
                    deleteScene={this.props.deleteScene}
                />
                <div id='pageContainer' style={styles.pageContainer}>
                    <Image
                        imageURL={this.props.imageURL}
                        chooseImage={this.props.chooseImage}
                    />
                    <Page id='frontpage'
                        name='Front View'
                        page='front'
                        selectPage={this.props.selectPage}
                        currFrame={this.props.data.currFrame}
                        properties={this.props.data.front} />
                    <Page id='backpage'
                        name='Back View'
                        page='back'
                        selectPage={this.props.selectPage}
                        currFrame={this.props.data.currFrame}
                        properties={this.props.data.back} />
                    <Page id='leftpage'
                        name='Left View'
                        page='left'
                        selectPage={this.props.selectPage}
                        currFrame={this.props.data.currFrame}
                        properties={this.props.data.left} />
                    <Page id='rightpage'
                        name='Right View'
                        page='right'
                        selectPage={this.props.selectPage}
                        currFrame={this.props.data.currFrame}
                        properties={this.props.data.right} />
                </div>
                <div style={styles.canvas}>
                <Canvas
                    loadURL={this.props.loadURL}
                    openWindow={this.props.openWindow}
                />
                </div>
                <div style={styles.templateContainer}>
                    <div style={styles.propertiesContainer}>
                        <Properties
                            data={this.props.data}
                            updateName={this.props.updateName}
                            updateProperties={this.props.updateProperties}
                            writeToFile={this.props.writeToFile}
                        />
                    </div>
                    <TemplatePicker
                        data={this.props.data}
                        changeTemplate={this.props.changeTemplate}
                    />
                </div>
            </div>
        )
    }
}

let styles = {
    gui: {
        height: '90%',
        flex: '[3 0 85%]',
        backgroundColor: '#181b2a',
        padding: '1px',
        flexDirection: 'row',
        display: 'flex'
    },
    pageContainer: {
        height: '100%',
        width: '15%',
        minWidth: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '0.2%'
    },
    propertiesContainer: {
        height: '800px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0'
    },
    templateContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '290px',
        minWidth: '290px'
    },
    canvas: {
        width: '100%',
        height: '100%',
        paddingBottom: '0.75%',
        paddingTop: '0.25%'
    }
}

export default Gui;