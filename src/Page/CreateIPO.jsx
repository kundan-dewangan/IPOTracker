import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { colors, generateRandomNumber } from '../Utils/util';

const CreateIPO = ({ storeData, setIsCreated }) => {
    const [name, setName] = useState('');
    const [gmp, setGmp] = useState('');
    const [profit, setProfit] = useState('');
    const [fireRating, setFireRating] = useState('');
    const [startDate, setStartDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [allotmentDate, setAllotmentDate] = useState('');
    const [listingDate, setListingDate] = useState('');
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    const [sHNIQty, setSHNIQty] = useState('');
    const [sHNIPrice, setSHNIPrice] = useState('');

    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        } else if (name.length > 50) {
            newErrors.name = 'Name should be at most 50 characters';
        }

        if (!gmp.trim()) {
            newErrors.gmp = 'GMP is required';
        } else if (isNaN(gmp) || Number(gmp) > 1000) {
            newErrors.gmp = 'GMP should be a number up to 1000';
        }

        if (!profit.trim()) {
            newErrors.profit = 'Profit is required';
        } else if (profit.length > 50) {
            newErrors.profit = 'Profit should be at most 50 characters';
        }

        if (!fireRating.trim()) {
            newErrors.fireRating = 'Fire Rating is required';
        } else if (isNaN(fireRating) || Number(fireRating) > 5) {
            newErrors.fireRating = 'Fire Rating should be a number up to 5';
        }

        if (!lastDate.trim()) {
            newErrors.lastDate = 'Last Date is required';
        }
        if (!allotmentDate.trim()) {
            newErrors.allotmentDate = 'Allotment Date is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleAddData = () => {
        if (validateInputs()) {
            const newData = { name, gmp, profit, fireRating, startDate, lastDate, allotmentDate, listingDate, qty, price, sHNIQty, sHNIPrice, id: generateRandomNumber(), };
            storeData(newData)
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <SafeAreaView>
                <Text style={styles.goBack} onPress={()=> setIsCreated(false)}>Go Back</Text>
                <Text style={styles.title}>Add IPO</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setName(text)}
                        value={name}
                        borderColor={errors.name ? colors.errorDark : colors.primaryLight}
                    />
                    {errors.name && <Text style={styles.error}>{errors.name}</Text>}

                    <Text style={styles.label}>GMP (Up to 1000)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setGmp(text)}
                        value={gmp}
                        borderColor={errors.gmp ? colors.errorDark : colors.primaryLight}

                    />
                    {errors.gmp && <Text style={styles.error}>{errors.gmp}</Text>}

                    <Text style={styles.label}>Profit</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProfit(text)}
                        value={profit}
                        borderColor={errors.profit ? colors.errorDark : colors.primaryLight}

                    />
                    {errors.profit && <Text style={styles.error}>{errors.profit}</Text>}

                    <Text style={styles.label}>Fire Rating (Up to 5)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setFireRating(text)}
                        value={fireRating}
                        borderColor={errors.fireRating ? colors.errorDark : colors.primaryLight}

                    />
                    {errors.fireRating && (
                        <Text style={styles.error}>{errors.fireRating}</Text>
                    )}

                    <Text style={styles.label}>Start Date (dd-mm-yyyy)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setStartDate(text)}
                        value={startDate}
                    />

                    <Text style={styles.label}>Last Date (dd-mm-yyyy)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setLastDate(text)}
                        value={lastDate}
                        borderColor={errors.lastDate ? colors.errorDark : colors.primaryLight}
                        
                        />
                    {errors.lastDate && <Text style={styles.error}>{errors.lastDate}</Text>}

                    <Text style={styles.label}>Allotment Date (dd-mm-yyyy)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setAllotmentDate(text)}
                        value={allotmentDate}
                        borderColor={errors.allotmentDate ? colors.errorDark : colors.primaryLight}
                    />

                    <Text style={styles.label}>Listing Date (dd-mm-yyyy)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setListingDate(text)}
                        value={listingDate}
                    />

                    <Text style={styles.label}>Qty</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setQty(text)}
                        value={qty}
                    />

                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setPrice(text)}
                        value={price}
                    />

                    <Text style={styles.label}>SHNI Qty</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setSHNIQty(text)}
                        value={sHNIQty}
                    />

                    <Text style={styles.label}>SHNI Price (1,00,000 - 10,00,000)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setSHNIPrice(text)}
                        value={sHNIPrice}
                    />

                    {errors.sHNIPrice && (
                        <Text style={styles.error}>{errors.sHNIPrice}</Text>
                    )}

                    <Button title="Add IPO" color={colors.primaryDark} onPress={handleAddData} />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primaryDark

    },
    goBack:{
        color: colors.secondaryDark,
        marginBottom: 10
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: colors.blackLight
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.primaryLight,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    error: {
        color: colors.errorDark,
        marginBottom: 10,
    },
});

export default CreateIPO;
