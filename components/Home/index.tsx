import {
  Image,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Slider from "./Slider";
import Categories from "./Categories";
import Brand from "./Brand";
import ProductNews from "./ProductNews";
import News from "./News";
import Footer from "./Footer";
const { width, height } = Dimensions.get("window");
export default function Home() {
  return (
    <>
      <ScrollView
        style={{
          padding: 10,
          backgroundColor: "green",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          <View>
            <Image
              source={{
                uri: "https://salt.tikicdn.com/ts/brickv2og/db/eb/7c/a926af0ba3dc2802148bfc39563180c2.png",
              }}
              style={{
                width: 91,
                height: 34,
              }}
            />
          </View>
          <View>
            <Image
              source={{
                uri: "https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png",
              }}
              style={{
                width: 40,
                height: 27,
                marginLeft: -40,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://salt.tikicdn.com/ts/upload/c5/0b/06/88e5d7fa1a7cb51144fff2933e7269d9.png",
                }}
                style={{
                  width: 26,
                  height: 26,
                  marginRight: 5,
                }}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: "https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png",
                }}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          </View>
        </View>
        {/* Input */}
        <View style={styles.search}>
          <View style={styles.search_input}>
            <TextInput
              style={styles.input}
              placeholder="Bạn muốn tìm gì hãy ấn vào đây?"
            />
          </View>
          <View style={styles.search_button}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/search.png")}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Slider */}
        <Slider styles={styles} />
        {/* Categories */}
        <Categories width={width} height={height} />
        {/* Brand */}
        <Brand width={width} height={height} />
        {/* Product News */}
        <ProductNews width={width} height={height} />
        {/* News */}
        <News width={width} height={height} />
        {/* Footer */}
        <Footer width={width} height={height} />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  search: {
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  search_button: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  search_input: {
    flex: 12,
  },
  input: {
    height: 40,
    paddingLeft: 15,
  },
  slider: {
    marginTop: 10,
  },
  slider_view: {
    backgroundColor: "#fff",
  },
  wrap: {
    width: width - 20,
    height: height * 0.27,
  },
});
