/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { DebugSSIView } from '@owlmeans/vc-lib-native/dist/debug'
import { NavigationContainer } from '@react-navigation/native'

function App(): JSX.Element {

  return <NavigationContainer>
    <DebugSSIView />
  </NavigationContainer>
}

export default App
