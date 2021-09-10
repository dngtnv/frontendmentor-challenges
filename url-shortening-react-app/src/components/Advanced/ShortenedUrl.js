import React, { useState } from 'react';

export default function ShortenedUrl({ shortened }) {
  const [copied, setCopied] = useState(false);
  let url = shortened.short_link;

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="shortened-section">
      <p className="long-url">{shortened.original_link}</p>
      <div className="shortened-url">
        <p className="short-url">{shortened.short_link}</p>
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copyUrl}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
