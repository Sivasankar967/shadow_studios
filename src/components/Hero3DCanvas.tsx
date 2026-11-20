import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Centerpiece: Wireframe Icosahedron with neon edges
    const innerGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(innerGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd4ff00, // Acid Lime
      transparent: true,
      opacity: 0.75,
      linewidth: 1,
    });
    const icosahedronLines = new THREE.LineSegments(wireframeGeometry, lineMaterial);
    mainGroup.add(icosahedronLines);

    // 2. Inner Glowing Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.3, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerCore = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(innerCore);

    // 3. Floating Digital Node Points on Vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xd4ff00,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const points = new THREE.Points(innerGeometry, pointsMaterial);
    mainGroup.add(points);

    // 4. Orbiting Particle Swarm
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random();
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const swarmMaterial = new THREE.PointsMaterial({
      color: 0x9d4edd, // Subtle purple glow
      size: 0.045,
      transparent: true,
      opacity: 0.6,
    });
    const particleSwarm = new THREE.Points(particleGeometry, swarmMaterial);
    mainGroup.add(particleSwarm);

    // Ambient Ring
    const ringGeometry = new THREE.TorusGeometry(3.6, 0.015, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const orbitRing = new THREE.Mesh(ringGeometry, ringMaterial);
    orbitRing.rotation.x = Math.PI / 3;
    mainGroup.add(orbitRing);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (lerp)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotations
      mainGroup.rotation.y = elapsedTime * 0.15 + mouseX;
      mainGroup.rotation.x = elapsedTime * 0.08 + mouseY;
      
      innerCore.rotation.y = -elapsedTime * 0.25;
      innerCore.rotation.z = elapsedTime * 0.1;

      orbitRing.rotation.z = elapsedTime * 0.1;
      particleSwarm.rotation.y = -elapsedTime * 0.08;

      // Subtle pulse scale
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.025;
      icosahedronLines.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up WebGL resources
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeometry.dispose();
      wireframeGeometry.dispose();
      lineMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      pointsMaterial.dispose();
      particleGeometry.dispose();
      swarmMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
