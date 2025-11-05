import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.content}>1234</Text>
        <Text style={styles.content}>5678</Text>
        <Link href="/about">Visit About Screen</Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 22,
  },
});
