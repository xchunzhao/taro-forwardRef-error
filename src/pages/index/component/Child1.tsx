import Taro, { useImperativeHandle } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Nerv from 'nervjs'

const Child1 = Nerv.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    test: () => console.log('child1 test')
  }))

  return (
    <View>bbbb</View>
  )
})
export default Child1