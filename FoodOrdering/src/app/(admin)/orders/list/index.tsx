import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import orders from '@/assets/data/orders';
import OrderListItem from '@/src/components/OrderListItem';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <FlatList
            data = {orders}
            renderItem = {({item}) => <OrderListItem order={item} />}
            contentContainerStyle = {{padding: 10, gap: 10}}
        />
    </View>
  );
};

export default index;