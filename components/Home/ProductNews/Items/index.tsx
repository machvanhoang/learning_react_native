import { View, Text, StyleSheet, Image } from "react-native";
export default function Index(props: any) {
  const { product } = props;
  const check = "Đã Kiểm Định";
  const styles = StyleSheet.create({
    items: {
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 10,
      width: 180,
      marginRight: 10,
    },
    view: {
      height: 160,
      position: "relative",
    },
    image: {
      width: 160,
      height: 160,
      resizeMode: "contain",
    },
    check: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: "#09ccd3",
      paddingVertical: 3,
      paddingHorizontal: 10,
      paddingRight: 10,
      borderTopLeftRadius: 5,
    },
    check_text: {
      fontSize: 10,
      color: "#fff",
    },
    badge_flex: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 5,
      marginBottom: 5,
    },
    badge: {
      paddingHorizontal: 10,
      paddingVertical: 3,
      backgroundColor: "#ebeced",
      borderRadius: 8,
      marginRight: 4,
    },
    badge_text: {
      fontSize: 10,
      color: "#171b1c",
    },
    price: {},
    price_text: {
      fontWeight: "bold",
      color: "#000",
      fontSize: 13,
    },
    status: {},
    status_text: {
      fontSize: 11,
      color: "#96a1a9",
    },
    reputation: {
      flex: 1,
      marginTop: 5,
    },
    reputation_text: {
      fontSize: 10,
      color: "#Fff",
      marginLeft: 5,
    },
    reputation_view: {
      paddingLeft: 10,
      paddingBottom: 4,
      paddingTop: 4,
      paddingRight: 10,
      borderRadius: 10,
      backgroundColor: "#00bcc3",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
    },
    title: {
      marginTop: 5,
      marginBottom: 5,
    },
    title_text: {
      fontWeight: "bold",
    },
  });
  return (
    <>
      <View style={styles.items}>
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={{
              uri: product.images,
            }}
          />
          {product.check && (
            <View style={styles.check}>
              <Text style={styles.check_text}>{check}</Text>
            </View>
          )}
        </View>
        <View style={styles.title}>
          <Text>Items {product.title}</Text>
        </View>
        <View style={styles.badge_flex}>
          <View style={styles.badge}>
            <Text style={styles.badge_text}>{product.year}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badge_text}>{product.km} Km</Text>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={styles.price_text}>{product.price} đ</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.status_text}>
            {product.date} - {product.city}
          </Text>
        </View>
        <View style={styles.reputation}>
          <View style={styles.reputation_view}>
            <Image
              source={require("../../../../assets/images/reputation.png")}
              style={{
                width: 14,
                height: 14,
              }}
            />
            <Text style={styles.reputation_text}>Đối tác uy tín</Text>
          </View>
        </View>
      </View>
    </>
  );
}
