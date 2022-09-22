import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function Index(props: any) {
  const styles = StyleSheet.create({
    footer: {
      backgroundColor: "#fff",
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      marginTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      
    },
    gpkd: {
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: "#f5f5f5",
      borderTopColor: "#ededed",
      borderTopWidth: 1,
      borderStyle: "solid",
      paddingLeft: 24,
      paddingRight: 24,
      marginBottom: 11
    },
    gpkd_text: {
      fontSize: 11,
      color: "#4f4f4f",
    },
    box: {
      borderBottomColor: "#ededed",
      borderStyle: "solid",
      borderBottomWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
    },
    company_title: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#000",
      marginBottom: 15,
    },
    company_address: {
      fontSize: 12,
      color: "#333",
      marginBottom: 15,
    },
    bold: {
      fontWeight: "bold",
      fontSize: 13,
    },
    box_list: {
      borderBottomColor: "#ededed",
      borderStyle: "solid",
      borderBottomWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
    },
    box_list_title: {
      textTransform: "uppercase",
      fontSize: 13,
      color: "#363636",
      fontWeight: "bold",
    },
    before: {
      width: 50,
      height: 2,
      backgroundColor: "#dedede",
      marginBottom: 15,
      marginTop: 5,
    },
    item_list_link: {
      marginBottom: 8,
    },
    text_item: {
      fontSize: 12,
    },
  });
  const policys = [
    {
      name: "Chính sách giải quyết khiếu nại",
    },
    {
      name: "Chính sách bảo mật",
    },
    {
      name: "Điều khoản sử dụng",
    },
  ];
  const abouts = [
    {
      name: "Giới thiệu",
    },
    {
      name: "Điều khoản sử dụng",
    },
    {
      name: "Quy chế hoạt động",
    },
    {
      name: "Trung tâm khách hàng",
    },
    {
      name: "Q&A",
    },
  ];
  return (
    <>
      <View style={styles.footer}>
        <View style={styles.box}>
          <Text style={styles.company_title}>Công ty TNHH OKXE Việt Nam</Text>
          <Text style={styles.company_address}>
            <Text style={styles.bold}>Hà Nội</Text>: Tòa nhà Sao Mai - Tầng 11,
            số 19 Lê Văn Lương, P. Nhân Chính, Q. Thanh Xuân.{" "}
          </Text>
          <Text style={styles.company_address}>
            <Text style={styles.bold}>Hà Nội</Text>: Tòa nhà TTC - Tầng 17, số
            253 Hoàng Văn Thụ, P.2, Q. Tân Bình.{" "}
          </Text>
        </View>
        <View style={styles.box_list}>
          <Text style={styles.box_list_title}>Hỗ trợ khách hàng</Text>
          <View style={styles.before}></View>
          <View>
            {policys &&
              policys.map((item, index) => (
                <View key={index} style={styles.item_list_link}>
                  <TouchableOpacity>
                    <Text style={styles.text_item}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
        <View style={styles.box_list}>
          <Text style={styles.box_list_title}>Về chúng tôi</Text>
          <View style={styles.before}></View>
          <View>
            {abouts &&
              abouts.map((item, index) => (
                <View key={index} style={styles.item_list_link}>
                  <TouchableOpacity>
                    <Text style={styles.text_item}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
      </View>
      <View style={styles.gpkd}>
        <Text style={styles.gpkd_text}>
          Số ĐKKD: 0108473996 - Ngày cấp 16/10/2018, được sửa đổi lần 4 ngày
          19/06/2020 - Cấp bởi: Sở Kế hoạch & Đầu tư TP Hà Nội
        </Text>
      </View>
    </>
  );
}
