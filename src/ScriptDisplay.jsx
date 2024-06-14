import React from 'react';
import { Card } from 'antd';
import './ScriptDisplay.css';

function ScriptDisplay({ script }) {
  return (
    <Card className="script-display">
      <p>{script}</p>
    </Card>
  );
}

export default ScriptDisplay;