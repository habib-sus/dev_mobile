import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = ({ product = products[0], onBack }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      {onBack && (
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Retour</Text>
        </Pressable>
      )}
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ajouter au panier</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 8,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ProductDetailsScreen;
