import Taro, { useImperativeHandle } from '@tarojs/taro'
import { View } from '@tarojs/components'

const Child = ({ childRef }) => {

  useImperativeHandle(childRef, () => ({
    test: () => console.log('child test')
  }))

  return (
    <View>aaaa</View>
  )
}

export default Child