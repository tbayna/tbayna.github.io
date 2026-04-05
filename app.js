// --- Data: Projects Array ---
const projects = [
    {
        id: "rl-renewable",
        title: "RL for Renewable Storage",
        category: "AI & Control",
        tech: ["Reinforcement Learning", "MATLAB", "Predictive AI"],
        shortDesc: "AI-based coordination of multiple units to emulate traditional power sources in hybrid renewable systems.",
        fullDesc: "This published research focused on using Reinforcement Learning (RL) and predictive AI to emulate traditional power sources in hybrid renewable storage systems. By coordinating multiple energy storage units intelligently, the system acts as a dispatchable generator. The RL agent learns optimal charge/discharge policies based on grid demand and renewable forecasting, significantly improving grid stability and economic dispatch.",
        image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    {
        id: "6dof-rlv",
        title: "6-DoF RLV Flight Simulation",
        category: "Aerospace",
        tech: ["Simulink", "Flight Dynamics", "MPC", "PID"],
        shortDesc: "High-fidelity 6-Degrees-of-Freedom simulation of a reusable launch vehicle with advanced MPC loops.",
        fullDesc: "Developed a comprehensive 6-Degrees-of-Freedom flight dynamics model for a Reusable Launch Vehicle (RLV) in MATLAB/Simulink. The simulation includes accurate aerodynamic databases, sensor modeling (IMU noise, biases), and actuator dynamics. To achieve precision landing, a Model Predictive Controller (MPC) was implemented for the descent phase, optimizing fuel consumption while handling state constraints, supplemented by PID loops for attitude control.",
        image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    {
        id: "virtual-inertia",
        title: "Intelligent Virtual Inertia",
        category: "Power Systems",
        tech: ["AI", "Grid Stabilization", "Inverter Control"],
        shortDesc: "AI-based adaptive virtual inertia system stabilizing grids against high renewable penetration.",
        fullDesc: "Modern power grids suffer from low rotational inertia due to the integration of inverter-based renewables. This prototype engineered an AI-driven adaptive virtual inertia controller. By dynamically modulating the active power injected by the battery inverters based on real-time grid frequency deviations (RoCoF), the system prevents frequency blackouts and provides critical synthetic inertia faster than traditional synchronous condensers.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    {
        id: "battery-observer",
        title: "Li-ion Battery Observer",
        category: "Embedded & Algorithms",
        tech: ["Kalman Filter", "State-Space", "BMS"],
        shortDesc: "State-space observer for real-time estimation of SoC and polarization voltage in fast-charging.",
        fullDesc: "Designed an advanced Luenberger and Extended Kalman Filter (EKF) state-space observer for Li-ion battery cells. Implemented in MATLAB/Simulink, the algorithm estimates the internal State of Charge (SoC), State of Health (SoH), and thermal characteristics in real-time. This allows for aggressive fast-charging protocols by maintaining the battery within strict electrochemical safety margins, preventing lithium plating.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    {
        id: "heli-prototype",
        title: "ESP32 Helicopter Prototype",
        category: "Embedded Hardware",
        tech: ["C++", "ESP32", "IMU", "ESP-NOW"],
        shortDesc: "Standalone ESP32-based flight stabilizer using C++ and low-latency wireless telemetry.",
        fullDesc: "Built a fully autonomous flight controller for a helicopter prototype from scratch using an ESP32 microcontroller. Wrote low-level C++ firmware to interface with I2C IMU sensors, implement a high-frequency PID stabilization loop, and output precise PWM signals to the ESCs. Integrated ESP-NOW protocol for sub-millisecond wireless telemetry and remote control, eliminating the need for traditional RC receivers.",
        image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    {
        id: "smart-microgrid",
        title: "Smart Microgrid PLC",
        category: "Industrial IoT",
        tech: ["PLCnext", "CODESYS", "Modbus", "SCADA"],
        shortDesc: "Real-time hybrid microgrid supervision system using PLCnext, Modbus TCP, and Node-RED.",
        fullDesc: "Developed an industrial-grade supervision and control system for an IMEON 3.6 hybrid inverter. Programmed a Phoenix Contact PLCnext AXC F2152 using IEC 61131-3 standards. Established Modbus TCP/IP communication to read/write inverter registers and created a real-time SCADA dashboard using Node-RED for data visualization and remote operational management.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "cobot-arm",
        title: "Collaborative Robotic Arm (Cobot)",
        category: "Robotics & Safety",
        tech: ["Control Systems", "Sensor Fusion", "Safety Logic"],
        shortDesc: "Designed a human-safe industrial robotics solution featuring force/proximity sensor integration.",
        fullDesc: "Designed a human-safe collaborative robotic arm (Cobot) for industrial deployment. Integrated force and proximity sensors to enable real-time sensor fusion and safety-first control logic. The system ensures operational safety by dynamically adjusting the robot's speed and path based on human proximity and contact forces, facilitating seamless human-robot collaboration.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "ems-v2g",
        title: "EMS Prototype with V2G Integration",
        category: "Energy Management",
        tech: ["MPC", "V2G", "Load-Shifting"],
        shortDesc: "Developed an Energy Management System (EMS) using load-shifting and Vehicle-to-Grid (V2G) integration.",
        fullDesc: "Engineered an Energy Management System (EMS) utilizing load-shifting strategies to optimize cost and energy efficiency in smart grids. The prototype seamlessly integrates Vehicle-to-Grid (V2G) capabilities, utilizing connected electric vehicles as dynamic storage nodes. The entire system is governed by a Model Predictive Controller (MPC) that anticipates demand and supply fluctuations.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "line-follower",
        title: "Line-Following Robot",
        category: "Embedded & Control",
        tech: ["Arduino", "PID Control", "IR Sensors"],
        shortDesc: "Implemented high-speed path tracking using IR sensor arrays and a tuned PID control loop.",
        fullDesc: "Developed a high-speed line-following robot using an Arduino-based embedded platform. Implemented a precision tracking algorithm utilizing an array of IR sensors to detect path deviations. A finely tuned PID control loop manages the differential drive system, ensuring rapid response to curves and maintaining high stability at maximum speeds.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "pv-system",
        title: "PV System with Nonlinear Control",
        category: "Power Electronics",
        tech: ["Nonlinear Backstepping", "MPPT", "Zeta Converter", "BMS"],
        shortDesc: "High-efficiency PV system utilizing a Zeta-based bidirectional converter with MPPT and CC/CV management.",
        fullDesc: "Designed a high-efficiency Photovoltaic (PV) system incorporating a Zeta-based bidirectional converter. Implemented a Nonlinear Backstepping control strategy to achieve rapid and robust Maximum Power Point Tracking (MPPT) under varying irradiance. The system coordinates with a Battery Management System utilizing CC/CV charging profiles to ensure optimal energy storage and prolonged battery life.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    {
        id: "ups-design",
        title: "UPS Design & SMPS",
        category: "Power Electronics",
        tech: ["SMPS", "Lithium BMS", "SPWM Inverter"],
        shortDesc: "Engineered a switched-mode power supply featuring a lithium BMS and an SPWM-controlled inverter.",
        fullDesc: "Engineered a complete Uninterruptible Power Supply (UPS) architecture from the ground up. The design features a Switched-Mode Power Supply (SMPS) for efficient voltage conversion, coupled with a custom Lithium Battery Management System (BMS). Output stability is guaranteed by an SPWM (Sinusoidal Pulse Width Modulation) controlled inverter, providing a clean AC waveform for sensitive loads.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    {
        id: "dc-dc-regulator",
        title: "Variable Voltage DC/DC Regulator",
        category: "Power Electronics",
        tech: ["PID Control", "DC/DC Converter", "Transient Optimization"],
        shortDesc: "Implemented a PID-controlled DC/DC converter optimizing transient response and stable output under varying loads.",
        fullDesc: "Developed a closed-loop variable voltage DC/DC regulator to supply stable power to dynamic loads. Tuned a digital PID controller to minimize overshoot and settling time during load step transients. The hardware design focused on proper MOSFET selection, inductor sizing, and EMI mitigation techniques to ensure high efficiency and low output ripple.",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    }
];

// --- 1. Three.js Plexus Background Animation ---
const initThreeJS = () => {
    const canvas = document.getElementById('webgl-canvas');
    const scene = new THREE.Scene();
    // Darker fog for depth
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles Data
    const particleCount = 250;
    const maxDistance = 90; 
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    const range = 600;

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * range;
        const y = (Math.random() - 0.5) * range;
        const z = (Math.random() - 0.5) * range;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particleVelocities.push({
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
            z: (Math.random() - 0.5) * 0.5
        });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 4,
        transparent: true,
        opacity: 1.0,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeometry, pMaterial);
    scene.add(particles);

    // Lines Geometry
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.35
    });
    
    // Create a buffer for lines. Max lines = N * (N-1) / 2
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array((particleCount * particleCount) * 3);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse and Scroll Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetScrollY = 0;
    let currentScrollY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX) * 0.2;
        mouseY = (event.clientY - windowHalfY) * 0.2;
    });

    window.addEventListener('scroll', () => {
        targetScrollY = window.scrollY;
    });

    // Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Move Particles
        const positions = particleGeometry.attributes.position.array;
        
        for(let i=0; i<particleCount; i++) {
            positions[i*3] += particleVelocities[i].x;
            positions[i*3+1] += particleVelocities[i].y;
            positions[i*3+2] += particleVelocities[i].z;
            
            // Bounce off walls
            if(Math.abs(positions[i*3]) > range/2) particleVelocities[i].x *= -1;
            if(Math.abs(positions[i*3+1]) > range/2) particleVelocities[i].y *= -1;
            if(Math.abs(positions[i*3+2]) > range/2) particleVelocities[i].z *= -1;
        }
        particleGeometry.attributes.position.needsUpdate = true;

        // Update Lines
        let vertexpos = 0;
        let numConnected = 0;
        
        for(let i=0; i<particleCount; i++) {
            for(let j=i+1; j<particleCount; j++) {
                const dx = positions[i*3] - positions[j*3];
                const dy = positions[i*3+1] - positions[j*3+1];
                const dz = positions[i*3+2] - positions[j*3+2];
                const distSq = dx*dx + dy*dy + dz*dz;
                
                if(distSq < maxDistance * maxDistance) {
                    linePositions[vertexpos++] = positions[i*3];
                    linePositions[vertexpos++] = positions[i*3+1];
                    linePositions[vertexpos++] = positions[i*3+2];
                    
                    linePositions[vertexpos++] = positions[j*3];
                    linePositions[vertexpos++] = positions[j*3+1];
                    linePositions[vertexpos++] = positions[j*3+2];
                    
                    numConnected++;
                }
            }
        }
        linesGeometry.setDrawRange(0, numConnected * 2);
        linesGeometry.attributes.position.needsUpdate = true;

        // Smooth scroll interpolation
        currentScrollY += (targetScrollY - currentScrollY) * 0.05;

        // Smooth camera movement (parallax + scroll effect)
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - (currentScrollY * 0.05) - camera.position.y) * 0.05;
        
        // Rotate the entire network based on scroll
        scene.rotation.y = currentScrollY * 0.001;
        scene.rotation.x = currentScrollY * 0.0005;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// --- 2. GSAP Animations & Setup ---
