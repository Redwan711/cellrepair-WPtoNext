"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 120;
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;

const getFramePath = (index) =>
  `/hero-frames/frame_${(index + 1).toString().padStart(4, "0")}.webp`;

export default function Hero() {
  const heroRef = useRef(null);
  const videoSectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Initialize image cache array
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);

    // 2. Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      drawFrame(0);
    };

    // 3. Preload all remaining frames in the background
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        imagesRef.current[i] = img;
      };
    }

    // 4. GSAP ScrollTrigger Scrub (Unpinned natural scroll)
    const frameObj = { frame: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: videoSectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        scrub: 0.6,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(self.progress * (TOTAL_FRAMES - 1))
          );
          if (frameIndex !== frameObj.frame) {
            frameObj.frame = frameIndex;
            drawFrame(frameIndex);
          }
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={heroRef} className="bg-surface">
      {/* Top Left Text - Wonder Vision editorial style */}
      <div className="container mx-auto px-6 md:px-8 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.035em] leading-[1.12] text-neutral-900 max-w-4xl">
          A precision smartphone repair studio for screen restoration and device care.
        </h1>
      </div>

      {/* Video / Canvas Section - Containered with rounded corners */}
      <div className="container mx-auto px-6 md:px-8 pb-24">
        <div
          ref={videoSectionRef}
          className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black"
        >
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="w-full h-auto block aspect-video object-cover"
          />
        </div>
      </div>
    </div>
  );
}