/// This app is made for educational purposes while attending Zuyd University
/// of Applied Sciences. It is written by Jordy Slagter for the retake of
/// course B2C4-2024 Mobile Applications in 2025.
///
/// Jordy Slagter (C) 2025 - MIT License
library;

import 'package:flutter/material.dart';

/// Main entrypoint of the app.
void main() {
  runApp(const MainApp());
}

/// Uppermost parent widget of the app. Contains the [MaterialApp] widget
/// that scaffolds the entirety of the UI.
class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(body: Center(child: Text('Hello World!'))),
    );
  }
}
