import React, { useEffect, useState } from 'react';
import MemeBody from './MemeBody';

const MemePage = (props) => {
  const { id } = props.match.params;
  const [meme, setMeme] = useState();

  useEffect(() => {
    fetch(`/api/single-gif/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeme(data);
      });
  }, [id]);

  return meme ? <MemeBody meme={meme} /> : null;
};

export default MemePage;
