import React from 'react'
import { StyleSheet, FlatList, View, Text, TouchableHighlight, Image } from 'react-native';

const availableZipItems = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  },
  {
    "albumId": 1,
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "url": "https://via.placeholder.com/600/66b7d2",
    "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
  },
  {
    "albumId": 1,
    "id": 13,
    "title": "repudiandae iusto deleniti rerum",
    "url": "https://via.placeholder.com/600/197d29",
    "thumbnailUrl": "https://via.placeholder.com/150/197d29"
  },
  {
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://via.placeholder.com/600/61a65",
    "thumbnailUrl": "https://via.placeholder.com/150/61a65"
  },
  {
    "albumId": 1,
    "id": 15,
    "title": "harum dicta similique quis dolore earum ex qui",
    "url": "https://via.placeholder.com/600/f9cee5",
    "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
  },
  {
    "albumId": 1,
    "id": 16,
    "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    "url": "https://via.placeholder.com/600/fdf73e",
    "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
  },
  {
    "albumId": 1,
    "id": 17,
    "title": "natus doloribus necessitatibus ipsa",
    "url": "https://via.placeholder.com/600/9c184f",
    "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
  },
  {
    "albumId": 1,
    "id": 18,
    "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    "url": "https://via.placeholder.com/600/1fe46f",
    "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
  },
  {
    "albumId": 1,
    "id": 19,
    "title": "perferendis nesciunt eveniet et optio a",
    "url": "https://via.placeholder.com/600/56acb2",
    "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
  },
  {
    "albumId": 1,
    "id": 20,
    "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    "url": "https://via.placeholder.com/600/8985dc",
    "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
  },
  {
    "albumId": 1,
    "id": 21,
    "title": "ad et natus qui",
    "url": "https://via.placeholder.com/600/5e12c6",
    "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
  },
  {
    "albumId": 1,
    "id": 22,
    "title": "et ea illo et sit voluptas animi blanditiis porro",
    "url": "https://via.placeholder.com/600/45601a",
    "thumbnailUrl": "https://via.placeholder.com/150/45601a"
  },
  {
    "albumId": 1,
    "id": 23,
    "title": "harum velit vero totam",
    "url": "https://via.placeholder.com/600/e924e6",
    "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
  },
  {
    "albumId": 1,
    "id": 24,
    "title": "beatae officiis ut aut",
    "url": "https://via.placeholder.com/600/8f209a",
    "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
  },
  {
    "albumId": 1,
    "id": 25,
    "title": "facere non quis fuga fugit vitae",
    "url": "https://via.placeholder.com/600/5e3a73",
    "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
  },
  {
    "albumId": 1,
    "id": 26,
    "title": "asperiores nobis voluptate qui",
    "url": "https://via.placeholder.com/600/474645",
    "thumbnailUrl": "https://via.placeholder.com/150/474645"
  },
  {
    "albumId": 1,
    "id": 27,
    "title": "sit asperiores est quos quis nisi veniam error",
    "url": "https://via.placeholder.com/600/c984bf",
    "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
  },
  {
    "albumId": 1,
    "id": 28,
    "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
    "url": "https://via.placeholder.com/600/392537",
    "thumbnailUrl": "https://via.placeholder.com/150/392537"
  },
  {
    "albumId": 1,
    "id": 29,
    "title": "aut ipsam quos ab placeat omnis",
    "url": "https://via.placeholder.com/600/602b9e",
    "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
  },
]

const ZipItem = ({ index, albumId, id, title, thumbnailUrl, url, navigate }) => (
  <View style={styles.zipItem}>
    <View style={{marginTop:10}}></View>
    <Text style={styles.zipalbumId}>{albumId}</Text>
    <Text style={styles.zipid}>{id}</Text>
    <Text style={styles.ziptitle}>{title}</Text>
    <View key={index}>
      <Image source={{ uri: url }} style={{ width: 150, height: 150 }} />
      <Image source={{ uri: thumbnailUrl }} style={{ width: 150, height: 150 }} />
    </View>
  </View>


)


const _keyExtractor = item => item.id

export default class WeatherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text>Choose a zip code</Text>),
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({


})