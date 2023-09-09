import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import CreateIPO from './src/Page/CreateIPO';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {

  // const [name, setName] = useState('');
  // const [gmp, setGmp] = useState('');
  // const [data, setData] = useState([]);
  // const [tableData, setTableData] = useState([]);
  // const [sortDirection, setSortDirection] = useState('asc');


  // useEffect(() => {
  //   // Load data from AsyncStorage when the component mounts
  //   retrieveData();
  // }, []);

  // useEffect(() => {
  //   // Sort data when the sort direction changes
  //   sortData();
  // }, [sortDirection]);

  const storeData = async (newData) => {
  //   try {

  //     await AsyncStorage.setItem('data', JSON.stringify([...data, newData]));
  //     setData([...data, newData]);
  //     Alert.alert('Success', 'Data added successfully');
  //   } catch (error) {
  //     console.error('Error storing data:', error);
  //   }
  };

  // const retrieveData = async () => {
  //   try {
  //     const storedData = await AsyncStorage.getItem('data');
  //     if (storedData) {
  //       setData(JSON.parse(storedData));
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving data:', error);
  //   }
  // };

  // const sortData = () => {
    // const sortedData = [...data].sort((a, b) => {
    //   const aValue = sortDirection === 'asc' ? a.gmp : b.gmp;
    //   const bValue = sortDirection === 'asc' ? b.gmp : a.gmp;
    //   return aValue - bValue;
    // });
    // setTableData(sortedData);
  // };


  return (
    <View style={styles.container}>

      <CreateIPO storeData={storeData} />

      {/* <TableComponent /> */}

    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})