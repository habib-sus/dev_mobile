import { StyleSheet, View, Image, FlatList, Pressable } from "react-native";
import products from "../data/products";

const ProductScreen = ({ onSelectProduct }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onSelectProduct && onSelectProduct(item)}
          style={styles.itemContainer}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;
