export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  skills: string[];
  outcomes: string[];
  image: string;
  category: string;
  featured: boolean;
  links?: { label: string; url: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "vulcain",
    company: "Vulcain Engineering",
    role: "TCMS Control Systems Engineering Intern",
    location: "Fes, Morocco",
    period: "Feb 2026 – Present",
    description: "Consultant for Train Control and Management Systems (TCMS), working on Medium Voltage Supply functions for rail traction systems.",
    responsibilities: [
      "Designing and analyzing Medium Voltage Supply (MVS) functions including FPS, ADL1, and SWDS for train control systems",
      "Modeling complex control logic in MATLAB Stateflow for traction power systems",
      "Establishing real-time communication protocols between MATLAB and CODESYS via OPC UA",
      "Developing HMI interfaces for operator-level supervision and monitoring",
      "Bridging engineering logic with real-time system integration"
    ],
    technologies: ["MATLAB Stateflow", "CODESYS", "OPC UA", "TCMS", "MVS", "Rail Systems"]
  },
  {
    id: "lear",
    company: "Lear Corporation R&D",
    role: "Hardware R&D Engineering Intern",
    location: "Rabat, Morocco",
    period: "July 2025 – Sept 2025",
    description: "Focused on automotive power electronics research and development, conducting reliability analysis and automation for hardware validation.",
    responsibilities: [
      "Performed Worst-Case Analysis (WCA) on ideal diode circuits for automotive power modules",
      "Validated circuit designs through simulation and performance analysis under extreme conditions",
      "Developed custom VBA scripts to automate WCA simulations and reliability testing workflows",
      "Optimized R&D validation cycles through automated data processing",
      "Delivered high-fidelity technical reports for design reviews"
    ],
    technologies: ["WCA", "VBA Automation", "Power Electronics", "LTspice", "Automotive Systems"]
  },
  {
    id: "redal",
    company: "Redal-BCC",
    role: "Automation & SCADA Engineering Intern",
    location: "Rabat, Morocco",
    period: "July 2024 – Sept 2024",
    description: "Contributed to large-scale infrastructure modernization project for electrical grid supervision systems.",
    responsibilities: [
      "Supported the migration of SCADA systems from Power CC to LYNX platform",
      "Modernized grid supervision and network management systems for regional utilities",
      "Improved real-time grid management efficiency through platform upgrade",
      "Assisted in system testing and validation during transition phase",
      "Documented technical procedures for system migration"
    ],
    technologies: ["SCADA", "LYNX", "Power CC", "Grid Management", "System Migration"]
  },
  {
    id: "electrolab",
    company: "Club Electro Lab",
    role: "Active Member",
    location: "ENSET Mohammedia",
    period: "Jan 2024 – Present",
    description: "University robotics club focused on competitive robotics and innovative electrical systems development.",
    responsibilities: [
      "Participate in robotics competitions and technical challenges",
      "Contribute to development of innovative electrical and control systems",
      "Collaborate with team members on robotic arm and automation projects",
      "Design and implement sensor integration and control logic",
      "Develop safety systems for human-robot interaction"
    ],
    technologies: ["Robotics", "Control Systems", "Sensor Integration", "Team Collaboration"]
  }
];