const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Text Split Utility
    const splitTextToSpans = (selector) => {
        document.querySelectorAll(selector).forEach(el => {
            const text = el.innerText;
            el.innerHTML = text.split('').map(char => {
                if(char === ' ') return '&nbsp;';
                return `<span class="char">${char}</span>`;
            }).join('');
        });
    };

    splitTextToSpans('.split-text');

    // Initial Load Animation
    const tl = gsap.timeline();
    
    tl.to('.logo-anim', { opacity: 1, duration: 1, ease: 'power2.out' })
      .to('.char', {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: 'back.out(1.7)'
      }, "-=0.5")
      .fromTo('.reveal-text', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .fromTo('.reveal-text-delay', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.8")
      .fromTo('.reveal-button', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }, "-=0.5")
      .fromTo('.scroll-indicator', { opacity: 0 }, { opacity: 0.5, duration: 1 });

    // Scroll Animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    gsap.utils.toArray('.exp-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });
};

// --- 3. DOM Population & Interactivity ---
const initDOM = () => {
    const grid = document.getElementById('project-grid');
    
    // Inject Projects
    projects.forEach((proj, i) => {
        const tags = proj.tech.map(t => `<span class="text-xs font-['Space_Grotesk'] px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">${t}</span>`).join('');
        
        const cardHTML = `
            <div class="project-card rounded-2xl cursor-pointer" data-id="${proj.id}" style="opacity: 0; transform: translateY(50px);">
                <div class="project-img-container h-48 w-full rounded-t-2xl relative">
                    <img src="${proj.image}" alt="${proj.title}" class="project-img w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-xs font-bold tracking-widest text-cyan-400 uppercase">${proj.category}</div>
                </div>
                <div class="p-6">
                    <h3 class="font-['Syncopate'] text-xl font-bold mb-3">${proj.title}</h3>
                    <p class="font-['Space_Grotesk'] text-gray-400 text-sm mb-4 line-clamp-2">${proj.shortDesc}</p>
                    <div class="flex flex-wrap gap-2">
                        ${tags}
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Animate Cards on Scroll
    gsap.to('.project-card', {
        scrollTrigger: {
            trigger: '#project-grid',
            start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    // Overlay Logic
    const overlay = document.getElementById('project-overlay');
    const closeBtn = document.getElementById('close-overlay');
    const contentContainer = document.getElementById('overlay-content');

    const openOverlay = (id) => {
        const proj = projects.find(p => p.id === id);
        if(!proj) return;

        const tags = proj.tech.map(t => `<span class="text-sm font-['Space_Grotesk'] px-4 py-2 bg-white/10 border border-white/20 rounded-full text-cyan-300">${t}</span>`).join('');

        const contentHTML = `
            <div class="w-full h-[40vh] md:h-[60vh] relative">
                <img src="${proj.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
            </div>
            <div class="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
                <p class="text-cyan-400 font-['Space_Grotesk'] tracking-[0.2em] text-sm mb-2 uppercase">${proj.category}</p>
                <h2 class="font-['Syncopate'] text-4xl md:text-6xl font-bold mb-8 uppercase">${proj.title}</h2>
                <div class="flex flex-wrap gap-3 mb-12">
                    ${tags}
                </div>
                <div class="font-['Space_Grotesk'] text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
                    <p>${proj.fullDesc}</p>
                    <p>As an engineer, my focus here was entirely on ensuring absolute stability, rigorous mathematical validation, and seamless hardware-software integration. The system was validated using advanced numerical solvers and tested against extreme boundary conditions to prevent failure states.</p>
                </div>
                
                <div class="mt-16 border-t border-white/10 pt-8 flex justify-between items-center">
                    <span class="font-['Syncopate'] text-white">HT.</span>
                    <button class="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-full font-['Space_Grotesk'] transition-all close-from-bottom">Close Project</button>
                </div>
            </div>
        `;

        contentContainer.innerHTML = contentHTML;
        overlay.classList.add('overlay-open');
        document.body.style.overflow = 'hidden'; 

        // Add event listener to the newly generated close button
        document.querySelector('.close-from-bottom').addEventListener('click', closeOverlayFunc);
    };

    const closeOverlayFunc = () => {
        overlay.classList.remove('overlay-open');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            contentContainer.innerHTML = '';
        }, 700); 
    };

    // Attach Click Events to Cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            openOverlay(card.dataset.id);
        });
    });

    closeBtn.addEventListener('click', closeOverlayFunc);
};

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initDOM();
    setTimeout(() => {
        initAnimations();
    }, 100);
});
