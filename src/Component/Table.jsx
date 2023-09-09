// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { colors, padding } from '../Utils/util';

// const TableComponent = () => {

//     const [tableHead, setTableHead] = useState(['Head', 'Head2', 'Head3', 'Head4']);
//     const [tableData, setTableData] = useState([
//         ['1', '2', '3', '4'],
//         ['a', 'b', 'c', 'd'],
//         ['1', '2', '3', '456\n789'],
//         ['a', 'b', 'c', 'd']
//     ]);
//     return (
//         <View style={styles.container}>
//             <Table borderStyle={{ borderWidth: 1, borderColor: colors.blackDark }}>
//                 <Row data={tableHead} style={styles.head} textStyle={styles.text} />
//                 <Rows data={tableData} textStyle={styles.text} />
//             </Table>
//         </View>
//     )
// }

// export default TableComponent

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: colors.blackDark, padding: padding.ten },
//     head: { height: 40, backgroundColor: colors.primaryLight, color: colors.blackDark, fontWeight: 600 },
// })
