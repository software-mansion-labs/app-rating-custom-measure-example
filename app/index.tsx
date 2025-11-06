import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { Stack } from "expo-router";
import { AppRatingBarView } from "@/modules/app-rating-bar";

export default function RateDriver() {
  const [tip, setTip] = useState(0);
  const [feedback, setFeedback] = useState("");

  const onSubmit = () => {
    Alert.alert("Thanks!", `Tip: $${tip}\nFeedback: ${feedback || "—"}`);
  };

  return (
    <>
      <Stack.Screen options={{ title: "Rate your driver" }} />
      <View style={styles.screen}>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://i.pravatar.cc/200?img=12" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Alex P.</Text>
          <Text style={styles.sub}>Toyota Prius • 12:24 PM</Text>

          {Platform.OS === "android" && (
            <>
              <Text style={styles.prompt}>How was your ride?</Text>
              <View style={styles.ratingRow}>
                <AppRatingBarView numStars={5} />
              </View>
              <Text style={styles.chosen}>Tap to rate</Text>
            </>
          )}

          <Text style={[styles.prompt, { marginTop: 18 }]}>Tip driver</Text>
          <View style={styles.tipRow}>
            {[0, 1, 2, 5].map((amount) => (
              <TouchableOpacity
                key={amount}
                style={[
                  styles.tipButton,
                  tip === amount && styles.tipButtonActive,
                ]}
                onPress={() => setTip(amount)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.tipText,
                    tip === amount && styles.tipTextActive,
                  ]}
                >
                  {amount === 0 ? "No tip" : `$${amount}`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            multiline
            style={styles.input}
            placeholder="Leave a note for the driver (optional)"
            placeholderTextColor="#999"
            value={feedback}
            onChangeText={setFeedback}
          />

          <TouchableOpacity
            style={styles.submit}
            onPress={onSubmit}
            activeOpacity={0.9}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f7fb",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  sub: {
    fontSize: 13,
    color: "#6b6f76",
    marginBottom: 14,
  },
  prompt: {
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginTop: 6,
  },
  ratingRow: {
    marginTop: 12,
  },
  chosen: {
    marginTop: 8,
    color: "#4b5563",
  },
  tipRow: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  tipButton: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#f1f3f5",
    alignItems: "center",
  },
  tipButtonActive: {
    backgroundColor: "#0b84ff",
  },
  tipText: {
    color: "#333",
    fontWeight: "600",
  },
  tipTextActive: {
    color: "#fff",
  },
  input: {
    alignSelf: "stretch",
    marginTop: 12,
    minHeight: 80,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fafafa",
    textAlignVertical: "top",
    color: "#111827",
  },
  submit: {
    marginTop: 14,
    backgroundColor: "#0b84ff",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
