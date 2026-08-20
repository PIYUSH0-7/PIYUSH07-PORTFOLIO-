'use client';

import React, { useEffect, useRef } from 'react';

interface NebulaSmokeProps {
  isDarkMode: boolean;
}

export const NebulaSmoke: React.FC<NebulaSmokeProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { 
      alpha: true, 
      antialias: false, 
      depth: false, 
      powerPreference: 'high-performance' 
    });
    if (!gl) return;

    // Vertex Shader
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        v_uv.y = 1.0 - v_uv.y; // Correct coordinate orientation
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: High-performance organic domain-warped nebula smoke simulation
    const fsSource = `
      precision highp float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_scroll;
      uniform float u_scroll_vel;
      uniform float u_dark;

      // Fast simplex noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Fractal Brownian Motion
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(cos(0.52), sin(0.52), -sin(0.52), cos(0.52));
        for (int i = 0; i < 5; ++i) {
          v += a * snoise(p);
          p = rot * p * 2.04 + vec2(12.3, 4.5);
          a *= 0.5;
        }
        return v;
      }

      // Domain Warping: Creates the iconic fluid smoke tendrils & curling wisps (Onlook style)
      float pattern(in vec2 p, out vec2 q, out vec2 r, float t) {
        q.x = fbm(p + vec2(0.0, 0.0) + vec2(t * 0.04, t * 0.02));
        q.y = fbm(p + vec2(5.2, 1.3) + vec2(-t * 0.03, t * 0.05));

        r.x = fbm(p + 3.2 * q + vec2(1.7, 9.2) + vec2(t * 0.06, -t * 0.04));
        r.y = fbm(p + 3.2 * q + vec2(8.3, 2.8) + vec2(-t * 0.05, t * 0.06));

        return fbm(p + 3.6 * r);
      }

      void main() {
        vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
        
        // Interaction: mouse vortex distortion
        vec2 m = (u_mouse * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
        m.y = -m.y;
        float distToMouse = length(st - m);
        float mouseInfluence = smoothstep(0.85, 0.0, distToMouse);
        
        // Fluid swirl around mouse cursor
        vec2 mouseOffset = (st - m);
        vec2 vortex = vec2(-mouseOffset.y, mouseOffset.x) * mouseInfluence * 0.85;
        
        // Scroll influence: warping along scroll direction + speed
        float scrollOffset = u_scroll * 1.8;
        vec2 scrollWarp = vec2(sin(st.y * 2.0 + u_time * 0.5) * 0.1, -scrollOffset);
        
        // Base coordinate with fluid smoke scale
        vec2 p = st * 1.25 + vortex + scrollWarp;
        
        float t = u_time * 0.22 + (u_scroll_vel * 0.08);

        vec2 q = vec2(0.0);
        vec2 r = vec2(0.0);
        float f = pattern(p, q, r, t);

        // Density thresholding for illuminated cloud filaments
        float density = smoothstep(-0.35, 0.75, f);
        float edgeFilament = pow(clamp(f * 0.5 + 0.5, 0.0, 1.0), 3.0);

        // Cosmic Palette matching Onlook / Crimson Nebula
        // Deep Obsidian Space -> Rich Crimson -> Hot Neon Magenta / Pink -> Incandescent White Rim
        vec3 colSpace = vec3(0.035, 0.035, 0.045);
        vec3 colCrimson = vec3(0.55, 0.05, 0.18);
        vec3 colMagenta = vec3(0.95, 0.18, 0.45);
        vec3 colNeonPink = vec3(1.0, 0.35, 0.65);
        vec3 colCoreGlow = vec3(1.0, 0.85, 0.95);

        // Color blending across domain warping coordinates
        vec3 color = mix(colSpace, colCrimson, clamp(length(q), 0.0, 1.0));
        color = mix(color, colMagenta, clamp(length(r.x), 0.0, 1.0));
        color = mix(color, colNeonPink, clamp(edgeFilament * 1.4, 0.0, 1.0));
        color += colCoreGlow * pow(edgeFilament, 4.0) * 0.75; // Burning incandescent edge

        // Mouse extra illumination
        color += colMagenta * mouseInfluence * 0.35;

        // Subtle vignette to focus text in center while keeping clouds rich
        float vignette = 1.0 - smoothstep(0.6, 1.7, length(st * vec2(0.8, 1.0)));
        
        // Alpha modulation for background overlay
        float alpha = density * vignette;
        
        if (u_dark > 0.5) {
          // Dark mode: Deep, luminous cinematic contrast
          gl_FragColor = vec4(color * 0.95, alpha * 0.85);
        } else {
          // Light mode: Soft ethereal rose-magenta watercolor wash
          vec3 lightColor = mix(vec3(1.0), colMagenta * 0.7, density * 0.35);
          gl_FragColor = vec4(lightColor, alpha * 0.25);
        }
      }
    `;

    // Compile helper
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full-screen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const aPositionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPositionLocation);
    gl.vertexAttribPointer(aPositionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform Locations
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uScroll = gl.getUniformLocation(program, 'u_scroll');
    const uScrollVel = gl.getUniformLocation(program, 'u_scroll_vel');
    const uDark = gl.getUniformLocation(program, 'u_dark');

    // Resize handler
    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Mouse & Scroll physics
    let mouseX = width * 0.35;
    let mouseY = height * 0.45;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let scrollY = 0;
    let targetScrollY = 0;
    let lastScrollY = 0;
    let scrollVel = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      if ('touches' in e && e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX * dpr;
        targetMouseY = (height - e.touches[0].clientY) * dpr;
      } else if ('clientX' in e) {
        targetMouseX = e.clientX * dpr;
        targetMouseY = (height - e.clientY) * dpr;
      }
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
      const delta = Math.abs(window.scrollY - lastScrollY);
      scrollVel = Math.min(scrollVel + delta * 0.08, 25.0);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    let startTime = performance.now();
    let animId: number;

    const render = (now: number) => {
      const elapsedTime = (now - startTime) * 0.001;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.1;
      scrollVel *= 0.94; // Decay scroll velocity

      const maxDocScroll = document.documentElement.scrollHeight - window.innerHeight;
      const normalizedScroll = maxDocScroll > 0 ? scrollY / maxDocScroll : 0;

      gl.useProgram(program);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform1f(uTime, elapsedTime);
      gl.uniform1f(uScroll, normalizedScroll);
      gl.uniform1f(uScrollVel, scrollVel);
      gl.uniform1f(uDark, isDarkMode ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 select-none opacity-85 transition-opacity duration-700"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default NebulaSmoke;
