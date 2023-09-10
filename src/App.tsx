/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { DebugSSIView } from '@owlmeans/vc-lib-native'

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <View><Text>Hello world</Text></View>
      <DebugSSIView />
    </SafeAreaView>
  )
}

export default App
