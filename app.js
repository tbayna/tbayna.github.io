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

    // ---- Text animations for remaining elements (all except nav) ----

    // About: skill section headers
    gsap.utils.toArray('.about-text h4').forEach((el, i) => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 90%" },
            y: 20, opacity: 0, duration: 0.65, delay: i * 0.08, ease: "power2.out"
        });
    });

    // About: skill list items (staggered per ul)
    gsap.utils.toArray('.about-text ul').forEach(ul => {
        gsap.from(ul.querySelectorAll('li'), {
            scrollTrigger: { trigger: ul, start: "top 88%" },
            y: 14, opacity: 0, duration: 0.5, stagger: 0.07, ease: "power2.out"
        });
    });

    // Projects: intro paragraph
    gsap.from('#projects > p', {
        scrollTrigger: { trigger: '#projects > p', start: "top 85%" },
        y: 25, opacity: 0, duration: 0.85, ease: "power2.out"
    });

    // Contact: h2 title (not a .section-title so needs its own animation)
    gsap.from('.contact-title', {
        scrollTrigger: { trigger: '.contact-title', start: "top 75%" },
        y: 70, opacity: 0, duration: 1.1, ease: "power3.out"
    });

    // Contact: subtitle paragraph
    gsap.from('#contact p', {
        scrollTrigger: { trigger: '#contact p', start: "top 82%" },
        y: 30, opacity: 0, duration: 0.85, ease: "power2.out"
    });

    // Contact: CTA button
    gsap.from('#contact a', {
        scrollTrigger: { trigger: '#contact a', start: "top 88%" },
        scale: 0.88, opacity: 0, duration: 0.7, ease: "back.out(1.7)"
    });

    // Footer
    gsap.from('footer p', {
        scrollTrigger: { trigger: 'footer', start: "top 96%" },
        y: 18, opacity: 0, duration: 0.6, ease: "power2.out"
    });

    // Experience: individual text inside .exp-item (dates, tags row)
    gsap.utils.toArray('.exp-item .flex.flex-wrap').forEach(el => {
        gsap.from(el.querySelectorAll('span'), {
            scrollTrigger: { trigger: el, start: "top 90%" },
            scale: 0.85, opacity: 0, duration: 0.4, stagger: 0.06, ease: "back.out(1.5)"
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

// --- 4. Physics Badge ---
const initBadge = () => {
    document.body.insertAdjacentHTML('beforeend', `
        <svg id="badge-string-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="pin-glow-f" x="-100%" y="-100%" width="300%" height="300%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#22d3ee" flood-opacity="0.7"/>
                </filter>
                <filter id="string-shadow-f" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="1" stdDeviation="1.5" flood-color="rgba(0,0,0,0.5)"/>
                </filter>
            </defs>
            <line id="badge-string-line" stroke="#888" stroke-width="1.5" stroke-linecap="round" filter="url(#string-shadow-f)"/>
            <circle id="badge-anchor-pin" r="5" fill="#556" stroke="#22d3ee" stroke-width="1.5" filter="url(#pin-glow-f)"/>
        </svg>
        <div id="badge-card">
            <div class="badge-clip-area">
                <div class="badge-clip-metal"></div>
                <div class="badge-hole"></div>
            </div>
            <div class="badge-header-bar">
                <div>
                    <div class="badge-event-name">ENSET MOHAMMEDIA</div>
                    <div class="badge-subevent">ELECTRICAL ENGINEERING · 2026</div>
                </div>
                <div class="badge-logo-abbr">HT.</div>
            </div>
            <div class="badge-photo-area">
                <div class="badge-photo-ring">
                    <img src="https://media.licdn.com/dms/image/v2/D4E03AQFBBDI6NOqQRA/profile-displayphoto-scale_400_400/B4EZo23h6RHUAg-/0/1761857122012?e=1775692800&v=beta&t=YWopOTivWtBiWj8Q0DiMPNFsSrSTnPShbEf4odQ4YiM" alt="HT" loading="eager">
                </div>
            </div>
            <div class="badge-info-area">
                <div class="badge-name">HICHAM TBINA</div>
                <div class="badge-role-text">Electrical &amp; Control<br>Systems Engineer</div>
            </div>
            <div class="badge-holo-stripe"></div>
            <div class="badge-barcode-area">
                <div class="badge-barcode-lines" id="badge-barcode-lines"></div>
                <div class="badge-barcode-text">HT · 2026 · ECS-ENSET-001</div>
            </div>
        </div>
    `);

    // Generate barcode bars from a simple pattern
    const bc = document.getElementById('badge-barcode-lines');
    [2,1,3,1,1,2,1,3,2,1,2,1,1,2,3,1,2,1,1,2,3,1,1,2,1].forEach(w => {
        const b = document.createElement('div');
        b.style.cssText = `width:${w}px;background:#111;height:100%;flex-shrink:0;`;
        bc.appendChild(b);
    });

    const stringLine = document.getElementById('badge-string-line');
    const pinEl     = document.getElementById('badge-anchor-pin');
    const badgeEl   = document.getElementById('badge-card');

    // ---- Config ----
    const BADGE_W      = 300;
    // HOLE_Y_OFFSET: distance from badge element top (y=0) to the hole centre.
    // badge-clip-area is 32px, content = 7+3+14 = 24px, top pad ≈ 4px → hole = 21px.
    const HOLE_Y_OFFSET = 21;
    const STRING_L     = 285;          // px

    // Extreme-right anchor: 78% desktop, center on mobile
    const getAnchorX = () => window.innerWidth < 768
        ? window.innerWidth * 0.50
        : window.innerWidth * 0.78;
    let anchorX = getAnchorX();
    const anchorY = 0;

    // ---- Pendulum physics state ----
    let angle      = 0;
    let angularVel = 0;
    // G_EFF / STRING_L = angular frequency squared. 1600/240 ≈ 6.67 → T ≈ 2.43 s
    const G_EFF  = 1600;
    const DAMPING = 0.22;   // rad/s per rad/s (energy loss per second)

    // ---- Fall-in animation ----
    let phase    = 'falling';
    let fallT    = 0;
    const FALL_DUR = 0.72;  // seconds
    let prevTs   = performance.now();

    // ---- Drag state ----
    let isDragging    = false;
    let prevDragAngle = 0;
    let prevDragTime  = 0;

    // Position of the string attachment point (hole centre) given current angle
    const holePos = () => ({
        x: anchorX + STRING_L * Math.sin(angle),
        y: anchorY + STRING_L * Math.cos(angle)
    });

    // Apply badge + string positions to DOM (pure transform — no layout reflow)
    const applyPose = (hx, hy, rot) => {
        // translate so transform-origin (85 18) lands at (hx, hy) → see CSS
        const tx = hx - BADGE_W / 2;
        const ty = hy - HOLE_Y_OFFSET;
        badgeEl.style.transform = `translate(${tx}px,${ty}px) rotate(${rot}rad)`;

        // String from pin to hole centre
        stringLine.setAttribute('x1', anchorX);
        stringLine.setAttribute('y1', anchorY + 5);
        stringLine.setAttribute('x2', hx);
        stringLine.setAttribute('y2', hy);
        pinEl.setAttribute('cx', anchorX);
        pinEl.setAttribute('cy', anchorY + 4);
    };

    // Main RAF loop
    const tick = (now) => {
        const dt = Math.min((now - prevTs) / 1000, 0.04);
        prevTs = now;

        if (phase === 'falling') {
            fallT += dt;
            const t = Math.min(fallT / FALL_DUR, 1);
            // easeInOutQuad
            const e = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;
            const startY = -(badgeEl.offsetHeight + 80);
            const endY   = STRING_L;
            const hy = startY + (endY - startY) * e;
            applyPose(anchorX, hy, 0);

            if (t >= 1) {
                phase      = 'physics';
                angle      = 1.25;   // ~72° initial displacement — badge swings deep into text area
                angularVel = 0;
            }
        } else if (!isDragging) {
            // θ'' = -(g/L)·sin(θ) − damping·θ'
            const acc  = -(G_EFF / STRING_L) * Math.sin(angle) - DAMPING * angularVel;
            angularVel += acc * dt;
            angle      += angularVel * dt;
            const { x: hx, y: hy } = holePos();
            // Badge body tilts at 60% of string angle for a natural visual
            applyPose(hx, hy, angle * 0.6);
        }

        requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // ---- Mouse drag ----
    const startDrag = (cx, cy) => {
        if (phase !== 'physics') return;
        isDragging    = true;
        badgeEl.style.cursor = 'grabbing';
        prevDragAngle = angle;
        prevDragTime  = performance.now();
    };
    const moveDrag = (cx, cy) => {
        if (!isDragging) return;
        const na  = Math.atan2(cx - anchorX, cy - anchorY);
        const now = performance.now();
        const el  = (now - prevDragTime) / 1000;
        if (el > 0.001) angularVel = (na - prevDragAngle) / el * 0.65;
        prevDragAngle = na;
        prevDragTime  = now;
        angle = na;
        const { x: hx, y: hy } = holePos();
        applyPose(hx, hy, na * 0.6);
    };
    const endDrag = () => { isDragging = false; badgeEl.style.cursor = 'grab'; };

    badgeEl.addEventListener('mousedown', e => { e.preventDefault(); startDrag(e.clientX, e.clientY); });
    document.addEventListener('mousemove', e => { if (isDragging) moveDrag(e.clientX, e.clientY); });
    document.addEventListener('mouseup', endDrag);

    // ---- Touch drag ----
    badgeEl.addEventListener('touchstart', e => {
        e.preventDefault();
        startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    document.addEventListener('touchmove', e => {
        if (isDragging) { e.preventDefault(); moveDrag(e.touches[0].clientX, e.touches[0].clientY); }
    }, { passive: false });
    document.addEventListener('touchend', endDrag);

    window.addEventListener('resize', () => { anchorX = getAnchorX(); });
};

// --- 5. Global Pretext-Style Text Flow (every non-nav text element) ---
const initGlobalTextFlow = () => {
    const PARA1 = "As a final-year engineering student at ENSET Mohammedia, my passion lies at the intersection of complex mathematics and physical reality. I don't just write code; I design systems that interact with the real world safely and efficiently.";
    const PARA2 = "My expertise ranges from deriving non-linear Equations of Motion for 6-DoF aerospace vehicles to programming real-time RTOS on bare-metal ARM Cortex-M microcontrollers. I am driven by the pursuit of absolute stability in chaotic environments.";

    const MARGIN = 14; // px gap between text and badge edge

    // ---- Pretext core: fit words into maxW starting at cursor ----
    const nextLine = (ctx, words, cursor, maxW) => {
        let line = '', i = cursor;
        while (i < words.length) {
            const test = line + (line ? ' ' : '') + words[i];
            if (ctx.measureText(test).width > maxW && line) break;
            line = test; i++;
        }
        if (!line && cursor < words.length) { line = words[cursor]; i = cursor + 1; }
        return { text: line, end: i };
    };

    // ---- Route one paragraph of words around badge, starting at canvas-y = startY ----
    // containerRect is a plain {top, left, right, width} describing the canvas's viewport rect
    const layoutPara = (ctx, words, startY, cRect, bRect, lineH) => {
        const W = cRect.width;
        const lines = [];
        let cursor = 0, y = startY;

        while (cursor < words.length) {
            const vpTop = cRect.top + y;
            const vpBot = vpTop + lineH;
            let lx = 0, lw = W;

            if (bRect && vpBot > bRect.top && vpTop < bRect.bottom) {
                const bL = bRect.left - cRect.left;
                const bR = bRect.right - cRect.left;
                if (bL < W && bR > 0) {
                    if      (bL <= 0 && bR >= W)  { y += lineH; continue; }            // badge covers full width
                    else if (bR <= W / 2 + 20)     { lx = bR + MARGIN; lw = W - lx; } // badge on left
                    else if (bL >= W / 2 - 20)     { lw = bL - MARGIN; }               // badge on right
                    else                            { lw = bL > 60 ? bL - MARGIN : 0; } // badge center
                    if (lw < 40) { y += lineH; continue; }
                }
            }
            const { text, end } = nextLine(ctx, words, cursor, lw);
            lines.push({ text, x: lx, y: y + lineH * 0.82 });
            cursor = end;
            y += lineH;
        }
        return { lines, endY: y };
    };

    // ---- Build a single-paragraph flow block ----
    const mkBlock = (el, textOverride, opts = {}) => {
        if (!el) return null;
        const raw = (textOverride || el.textContent || '').trim();
        if (!raw) return null;

        el.innerHTML = '';
        el.style.position = 'relative';

        const cv = document.createElement('canvas');
        cv.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;display:block;';
        el.appendChild(cv);
        const ctx = cv.getContext('2d');

        const font  = opts.font  || '18px "Space Grotesk", sans-serif';
        const color = opts.color || 'rgb(209,213,219)';
        const lineH = opts.lineH || 32;
        const words = raw.split(/\s+/).filter(Boolean);
        let prevHash = '';

        return {
            render(bRect) {
                const cRect = el.getBoundingClientRect();
                const W = Math.floor(cRect.width);
                if (W <= 0) return;

                const hash = `${W},${Math.round(bRect?.left||0)},${Math.round(bRect?.top||0)},${Math.round(cRect.top)}`;
                if (hash === prevHash) return;
                prevHash = hash;

                if (cv.width !== W) { cv.width = W; cv.style.width = W + 'px'; }
                ctx.font = font;
                const { lines, endY } = layoutPara(ctx, words, 0, cRect, bRect, lineH);
                const H = Math.ceil(endY + lineH * 0.25);
                if (cv.height !== H) { cv.height = H; cv.style.height = H + 'px'; }
                el.style.minHeight = H + 'px';
                ctx.font = font; ctx.fillStyle = color; ctx.textBaseline = 'alphabetic';
                ctx.clearRect(0, 0, W, H);
                lines.forEach(l => ctx.fillText(l.text, l.x, l.y));
            }
        };
    };

    const blocks = [];

    // ---- 1. Hero description ----
    const heroDesc = document.querySelector('.hero-content .reveal-text-delay');
    const b0 = mkBlock(heroDesc, null, { font: '18px "Space Grotesk", sans-serif', color: 'rgb(156,163,175)', lineH: 36 });
    if (b0) blocks.push(b0);

    // ---- 2. About: two paragraphs sharing one canvas ----
    const aboutEl = document.getElementById('about-text-flow');
    if (aboutEl) {
        aboutEl.innerHTML = '';
        aboutEl.style.position = 'relative';
        const cv = document.createElement('canvas');
        cv.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;display:block;';
        aboutEl.appendChild(cv);
        const ctx = cv.getContext('2d');
        const AFONT = '18px "Space Grotesk", sans-serif';
        const ACOLOR = 'rgb(209,213,219)';
        const ALH = 34;
        const PGAP = ALH * 0.55;
        const aw1 = PARA1.split(/\s+/).filter(Boolean);
        const aw2 = PARA2.split(/\s+/).filter(Boolean);
        let prevHash = '';
        blocks.push({
            render(bRect) {
                const cRect = aboutEl.getBoundingClientRect();
                const W = Math.floor(cRect.width);
                if (W <= 0) return;
                const hash = `${W},${Math.round(bRect?.left||0)},${Math.round(bRect?.top||0)},${Math.round(cRect.top)}`;
                if (hash === prevHash) return;
                prevHash = hash;
                if (cv.width !== W) { cv.width = W; cv.style.width = W + 'px'; }
                ctx.font = AFONT;
                const r1 = layoutPara(ctx, aw1, 0, cRect, bRect, ALH);
                const p2Rect = { top: cRect.top + r1.endY + PGAP, left: cRect.left, right: cRect.right, width: W };
                const r2 = layoutPara(ctx, aw2, 0, p2Rect, bRect, ALH);
                const H = Math.ceil(r1.endY + PGAP + r2.endY + ALH * 0.25);
                if (cv.height !== H) { cv.height = H; cv.style.height = H + 'px'; }
                aboutEl.style.minHeight = H + 'px';
                ctx.font = AFONT; ctx.fillStyle = ACOLOR; ctx.textBaseline = 'alphabetic';
                ctx.clearRect(0, 0, W, H);
                r1.lines.forEach(l => ctx.fillText(l.text, l.x, l.y));
                r2.lines.forEach(l => ctx.fillText(l.text, l.x, l.y + r1.endY + PGAP));
            }
        });
    }

    // ---- 3. Experience descriptions ----
    document.querySelectorAll('.exp-item p').forEach(p => {
        const b = mkBlock(p, null, { font: '16px "Space Grotesk", sans-serif', color: 'rgb(156,163,175)', lineH: 30 });
        if (b) blocks.push(b);
    });

    // ---- 4. Skills list items ----
    document.querySelectorAll('.about-text li').forEach(li => {
        const b = mkBlock(li, null, { font: '14px "Space Grotesk", sans-serif', color: 'rgb(156,163,175)', lineH: 26 });
        if (b) blocks.push(b);
    });

    // ---- 5. Projects intro paragraph ----
    const projP = document.querySelector('#projects p');
    const b5 = mkBlock(projP, null, { font: '16px "Space Grotesk", sans-serif', color: 'rgb(156,163,175)', lineH: 30 });
    if (b5) blocks.push(b5);

    // ---- 6. Contact subtitle ----
    const contactP = document.querySelector('#contact > p');
    const b6 = mkBlock(contactP, null, { font: '20px "Space Grotesk", sans-serif', color: 'rgb(209,213,219)', lineH: 38 });
    if (b6) blocks.push(b6);

    // ---- 7. Footer ----
    const footerP = document.querySelector('footer p');
    const b7 = mkBlock(footerP, null, { font: '14px "Space Grotesk", sans-serif', color: 'rgb(107,114,128)', lineH: 24 });
    if (b7) blocks.push(b7);

    // ---- Global RAF loop ----
    const loop = () => {
        const badgeEl = document.getElementById('badge-card');
        const bRect = badgeEl ? badgeEl.getBoundingClientRect() : null;
        blocks.forEach(b => b.render(bRect));
        requestAnimationFrame(loop);
    };
    document.fonts.ready.then(() => requestAnimationFrame(loop));
};

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initDOM();
    initBadge();
    initGlobalTextFlow();
    setTimeout(() => {
        initAnimations();
    }, 100);
});
