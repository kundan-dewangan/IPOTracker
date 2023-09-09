import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Button, ActivityIndicator } from 'react-native';
import CreateIPO from './src/Page/CreateIPO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TableComponent from './src/Component/Table';
import { colors, columnHeaders } from './src/Utils/util';
const App = () => {

  const [name, setName] = useState('');
  const [gmp, setGmp] = useState('');
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (__DEV__) {
    const ignoreWarns = ["VirtualizedLists should never be nested inside plain ScrollViews"];

    const errorWarn = global.console.error;
    global.console.error = (...arg) => {
      for (const error of ignoreWarns) {
        if (arg[0].startsWith(error)) {
          return;
        }
      }
      errorWarn(...arg);
    };
  }


  useEffect(() => {
    setIsLoading(true)
    retrieveData();
  }, []);

  useEffect(() => {
    sortData();
  }, [sortDirection]);

  const storeData = async (newData) => {
    try {
      setIsLoading(true)
      await AsyncStorage.setItem('data', JSON.stringify([...data, newData]));
      setData([...data, newData]);
      retrieveData();
      setIsCreated(false)
      setIsLoading(false)
      Alert.alert('Success', 'Data added successfully');
    } catch (error) {
      setIsLoading(false)
      console.error('Error storing data:', error);
    }
  };

  const retrieveData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('data');
      console.log("what you get from as:::", storedData)
      if (storedData) {
        const parseData = JSON.parse(storedData)
        // console.log("Getting Data::", storedData)
        if (data.length === 0) {
          const newArray = columnHeaders
          // Use unshift() to add newArray to the front of arrayOfArrays
          parseData.unshift(newArray);
          setData(parseData);
        }
      } else {
        setData([]);
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error('Error retrieving data:', error);
    }
  };

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = sortDirection === 'asc' ? a.gmp : b.gmp;
      const bValue = sortDirection === 'asc' ? b.gmp : a.gmp;
      return aValue - bValue;
    });
    setTableData(sortedData);
  };

  const clearAllData = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete all item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Perform the delete action
            handleConfirmDelete()
            console.log('Delete Pressed');
            // Add your delete logic here
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  }

  const handleConfirmDelete = () => {
    AsyncStorage.clear()
      .then(() => {
        retrieveData()
        Alert.alert('Success', 'AsyncStorage data cleared successfully.');
      })
      .catch((error) => {
        Alert.alert('Error', 'error');
      });
  };


  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) :
        <>

          {isCreated && <CreateIPO storeData={storeData} setIsCreated={setIsCreated} />}

          {!isCreated && <>
            <View style={styles.btnWrapper}>
              <Button title='Clean All' color={colors.errorLight} onPress={clearAllData} />
              <Button title='Add IPO' color={colors.primaryDark} onPress={() => setIsCreated(true)} />
            </View>
            <TableComponent listData={data} />

          </>}
        </>
      }

    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10
  }
})