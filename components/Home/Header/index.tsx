import { View, Image, TextInput, TouchableOpacity } from "react-native";
export default function Index(props: any) {
  const { styles } = props;
  return (
    <>
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
            value={"123"}
            placeholder="Bạn muốn tìm gì hãy ấn vào đây?"
          />
        </View>
        <View style={styles.search_button}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png",
              }}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
