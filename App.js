import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet
} from 'react-native';

const DATA = [
  { id: '1', title: 'React Native' },
  { id: '2', title: 'FlatList' },
  { id: '3', title: 'JavaScript' },
  { id: '4', title: 'Hello World' },
  { id: '5', title: 'Mobile App' },
];

// Component hiển thị từng item
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {
    backgroundColor: '#87CEFA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
});
