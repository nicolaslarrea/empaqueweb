import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

//TODO, activar la funcoinalidad de la geolocalización.
export default class App extends Component<Props> {
  render() {
    return (
      <WebView
        source={{ uri: 'https://mapa.buenosaires.gob.ar' }}
      />
    )
  }
}
