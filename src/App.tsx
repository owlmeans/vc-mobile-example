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
import { buildIdentityExtensionNative } from '@owlmeans/vc-ext-identity/dist/native'
import { commConfig, config } from './config'

const EXAMPLE_IDENTITY_TYPE = 'ExampleIdentity'
const registry = buildUIExtensionRegistry()

registry.registerSync(buildCommNativeExtension(commConfig))
registry.registerSync(buildIdentityExtensionNative(EXAMPLE_IDENTITY_TYPE, { appName: config.name }, {
  name: '',
  code: 'example-identity',
  organization: 'Example Org.',
  home: 'https://my-example.org/',
  schemaBaseUrl: 'https://my-example.org/schemas/'
}))

function App(): JSX.Element {
  return <NavigationContainer>
    <DebugSSIView extensions={registry.normalize()} />
  </NavigationContainer>
}

export default App
