import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "√") {
      try {
        const res = Math.sqrt(eval(expression));
        setResult(res.toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "%") {
      try {
        const res = eval(expression) / 100;
        setResult(res.toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "x²") {
      try {
        const res = Math.pow(eval(expression), 2);
        setResult(res.toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "1/x") {
      try {
        const res = 1 / eval(expression);
        setResult(res.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    ["C", "%", "√", "x²"],
    ["7", "8", "9", "1/x"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "="],
  ];

  const operators = ["/", "*", "-", "+"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result || "0"}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn === "="
                    ? styles.equalButton
                    : btn === "C"
                    ? styles.clearButton
                    : styles.numButton,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    btn === "=" ? styles.equalText : null,
                    btn === "C" ? styles.clearText : null,
                  ]}
                >
                  {btn}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.operatorsRow}>
          {operators.map((op) => (
            <TouchableOpacity
              key={op}
              style={[styles.button, styles.operatorButton]}
              onPress={() => handlePress(op)}
            >
              <Text style={styles.operatorText}>{op}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "flex-end",
  },
  displayContainer: {
    padding: 20,
    backgroundColor: "#1E293B",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  expression: {
    fontSize: 22,
    color: "#94A3B8",
    textAlign: "right",
  },
  result: {
    fontSize: 52,
    color: "#38BDF8",
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 5,
  },
  buttonsContainer: {
    padding: 10,
    backgroundColor: "#0F172A",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  numButton: {
    backgroundColor: "#1E293B",
  },
  operatorButton: {
    backgroundColor: "#2563EB",
  },
  equalButton: {
    backgroundColor: "#38BDF8",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  clearButton: {
    backgroundColor: "#EF4444",
  },
  buttonText: {
    fontSize: 24,
    color: "#F8FAFC",
    fontWeight: "600",
  },
  equalText: {
    color: "#0F172A",
    fontWeight: "700",
  },
  clearText: {
    color: "#FFF",
  },
  operatorText: {
    fontSize: 26,
    color: "#F8FAFC",
    fontWeight: "700",
  },
  operatorsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
