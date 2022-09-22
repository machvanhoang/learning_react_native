import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
export default function Index(props: any) {
  const brands = [
    {
      id: 0,
      name: "Honda",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Honda.png",
      width: 114,
      height: 80,
    },
    {
      id: 1,
      name: "Yamaha",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Yamaha.png",
      width: 114,
      height: 80,
    },
    {
      id: 2,
      name: "Detech",
      images: "https://cdn.okxe.vn/moto/logo/active/linh_1634710030.png",
      width: 80,
      height: 80,
    },
    {
      id: 3,
      name: "Suzuki",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Suzuki.png",
      width: 114,
      height: 80,
    },
    {
      id: 4,
      name: "Visitor",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Visitor.png",
      width: 114,
      height: 80,
    },
    {
      id: 5,
      name: "Osakar",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Osakar.png",
      width: 114,
      height: 80,
    },
    {
      id: 6,
      name: "Ducati",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Ducati.png",
      width: 114,
      height: 80,
    },
    {
      id: 7,
      name: "Dibao",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Dibao.png",
      width: 114,
      height: 80,
    },
    {
      id: 8,
      name: "Piagio",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Piaggio.png",
      width: 114,
      height: 80,
    },
    {
      id: 9,
      name: "Dkbike",
      images: "https://cdn.okxe.vn/moto/logo/active/2021/Dkbike.png",
      width: 114,
      height: 80,
    },
  ];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#Fff",
      borderRadius: 5,
      marginTop: 10,
      padding: 10,
    },
    wrap_header: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    text_view: {
      fontSize: 12,
      color: "#00bcc3",
    },
    wrap_brand: {
      marginTop: 15,
    },
    item_brand: {
      width: 120,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9fafb",
      borderColor: "#f1f4f6",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 3,
    },
    item_brand_text: {
      paddingBottom: 15,
      paddingTop: 5,
    },
    text_heading: {
      fontSize: 15,
      fontWeight: "bold",
    },
  });
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.wrap_header}>
            <Text style={styles.text_heading}>Thương hiệu nổi tiếng</Text>
            <TouchableOpacity>
              <Text style={styles.text_view}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrap_brand}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              pagingEnabled
            >
              {brands &&
                brands.map((item, index) => (
                  <View key={index} style={styles.item_brand}>
                    <Image
                      source={{
                        uri: item.images,
                      }}
                      style={{
                        width: item.width,
                        height: item.height,
                        borderRadius: 3,
                      }}
                    />
                    <View style={styles.item_brand_text}>
                      <TouchableOpacity>
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}
