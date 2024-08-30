import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@components/ProductListItem";
import { useState } from "react";
import Button from "@components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];
const ProudctDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const router = useRouter()
  const product = products.find((p) => p.id.toString() === id);

  const [selectedSize, setSelecctedSize] = useState<PizzaSize>("M");

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart')
  };

  if (!product) {
    return <Text> Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.price}>{product.name}</Text>

      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
Text: {
    fontSize: 20,
    fontWeight: 500,
  },
});
export default ProudctDetailsScreen;
