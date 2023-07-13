import React, { useState, useEffect } from 'react';

function ClipboardReader() {
  const [clipboardText, setClipboardText] = useState('');

  useEffect(() => {
    const handleReadClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText();
        setClipboardText(text);
      } catch (error) {
        console.error('Failed to read clipboard:', error);
      }
    };

    handleReadClipboard();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <p>Clipboard Text: {clipboardText}</p>
    </div>
  );
}

export default ClipboardReader;
