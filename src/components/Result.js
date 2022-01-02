import React, { useState } from "react";

export default function Result(props) {
  const [QrResult, setQrResult] = useState(props.QrResult);
  return <div class="text-white text-xl mt-5">{QrResult}</div>;
}
