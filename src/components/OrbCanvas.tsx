import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface OrbCanvasProps {
  status?: 'idle' | 'computing' | 'success';
}

export const OrbCanvas: React.FC<OrbCanvasProps> = ({ status = 'idle' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const orbMeshRef = useRef<THREE.Mesh | null>(null);
  const materialRef = useRef<THREE.MeshPhongMaterial | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    // Kivo Intelligence Orb Geometry
    const geometry = new THREE.IcosahedronGeometry(1.5, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0xF6B73C,
      emissive: 0xF6B73C,
      emissiveIntensity: 0.5,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
    });
    materialRef.current = material;

    const orb = new THREE.Mesh(geometry, material);
    orbMeshRef.current = orb;
    scene.add(orb);

    // Inner core
    const coreGeom = new THREE.SphereGeometry(0.8, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.3 });
    const core = new THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    const light = new THREE.PointLight(0xF6B73C, 2, 10);
    light.position.set(2, 2, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    camera.position.z = 5;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Breathing / Pulse effect
      const pulse = Math.sin(time * 2.0) * 0.05 + 1.0;
      orb.scale.set(pulse, pulse, pulse);

      // Gentle floating rotation
      orb.rotation.y += 0.005;
      orb.rotation.z += 0.003;
      orb.position.y = Math.sin(time * 1.5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 320;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update orb color according to application status
  useEffect(() => {
    if (!materialRef.current) return;
    if (status === 'computing') {
      materialRef.current.color.setHex(0x06B6D4);
      materialRef.current.emissive.setHex(0x06B6D4);
    } else if (status === 'success') {
      materialRef.current.color.setHex(0x10B981);
      materialRef.current.emissive.setHex(0x10B981);
    } else {
      materialRef.current.color.setHex(0xF6B73C);
      materialRef.current.emissive.setHex(0xF6B73C);
    }
  }, [status]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[#fcc82c]/10 blur-[100px] rounded-full scale-75 animate-pulse"></div>
      <div
        ref={containerRef}
        className="w-full h-full animate-float transition-transform duration-300 ease-out"
      />
    </div>
  );
};
