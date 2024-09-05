import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Order, OrderItem } from '../types';
import { Link, useSegments } from 'expo-router';
import products from '@/assets/data/products';
import { defaultPizzaImage } from './ProductListItem';
import Colors from '../constants/Colors';
type OrderItemListItemProps = {
    items:OrderItem,
}
const OrderItemListItem = ({items: orderItem}:OrderItemListItemProps) => {
  const segments = useSegments();
  console.log(segments);
  const product = products.find(p => p.id = orderItem.product_id);
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: product?.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"/>
      <View>
        <Text style={styles.name}>{product?.name}</Text>
        <View style={styles.name_and_price}>
          <Text style={styles.price}>${product?.price}</Text>
          <Text style={styles.size}>Size: {orderItem.size}</Text>
        </View>
      </View>
      <Text style={styles.quantity}>{orderItem.quantity}</Text>
  </View>

  );
};

export default OrderItemListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: "25%",
    aspectRatio: 1,
  },
  name_and_price: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  size: {
    marginVertical: 10,
    paddingLeft:5,
  },
  quantity: {
    fontSize:20,
    fontWeight: "bold",
  }
}
);
