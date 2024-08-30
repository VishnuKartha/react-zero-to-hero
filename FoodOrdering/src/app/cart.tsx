import { View, Text, StyleSheet, StatusBar, Platform, FlatList } from "react-native";
import { CartContext, useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
  const { items , total} = useCart();
  return (
    <View>
    <FlatList
        data = {items}
        renderItem = {({item}) => <CartListItem cartItem={item} />}
        contentContainerStyle = {{padding: 10, gap: 10}}
    />
    <Text style={{marginTop: 20, fontSize: 20, fontWeight: '500', color: 'white'}}> Total : ${total}</Text>
      <Button text="Checkout"></Button>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", // This makes the white text stand out
  },
  whiteText: {
    color: "white",
    fontSize: 20,
  },
});
