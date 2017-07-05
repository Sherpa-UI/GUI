import React, { Component } from 'react';
import { View, Text, VrButton, Image, asset } from 'react-vr';


export default class JumpButton extends Component {

  render() {
    return (
        <VrButton onClick={()=>this.props.changeScene(this.props.scene)}
                  style={{
                      backgroundColor: 'black',
                      borderRadius: 0.05,
                      width: .8,
                      height: .2,
                      justifyContent: 'center',
                      borderWidth: 0,
                      transform: [
                        {translate: [-2.5,-1.8,-4]}
                      ]
                  }}>
            <Image source={asset(this.props.imageURL)}
                   style={{
                       borderRadius: 0.05,
                       width: .8,
                       height: .2
                   }}>
            <Text style={{
                    textAlign: 'center',
                    fontSize: .1,
                    fontWeight: 'bold',
                  }}
            >{this.props.scene}
            </Text>
            </Image>
        </VrButton>
    )
  }
};