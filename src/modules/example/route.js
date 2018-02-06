import { StackNavigator } from 'react-navigation'

import Example from './screen/Example'

// export default StackNavigator(
//   {
//     Example: {
//       screen: Example,
//       navigationOptions: {}
//     },
//   },
//   {
//     headerMode: 'none'
//   }
// )

export const exampleRoute = {
  Example: {
    screen: Example,
    navigationOptions: {}
  },
}