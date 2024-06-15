import React from "react";
import { Card } from "antd";
import "./ScriptDisplay.css";

function ScriptDisplay({ script }) {
  return (
    <Card className="script-display">
      <div class="paragraph-container">
        <p>Sermon text</p>
        <p className="right-text">نص الخطبة</p>
      </div>
      <p>{script}</p>
    </Card>
  );
}

export default ScriptDisplay;
