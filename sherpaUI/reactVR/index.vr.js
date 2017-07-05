import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Scene, VrHeadModel, Image, VrButton, Text, Animated, VideoPano } from 'react-vr';
import TextFrame from './components/text-frame.vr.js';
import TitleFrame from './components/title-frame.vr.js';
import JumpButton from './components/jump-button.vr.js';

const data = require('./obj.json');

export default class reactVR extends Component {
  constructor() {
    super();
    this.state = data;
    this.state.sceneRotateY = data.currFrame === 'front' ? new Animated.Value(0) :
      data.currFrame === 'right' ? new Animated.Value(90) :
        data.currFrame === 'back' ? new Animated.Value(180) : new Animated.Value(270);
    this.state.totalRotation = data.currFrame === 'front' ? 0 :
      data.currFrame === 'right' ? 90 :
        data.currFrame === 'back' ? 180 : 270;

    this.state.frontTransformation = {
      translate: [-2.5, 1.5, -5],
      leftTranslate: [-5.5, 1.5, -5],
      rightTranslate: [.5, 1.5, -5],
      rotateY: 0
    }
    this.state.rightTransformation = {
      translate: [2.7,1.5,-.4],
      leftTranslate: [2.7,1.5,-3.25],
      rightTranslate: [2.7,1.5,2.45],
      rotateY: 270
    }
    this.state.backTransformation = {
      translate: [-1.7, 1.5, 5],
      leftTranslate: [1.3, 1.5, 5],
      rightTranslate: [-4.7, 1.5, 5],
      rotateY: 180
    }
    this.state.leftTransformation = {
      translate: [-7.1,1.5,.4],
      leftTranslate: [-7.1,1.5,3.4],
      rightTranslate: [-7.1,1.5,-2.6],
      rotateY: 90
    }

    this.navigateY = this.navigateY.bind(this);
    this.changeScene = this.changeScene.bind(this);
  }

  changeScene(scene) {
    let newState = Object.assign({}, this.state);
    newState.currScene = scene;
    this.setState(newState);
  }

  navigateY(frameDeg, direction) {
    frameDeg = frameDeg === 90 ? 270 :
      frameDeg === 270 ? 90 : frameDeg;

    let pitch = VrHeadModel.yawPitchRoll()[1];
    let negPitch = -pitch;
    while (negPitch >= 360) negPitch -= 360;
    while (negPitch < 0) negPitch += 360;
    let rotWithZeroOrigin = negPitch + this.state.totalRotation;
    while (rotWithZeroOrigin >= 360) rotWithZeroOrigin -= 360;
    while (rotWithZeroOrigin < 0) rotWithZeroOrigin += 360;
    goTo = frameDeg + direction * 90;
    if (frameDeg === 270) {
      while (goTo > 360) goTo -= 360;
      while (goTo <= 0) goTo += 360;
    }
    else {
      while (goTo >= 360) goTo -= 360;
      while (goTo < 0) goTo += 360;
    }
    distToRot = goTo - rotWithZeroOrigin;
    while (distToRot >= 180) distToRot -= 360;

    Animated.timing(
      this.state.sceneRotateY,
      {
        toValue: this.state.sceneRotateY._value + distToRot,
        duration: 2000
      }
    ).start();


    let newState = Object.assign({}, this.state);
    newState.totalRotation = this.state.totalRotation + distToRot;
    this.setState(newState);


  }

  componentDidMount() {
    VrHeadModel.yawPitchRoll();

  }

  render() {
    {/*build jump buttons*/ }
    let jumpButtons = [];
    let i = 0;
    for (let key in this.state.scenes) {
      if (key !== this.state.currScene) {
        jumpButtons.push(
          <JumpButton key={i}
            scene={key}
            changeScene={this.changeScene}
            imageURL={this.state.scenes[key].imageURL} />
        )
      }
      i++;
    }
    {/*build jump buttons*/ }

    {/*build four frames*/ }
    let frames = [];
    i = 0;
    for (let key in this.state.scenes[this.state.currScene].frames) {
      let frame = this.state.scenes[this.state.currScene].frames[key];
      if (frame.template === 'TitleFrame') {
        frames.push(
          <TitleFrame key={i}
            navigateY={this.navigateY}
            transformation={this.state[key + 'Transformation']}
            title={this.state.scenes[this.state.currScene].frames[key].title}
            subtitle={this.state.scenes[this.state.currScene].frames[key].subtitle}
          />
        )
      }
      else if (frame.template === 'TextFrame') {
        frames.push(
          <TextFrame key={i}
            navigateY={this.navigateY}
            transformation={this.state[key + 'Transformation']}
            title={this.state.scenes[this.state.currScene].frames[key].title}
            text={this.state.scenes[this.state.currScene].frames[key].text}
          />
        )
      }
      i++;
    }
    {/*build four frames*/}
  
    return (
      <Animated.View style={{ transform: [{ rotateY: this.state.sceneRotateY }] }}>
        <Pano source={asset(this.state.scenes[this.state.currScene].imageURL)}></Pano>
        {jumpButtons}
        {frames}

      </Animated.View>
    )
  }
}

AppRegistry.registerComponent('reactVR', () => reactVR);