import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { NewsContext } from '../API/Context'
import Carousel from 'react-native-snap-carousel'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import SingleNews from '../components/SingleNews'

export default function NewsScreen() {

  const {
    news: {articles}
  } = useContext(NewsContext)
  
const[activeIndex,setActiveIndex] = useState()
const windowHeight= Dimensions.get('window').height

// console.log(articles)

  return (
    <View style={styles.carousel}>
    {articles && (
      <Carousel
        firstItem={articles.slice(0, 10).length - 1}
        layout={"stack"}
        data={articles.slice(0, 10)}
        sliderHeight={10}
        itemHeight={windowHeight}
        vertical={true}
        renderItem={({ item, index }) => (
          <SingleNews item={item} index={index} />
        )}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    )}
  </View>
  )
}


const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
    transform:[{scaleY: -1}],
  },
});