import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View,Button } from 'react-native';
import CreateIPO from './src/Page/CreateIPO';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Table, Row, Rows } from 'react-native-table-component';

const App = () => {

  const [name, setName] = useState('');
  const [gmp, setGmp] = useState('');
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');


  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    sortData();
  }, [sortDirection]);

  const storeData = async (newData) => {
    try {
      console.log("Coming Data:::", newData)

      await AsyncStorage.setItem('data', JSON.stringify([...data, newData]));
      setData([...data, newData]);
      retrieveData();
      Alert.alert('Success', 'Data added successfully');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const retrieveData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('data');
      if (storedData) {
        console.log("Getting Data::", storedData)
        setData(JSON.parse(storedData));
      }
    } catch (error) {
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


  return (
    <View style={styles.container}>

      <CreateIPO storeData={storeData} />

      <Button
          title={`Sort GMP ${sortDirection === 'asc' ? 'Ascending' : 'Descending'}`}
          onPress={() =>
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
          }
        />

      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={['Name', 'GMP']} style={styles.head} textStyle={styles.headText} />
        <Rows data={tableData.map((item) => [item.name, item.gmp])} textStyle={styles.text} />
      </Table>

    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})