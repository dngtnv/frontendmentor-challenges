import React from 'react';
import ShortenedUrl from './ShortenedUrl';

export default function ShortenedList({ list }) {
  return (
    <>
      {list.map(shortened => (
        <ShortenedUrl key={shortened.code} shortened={shortened} />
      ))}
    </>
  );
}
