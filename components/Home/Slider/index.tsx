import { View, ScrollView, Image } from "react-native";
export default function Index(props: any) {
  const { styles } = props;
  return (
    <>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={styles.wrap}
        >
          <View style={styles.slider_view}>
            <Image
              source={{
                uri: "https://salt.tikicdn.com/ts/upload/c8/a7/96/c698f113eeda56010b6eacfc762df4ff.png",
              }}
              style={styles.wrap}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.slider_view}>
            <Image
              source={{
                uri: "https://salt.tikicdn.com/cache/w750/ts/upload/37/4f/14/dd8b33c6bc1ccebaecaf45dde02ca166.png",
              }}
              style={styles.wrap}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.slider_view}>
            <Image
              source={{
                uri: "https://salt.tikicdn.com/cache/w750/ts/upload/f7/13/b2/176603fe0d12efd70ffa3a2aa136a633.png",
              }}
              style={styles.wrap}
              resizeMode="stretch"
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
