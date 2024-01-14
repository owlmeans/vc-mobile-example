/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { DebugSSIView } from '@owlmeans/vc-lib-native/dist/debug'
import { NavigationContainer } from '@react-navigation/native'
import { buildUIExtensionRegistry } from '@owlmeans/vc-lib-react/dist/shared'
import { buildCommNativeExtension } from '@owlmeans/vc-ext-comm/dist/native'
import { commConfig } from './config'

const registry = buildUIExtensionRegistry()

registry.registerSync(buildCommNativeExtension(commConfig))


function App(): JSX.Element {
  return <NavigationContainer>
    <DebugSSIView extensions={registry} />
  </NavigationContainer>
}

export default App