export const projects: Project[] = [
  {
    id: "smart-microgrid",
    title: "Smart Microgrid with PLCnext",
    shortDescription: "Real-time hybrid microgrid supervision system with Modbus TCP/IP communication and Node-RED dashboards.",
    fullDescription: "Developed a comprehensive real-time hybrid microgrid supervision system for an IMEON 3.6 inverter. The project involved programming a PLCnext AXC F2152 controller using Ladder Logic, establishing Modbus TCP/IP communication protocols, developing custom HMI interfaces, and creating data visualization dashboards using Node-RED. This system enables efficient monitoring and control of renewable energy flows in hybrid microgrid environments.",
    challenges: [
      "Establishing reliable real-time communication between multiple devices",
      "Integrating different protocols and hardware platforms",
      "Creating intuitive visualization for complex energy flows",
      "Ensuring system stability during variable renewable generation"
    ],
    solutions: [
      "Implemented Modbus TCP/IP for robust device communication",
      "Programmed PLCnext controller with optimized Ladder Logic",
      "Developed custom Node-RED dashboards for real-time monitoring",
      "Designed HMI interfaces for operator-friendly control"
    ],
    technologies: ["PLCnext AXC F2152", "Modbus TCP/IP", "Node-RED", "HMI Design", "IMEON 3.6", "Ladder Logic"],
    skills: ["PLC Programming", "Industrial Communication", "Data Visualization", "System Integration"],
    outcomes: [
      "Achieved real-time monitoring of hybrid renewable system",
      "Enabled efficient energy flow management",
      "Created scalable architecture for future expansion"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    category: "Industrial Automation",
    featured: true
  },
  {
    id: "ups-design",
    title: "UPS Design with Lithium BMS",
    shortDescription: "Complete Uninterruptible Power Supply featuring SMPS, lithium battery management, and PWM inverter control.",
    fullDescription: "Engineered a complete Uninterruptible Power Supply (UPS) system from the ground up. The design includes a switched-mode power supply (SMPS) for efficient AC-DC conversion, a custom lithium battery management system (BMS) for safe charging and discharging, and a Pulse-Width Modulated (PWM) inverter for stable AC output. This project demonstrates comprehensive power electronics design capabilities.",
    challenges: [
      "Designing efficient power conversion stages",
      "Implementing safe lithium battery charging protocols",
      "Maintaining stable output voltage under varying loads",
      "Minimizing switching losses and EMI"
    ],
    solutions: [
      "Developed optimized SMPS topology for high efficiency",
      "Implemented CC/CV charging algorithms with safety cutoffs",
      "Designed PWM inverter with proper filtering",
      "Applied thermal management and EMI mitigation techniques"
    ],
    technologies: ["SMPS Design", "PWM Inverter", "Lithium BMS", "Power MOSFETs", "Filter Design"],
    skills: ["Power Electronics", "Circuit Design", "Thermal Management", "Battery Systems"],
    outcomes: [
      "Delivered stable AC output under varying load conditions",
      "Achieved safe lithium battery operation",
      "Optimized efficiency across power stages"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Power Electronics",
    featured: true
  },
  {
    id: "cobot",
    title: "Collaborative Robotic Arm (Cobot)",
    shortDescription: "Human-safe industrial robotics with force and proximity sensor integration for safe human-robot collaboration.",
    fullDescription: "Engineered a collaborative robotic arm (Cobot) designed for safe human-robot interaction in industrial environments. The system integrates force sensors and proximity sensors to detect human presence and contact, ensuring operational safety. Real-time sensor fusion and safety control logic enable the cobot to work alongside humans without safety cages.",
    challenges: [
      "Ensuring real-time safety response",
      "Integrating multiple sensor types effectively",
      "Implementing force-limiting control algorithms",
      "Meeting industrial safety standards"
    ],
    solutions: [
      "Developed sensor fusion algorithms for reliable detection",
      "Implemented force-limiting control with fast response",
      "Created multi-layered safety system architecture",
      "Designed intuitive safety zone configurations"
    ],
    technologies: ["Force Sensors", "Proximity Sensors", "Real-time Control", "Safety Systems", "Sensor Fusion"],
    skills: ["Robotics", "Control Systems", "Safety Engineering", "Sensor Integration"],
    outcomes: [
      "Achieved safe human-robot collaboration",
      "Implemented real-time safety monitoring",
      "Created scalable safety architecture"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    category: "Robotics",
    featured: true
  },
  {
    id: "voltage-regulator",
    title: "Variable Voltage DC/DC Regulator",
    shortDescription: "PID-controlled DC/DC converter with optimized transient response and stable output under varying loads.",
    fullDescription: "Implemented a sophisticated PID controller for a DC/DC converter to maintain stable output voltage under dynamic load conditions. The project involved complete converter design, control loop analysis, transient response optimization, and performance tuning. This demonstrates advanced control theory application in power electronics.",
    challenges: [
      "Achieving fast transient response",
      "Maintaining stability across load ranges",
      "Minimizing overshoot and ringing",
      "Optimizing control parameters"
    ],
    solutions: [
      "Designed PID controller with proper gain scheduling",
      "Analyzed control loop stability using Bode plots",
      "Optimized compensation network design",
      "Implemented anti-windup protection"
    ],
    technologies: ["PID Control", "DC/DC Converter", "Control Loop Analysis", "Compensation Design"],
    skills: ["Control Theory", "Power Electronics", "System Modeling", "Optimization"],
    outcomes: [
      "Achieved fast transient response with minimal overshoot",
      "Maintained stable output across full load range",
      "Optimized efficiency and performance"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    category: "Control Systems",
    featured: false
  },
  {
    id: "rlv-simulation",
    title: "6-DoF Reusable Launch Vehicle Simulation",
    shortDescription: "High-fidelity flight dynamics model with PID/MPC control loops, sensor modeling, and actuator dynamics.",
    fullDescription: "Created a comprehensive 6-Degrees-of-Freedom (6-DoF) simulation of a reusable launch rocket. The model includes full flight dynamics, environmental disturbances, sensor models with realistic noise characteristics, actuator dynamics with saturation limits, and advanced control systems using both PID and Model Predictive Control (MPC) approaches.",
    challenges: [
      "Modeling complex 6-DoF flight dynamics",
      "Implementing realistic sensor and actuator models",
      "Designing controllers for multi-variable stability",
      "Simulating landing phase with precision"
    ],
    solutions: [
      "Developed complete equations of motion in Simulink",
      "Created detailed sensor models with noise and bias",
      "Implemented both PID and MPC control strategies",
      "Validated against published flight data"
    ],
    technologies: ["MATLAB/Simulink", "6-DoF Dynamics", "MPC", "PID Control", "Sensor Modeling"],
    skills: ["Flight Dynamics", "Advanced Control", "System Modeling", "Simulation"],
    outcomes: [
      "Achieved stable attitude control in simulation",
      "Successfully demonstrated landing precision",
      "Validated control system performance"
    ],
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80",
    category: "Aerospace Simulation",
    featured: true
  },
  {
    id: "pv-backstepping",
    title: "PV System with Nonlinear Backstepping Control",
    shortDescription: "High-efficiency photovoltaic system with bidirectional Zeta converter and MPPT using nonlinear control.",
    fullDescription: "Developed an advanced photovoltaic energy system featuring a bidirectional Zeta converter for power flow management. Implemented nonlinear backstepping control for Maximum Power Point Tracking (MPPT) and coordinated CC/CV algorithms for efficient battery charging. This project demonstrates expertise in nonlinear control theory applied to renewable energy systems.",
    challenges: [
      "Implementing stable nonlinear control",
      "Achieving fast MPPT response",
      "Coordinating battery charging with generation",
      "Maintaining stability under varying irradiance"
    ],
    solutions: [
      "Designed backstepping controller with Lyapunov stability proof",
      "Implemented adaptive MPPT algorithm",
      "Created coordinated energy management strategy",
      "Validated performance through simulation"
    ],
    technologies: ["Zeta Converter", "Backstepping Control", "MPPT", "CC/CV Charging", "PV Systems"],
    skills: ["Nonlinear Control", "Power Electronics", "Renewable Energy", "Energy Management"],
    outcomes: [
      "Achieved efficient MPPT with fast convergence",
      "Maintained stable operation under varying conditions",
      "Optimized energy harvesting efficiency"
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    category: "Renewable Energy",
    featured: false
  },
  {
    id: "rl-renewable",
    title: "RL for Hybrid Renewable Storage",
    shortDescription: "Published research on Reinforcement Learning for grid-forming control using hybrid renewable storage units.",
    fullDescription: "Conducted published research investigating the use of Reinforcement Learning (RL) and predictive AI to emulate traditional fossil-based power sources using hybrid renewable storage systems. The work focused on AI-based coordination of multiple storage units for grid-forming control, enabling stable renewable-dominated power grids.",
    challenges: [
      "Training RL agents for power system control",
      "Ensuring stability with AI-based controllers",
      "Coordinating multiple storage units",
      "Validating against traditional grid-forming methods"
    ],
    solutions: [
      "Developed custom RL environment for power systems",
      "Implemented safe exploration strategies",
      "Created multi-agent coordination framework",
      "Published results in academic venue"
    ],
    technologies: ["Reinforcement Learning", "Python", "TensorFlow/PyTorch", "Power System Modeling"],
    skills: ["Machine Learning", "AI Research", "Grid-Forming Control", "Academic Writing"],
    outcomes: [
      "Published research findings",
      "Demonstrated RL viability for grid control",
      "Achieved competitive performance vs traditional methods"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    category: "AI Research",
    featured: true
  },
  {
    id: "virtual-inertia",
    title: "Intelligent Virtual Inertia Prototype",
    shortDescription: "AI-based adaptive virtual inertia system to stabilize modern power grids against high renewable penetration.",
    fullDescription: "Engineered an AI-based adaptive virtual inertia system for Battery Energy Storage Systems (BESS) to provide synthetic inertia and stabilize power grids with high renewable energy penetration. The system uses machine learning to adaptively adjust virtual inertia response based on grid conditions, replacing the mechanical inertia traditionally provided by rotating generators.",
    challenges: [
      "Emulating mechanical inertia electronically",
      "Adapting to rapidly changing grid conditions",
      "Ensuring fast response without instability",
      "Coordinating with existing grid protection"
    ],
    solutions: [
      "Developed adaptive virtual inertia algorithm",
      "Implemented real-time grid condition monitoring",
      "Created stable control loop with proper filtering",
      "FENELEC 2025 Innovation Finalist recognition"
    ],
    technologies: ["Virtual Inertia", "BESS", "AI/ML", "Grid Stability", "Power Electronics"],
    skills: ["Power Systems", "Control Design", "Machine Learning", "Innovation"],
    outcomes: [
      "Finalist at FENELEC 2025 Innovation Competition",
      "Demonstrated grid stabilization capability",
      "Presented technical ROI to industry jury"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    category: "Smart Grid",
    featured: true
  },
  {
    id: "battery-observer",
    title: "Li-ion Battery State Observer",
    shortDescription: "State-space observer for joint SoC, core temperature, and polarization voltage estimation.",
    fullDescription: "Designed and validated an advanced state-space observer using Kalman and Luenberger filtering techniques for joint estimation of State of Charge (SoC), core temperature, and polarization voltage in lithium-ion batteries. This enables adaptive CC/CV fast charging protocols while ensuring battery safety and longevity.",
    challenges: [
      "Accurate SoC estimation without direct measurement",
      "Thermal estimation with limited sensors",
      "Handling battery parameter variations",
      "Ensuring real-time computation feasibility"
    ],
    solutions: [
      "Implemented extended Kalman filter for nonlinear estimation",
      "Developed thermal model with observer correction",
      "Created adaptive parameter estimation",
      "Optimized algorithm for embedded implementation"
    ],
    technologies: ["Kalman Filter", "Luenberger Observer", "Battery Modeling", "State-Space Control"],
    skills: ["State Estimation", "Battery Systems", "MATLAB/Simulink", "Embedded Systems"],
    outcomes: [
      "Achieved accurate SoC estimation within 2% error",
      "Enabled safe fast charging protocols",
      "Validated through extensive testing"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Battery Systems",
    featured: false
  },
  {
    id: "helicopter",
    title: "Controlled Helicopter Prototype",
    shortDescription: "ESP32-based flight stabilizer with IMU integration and ESP-NOW wireless telemetry.",
    fullDescription: "Built a standalone ESP32-based flight controller for a helicopter prototype. The system integrates gyroscope and IMU sensors for PID-based attitude stabilization and implements ESP-NOW protocol for low-latency wireless telemetry. This demonstrates embedded systems development for aerospace applications.",
    challenges: [
      "Achieving stable flight with low-cost sensors",
      "Implementing fast control loop on ESP32",
      "Establishing reliable wireless communication",
      "Tuning PID for unstable helicopter dynamics"
    ],
    solutions: [
      "Developed sensor fusion algorithm for attitude estimation",
      "Implemented optimized C++ control loop",
      "Used ESP-NOW for sub-10ms latency telemetry",
      "Applied systematic PID tuning methodology"
    ],
    technologies: ["ESP32", "C++", "IMU/Gyroscope", "ESP-NOW", "PID Control"],
    skills: ["Embedded Programming", "Flight Control", "Wireless Communication", "Sensor Fusion"],
    outcomes: [
      "Achieved stable hover in prototype testing",
      "Demonstrated reliable wireless telemetry",
      "Created reusable flight control platform"
    ],
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=800&q=80",
    category: "Embedded Systems",
    featured: false
  },
  {
    id: "ems-v2g",
    title: "EMS Prototype with V2G Integration",
    shortDescription: "Energy Management System using load-shifting strategies and Vehicle-to-Grid integration via MPC.",
    fullDescription: "Developed an Energy Management System (EMS) prototype that optimizes energy consumption using load-shifting strategies and integrates Vehicle-to-Grid (V2G) capabilities. The system uses Model Predictive Control (MPC) to forecast and optimize energy flows, reducing costs and improving grid stability.",
    challenges: [
      "Optimizing multi-objective energy management",
      "Integrating V2G with grid constraints",
      "Forecasting renewable generation and load",
      "Ensuring real-time optimization performance"
    ],
    solutions: [
      "Implemented MPC with rolling horizon optimization",
      "Created V2G scheduling algorithm",
      "Developed load and generation forecasting models",
      "Optimized solver for embedded deployment"
    ],
    technologies: ["MPC", "V2G", "Load Forecasting", "Optimization", "Smart Grid"],
    skills: ["Energy Management", "Predictive Control", "System Optimization", "Grid Integration"],
    outcomes: [
      "Achieved significant cost reduction through load shifting",
      "Demonstrated V2G grid support capability",
      "Created scalable EMS architecture"
    ],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    category: "Smart Grid",
    featured: false
  },
  {
    id: "line-follower",
    title: "Line-Following Robot (PID)",
    shortDescription: "High-speed path tracking using IR sensor arrays and tuned PID control on Arduino platform.",
    fullDescription: "Implemented a high-speed line-following robot using IR sensor arrays for path detection and a tuned PID control loop on an Arduino-based embedded platform. The project demonstrates practical application of control theory in robotics, achieving smooth and fast path tracking.",
    challenges: [
      "Achieving fast response without oscillation",
      "Handling varying line conditions",
      "Optimizing sensor array configuration",
      "Tuning PID for different speeds"
    ],
    solutions: [
      "Designed optimized PID controller with gain scheduling",
      "Implemented sensor calibration routine",
      "Created adaptive speed control",
      "Applied Ziegler-Nichols tuning methodology"
    ],
    technologies: ["Arduino", "IR Sensors", "PID Control", "Motor Control"],
    skills: ["Embedded Systems", "Control Tuning", "Robotics", "Sensor Integration"],
    outcomes: [
      "Achieved smooth high-speed line following",
      "Won internal club competition",
      "Created reusable control platform"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    category: "Robotics",
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Control Systems",
    skills: ["PID Control", "Model Predictive Control (MPC)", "State-Space Control", "Nonlinear Backstepping Control", "Kalman Filtering", "Luenberger Observers"]
  },
  {
    name: "Programming & Software",
    skills: ["MATLAB/Simulink", "C/C++", "Python", "VHDL/FPGA", "Stateflow", "Simscape"]
  },
  {
    name: "Power Electronics",
    skills: ["DC/DC Converters", "Inverters (PWM/MLI)", "SMPS Design", "BMS", "Power MOSFET/IGBT", "EMI Mitigation"]
  },
  {
    name: "Industrial Automation",
    skills: ["PLCnext", "CODESYS", "Ladder Logic", "SCADA/HMI", "Node-RED", "Modbus TCP/IP", "OPC UA"]
  },
  {
    name: "AI & Machine Learning",
    skills: ["Reinforcement Learning", "Predictive AI", "Neural Networks", "TensorFlow/PyTorch"]
  },
  {
    name: "Hardware & Embedded",
    skills: ["STM32", "ESP32", "Arduino", "PCB Design (Altium/KiCad)", "Hardware-in-the-Loop"]
  }
];

export const education = [
  {
    degree: "Engineer's Degree in Electrical Engineering",
    specialization: "Industrial Control Systems",
    institution: "Higher Normal School of Technical Education (ENSET)",
    location: "Mohammedia, Morocco",
    period: "2023 – 2026"
  },
  {
    degree: "Higher Technician Certificate (BTS)",
    specialization: "Electrotechnics",
    institution: "Preparatory Classes",
    location: "Salé, Morocco",
    period: "2021 – 2023"
  },
  {
    degree: "Baccalaureate Diploma",
    specialization: "Electrical Science",
    institution: "High School",
    location: "Rabat, Morocco",
    period: "2021"
  }
];

export const personalInfo = {
  name: "Hicham Tbina",
  title: "Electrical Engineer",
  specialization: "Control Systems, Power Electronics & Embedded Systems",
  location: "Rabat, Morocco",
  email: "eng.tbinahicham@gmail.com",
  phone: "+212 621 505 418",
  linkedin: "https://www.linkedin.com/in/hicham-tbina/",
  summary: "Electrical Control Systems Engineer specializing in deliverable-driven R&D and technical collaboration. Expert in MATLAB/Simulink modeling, advanced control theory, and embedded hardware development. Proven track record of delivering testable prototypes and clear documentation. Experienced in power electronics, industrial automation, and AI-driven control systems."
};

export const achievements = [
  {
    title: "FENELEC 2025 Innovation Finalist",
    description: "Selected as finalist for 'Intelligent BESS Grid-Forming System' research and development",
    year: "2025"
  },
  {
    title: "Published Research",
    description: "Reinforcement Learning for Hybrid Renewable Storage: RL-based grid-forming control",
    year: "2024"
  }
];
