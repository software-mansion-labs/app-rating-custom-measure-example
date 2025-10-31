import {StyleSheet, View} from 'react-native';

import {AppRatingBarView} from "@/modules/app-rating-bar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppRatingBarView numStars={5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
