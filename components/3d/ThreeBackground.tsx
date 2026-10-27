"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"

/**
 * ThreeBackground
 * Renders an interactive 3D scene in the background with subtle cream, caramel,
 * and warm brown geometric torus knots, floating nodes, and particle constellations.
 * Reacts gracefully to page scroll and mouse cursor movements.
 */
export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xfaf6f0, 0.035)

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 24

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0xfaf6f0, 0)
    container.appendChild(renderer.domElement)

    // Lighting with warm ambiance
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0xd4a373, 2.0)
    dirLight1.position.set(20, 30, 20)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0x573b2c, 1.4)
    dirLight2.position.set(-20, -20, 10)
    scene.add(dirLight2)

    // Central Floating Sculptural Element (Torus Knot Wireframe + Semi-gloss mesh)
    const knotGroup = new THREE.Group()

    const knotGeometry = new THREE.TorusKnotGeometry(4.2, 1.1, 120, 24)
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc8965a,
      roughness: 0.35,
      metalness: 0.15,
      transmission: 0.45,
      thickness: 1.2,
      transparent: true,
      opacity: 0.55,
      wireframe: false,
    })
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial)
    knotGroup.add(knotMesh)

    // Wireframe overlay for architectural feel
    const knotWireMat = new THREE.MeshBasicMaterial({
      color: 0x8c482a,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    })
    const knotWireMesh = new THREE.Mesh(knotGeometry, knotWireMat)
    knotWireMesh.scale.set(1.02, 1.02, 1.02)
    knotGroup.add(knotWireMesh)

    knotGroup.position.set(10, -2, -6)
    scene.add(knotGroup)

    // Secondary Floating Rings / Icosahedron Nodes
    const secondaryGroup = new THREE.Group()
    const icoGeo = new THREE.IcosahedronGeometry(2.4, 0)
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x7b5138,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const icoMesh = new THREE.Mesh(icoGeo, icoMat)
    icoMesh.position.set(-14, 6, -8)
    secondaryGroup.add(icoMesh)

    // Third ring
    const ringGeo = new THREE.TorusGeometry(3.5, 0.08, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb87333,
      transparent: true,
      opacity: 0.4,
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.rotation.x = Math.PI / 3
    ringMesh.position.set(-10, -12, -4)
    secondaryGroup.add(ringMesh)

    scene.add(secondaryGroup)

    // Ambient floating star/dust particles in warm cream/amber
    const particleCount = 280
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60
      positions[i + 1] = (Math.random() - 0.5) * 80
      positions[i + 2] = (Math.random() - 0.5) * 40
      scales[i / 3] = Math.random() * 2 + 0.5
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    // Canvas particle texture
    const pCanvas = document.createElement("canvas")
    pCanvas.width = 16
    pCanvas.height = 16
    const pCtx = pCanvas.getContext("2d")
    if (pCtx) {
      const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8)
      grad.addColorStop(0, "rgba(184, 115, 51, 0.8)")
      grad.addColorStop(0.6, "rgba(200, 150, 90, 0.3)")
      grad.addColorStop(1, "rgba(250, 246, 240, 0)")
      pCtx.fillStyle = grad
      pCtx.fillRect(0, 0, 16, 16)
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas)

    const particleMat = new THREE.PointsMaterial({
      size: 1.4,
      map: particleTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })

    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Interaction state: scroll and mouse
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0
    let scrollY = 0
    let targetScrollY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const handleScroll = () => {
      targetScrollY = window.scrollY
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll, { passive: true })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      const delta = clock.getDelta()
      const elapsed = clock.getElapsedTime()

      // Smooth interpolation
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      scrollY += (targetScrollY - scrollY) * 0.08

      // Rotate central sculpture with time and scroll
      knotGroup.rotation.x = elapsed * 0.15 + scrollY * 0.0012
      knotGroup.rotation.y = elapsed * 0.22 + mouseX * 0.4
      knotGroup.position.y = -2 + Math.sin(elapsed * 0.6) * 0.8 - scrollY * 0.006

      // Secondary geometries rotation
      icoMesh.rotation.x = elapsed * 0.18 + scrollY * 0.0008
      icoMesh.rotation.y = elapsed * 0.28
      icoMesh.position.y = 6 + Math.cos(elapsed * 0.5) * 0.6 - scrollY * 0.004

      ringMesh.rotation.z = elapsed * 0.12 - scrollY * 0.001
      ringMesh.rotation.y = elapsed * 0.15

      // Particle gentle drift
      particles.rotation.y = elapsed * 0.03 + mouseX * 0.05
      particles.position.y = -scrollY * 0.003

      // Camera parallax tilt
      camera.position.x = mouseX * 2.5
      camera.position.y = -mouseY * 2.2
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      knotGeometry.dispose()
      knotMaterial.dispose()
      knotWireMat.dispose()
      icoGeo.dispose()
      icoMat.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      particleTexture.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    />
  )
}
