import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const SingleNews = ({item,index}) => {
  return (
    <View>
      <Text style = {styles.title}>{item.title}</Text>
    </View>
  )
}

export default SingleNews

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        color: 'white',
        padding:10,
    }
})