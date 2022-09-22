import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
export default function Index(props: any) {
  const { width, height } = props;
  const categories = [
    {
      id: 0,
      name: "Tất cả",
      images:
        "https://salt.tikicdn.com/cache/w100/ts/upload/b4/e8/d7/2ad7cd9c50a55d90bedc72c6104a2ee1.png",
    },
    {
      id: 1,
      name: "Xe tay ga",
      images:
        "https://salt.tikicdn.com/ts/upload/4a/71/64/7de7d35e452413161ce86c3100f29d45.png",
    },
    {
      id: 2,
      name: "Xe số",
      images:
        "https://salt.tikicdn.com/ts/upload/98/73/ab/dbebb97112f48def572707aa23774cd7.png",
    },
    {
      id: 3,
      name: "PKL",
      images:
        "https://salt.tikicdn.com/ts/upload/68/9c/2f/6fc82a9a9713a2c2b1968e9760879f6e.png",
    },
    {
      id: 4,
      name: "Xe điện",
      images:
        "https://salt.tikicdn.com/ts/upload/73/e0/7d/af993bdbf150763f3352ffa79e6a7117.png",
    },
  ];
  const styles = StyleSheet.create({
    wrap: {
      width: width - 20,
      backgroundColor: "#fff",
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      flexDirection: "row",
    },
    image: {
      width: 40,
      height: 40,
    },
    view_image: {
      alignItems: "center",
      width: "20%",
    },
    white: {
      color: "#000",
      fontSize: 12,
      marginTop: 5,
    },
  });
  return (
    <>
      <View style={styles.wrap}>
        {categories &&
          categories.map((item, index) => (
            <View key={index} style={styles.view_image}>
              <Image
                source={{
                  uri: item.images,
                }}
                style={styles.image}
              />
              <View>
                <Text style={styles.white}>{item.name}</Text>
              </View>
            </View>
          ))}
      </View>
    </>
  );
}
