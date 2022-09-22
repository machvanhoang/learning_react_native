import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
export default function Index(props: any) {
  const news = [
    {
      id: 0,
      name: "Nhận ngay ưu đãi 1 triệu khi mua xe máy cũ",
    },
    {
      id: 1,
      name: "Chính thức triển khai thu mua xe cũ tại Trạm ",
    },
    {
      id: 2,
      name: "Ứng dụng OKXE chính thức đạt 7 triệu lượt tải",
    },
    {
      id: 3,
      name: "Hỗ trợ tài chính với lãi suất chỉ từ 1,17%",
    },
    {
      id: 4,
      name: "Trạm Dịch vụ Xe máy OKXE chính thức hđ",
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
    wrap_news: {
      marginTop: 15,
    },
    text_heading: {
      fontSize: 15,
      fontWeight: "bold",
    },
    item_news_text: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 15,
      paddingBottom: 15,
      borderTopColor: "#f1f4f6",
      borderTopWidth: 1,
      borderStyle: "solid",
    },
    badge: {
      backgroundColor: "#f1f4f6",
      borderColor: "#f1f4f6",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 3,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 3,
      paddingBottom: 3,
      fontSize: 13,
    },
    link: {
      marginLeft: 10,
      fontSize: 13,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.wrap_header}>
            <Text style={styles.text_heading}>Tin mới nhất</Text>
            <TouchableOpacity>
              <Text style={styles.text_view}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrap_news}>
            {news &&
              news.map((item, index) => (
                <View key={index} style={styles.item_news_text}>
                  <Text style={styles.badge}>Tin tức</Text>
                  <TouchableOpacity style={styles.link}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
      </View>
    </>
  );
}
