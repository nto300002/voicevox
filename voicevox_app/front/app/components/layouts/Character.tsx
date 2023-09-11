'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useInterval } from 'react-use';
import Image from 'next/image';
import { images } from '../asset/zunda_main'; 

// ずんだもん表示
const Character = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);


  const randomImage = Math.floor(Math.random()*images.length)
  return (
    <div>
      {/* ずんだもんが選択されたら表示 */}
      <div className="fixed bottom-5 right-5 animate-bounce cursor-pointer"
>
        <Image
          ref={imageRef}
          src={images[randomImage]}
          className="object-cover drop-shadow-lg"
          alt="zundamon"
          width={300}
          height={458}
        />
      </div>
    </div>
  );
};

export default Character;
