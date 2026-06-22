import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Scene setup ── */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Floating particles ── */
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const palette = [
      new THREE.Color("#7c3aed"),
      new THREE.Color("#a855f7"),
      new THREE.Color("#c084fc"),
      new THREE.Color("#ec4899"),
      new THREE.Color("#06b6d4"),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      sizes[i] = Math.random() * 3 + 1;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particleGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ── Floating geometric shapes ── */
    const shapes = [];

    const createShape = (geometry, color, x, y, z, scale = 1) => {
      const mat = new THREE.MeshStandardMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const mesh = new THREE.Mesh(geometry, mat);
      mesh.position.set(x, y, z);
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      shapes.push({ mesh, rotSpeed: { x: Math.random() * 0.004, y: Math.random() * 0.004 } });
    };

    createShape(new THREE.IcosahedronGeometry(1.2, 1),  0x7c3aed,  3,  1.5, -2, 1);
    createShape(new THREE.OctahedronGeometry(0.9, 0),   0xa855f7, -3.5, -1, -1.5, 1);
    createShape(new THREE.TorusGeometry(0.8, 0.25, 8, 20), 0xec4899, 0,  2.5, -3, 1);
    createShape(new THREE.TetrahedronGeometry(0.8, 0),  0x06b6d4,  4.5, -2, -1, 1);
    createShape(new THREE.IcosahedronGeometry(0.6, 0),  0xc084fc, -4,  2, -2, 1);
    createShape(new THREE.TorusGeometry(0.5, 0.15, 6, 16), 0x7c3aed, -1.5, -2.5, -2, 1);

    /* ── Ambient + point lights ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const pl1 = new THREE.PointLight(0x7c3aed, 2, 20);
    pl1.position.set(4, 3, 2);
    scene.add(pl1);
    const pl2 = new THREE.PointLight(0xec4899, 1.5, 20);
    pl2.position.set(-4, -2, 1);
    scene.add(pl2);

    /* ── Mouse parallax ── */
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 0.3;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener("mousemove", handleMouseMove);

    /* ── Resize ── */
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    /* ── Animation loop ── */
    let frame;
    let t = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      t += 0.005;

      // Particle drift
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0003;

      // Shape rotations + float
      shapes.forEach(({ mesh, rotSpeed }, i) => {
        mesh.rotation.x += rotSpeed.x;
        mesh.rotation.y += rotSpeed.y;
        mesh.position.y += Math.sin(t + i) * 0.001;
      });

      // Camera parallax
      camera.position.x += (mouse.x - camera.position.x) * 0.04;
      camera.position.y += (-mouse.y - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      {/* Three.js canvas mount */}
      <div
        ref={mountRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      />
      {/* Dark base + violet gradient overlay */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{ background: "#07080f" }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle grid */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />
    </>
  );
}