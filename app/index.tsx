import { StyleSheet, View } from "react-native";
import { AppRatingBarView } from "@/modules/app-rating-bar";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "App Rating View Example" }} />
      <View style={styles.container}>
        <AppRatingBarView numStars={5} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
