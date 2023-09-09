import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Orientation from 'react-native-orientation-locker';
import { columnHeaders } from '../Utils/util';

const TableComponent = ({ listData }) => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        const arrayOfArrays = listData?.map((obj) => Object.values(obj));
        setTableData(arrayOfArrays)
    }, [listData])


    const [sortedColumn, setSortedColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);


    useEffect(() => {
        Orientation.lockToPortrait(); // Lock to portrait mode
    }, [])


    const toggleSort = (columnIndex) => {
        const newData = [...tableData];

        if (sortedColumn === columnIndex) {
            // If already sorted, reverse the order
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            newData.shift(); // Remove the header row
            newData.reverse();
        } else {
            // Sort the data in ascending order
            setSortedColumn(columnIndex);
            setSortOrder('asc');
            newData.shift(); // Remove the header row
            newData.sort((a, b) => (a[columnIndex] > b[columnIndex] ? 1 : -1));
        }

        // Add the header row back
        newData.unshift(columnHeaders);

        setTableData(newData);
    };



    return (
        <View style={styles.mainContainer}>
            <View style={styles.sortButtonContainer}>
                <Text>Sort By:</Text>
                <Text
                    style={styles.sortButton}
                    onPress={() => toggleSort(0)}
                >
                    Name
                </Text>
                <Text
                    style={styles.sortButton}
                    onPress={() => toggleSort(1)}
                >
                    GMP
                </Text>
                <Text
                    style={styles.sortButton}
                    onPress={() => toggleSort(5)}
                >
                    Last Date
                </Text>
                <Text
                    style={styles.sortButton}
                    onPress={() => toggleSort(6)}
                >
                    Allot Date
                </Text>
            </View>

            <ScrollView horizontal={true}>

                <View style={styles.container}>
                    <Table borderStyle={styles.tableBorder}>
                        <Row
                            data={tableData[0]}
                            style={styles.head}
                            textStyle={styles.headText}
                            widthArr={[200, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120]} // Adjust column widths as needed
                        />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={styles.tableBorder}>
                            <Rows
                                data={tableData.slice(1)}
                                textStyle={styles.text}
                                widthArr={[200, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120]} // Adjust column widths as needed
                            />                          

                        </Table>
                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    headText: { margin: 6, textAlign: 'center', fontWeight: 'bold' },
    text: { margin: 6, textAlign: 'center' },
    dataWrapper: { marginTop: -1 },
    tableBorder: { borderWidth: 1, borderColor: '#c8e1ff' },
    sortButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    sortButton: { paddingHorizontal: 10, fontWeight: 'bold', marginLeft: 10 },
});

export default TableComponent;
