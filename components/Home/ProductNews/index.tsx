import { View, Text, StyleSheet, ScrollView } from "react-native";
import Items from "./Items";
import products from "./products";
export default function Index(props: any) {
  const { width, height } = props;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#effafb",
      borderRadius: 5,
      marginTop: 10,
      padding: 10,
    },
    wrap_header: {
      flex: 1,
      justifyContent: "flex-start",
      textAlign: "left",
      flexDirection: "column",
    },
    text_view: {
      fontSize: 12,
      color: "#171b1c",
      marginTop: 5,
    },
    text_heading: {
      fontSize: 15,
      fontWeight: "bold",
    },
    wrap_item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 15,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.wrap_header}>
            <Text style={styles.text_heading}>
              Đã kiểm định & chứng nhận chất lượng
            </Text>
            <Text style={styles.text_view}>
              Người mua an tâm với chất lượng xe đã được OKXE kiểm định và chứng
              nhận chất lượng, ký gửi trưng bày tại Trạm Dịch Vụ OKXE. Người bán
              cũng có thể kiểm định và sử dụng dịch vụ hỗ trợ bán xe trọn gói
              tại Trạm Dịch Vụ.
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={{
            width: width - 40,
          }}
        >
          <View style={styles.wrap_item}>
            {products &&
              products.map((item, index) => (
                <Items
                  key={index}
                  product={item}
                  width={width}
                  height={height}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
