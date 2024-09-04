import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Order } from '../types';
import { Link, useSegments } from 'expo-router';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
type OrderListItemProps = {
    order:Order,
}
const OrderListItem = ({order}:OrderListItemProps) => {
var relativeTime = require("dayjs/plugin/relativeTime");
  const segments = useSegments();
  console.log(segments);
  dayjs.extend(relativeTime);

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View>
            <Text style={styles.id}>Order #{order.id}</Text>
            <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>

  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  id: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  time: {
    color: "gainsboro",
  },
  status: {
    fontWeight: 500,    
  },
}
);
