import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: "1px solid black",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Custom Resume PDF</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #1: Introduction</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2: Skills</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #3: Experience</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
