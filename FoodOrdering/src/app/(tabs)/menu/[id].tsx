import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
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
  const product = products.find((p) => p.id.toString() === id);

  const [selectedSize, setSelecctedSize] = useState<PizzaSize>("M");

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
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
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelecctedSize(size);
            }}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              key={size}
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? "white" : "black",
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add To Cart"></Button>
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
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 500,
  },
});
export default ProudctDetailsScreen;
