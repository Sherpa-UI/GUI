import React, { Component } from 'react';
import Scene from '../components/Scene';
import AddScene from '../components/AddScene';
import DeleteScene from '../components/DeleteScene';

class SceneContainer extends Component {
    render() {
        let sceneArray = [];
        let sceneKeys = Object.keys(this.props.data.scenes)
        sceneKeys.forEach((e, i) => {
            sceneArray.push(<Scene
                data={this.props.data}
                scene={e}
                num={i}
                key={i}
                changeScene={this.props.changeScene}
            />
            )
        })

        return (
            <div style={styles.sceneContainer}>
                {sceneArray}
                <AddScene
                    style={styles.scene}
                    addScene={this.props.addScene}
                />
                <DeleteScene
                    style={styles.scene}
                    deleteScene={this.props.deleteScene}
                    currScene={this.props.data.currScene}
                />
            </div>
        )
    }
}

let styles = {
    sceneContainer: {
        height: '100%',
        width: '5%',
        minWidth: '50px',
        backgroundColor: '#1e2538',
        padding: 'auto',
        paddingTop: '2px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    scene: {
        margin: '5px auto',
        height: '50px',
        width: '85%',
        maxWidth: '50px',
        backgroundColor: '#181b2a',
        borderRadius: '3px',
        color: '#707f9c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default SceneContainer;