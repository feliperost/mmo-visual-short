"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Void() {
  //    tamanho inicial do círculo \/
  const [size, setSize] = useState(50); 
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasStartedMoving, setHasStartedMoving] = useState(false); // Nova flag para verificar se o círculo já começou a se mover
  const squareRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.pageX, y: e.pageY });
      setHasStartedMoving(true); // O círculo começa a se mover após o mouse ser movido pela primeira vez
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const moveCircle = () => {
      const dx = mousePos.x - circlePos.x;
      const dy = mousePos.y - circlePos.y;
      const angle = Math.atan2(dy, dx);
      const speed = 2;

      setCirclePos((prevPos) => ({
        x: prevPos.x + Math.cos(angle) * speed,
        y: prevPos.y + Math.sin(angle) * speed,
      }));

      // Verifica se o círculo atingiu o cursor e só faz o redirecionamento após o círculo começar a se mover
      if (
        hasStartedMoving &&
        Math.abs(mousePos.x - circlePos.x) < size / 2 &&
        Math.abs(mousePos.y - circlePos.y) < size / 2
      ) {
        router.push("/");
      }
    };

    const intervalId = setInterval(moveCircle, 16);

    return () => {
      clearInterval(intervalId);
    };
  }, [mousePos, circlePos, size, hasStartedMoving, router]);

  useEffect(() => {
    const increaseSize = () => {
      // velocidade do aumento do círculo \/
      setSize((prevSize) => prevSize + 2);
    };

    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        setSize((prevSize) => Math.max(prevSize - 10, 50));
      }
    };

    const intervalId = setInterval(increaseSize, 50);

    window.addEventListener('wheel', handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      ref={squareRef}
      className="cursor-void animate-gradient mx-auto transition-all duration-100"
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'black',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        // pointerEvents: 'none',
        top: `${circlePos.y}px`,
        left: `${circlePos.x}px`,
      }}
    />
  );
}


// colocar no background algo como essa imagem: https://i.pinimg.com/originals/05/fb/51/05fb51adde268e0e8687721c10652b9e.gif
// começar parado
// quando o usuario move o mouse, o background começa a andar e o circulo a perseguir