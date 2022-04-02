import React, {
  useState,
  useEffect,
} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TextInput
} from 'react-native';
import filter from 'lodash.filter';
import intersection from 'lodash.intersection';
import { useNavigation } from "@react-navigation/native";


import HomeScreenLecturesItem from "../../components/HomeScreenLecturesItem";


const API_ENDPOINT = `https://ku-share-backend.herokuapp.com/lecture/fetch`;

const SearchPage = (props) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(results => {
        setData(results.fetchedLectures);

        setFullData(results.fetchedLectures);

        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  const renderHeader = () => {

    const handleSearch = text => {
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(fullData, title => {
        return contains(title, text);
      });
      setData(filteredData);
      setQuery(text);
    };
    
    const contains = ({title}, query) => {
      // console.log(lectureTitle);
      // console.log(title);
      // console.log(query);

    
      if (title.includes(query)) {
        return true;
      }
    
      return false;
    };

    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  return (
    <View>
       <FlatList
        ListHeaderComponent={renderHeader}
        refreshing={isRefreshing}
        data={data}
        keyExtractor={(item, index) => item._id}
        renderItem={(itemData) => (
          <View
            style={{
              flexDirection: 'column',
              margin: 5,
              marginTop: 20
            }}>
          <HomeScreenLecturesItem
            // keyExtractor={(item, index) => item.id}
            lectureThumbnail={itemData.item.thumbnail.url}
            lectureDescription={itemData.item.description}
            onSelect={() => {navigation.navigate("SinglePost", {
              itemId: itemData.item._id,
            });}}
          />
          </View>
        )}
        numColumns={3}
      />
    </View>
    
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },
  listItemText: {
    fontSize: 18
  },
  textColor: {
    color: '#000000'
  }
});

export default SearchPage;