"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 120;
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;

const getFramePath = (index) =>
  `/hero-frames/frame_${(index + 1).toString().padStart(4, "0")}.webp`;

const headlineWords = [
  "A", "precision", "smartphone", "repair", "studio", "for", "screen", "restoration", "and", "device", "care."
];

export default function Hero() {
  const heroRef = useRef(null);
  const textWrapperRef = useRef(null);
  const textSectionRef = useRef(null);
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

    // 4. GSAP Animations
    const frameObj = { frame: 0 };
    const ctx = gsap.context(() => {
      // Headline word-by-word mask reveal animation
      gsap.fromTo(
        ".hero-headline-word",
        {
          y: "115%",
          opacity: 0,
          rotateZ: 2,
        },
        {
          y: "0%",
          opacity: 1,
          rotateZ: 0,
          duration: 0.9,
          stagger: 0.035,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      // Fade out pinned headline ONLY when video reaches text, and keep 100% hidden at end
      ScrollTrigger.create({
        trigger: videoSectionRef.current,
        start: () => {
          if (!textWrapperRef.current) return "top 40%";
          const textBottom =
            textWrapperRef.current.offsetTop +
            textWrapperRef.current.offsetHeight;
          return `top ${textBottom}px`;
        },
        end: () => {
          if (!textWrapperRef.current) return "top 15%";
          const textTop = textWrapperRef.current.offsetTop;
          return `top ${textTop}px`;
        },
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (textWrapperRef.current) {
            const alpha = Math.max(0, 1 - self.progress);
            const isHidden = alpha <= 0.01;
            gsap.set(textWrapperRef.current, {
              autoAlpha: isHidden ? 0 : alpha,
              y: -self.progress * 30,
            });
          }
        },
      });

      // Video Canvas ScrollTrigger Scrub (Unpinned natural scroll)
      ScrollTrigger.create({
        trigger: videoSectionRef.current,
        start: "top 85%",
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
    <div ref={heroRef} className="relative bg-surface">
      {/* Pinned Editorial Text */}
      <div
        ref={textWrapperRef}
        className="container mx-auto px-6 md:px-8 pt-16 md:pt-20 lg:pt-24 pb-8 sticky top-20 md:top-24 z-0 pointer-events-none"
      >
        <h1
          ref={textSectionRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.035em] leading-[1.12] text-neutral-900 max-w-4xl pointer-events-auto"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
              <span className="hero-headline-word inline-block will-change-transform">
                {word}
              </span>
            </span>
          ))}
        </h1>
      </div>

      {/* Video / Canvas Section - Scrolls up over the pinned text and continues usual scroll */}
      <div className="container mx-auto px-6 md:px-8 pb-24 relative z-10">
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