import Taro, { Component, Config, useRef } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Child from './component/Child'
import Child1 from './component/Child1'
import Child2 from './component/Child2'

import './index.css'

const Index = () => {
  const childRef = useRef()
  const childRef1 = useRef()
  const childRef2 = useRef()

  return (
    <View>
      <Child childRef={childRef}/>
      <Button onClick={() => {
        console.log(childRef.current)
      }}>Child </Button>

      <Child1 ref={childRef1}/>
      <Button onClick={() => {
        console.log(childRef1.current)
      }}>Child1 </Button>

      <Child2 ref={childRef2}/>
      <Button onClick={() => {
        console.log(childRef2.current)
      }}>Child2 </Button>
    </View>
  )
}

export default Index
