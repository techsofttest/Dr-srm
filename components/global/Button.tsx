'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline-white' | 'danger' | 'danger-white';
    layout?: 'standard' | 'box';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    target?: string;
    rel?: string;
}

export default function Button({
    children,
    variant = 'primary',
    layout = 'standard',
    href,
    onClick,
    className = '',
    type = 'button',
    target,
    rel
}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!isHovered) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let width = (canvas.width = canvas.offsetWidth);
        let height = (canvas.height = canvas.offsetHeight);

        const handleResize = () => {
            if (canvas) {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(canvas);

        // Particle class for neuron nodes
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.7;
                this.vy = (Math.random() - 0.5) * 0.7;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                
                // Color matching variants
                if (variant === 'primary' || variant === 'danger') {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                } else if (variant === 'danger-white') {
                    ctx.fillStyle = 'rgba(185, 28, 28, 0.35)'; // Red-700
                } else if (variant === 'outline-white') {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
                } else {
                    ctx.fillStyle = 'rgba(13, 148, 136, 0.35)'; // Teal-600
                }
                ctx.fill();
            }
        }

        const particles: Particle[] = Array.from({ length: 12 }, () => new Particle());

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 50) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        
                        // Line colors matching variants
                        if (variant === 'primary' || variant === 'danger') {
                            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 50)})`;
                        } else if (variant === 'danger-white') {
                            ctx.strokeStyle = `rgba(185, 28, 28, ${0.12 * (1 - dist / 50)})`;
                        } else if (variant === 'outline-white') {
                            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 50)})`;
                        } else {
                            ctx.strokeStyle = `rgba(13, 148, 136, ${0.12 * (1 - dist / 50)})`;
                        }
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const loop = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            drawLines();
            animationId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(animationId);
            resizeObserver.disconnect();
        };
    }, [isHovered, variant]);

    // Consistently rounded corner radiuses and outline classes
    const baseStyle = layout === 'box'
        ? "group relative flex flex-col items-center justify-center gap-2.5 px-6 py-6 font-bold text-[11px] tracking-[0.12em] uppercase text-center leading-tight transition-all duration-300 select-none overflow-hidden active:scale-97 cursor-pointer z-10 border-0"
        : "group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 select-none overflow-hidden active:scale-97 cursor-pointer z-10 border";

    const boxVariants = {
        primary: "bg-tealAccent text-white hover:bg-tealHover",
        secondary: "bg-transparent text-deepNavy hover:bg-tealAccent/5 hover:text-tealAccent",
        'outline-white': "bg-deepNavy/60 text-white hover:bg-white/10",
        danger: "bg-red-700 text-white hover:bg-red-600",
        'danger-white': "bg-white text-red-800 hover:bg-red-50"
    };

    const standardVariants = {
        primary: "bg-tealAccent border-tealAccent hover:bg-tealHover hover:border-tealHover text-white shadow-md hover:shadow-tealAccent/20 hover:scale-[1.02]",
        secondary: "bg-transparent border-slate-300 text-deepNavy hover:border-tealAccent/50 hover:text-tealAccent hover:bg-tealAccent/5 hover:scale-[1.02]",
        'outline-white': "bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-[1.02]",
        danger: "bg-red-700 border-red-700 hover:bg-red-600 hover:border-red-600 text-white shadow-md hover:shadow-red-700/20 hover:scale-[1.02]",
        'danger-white': "bg-white border-white text-red-800 hover:bg-red-50 hover:border-red-50 shadow-md hover:shadow-white/15 hover:scale-[1.02]"
    };

    const currentVariants = layout === 'box' ? boxVariants : standardVariants;
    const buttonClasses = `${baseStyle} ${currentVariants[variant]} ${className}`;

    const innerContent = (
        <>
            {/* Moving Neurons Background Canvas */}
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 z-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Text and Icons container */}
            <span className={`relative z-10 flex items-center justify-center gap-2.5 ${layout === 'box' ? 'flex-col text-center w-full h-full' : ''}`}>
                {children}
            </span>
        </>
    );

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (href) {
        if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://')) {
            return (
                <a
                    href={href}
                    onClick={onClick}
                    className={buttonClasses}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    target={target}
                    rel={rel}
                >
                    {innerContent}
                </a>
            );
        }
        return (
            <Link
                href={href}
                onClick={onClick}
                className={buttonClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                target={target}
                rel={rel}
            >
                {innerContent}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {innerContent}
        </button>
    );
}
