import React, { useState } from "react";
import QrScanner from "./components/QrScanner";
export default function App() {
  return (
    <div className="flex flex-col h-screen bg-black text-white items-center justify-center">
      <QrScanner />
    </div>
  );
}
