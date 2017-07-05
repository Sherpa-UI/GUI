import React, { Component } from 'react';
import { View, Text } from 'react-vr';
import Nav from './nav.vr.js'


export default class TextFrame extends Component {

  render() {
    return (
      <View>
        <View style={{ flex: 1,
                       position: 'absolute',
                       width: 5,
                       alignItems: 'center',
                       flexDirection: 'column',
                       backgroundColor: 'rgba(0, 0, 0, 0.3)',
                       transform: [ 
                                    {translate: this.props.transformation.translate}, 
                                    {rotateY: this.props.transformation.rotateY}, 
                                    ]
                     }}>
          {/*TITLE*/}
          <Text style={{
                  fontSize: .5,
                  color: 'white',
                }}>
                {this.props.title}
          </Text>
          {/*TITLE*/}

          {/*TEXT*/}
          <Text style={{
                  fontSize: .2,
                  color: 'white',
                }}>
                {this.props.text}
          </Text>
          {/*TEXT*/}
        </View>

        <Nav direction={'left'}
             translate={this.props.transformation.leftTranslate} 
             rotateY={this.props.transformation.rotateY}
             navigateY={this.props.navigateY}/>
        <Nav direction={'right'}
             translate={this.props.transformation.rightTranslate} 
             rotateY={this.props.transformation.rotateY}
             navigateY={this.props.navigateY}/>
      </View>

    )
  }
};