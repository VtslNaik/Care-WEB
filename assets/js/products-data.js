/**
 * Care Process Instruments - Comprehensive Authentic Product Database
 * Sourced directly from careinstruments.com verification & technical catalog
 */

const PRODUCTS_DATABASE = [
  // --- HVAC / HUMIDITY / BMS INSTRUMENTS ---
  {
    id: "humidity-transmitter",
    slug: "humidity-transmitter",
    name: "Industrial Humidity & Temperature Transmitter",
    partNumber: "CARE-HT-200 / Rotronic HF Series",
    category: "hvac",
    categoryName: "HVAC / Humidity / BMS",
    image: "assets/images/products/humidity-transmitter.jpg",
    featured: true,
    rating: 4.9,
    shortDescription: "High-precision ambient and duct mount humidity and temperature transmitter engineered for HVAC, BMS, and cleanroom monitoring.",
    fullDescription: "The Care Instruments Humidity Transmitter offers superior long-term stability and resistance against chemical contamination. Designed for accurate relative humidity and temperature measurements in cleanrooms, HVAC ducts, pharmaceutical manufacturing, and automated building management systems.",
    keySpecs: [
      "Humidity Range: 0 to 100% RH",
      "Temperature Range: -40°C to +85°C",
      "Accuracy: ±1.5% RH (at 23°C), ±0.2°C",
      "Output: 4-20 mA / 0-10 V / RS-485 Modbus RTU",
      "Enclosure: IP65 polycarbonate / SS probe"
    ],
    specifications: {
      "Model Series": "CARE-HT-200 Industrial",
      "Measuring Range (Humidity)": "0 to 100% RH",
      "Measuring Range (Temperature)": "-40°C to +85°C (-40°F to 185°F)",
      "Humidity Accuracy": "±1.5% RH (10...90% RH) at 23°C",
      "Temperature Accuracy": "±0.2°C at 23°C",
      "Analog Output": "4-20 mA (2-wire) or 0-10 V DC",
      "Digital Interface": "RS-485 Modbus RTU (Optional)",
      "Operating Voltage": "15 to 35 V DC / 24 V AC ±10%",
      "Sensor Element": "Capacitive thin-film polymer / Pt1000",
      "Response Time (t90)": "< 15 seconds with membrane filter",
      "Probe Material": "Stainless Steel AISI 316L / Polycarbonate",
      "Housing Protection": "IP65 / NEMA 4 rated enclosure"
    },
    features: [
      "Outstanding long-term stability under severe industrial conditions",
      "Interchangeable sensor probe for zero-downtime maintenance",
      "Duct mount and wall mount configurations available",
      "Integrated filter cap against chemical vapor and dust deposition",
      "Compatible with all standard BMS controllers and SCADA systems"
    ],
    applications: [
      "Pharmaceutical cleanrooms and stability chambers",
      "HVAC air handling units (AHU) and BMS automation",
      "Semiconductor and electronics manufacturing facilities",
      "Food storage, grain silos, and cold warehouses",
      "Textile conditioning laboratories and hospitals"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Calibration Traceability"],
    datasheet: "CARE-HT200-Humidity-Transmitter-Datasheet.pdf"
  },
  {
    id: "air-velocity-flow",
    slug: "air-velocity-flow",
    name: "Air Velocity & Flow Transmitter",
    partNumber: "CARE-EE-EE650 Air Velocity Sensor",
    category: "hvac",
    categoryName: "HVAC / Humidity / BMS",
    image: "assets/images/products/air-velocity-sensor.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Precision thin-film anemometer sensor specifically designed for measuring ventilation air flow and duct velocity.",
    fullDescription: "CARE-EE-EE650 series utilizes innovative thin-film sensor technology operating on the hot-film anemometer principle. It delivers exceptional sensitivity even at minimal air velocity, high immunity to dust and pollution, and user-configurable output scaling.",
    keySpecs: [
      "Velocity Range: 0-10 m/s, 0-15 m/s, 0-20 m/s selectable",
      "Accuracy: ±(0.2 m/s + 3% of mv)",
      "Output: 4-20 mA or 0-10 V jumper selectable",
      "Response Time: Typ. 4 sec or fast 1.5 sec",
      "Probe Length: 100mm, 200mm, or 300mm SS"
    ],
    specifications: {
      "Model": "CARE-EE-EE650 Series",
      "Measuring Range": "0...10 m/s / 0...15 m/s / 0...20 m/s (selectable)",
      "Accuracy at 20°C, 45% RH": "±(0.2 m/s + 3% of measuring value)",
      "Response Time (t90)": "typ. 4s (fast mode: 1.5s)",
      "Signal Output": "0-10 V (max. 1 mA) / 4-20 mA (max. 450 Ω)",
      "Operating Supply": "24 V AC/DC ±20%",
      "Probe Material": "Polycarbonate or Stainless Steel SS304",
      "Enclosure Protection": "IP65 for housing, IP20 for sensor head",
      "Cable Connection": "Screw terminals max. 1.5 mm²"
    },
    features: [
      "High precision aerodynamic flow measurement",
      "Immune to dust contamination via thin-film element protection",
      "Field selectable measuring range via internal jumpers",
      "Compact flange mounting for easy duct installation"
    ],
    applications: [
      "HVAC duct flow monitoring and balancing",
      "Laminar flow hoods and biosafety cabinets",
      "Cleanroom ventilation systems",
      "Exhaust hood verification in chemical laboratories"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-EE650-Air-Velocity-Datasheet.pdf"
  },
  {
    id: "moisture-in-oil",
    slug: "moisture-in-oil",
    name: "Moisture in Oil Transmitter",
    partNumber: "CARE-EE-EE381 Series",
    category: "hvac",
    categoryName: "HVAC / Humidity / BMS",
    image: "assets/images/products/moisture-in-oil-transmitter.jpg",
    featured: true,
    rating: 4.9,
    shortDescription: "Specialized inline moisture transmitter for real-time monitoring of water content and water activity (aw) in transformer and lubricating oils.",
    fullDescription: "CARE-EE-EE381 is engineered for preventive maintenance of power transformers, turbines, and hydraulic machinery. It measures water activity (aw) and oil temperature with remarkable accuracy up to 120°C and pressures up to 20 bar.",
    keySpecs: [
      "Water Activity Range: 0 to 1 aw",
      "Oil Temp Range: -40°C to +120°C",
      "Pressure Rating: Up to 20 bar (290 psi)",
      "Dual 4-20 mA Outputs: aw & Oil Temperature",
      "Process Connection: G 1/2\" ISO or 1/2\" NPT SS316"
    ],
    specifications: {
      "Model": "CARE-EE-EE381 Inline Oil Monitor",
      "Water Activity (aw) Range": "0 ... 1 aw",
      "aw Accuracy": "±0.02 aw (0...0.9 aw) / ±0.03 aw (0.9...1 aw)",
      "Oil Temperature Range": "-40°C to +120°C",
      "Temperature Accuracy": "±0.2°C at 20°C",
      "Process Pressure": "Up to 20 bar (290 psi)",
      "Outputs": "Two configurable 4-20 mA or 0-10 V outputs",
      "Probe Material": "Stainless Steel 1.4404 (AISI 316L)",
      "Process Fitting": "G 1/2\" male or 1/2\" NPT thread",
      "Operating Voltage": "10 to 30 V DC"
    },
    features: [
      "Direct measurement of water activity (aw) independent of oil age or type",
      "Prevents dielectric breakdown in high-voltage transformers",
      "Dual analog outputs for moisture content and fluid temperature",
      "Stainless steel rugged probe for pressurized pipeline installations"
    ],
    applications: [
      "Power transmission transformers (Bridgestone, Torrent Power)",
      "Turbine lubrication loops and heavy gearboxes",
      "Hydraulic power packs and marine propulsion systems",
      "Engine oil condition monitoring in generator sets"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Pressure Equipment Directive"],
    datasheet: "CARE-EE381-Moisture-In-Oil-Datasheet.pdf"
  },
  {
    id: "co2-transmitter",
    slug: "co2",
    name: "Carbon Dioxide (CO2) Transmitter",
    partNumber: "CARE-ESENSE-CO2-TRANSMITTER",
    category: "hvac",
    categoryName: "HVAC / Humidity / BMS",
    image: "assets/images/products/co2-transmitter.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "NDIR optical sensor transmitter for accurate ambient and duct carbon dioxide measurement in demand-controlled ventilation.",
    fullDescription: "Using Non-Dispersive Infrared (NDIR) waveguide technology, CARE-ESENSE CO2 transmitter provides maintenance-free automatic self-calibration (ABC logic) with life expectancy exceeding 15 years in typical commercial and industrial settings.",
    keySpecs: [
      "Measuring Range: 0 to 2000 ppm / 0 to 5000 ppm",
      "Technology: Non-Dispersive Infrared (NDIR)",
      "Accuracy: ±30 ppm ±3% of reading",
      "Output: 4-20 mA / 0-10 V / Relay option",
      "Self-Calibration: Automatic Baseline Correction (ABC)"
    ],
    specifications: {
      "Model": "CARE-ESENSE-CO2",
      "Measuring Principle": "Non-Dispersive Infrared (NDIR) with ABC",
      "Measuring Range": "0 - 2,000 ppm (standard), 0 - 5,000 ppm (optional)",
      "Accuracy": "±30 ppm + 3% of measured reading",
      "Signal Outputs": "4-20 mA (RL < 500 Ω) and 0-10 V (RL > 10 kΩ)",
      "Relay Output": "Optional SPST contact for alarm control",
      "Power Supply": "24 V AC/DC (18...30 VAC, 18...32 VDC)",
      "Response Time": "< 2 minutes by 90% step change",
      "Enclosure": "Flame-retardant ABS, IP30 (Room) / IP65 (Duct)"
    },
    features: [
      "Patented NDIR optical chamber for drift-free stability",
      "Integrated automatic background calibration algorithm",
      "Energy saving through demand-controlled ventilation (DCV)",
      "Supplied to leading pharma companies (Wockhardt, Vardhman)"
    ],
    applications: [
      "Pharmaceutical research and manufacturing facilities",
      "Commercial office towers, auditoriums, and shopping malls",
      "Agricultural greenhouses and mushroom cultivation",
      "Mushroom farming and fermentation process plants"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-ESENSE-CO2-Datasheet.pdf"
  },
  {
    id: "dew-point-sensor-meter",
    slug: "dew-point-sensor-meter",
    name: "Industrial Dew Point Transmitter / Sensor",
    partNumber: "CARE-EE-EE371 Series",
    category: "hvac",
    categoryName: "HVAC / Humidity / BMS",
    image: "assets/images/products/air-velocity-sensor.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Ultra-low dew point transmitter engineered for compressed air dryers, refrigerated gas drying, and pneumatic lines.",
    fullDescription: "CARE-EE-EE371 offers exceptional precision down to -60°C Td (-76°F Td). Equipped with an auto-calibration procedure, the sensor guarantees zero drift and fast recovery from condensation in industrial compressed air plants.",
    keySpecs: [
      "Measuring Range: -60°C to +60°C Td (-76 to 140°F Td)",
      "Accuracy: ±2°C Td (at -40°C Td)",
      "Pressure Range: Up to 100 bar (1450 psi)",
      "Outputs: Two 4-20 mA outputs (Td & T)",
      "Process Connection: G 1/2\" ISO or 1/2\" NPT SS316"
    ],
    specifications: {
      "Model": "CARE-EE-EE371 Dew Point Transmitter",
      "Dew Point Range": "-60°C to +60°C Td (-76 to +140°F Td)",
      "Temperature Range": "-40°C to +70°C",
      "Dew Point Accuracy": "±2°C Td between -40°C and 0°C Td",
      "Operating Pressure": "0 to 100 bar (0 to 1450 psi)",
      "Analog Output": "Dual 4-20 mA or 0-10 V (configurable)",
      "Digital Interface": "RS-485 with Modbus RTU protocol",
      "Wetted Materials": "Stainless Steel 1.4404 (316L)",
      "Protection Class": "IP65 (NEMA 4)"
    },
    features: [
      "Monitors desiccant and refrigeration air dryer performance",
      "Auto-calibration cycle avoids sensor degradation",
      "Withstands high pressure up to 100 bar",
      "Quick response time during dry-down cycles"
    ],
    applications: [
      "Compressed air systems and pneumatic instrumentation",
      "Plastic pellet drying hoppers",
      "Industrial gas generation (Nitrogen, Argon, O2)",
      "Rail braking pneumatic air systems"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-EE371-DewPoint-Datasheet.pdf"
  },

  // --- PRESSURE INSTRUMENTS ---
  {
    id: "pressure-gauges",
    slug: "pressure-gauges",
    name: "Heavy-Duty Bourdon Tube Pressure Gauges",
    partNumber: "CARE-PG-SS Series (Bourdon / Diaphragm)",
    category: "pressure",
    categoryName: "Pressure Instruments",
    image: "assets/images/products/pressure-gauges.jpg",
    featured: true,
    rating: 5.0,
    shortDescription: "All-stainless steel industrial pressure gauges with glycerin filling for harsh pulsating, vibrating, and corrosive process environments.",
    fullDescription: "Care Instruments manufactures premium Bourdon tube pressure gauges in sizes from 63mm to 250mm dial diameter. Designed according to EN 837-1 standards with stainless steel 316 wetted parts, blow-out protection, and hermetically sealed cases for corrosive media.",
    keySpecs: [
      "Pressure Ranges: -1 to 0 bar (Vacuum) up to 1600 bar",
      "Dial Sizes: 63mm (2.5\"), 100mm (4\"), 150mm (6\"), 250mm (10\")",
      "Accuracy: Class 1.0 (±1.0% F.S.) / Class 0.5 option",
      "Wetted Parts: Stainless Steel SS316 / SS316L",
      "Connection: 1/4\", 3/8\", 1/2\" BSP / NPT bottom or back mount"
    ],
    specifications: {
      "Standards": "EN 837-1 / IS 3624",
      "Nominal Dial Sizes": "63 mm (2.5\"), 100 mm (4\"), 150 mm (6\")",
      "Accuracy Class": "Class 1.0 (100mm, 150mm), Class 1.6 (63mm)",
      "Scale Ranges": "Vacuum (-1 to 0 bar), Compound, up to 0...1600 bar",
      "Wetted Material": "SS 316 Bourdon Tube & SS 316 Shank",
      "Case & Bezel": "SS 304 bayonet lock bezel with safety blow-out disc",
      "Window": "Toughened laminated safety glass",
      "Liquid Filling": "Glycerine 99.7% or dry (Silicone oil optional)",
      "Process Connection": "1/2\" BSP (M) standard / 1/2\" NPT (M)",
      "Operating Temperature": "Ambient -20°C to +65°C; Medium max. 200°C"
    },
    features: [
      "Supplied to top industrial leaders including Vadilal and Alkem",
      "Over-pressure protection up to 130% of full scale",
      "Hermetically sealed case with liquid damping against pump pulsation",
      "Available in bottom direct mount or surface back panel mount"
    ],
    applications: [
      "Chemical and petrochemical processing plants",
      "Thermal and hydro power plants (Torrent Power, BHEL)",
      "Boilers, steam lines, and hydraulic presses",
      "Oil & gas pipelines, skid packages, and water works"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Calibration Certificate Traceable to NABL"],
    datasheet: "CARE-PG-Bourdon-Pressure-Gauge-Datasheet.pdf"
  },
  {
    id: "digital-diff-manometer",
    slug: "digital-diff-manometer",
    name: "Digital Differential Pressure Gauge & Manometer",
    partNumber: "CARE-MAG-DIFF / Dwyer Compatible Series",
    category: "pressure",
    categoryName: "Pressure Instruments",
    image: "assets/images/products/digital-diff-manometer.jpg",
    featured: false,
    rating: 4.9,
    shortDescription: "Low differential pressure gauge and digital manometer for cleanroom overpressure, laminar airflow, and air filter status.",
    fullDescription: "Care Instruments differential pressure gauges and digital manometers measure low positive, negative, or differential air and non-corrosive gas pressures. Widely installed across India for pharma AHU filter status and hospital negative isolation rooms.",
    keySpecs: [
      "Ranges: 0-60 Pa, 0-250 Pa, 0-500 Pa, 0-100 mmWC",
      "Accuracy: ±2% of full scale (±1% for digital models)",
      "Display: High-contrast dial pointer or 4-digit LCD",
      "Process Ports: 1/8\" female NPT high & low taps",
      "Mounting: Flush wall cutout or surface bracket"
    ],
    specifications: {
      "Model": "CARE-MAG-DIFF Series",
      "Measuring Units": "Pa, kPa, mmWC, inWC, mbar (selectable)",
      "Pressure Range": "0-250 Pa, 0-500 Pa, 0-1000 Pa, 0-25 mmWC, 0-50 mmWC",
      "Accuracy": "±2% of Full Scale at 21°C",
      "Overpressure Limit": "15 psi (100 kPa) continuous",
      "Display Option": "Mechanical magnetic-helix or LED/LCD backlit",
      "Housing Material": "Die-cast aluminum with dark gray coating",
      "Ports": "Dual 1/8\" NPT female high and low pressure connections"
    },
    features: [
      "Magnetic helix frictionless drive mechanism eliminates gear wear",
      "Supplied to Tata Coffee Limited and pharmaceutical cleanrooms",
      "Clear zero-adjustment screw accessible from front face",
      "Zero oil leakage or fluid evaporation risks"
    ],
    applications: [
      "Pharmaceutical cleanrooms and containment isolation suites",
      "HEPA and pre-filter status monitoring in AHU systems",
      "Paint booth ventilation and fume scrubbers",
      "Furnace draft and flue gas flow control"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-MAG-Differential-Pressure-Datasheet.pdf"
  },
  {
    id: "pressure-switch",
    slug: "pressure-switch",
    name: "Industrial Heavy-Duty Pressure Switch",
    partNumber: "CARE-PSW-IND Series",
    category: "pressure",
    categoryName: "Pressure Instruments",
    image: "assets/images/products/pressure-gauges.jpg",
    featured: false,
    rating: 4.7,
    shortDescription: "Robust electromechanical pressure switch with microswitch contacts for pump control, hydraulic safety, and compressor cut-off.",
    fullDescription: "Engineered for reliable switching operations across high cycle rates. Available in weatherproof IP66 enclosures and explosion-proof certified versions with adjustable deadband and SPDT / DPDT contact configurations.",
    keySpecs: [
      "Pressure Range: -1 to 0 bar (Vacuum) up to 400 bar",
      "Switching Contacts: 1 x SPDT or 2 x SPDT microswitch",
      "Contact Rating: 15A @ 250V AC / 5A @ 24V DC",
      "Repeatability: ±1% of full scale range",
      "Enclosure: Die-cast aluminum weatherproof / flameproof"
    ],
    specifications: {
      "Model": "CARE-PSW-IND",
      "Sensing Element": "SS316 Diaphragm or Piston mechanism",
      "Operating Ranges": "0.2 to 2 bar, 1 to 10 bar, 5 to 50 bar, 20 to 200 bar",
      "Switch Types": "SPDT Snap action (Gold contacts optional)",
      "Electrical Rating": "15A 125/250 VAC, 0.4A 125 VDC",
      "Process Connection": "1/4\" BSP(F) or 1/2\" NPT(M) Stainless Steel",
      "Enclosure Class": "IP66 weatherproof / Ex-d IIC T6 flameproof",
      "Repeatability": "±0.5% to ±1% of full scale"
    },
    features: [
      "Field adjustable setpoint and differential deadband",
      "High overpressure protection up to 1.5x working limit",
      "Vibration resistant snap action contact",
      "Flameproof enclosure option for Zone 1 and Zone 2 hazardous areas"
    ],
    applications: [
      "Boiler feedwater pump start/stop automation",
      "Hydraulic power packs and accumulator safety",
      "Firefighting deluge systems and sprinkler lines",
      "Industrial compressed air receiver cutoffs"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Flameproof Zone 1/2 Ex-d"],
    datasheet: "CARE-PSW-Pressure-Switch-Datasheet.pdf"
  },

  // --- TEMPERATURE INSTRUMENTS ---
  {
    id: "rtd-thermocouple",
    slug: "rtd-thermocouple",
    name: "Industrial RTD Pt100 Sensors & Thermocouples",
    partNumber: "CARE-RTD-PT100 / CARE-TC-K/J/R/S",
    category: "temperature",
    categoryName: "Temperature Instruments",
    image: "assets/images/products/rtd-thermocouple-sensor.jpg",
    featured: true,
    rating: 5.0,
    shortDescription: "Custom manufactured RTD Pt100 sensors and thermocouples with weatherproof and flameproof terminal heads.",
    fullDescription: "Care Process Instruments is a prominent RTD sensor and thermocouple manufacturer in Ahmedabad, Gujarat. We engineer Simplex and Duplex Class A Pt100 elements and heavy-duty thermocouples (J, K, T, R, S) with mineral insulated sheaths, thermowells, and head transmitters for supreme reliability up to 1600°C.",
    keySpecs: [
      "RTD Range: -200°C to +600°C (Class A / Class B)",
      "Thermocouple Range: 0°C to 1600°C (Type K, J, R, S, B)",
      "Element Type: Simplex (1xPt100) or Duplex (2xPt100) 3-wire/4-wire",
      "Sheath Material: SS316, SS310, Inconel 600, Ceramic 610/710",
      "Head: Die-cast aluminum weatherproof (IP67) or Flameproof (Ex-d IIC)"
    ],
    specifications: {
      "Standards": "IEC 60751 / DIN 43760 / ASTM E230",
      "Sensor Types": "Pt100, Pt1000, Thermocouple Type K, J, N, R, S",
      "Tolerance Classes": "Class A (±0.15°C at 0°C), Class B, 1/3 DIN, 1/10 DIN",
      "Configuration": "2-wire, 3-wire, or 4-wire (Simplex / Duplex)",
      "Sheath Diameter": "3 mm, 4.5 mm, 6 mm, 8 mm, 10 mm, 12 mm",
      "Sheath Length": "Custom built to application (50 mm to 3000 mm)",
      "Process Connection": "1/2\" BSP/NPT fixed or adjustable compression fitting",
      "Thermowell Option": "Bar stock drilled SS316 / Hastelloy / Monel thermowells",
      "Head Construction": "Cast Aluminum IP67 or Flameproof Ex-d IIC T6"
    },
    features: [
      "Manufactured in-house at our Ahmedabad/Gandhinagar facility",
      "Mineral insulated (MI) construction allows bending around obstacles",
      "Supplied to prominent pharma, chemical, and research laboratories",
      "Class A calibration certified with traceable test reports"
    ],
    applications: [
      "Chemical reactors, distillation columns, and autocalves",
      "Pharmaceutical batch processing (Alembic, Cadila, Zydus)",
      "Heat treatment furnaces, kilns, and metal smelting",
      "Power plant turbines, bearing temperature monitors (BHEL)"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Flameproof Ex-d Certified", "NABL Traceable"],
    datasheet: "CARE-RTD-Thermocouple-Technical-Datasheet.pdf"
  },
  {
    id: "head-mount-temperature-transmitter",
    slug: "temperature-transmitter",
    name: "Head Mount Temperature Transmitter (4-20mA)",
    partNumber: "CARE-TT-420-HM / HART Series",
    category: "temperature",
    categoryName: "Temperature Instruments",
    image: "assets/images/products/head-mount-temperature-transmitter.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Universal input puck transmitter fitting directly into connection heads, converting RTD/TC signals to 4-20mA loop powered output.",
    fullDescription: "CARE-TT-420-HM is a programmable head-mounted temperature transmitter designed for universal DIN Form B connection heads. It accepts inputs from 2/3/4-wire Pt100 RTDs as well as all standard thermocouples, providing linearized 4-20mA or HART protocol communication.",
    keySpecs: [
      "Input: RTD Pt100, Pt500, Pt1000 & Thermocouples (K, J, T, R, S, B)",
      "Output: 4-20 mA loop powered (2-wire), HART optional",
      "Accuracy: ±0.1% of span",
      "Power Supply: 10 to 35 V DC loop powered",
      "Dimensions: Standard DIN Form B (44 mm diameter)"
    ],
    specifications: {
      "Model": "CARE-TT-420-HM Universal",
      "Input Signal": "Universal: Pt100 (2/3/4 wire), TC Type K, J, T, E, R, S, B, N",
      "Output Signal": "4-20 mA (2-wire, loop powered)",
      "Galvanic Isolation": "1500 V AC between input and output",
      "Measurement Accuracy": "±0.1% of span or ±0.2°C",
      "Power Supply": "10 to 35 V DC",
      "Sensor Break Detection": "Configurable Upscale (21.5 mA) or Downscale (3.6 mA)",
      "Operating Temperature": "-40°C to +85°C",
      "Mounting": "DIN Form B connection head mounting (screw holes 33mm pitch)"
    },
    features: [
      "Universal PC-programmable range via USB interface",
      "Complete electrical isolation protects SCADA / PLC cards",
      "Cold junction compensation (CJC) built-in for thermocouples",
      "Compact puck format fits inside standard explosion-proof heads"
    ],
    applications: [
      "Long-distance signal transmission without TC extension cable errors",
      "PLC and DCS temperature analog input modules",
      "Petrochemical tank farms and hazardous distillation plants",
      "Power generation distributed control systems"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "ATEX / PESO Compatible"],
    datasheet: "CARE-TT420-HeadMount-Transmitter-Datasheet.pdf"
  },
  {
    id: "electric-contact-thermometer",
    slug: "temperature-gauges",
    name: "Electric Contact Dial Thermometer & Gauges",
    partNumber: "CARE-TG-EC Series (Bimetallic / Gas Filled)",
    category: "temperature",
    categoryName: "Temperature Instruments",
    image: "assets/images/products/electric-contact-thermometer.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Dial bimetallic and nitrogen gas-filled thermometers with adjustable magnetic electric contacts for process alarm and trip control.",
    fullDescription: "Care Instruments manufactures high-precision industrial dial thermometers with magnetic snap-action electric contacts. In case the needle hits the upper or lower preset limits, contact is triggered to alarm operators or automatically shutdown heating systems.",
    keySpecs: [
      "Temperature Ranges: -50°C to +600°C",
      "Dial Sizes: 100mm (4\"), 150mm (6\")",
      "Accuracy: Class 1.0 (±1.0% F.S.)",
      "Contact Types: Magnetic snap-action SPST / SPDT (1 or 2 contacts)",
      "Capillary Option: Up to 15 meters flexible armored SS capillary"
    ],
    specifications: {
      "Model": "CARE-TG-EC Dial Thermometer",
      "Sensing Principle": "Inert nitrogen gas filled or bi-metal helix",
      "Dial Diameter": "100 mm (4\") / 150 mm (6\")",
      "Accuracy": "Class 1.0 according to EN 13190",
      "Contact Configuration": "Single (High), Double (High/Low), or Triple contact",
      "Contact Rating": "10 W / 18 VA, max. 250V AC/DC, 1.0A",
      "Stem Material": "Stainless Steel SS316 (6mm, 8mm, 10mm, 12mm)",
      "Process Fitting": "1/2\" BSP / NPT fixed or sliding union",
      "Protection": "IP65 Weatherproof stainless steel casing"
    },
    features: [
      "Direct stem mount or remote distance reading via capillary",
      "Magnetic assist contacts eliminate contact chatter under vibration",
      "Adjustable contact pointers on front glass without opening casing",
      "Liquid filled casing option (Silicone oil) for heavy vibration areas"
    ],
    applications: [
      "Power transformer winding and oil temperature indicators (OTI/WTI)",
      "Industrial autoclaves, vulcanizers, and vulcanization presses",
      "Diesel generators, marine cooling jackets, and turbines",
      "Distillation reboilers and pharmaceutical reactors"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-TG-Contact-Thermometer-Datasheet.pdf"
  },
  {
    id: "portable-ir-thermometer",
    slug: "infra-red-thermometer",
    name: "Non-Contact Infrared Thermometer Gun",
    partNumber: "CARE-IR-GUN-1000",
    category: "temperature",
    categoryName: "Temperature Instruments",
    image: "assets/images/products/portable-ir-thermometer.jpg",
    featured: false,
    rating: 4.7,
    shortDescription: "Heavy-duty industrial infrared pyrometer with dual laser aiming for rapid non-contact thermal inspection up to 1050°C.",
    fullDescription: "CARE-IR-GUN series provides instant surface temperature measurements of live electrical busbars, rotating shafts, molten glass, boilers, and hazardous moving equipment without physical contact. Features adjustable emissivity and ultra-fast 150ms response.",
    keySpecs: [
      "Temperature Range: -50°C to +1050°C (-58°F to 1922°F)",
      "Distance to Spot Ratio (D:S): 30:1 / 50:1 optical focus",
      "Emissivity: Digitally adjustable from 0.10 to 1.00",
      "Response Time: < 150 milliseconds",
      "Laser: Dual laser target sighting for spot definition"
    ],
    specifications: {
      "Model": "CARE-IR-GUN-1000",
      "Temperature Range": "-50°C to 1050°C (-58°F to 1922°F)",
      "Optical Resolution (D:S)": "30:1 (Optional 50:1 available)",
      "Accuracy": "±1.5% or ±1.5°C (whichever is greater)",
      "Spectral Response": "8 to 14 µm",
      "Display": "Backlit color LCD with Min, Max, Diff, Avg readings",
      "Alarm Functions": "Audible and visual High / Low limit alarms",
      "Power Source": "Standard 9V battery with auto power shutoff"
    },
    features: [
      "Safe measurement of high-voltage switchgear and hot moving parts",
      "Dual laser spots converge at the exact focal measurement distance",
      "Adjustable emissivity for shiny metals, ceramics, and rubber",
      "Supplied across Gujarat and all Indian industrial zones"
    ],
    applications: [
      "Electrical substation and panel hot-spot thermography",
      "Rotating bearings, gearboxes, and motor housing diagnostics",
      "Furnace outer shell and refractory insulation audits",
      "Rubber tyre curing and plastic extrusion profiling"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-IR-Thermometer-Gun-Datasheet.pdf"
  },

  // --- FLOW INSTRUMENTS ---
  {
    id: "digital-flow-meter",
    slug: "digital-flow-meter",
    name: "Electromagnetic & Digital Flow Meter",
    partNumber: "CARE-EMF-DIGITAL / Turbine Flow Series",
    category: "flow",
    categoryName: "Flow Instruments",
    image: "assets/images/products/digital-flow-meters.jpg",
    featured: true,
    rating: 5.0,
    shortDescription: "High-accuracy digital flow meter for conductive liquids, potable water, chemical slurries, and industrial wastewater.",
    fullDescription: "Care Instruments is a premier supplier and manufacturer of Digital Flow Meters in Ahmedabad, India. Designed as per international standards with PTFE / Hard Rubber lining, Hastelloy electrodes, low pressure loss, vacuum-sealed registers, and backlit flow totalizers.",
    keySpecs: [
      "Line Sizes: DN15 (1/2\") up to DN1200 (48\") flanged",
      "Accuracy: ±0.5% of reading (±0.2% optional)",
      "Velocity Range: 0.1 to 15 m/s bi-directional",
      "Outputs: 4-20 mA, Frequency/Pulse, RS485 Modbus RTU",
      "Power Supply: 230V AC, 24V DC, or Battery Operated (5 yr life)"
    ],
    specifications: {
      "Measurement Principle": "Faraday's Law of Electromagnetic Induction",
      "Nominal Diameters": "DN15 to DN1000 mm (1/2\" to 40\")",
      "Accuracy": "±0.5% of actual flow rate (±0.2% high accuracy)",
      "Conductivity Requirement": "> 5 µS/cm (water, acids, chemicals)",
      "Lining Material": "PTFE (Teflon), Hard Rubber, Neoprene, PFA",
      "Electrode Material": "SS316L, Hastelloy C, Titanium, Tantalum",
      "Process Pressure": "PN10, PN16, PN25, PN40, ANSI 150#, 300#",
      "Transmitter Unit": "Compact integral mount or Remote wall mount (up to 100m)",
      "Display": "Backlit LCD showing instantaneous flow rate & cumulative total",
      "Protection": "IP67 / IP68 submersible sensor option"
    },
    features: [
      "Supplied to prominent pharma & food giants (Coca Cola, Troikaa, Vadilal)",
      "No moving parts - zero pressure drop and maintenance-free design",
      "Battery-operated version available for remote canal and borewell sites",
      "Electromagnetic bi-directional measurement unaffected by viscosity"
    ],
    applications: [
      "Chemical dosing and corrosive acid/alkali flow lines",
      "Pharmaceutical clean water (WFI, DM, purified water systems)",
      "Dairy and beverage manufacturing (Vadilal, Coca Cola)",
      "Effluent treatment plants (ETP) and sewage flow monitoring"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Factory Calibration Test Bench"],
    datasheet: "CARE-EMF-Digital-Flow-Meter-Datasheet.pdf"
  },
  {
    id: "acrylic-rotameter",
    slug: "rotameter",
    name: "Variable Area Flow Meter (Acrylic / Glass Rotameter)",
    partNumber: "CARE-ROTA-ACR / Glass Tube Series",
    category: "flow",
    categoryName: "Flow Instruments",
    image: "assets/images/products/acrylic-rotameter.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Precision engineered acrylic block and borosilicate glass tube rotameters for direct visual reading of liquid and gas flow rates.",
    fullDescription: "Care Instruments manufactures acrylic block rotameters, glass tube rotameters, and metal tube rotameters. CNC-machined from single-piece clear acrylic blocks with calibrated direct reading scales, built-in needle valves, and corrosion-resistant end connections.",
    keySpecs: [
      "Flow Ranges: 0.1 LPH to 50,000 LPH (Water / Gases)",
      "Body Material: Solid transparent acrylic block or Borosilicate glass",
      "Wetted Parts: SS316, PTFE, or PVC",
      "Accuracy: ±2% of full scale",
      "Connections: 1/4\" to 3\" BSP / NPT / Flanged"
    ],
    specifications: {
      "Model": "CARE-ROTA-ACR Acrylic Block",
      "Measuring Media": "Liquids (water, oil, solvents) and Gases (air, N2, CO2)",
      "Accuracy": "±2% F.S. (Standard), ±1% F.S. (Calibrated)",
      "Maximum Pressure": "10 bar (150 psi) for acrylic, 20 bar for metal tube",
      "Maximum Temperature": "Acrylic: 70°C; Borosilicate Glass: 120°C; Metal: 250°C",
      "Float Material": "SS 316, PTFE (Teflon), PVC, Ceramic",
      "End Connections": "SS316, Brass, or Polypropylene (PP)",
      "Valve Option": "Integrated precision metering needle valve"
    },
    features: [
      "Solid shatterproof CNC-machined acrylic body with optical clarity",
      "Directly engraved permanent scale in LPH, LPM, GPM, or Nm³/hr",
      "Low pressure drop across float orifice",
      "Front panel mounting bezel available"
    ],
    applications: [
      "Water treatment plants (RO skids, demineralizers, softeners)",
      "Gas chromatography, sparging, and laboratory gas control",
      "Cooling water circuits on injection molding machines",
      "Chemical dosing pumps and fertilizer blending"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-Rotameter-Technical-Datasheet.pdf"
  },

  // --- LEVEL INSTRUMENTS ---
  {
    id: "level-indicator",
    slug: "level-indicator",
    name: "Float & Board Type Liquid Level Indicator",
    partNumber: "CARE-FBI-LEVEL Series",
    category: "level",
    categoryName: "Level Instruments",
    image: "assets/images/products/level-indicator.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Mechanical visual level gauge for large atmospheric non-pressurized storage tanks, oil reservoirs, and water reservoirs.",
    fullDescription: "Care Instruments Float and Board type level indicators are the trusted choice of Indian utilities (Torrent Power, Ammann Apollo) for non-pressurized underground and overhead storage tanks. Employs a large pointer counterweight running along an engraved aluminum gauge board.",
    keySpecs: [
      "Measuring Range: Up to 25 meters tank height",
      "Float: SS316 or Polypropylene (PP) magnetic/non-magnetic",
      "Gauge Board: 150mm wide white powder-coated aluminum",
      "Guide Wires: Dual SS316 tensioned guide wires",
      "Scale: Direct reading or reverse reading markings"
    ],
    specifications: {
      "Model": "CARE-FBI-150 Heavy Duty",
      "Tank Type": "Underground (UGT) or Overhead (OHT) storage tanks",
      "Maximum Height": "Up to 25 meters (customizable to tank depth)",
      "Float Assembly": "SS 316 / PTFE / PP (diameter 300 mm)",
      "Wire Rope": "SS 316 multi-strand flexible aircraft cable",
      "Pulley Housing": "Cast Aluminum / Cast SS with sealed stainless ball bearings",
      "Gauge Board": "Pure Aluminum 150 mm width with bold metric markings",
      "Specific Gravity": "Down to 0.7 g/cm³"
    },
    features: [
      "Simple, highly reliable operation without power supply requirements",
      "Supplied to power stations, bitumen plants, and water reservoirs",
      "Weather-sealed pulley assemblies prevent bird entry and dust jamming",
      "Optional 4-20mA continuous level transmitter attachment"
    ],
    applications: [
      "Raw water, treated water, and DM water bulk tanks",
      "Fuel oil, diesel, and furnace oil storage tanks (Torrent Power)",
      "Asphalt and bitumen tanks in highway construction (Ammann Apollo)",
      "Chemical storage tanks with PP/PTFE vapor seals"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-FBI-Level-Indicator-Datasheet.pdf"
  },
  {
    id: "side-mounted-level-switch",
    slug: "level-switch",
    name: "Side Mounted Magnetic Float Level Switch",
    partNumber: "CARE-SM-LS Series",
    category: "level",
    categoryName: "Level Instruments",
    image: "assets/images/products/side-mounted-level-switch.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Glandless magnetic level switch for high and low level alarm trip control in pressurized boilers and process tanks.",
    fullDescription: "CARE-SM-LS series utilizes a magnetic coupling principle to actuate a microswitch completely isolated from the process fluid. Because there is no mechanical gland packing, risk of tank leakage or seal degradation is entirely eliminated.",
    keySpecs: [
      "Mounting: Horizontal side flanged or threaded (screwed)",
      "Flange: 2\" to 4\" ANSI 150# / Table E / Table F SS316",
      "Switch Contacts: 1 x SPDT or 2 x SPDT microswitch",
      "Rating: 5A @ 250V AC / 0.5A @ 110V DC",
      "Operating Temp & Press: Up to 250°C and 25 bar"
    ],
    specifications: {
      "Model": "CARE-SM-LS Magnetic Level Switch",
      "Mounting Connection": "Square flange or ANSI 150# / 300# RF flange",
      "Wetted Material": "Stainless Steel SS 316 / SS 316L",
      "Switching Mechanism": "Glandless magnetic repelling actuation",
      "Switch Contacts": "Microswitch SPDT, 5A 250 VAC inductive",
      "Operating Temperature": "-40°C to +250°C",
      "Operating Pressure": "Up to 25 kg/cm²",
      "Minimum Liquid SG": "0.65 kg/dm³",
      "Enclosure": "Cast Aluminum IP66 weatherproof or Ex-d Flameproof"
    },
    features: [
      "Zero process leakage due to glandless magnetic repelling action",
      "Supplied to beverage leaders like Coca-Cola for syrup and water tanks",
      "Easy maintenance without draining the main tank vessel",
      "Available with test lever for operational testing under live pressure"
    ],
    applications: [
      "Steam boilers and condensate flash tanks",
      "Lube oil tanks on turbines and heavy diesel generators",
      "Beverage mixing and carbonation tanks (Coca-Cola)",
      "Chemical neutralization tanks and sumps"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Flameproof Ex-d Certified"],
    datasheet: "CARE-SM-Level-Switch-Datasheet.pdf"
  },
  {
    id: "level-controller",
    slug: "level-controller",
    name: "Automatic Water & Pump Level Controller",
    partNumber: "CARE-ALC-02 Pump Controller",
    category: "level",
    categoryName: "Level Instruments",
    image: "assets/images/products/level-controller.jpg",
    featured: false,
    rating: 4.9,
    shortDescription: "Conductive liquid level controller with dual drain/fill logic and dry-run submersible pump protection.",
    fullDescription: "CARE-ALC-02 is perfect to protect submersible and centrifugal pumps from dry running while simultaneously preventing tank overfilling. It incorporates automatic and manual start modes, adjustable sensitivity, and corrosion-proof stainless steel electrode sensors.",
    keySpecs: [
      "Operation: Auto / Manual drain and fill simultaneously",
      "Protection: Dry run trip & tank overflow cutoff",
      "Electrodes: 3 to 6 stainless steel probe sensors",
      "Relay Output: 2 x 10A @ 230V AC potential-free contacts",
      "Sensitivity: Field adjustable 1kΩ to 100kΩ"
    ],
    specifications: {
      "Model": "CARE-ALC-02 Industrial Controller",
      "Input Supply": "230 V AC ±15%, 50/60 Hz",
      "Sensor Type": "Conductivity electrode probes (SS316 wetted)",
      "Sensitivity Adjustment": "Potentiometer 2 kΩ to 100 kΩ for pure/raw water",
      "Outputs": "Relay contact 10A 250V AC (Resistive)",
      "Status Indications": "LEDs for Power, Pump Run, High Level, Dry Run",
      "Housing": "DIN rail 35mm mount / Wall mounting enclosure",
      "Safety Voltage to Probes": "< 12 V AC (prevents electrolysis & corrosion)"
    },
    features: [
      "Protects expensive submersible pumps against dry run burnouts",
      "Enables maximum utilization of incoming municipal/borewell water",
      "Corrosion-resistant and shockproof probe sensors",
      "Overfilling and drainage logic in one compact enclosure"
    ],
    applications: [
      "Commercial buildings and industrial water treatment plants",
      "Deep borewell pump automation",
      "Cooling tower sump basin level management",
      "Effluent pit dewatering and sump pump control"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-ALC02-Level-Controller-Datasheet.pdf"
  },

  // --- DIGITAL INDICATORS & CONTROLLERS ---
  {
    id: "process-indicator-controller",
    slug: "process-indictor-controller",
    name: "Microcontroller Process Indicator & Controller",
    partNumber: "CARE-DPC-0196-INDICATOR / CONTROLLER",
    category: "controllers",
    categoryName: "Indicators & Controllers",
    image: "assets/images/products/process-indicator-controller.jpg",
    featured: true,
    rating: 5.0,
    shortDescription: "Universal input microcontroller-based dual display process controller for current, voltage, RTD, and thermocouple loops.",
    fullDescription: "Part No. CARE-DPC-0196 is a flagship microprocessor controller designed and manufactured by Care Process Instruments. Features selectable inputs (4-20mA, 0-10V, 0-20mA), dual 4-digit displays (Upper 0.56\" Red Process Value, Lower 0.39\" Green Set Value), and precise programmable calibration.",
    keySpecs: [
      "Part Number: CARE-DPC-0196-INDICATOR/CONTROLLER",
      "Display: Dual 4-Digit (Upper 0.56\" Red PV, Lower 0.39\" Green SV)",
      "Input: Selectable 4-20mA / 0-10V / 0-20mA / RTD",
      "Range: -999 to 9999 programmable range & decimal",
      "Relay Outputs: 2 Relays (5A) for Alarm/Control, retransmission 4-20mA",
      "Dimensions: Panel Cutout 92 x 92 mm (Bezel 96 x 96 mm)"
    ],
    specifications: {
      "Part Number": "CARE-DPC-0196-INDICATOR/CONTROLLER",
      "Architecture": "Microcontroller Based, Dual Display System",
      "Display Upper": "4-Digit 0.56\" RED 7-Segment LED (Process Value)",
      "Display Lower": "4-Digit 0.39\" GREEN 7-Segment LED (Set Value)",
      "Input Signals": "4-20 mA DC / 0-10 V DC / 0-20 mA DC (selectable)",
      "Scalable Range": "-999 to 9999 with configurable decimal point",
      "Measurement Accuracy": "±0.1% of span ±1 digit",
      "Auxiliary Power Supply": "230 V AC ± 10%, 50 Hz (SMPS option 90-260V AC)",
      "Transmitter Power Supply": "24 V DC @ 30 mA built-in to power loop transmitters",
      "Control Outputs": "Up to 2 Relays rated 5A @ 230V AC",
      "Panel Cutout Dimensions": "92 mm x 92 mm (Bezel: 96 mm x 96 mm x 85 mm depth)"
    },
    features: [
      "Direct calibration points can be set with extreme precision",
      "Dual bright LED displays visible from wide viewing angles",
      "Housed in sturdy flame-retardant compact ABS panel enclosure",
      "Built-in 24V DC loop power supply eliminates external power blocks"
    ],
    applications: [
      "Pressure, flow, level, and temperature process loops",
      "Chemical dosing and reactor monitoring",
      "Plastic extrusion, drying hoppers, and ovens",
      "Water treatment automation and SCADA input conditioning"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "Calibration Traceability"],
    datasheet: "CARE-DPC0196-Process-Controller-Datasheet.pdf"
  },
  {
    id: "large-display-indicator",
    slug: "large-display-indictor-controller",
    name: "Jumbo Large Display Process Indicator",
    partNumber: "CARE-CPI-44- LARGE INDICATOR / CONTROLLER",
    category: "controllers",
    categoryName: "Indicators & Controllers",
    image: "assets/images/products/large-display-indicator.jpg",
    featured: false,
    rating: 4.9,
    shortDescription: "High-visibility large format 2\" or 4\" LED digit display for factory shop floors, crane cabs, and control room walls.",
    fullDescription: "CARE-CPI-44 provides crystal clear long-distance readability across factory halls up to 50 meters away. Accepts standard current and voltage inputs with full -999 to 9999 scalable range, universal SMPS power supply (100V-250V AC), and optional 24Vdc pulse input.",
    keySpecs: [
      "Digit Height: 2\" (50mm) or 4\" (100mm) ultra-bright Red LEDs",
      "Readability: Readable from 25 to 60 meters distance",
      "Inputs: 0-10V DC, 0-20 mA, 4-20 mA (selectable), Pulse",
      "Scale Range: -999 to 9999 with selectable decimal points",
      "Power Supply: 100V - 250V AC (SMPS power pack)"
    ],
    specifications: {
      "Part Number": "CARE-CPI-44-LARGE INDICATOR/CONTROLLER",
      "Display Type": "4-Digit, 7-Segment Ultra-bright RED LED",
      "Digit Size": "2.3\" or 4.0\" (custom sizes up to 8\" available)",
      "Input Options": "0-10V DC, 0-20 mA DC, 4-20 mA DC (selectable)",
      "Digital/Pulse Input": "Optional 24 Vdc pulse for flow totalizers/tachometer",
      "Scalable Range": "-999 to 9999 (all digits programmable)",
      "Power Supply": "Universal 100V - 250V AC, 50/60 Hz (SMPS)",
      "Enclosure": "Rugged MS powder-coated wall/hanging industrial cabinet",
      "Protection": "Front IP54 / IP65 weatherhood option"
    },
    features: [
      "Exceptional visibility across warehouse and plant shop floors",
      "Universal wide-range power supply withstands voltage fluctuations",
      "Wall mounting brackets and ceiling hanging eye-bolts included",
      "RS-485 Modbus slave capability for repeater display"
    ],
    applications: [
      "Crane bay load monitoring and weighbridges",
      "Temperature display in steel mills and furnace bays",
      "Speed / RPM display on assembly lines and rolling mills",
      "Plant effluent flow rate and cumulative total display"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-CPI44-Large-Display-Datasheet.pdf"
  },
  {
    id: "flameproof-temperature-indicator",
    slug: "flame-proof-indictor",
    name: "Flameproof Explosion-Proof Temperature Indicator",
    partNumber: "CARE-FLP-IND Series (Ex-d Certified)",
    category: "controllers",
    categoryName: "Indicators & Controllers",
    image: "assets/images/products/flameproof-temperature-indicator.jpg",
    featured: false,
    rating: 4.9,
    shortDescription: "Certified flameproof temperature and process indicator housed in heavy-duty cast aluminum enclosure for hazardous zones.",
    fullDescription: "CARE-FLP-IND is engineered for explosive gas atmospheres (Zone 1, Zone 2, Gas groups IIA, IIB, IIC). Features a 3.5 digit bright LED display behind a toughened glass viewing window, delivering accuracy better than ±1% with 230V AC supply.",
    keySpecs: [
      "Hazardous Area: Zone 1, Zone 2, Gas Groups IIA, IIB, IIC",
      "Display: 3.5 Digit high efficiency Red LED",
      "Accuracy: Better than ±1% of full scale",
      "Power Supply: 230 Volts A.C., 10 VA",
      "Enclosure: Heavy-duty cast aluminum alloy LM6"
    ],
    specifications: {
      "Model": "CARE-FLP-IND Flameproof Indicator",
      "Certification": "Ex-d IIC T6 Gb (Zone 1 & Zone 2)",
      "Display": "3.5 Digit 0.56\" Red 7-Segment LED",
      "Temperature Range": "Selectable as per sensor input (RTD / TC)",
      "Accuracy": "Better than ±1.0% of full scale",
      "Operating Supply": "230 Volts AC ±10%, 50 Hz, 10 VA",
      "Enclosure Material": "Cast Aluminum Alloy LM6 with epoxy powder coating",
      "Glass Window": "Toughened thermal shock resistant borosilicate glass",
      "Cable Entries": "Dual 3/4\" or 1/2\" NPT / ET flameproof cable glands"
    },
    features: [
      "Certified explosion-proof for oil refineries and chemical plants",
      "Toughened scratch-resistant viewing window",
      "External keypad / magnetic wand programming without opening housing",
      "Integrates with RTD, thermocouple, or 4-20mA hazardous loop transmitters"
    ],
    applications: [
      "Oil and gas refineries, offshore platforms, and tank farms",
      "Bulk chemical synthesis and paint manufacturing plants",
      "Solvent storage facilities and pesticide plants",
      "LPG/CNG bottling plants and gas compressor stations"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "PESO / CIMFR Flameproof Certified"],
    datasheet: "CARE-FLP-Flameproof-Indicator-Datasheet.pdf"
  },
  {
    id: "digital-temp-indicator-controller",
    slug: "digital-temp-controller-indicator",
    name: "Digital Temperature Indicator & PID Controller",
    partNumber: "CARE-DTI-4896 / PID Series",
    category: "controllers",
    categoryName: "Indicators & Controllers",
    image: "assets/images/products/digital-temp-indicator-controller.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Precision digital temperature indicator and PID controller with universal sensor inputs and auto-tuning algorithm.",
    fullDescription: "Care Instruments DTI series provides accurate temperature monitoring and intelligent PID / ON-OFF heating control. Compatible with Pt100 RTD and J/K/R/S thermocouples, with SSR drive output or heavy-duty relay output.",
    keySpecs: [
      "Input: Pt100 RTD, Thermocouple J, K, R, S selectable",
      "Display: 4-digit high brightness LED display",
      "Control: PID with Auto-tuning or ON/OFF mode",
      "Output: Relay (10A) or SSR 12V DC pulse output",
      "Sizes: 48x48 mm, 72x72 mm, 96x96 mm DIN standard"
    ],
    specifications: {
      "Model": "CARE-DTI-PID Series",
      "Input Sensor": "RTD Pt100, Thermocouple (J, K, R, S) user selectable",
      "Temperature Range": "-100°C to +1300°C (depending on sensor type)",
      "Accuracy": "±0.25% of full scale ±1 count",
      "Sampling Rate": "4 samples per second",
      "Control Action": "PID with fuzzy logic auto-tune or ON/OFF with hysteresis",
      "Outputs": "Relay 10A @ 250V AC or SSR drive (12V DC 30mA)",
      "Supply Voltage": "90 to 260 V AC, 50/60 Hz",
      "Bezel Dimensions": "48 x 48 mm, 96 x 48 mm, or 96 x 96 mm"
    },
    features: [
      "Fuzzy logic assisted PID algorithm minimizes overshoot",
      "Universal sensor selection from menu without hardware jumpers",
      "Dual alarm settings with independent delay timers",
      "Widely installed across plastic machinery and pharmaceutical ovens"
    ],
    applications: [
      "Plastic injection molding and blow molding machines",
      "Packaging, sealing, and blister packing machinery",
      "Industrial laboratory autoclaves and drying ovens",
      "Environmental test chambers and water baths"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-DTI-Temperature-Controller-Datasheet.pdf"
  },

  // --- DATA LOGGERS & RECORDERS ---
  {
    id: "paperless-recorder",
    slug: "paperless-recorder-2",
    name: "Brainchild PR Series Paperless Recorders",
    partNumber: "CARE-Brainchild-PR Series (PR10 / PR20 / PR30)",
    category: "dataloggers",
    categoryName: "Data Loggers & Recorders",
    image: "assets/images/products/paperless-recorder.jpg",
    featured: true,
    rating: 5.0,
    shortDescription: "High-end touchscreen paperless graphic recorders with FDA 21 CFR Part 11 compliance, 100 msec sampling rate, and Ethernet SCADA connectivity.",
    fullDescription: "Care Instruments is a leading authorized partner for Brainchild Paperless Recorders in India. The PR series includes the low-cost PR10 (4.3\"), the popular PR20 (5.6\"), and the flagship PR30 (12.1\" display). Featuring 100 msec sampling rate, external channels, batch management, custom display graphics, and strict FDA 21 CFR Part 11 audit trails for regulated pharmaceutical and food plants.",
    keySpecs: [
      "Part Series: CARE-Brainchild-PR10 / PR20 / PR30",
      "Displays: 4.3\", 5.6\", and 12.1\" high-resolution Color Touchscreens",
      "Sampling Rate: Ultra-fast 100 milliseconds per channel",
      "Channels: Up to 48 analog input channels + external channels",
      "Compliance: Strict FDA 21 CFR Part 11 electronic records & signatures",
      "Communication: Ethernet (TCP/IP), RS-485 Modbus, USB Host & Client"
    ],
    specifications: {
      "Series": "CARE-Brainchild-PR Series",
      "Models Available": "PR10 (4.3\"), PR20 (5.6\"), PR30 (12.1\") Touchscreen",
      "Input Channels": "3 to 48 universal isolated analog channels",
      "Input Types": "Universal: Pt100, Thermocouple (14 types), 4-20mA, 0-10V, mV",
      "Sampling Rate": "100 msec for all channels",
      "Internal Memory": "256 MB Flash memory with SD card & USB expansion",
      "Data Security": "FDA 21 CFR Part 11 compliant: multilevel passwords, audit trails",
      "Communication": "Standard Ethernet (Modbus TCP, Web Server), RS-232/485",
      "Protection Class": "Front panel IP65 / NEMA 4X waterproof",
      "Math Functions": "F0 sterilization calculation, math channels, Boolean logic"
    },
    features: [
      "Supplied to prominent pharma giants across India for FDA audit readiness",
      "Interactive trend curves, bar graphs, circular charts, and custom mimic displays",
      "Automated email alerts, PDF report generation, and historical data retrieval",
      "Eliminates chart paper, pens, and mechanical recorder maintenance"
    ],
    applications: [
      "Pharmaceutical autoclaves, lyophilizers, and sterilizers (FDA 21 CFR Part 11)",
      "Heat treatment furnaces (AMS2750 aerospace standard pyrometry)",
      "Dairy pasteurization, cold storage, and fermentation plants",
      "Power plant monitoring, emissions tracking, and boiler validation"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "FDA 21 CFR Part 11", "RoHS"],
    datasheet: "CARE-Brainchild-PR-Paperless-Recorder-Datasheet.pdf"
  },
  {
    id: "portable-data-logger",
    slug: "potable-data-logger",
    name: "Portable Temperature & Humidity Data Logger",
    partNumber: "CARE-LOG-TH29K",
    category: "dataloggers",
    categoryName: "Data Loggers & Recorders",
    image: "assets/images/products/portable-data-logger.jpg",
    featured: false,
    rating: 4.9,
    shortDescription: "Compact standalone data logger with internal sensors, 29,000 readings memory, and automatic PDF/Excel report export.",
    fullDescription: "Humidity & Temperature measurement is critical wherever temperature-sensitive products are produced, stored, or transported. CARE-LOG-TH29K provides high accuracy (±0.3°C, ±3% RH), programmable recording intervals, and start delay up to 60 minutes in a pocket-sized 56x67x20 mm format.",
    keySpecs: [
      "Sensor Range: Temp: -30°C to +70°C; Humidity: 0 to 100% RH",
      "Accuracy: Temp: ±0.3°C; Humidity: ±3% RH",
      "Resolution: Temp: 0.1°C; Humidity: 0.1% RH",
      "Memory Capacity: 29,000 measurements",
      "Sample Rate: 1 Min to 4 Hours programmable",
      "Dimensions: 56 x 67 x 20 mm compact pocket casing"
    ],
    specifications: {
      "Model": "CARE-LOG-TH29K Portable",
      "Temperature Range": "-30°C to +70°C (-22°F to +158°F)",
      "Humidity Range": "0% to 100% RH",
      "Temperature Accuracy": "±0.3°C (between -20°C to +40°C)",
      "Humidity Accuracy": "±3% RH (between 20% to 80% RH)",
      "Resolution": "0.1°C / 0.1% RH",
      "Storage Capacity": "29,000 data point pairs",
      "Sampling Interval": "Configurable from 1 minute to 4 hours",
      "Start Delay": "Programmable from 0 min to 60 min",
      "Battery Life": "Up to 1 year with replaceable 3V CR2450 lithium cell",
      "Dimensions (L x W x H)": "56 mm x 67 mm x 20 mm (Weight: ~50g)"
    },
    features: [
      "Supplied to Adani and pharmaceutical logistics cold chain networks",
      "Direct USB connection generates automated PDF summary graph report",
      "Large LCD display shows real-time readings, Max/Min, and battery state",
      "Programmable high and low alarm thresholds with LED flash indicator"
    ],
    applications: [
      "Vaccine and blood bank temperature transport",
      "Pharmaceutical cleanroom mapping and stability chambers (Adani, Alembic)",
      "Refrigerated containers (reefers) and food distribution vans",
      "HVAC seasonal commissioning audits and museum storage"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "EN 12830 Cold Chain Standard"],
    datasheet: "CARE-Portable-Data-Logger-Datasheet.pdf"
  },
  {
    id: "online-temperature-data-logger",
    slug: "online-data-logger",
    name: "Multi-Channel Online Temperature Data Logger (8/16 Ch)",
    partNumber: "CARE-ONLOG-8/16 Universal Series",
    category: "dataloggers",
    categoryName: "Data Loggers & Recorders",
    image: "assets/images/products/online-temperature-data-logger.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Continuous multi-channel temperature data logger with 8 or 16 universal inputs and direct USB flash drive data logging.",
    fullDescription: "CARE-ONLOG series continuously measures multiple temperature points across production lines. Features 8 or 16 universal configurable channels for RTD and thermocouples, records directly to commercial USB Pen Drives, and communicates via RS-485 Modbus.",
    keySpecs: [
      "Channels: 8 Channel / 16 Channel universal inputs",
      "Inputs: RTD Pt100, Thermocouples (J, K, T, R, S) customizable",
      "Accuracy: Temperature ±0.5% of span",
      "Resolution: 0.1°C",
      "Storage: Direct continuous logging onto standard USB Pen Drive",
      "Record Interval: Programmable from 1 minute to 24 hours"
    ],
    specifications: {
      "Model": "CARE-ONLOG-8/16 Multi-Channel",
      "Number of Channels": "8 Channels or 16 Channels (Universal Isolated)",
      "Input Sensor Types": "RTD Pt100 (3-wire), Thermocouple Type J, K, T, E, R, S",
      "Measurement Accuracy": "±0.5% of Full Scale ±1 digit",
      "Temperature Resolution": "0.1°C across all channels",
      "Logging Media": "Direct storage to standard USB Pen Drive (FAT32)",
      "Logging Interval": "1 min to 24 hours selectable per channel",
      "Display": "16x2 Backlit LCD or Graphical Matrix display",
      "Serial Interface": "RS-485 with Modbus RTU protocol for PC software",
      "Power Supply": "230 V AC ±10%, 50 Hz"
    },
    features: [
      "Continuous long-term recording directly into Excel-readable CSV files",
      "No specialized software needed - pull pen drive and open on any PC",
      "Independent high and low alarm settings per channel",
      "Galvanic channel-to-channel isolation prevents ground loop interference"
    ],
    applications: [
      "Furnace temperature uniformity surveys (TUS)",
      "Transformer heat run testing and winding thermal audits",
      "Rubber curing autoclaves and vulcanization presses",
      "Food drying tunnels and cold storage warehouses"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-Online-Data-Logger-Datasheet.pdf"
  },
  {
    id: "usb-single-multiuse-data-logger",
    slug: "usb-single-multiuse-data-logger",
    name: "USB Single-Use & Multi-Use Cold Chain Data Logger",
    partNumber: "CARE-Elitech-RC5 Series",
    category: "dataloggers",
    categoryName: "Data Loggers & Recorders",
    image: "assets/images/products/usb-data-logger.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Ultra-compact USB plug-and-play temperature data logger for global cold chain logistics, vaccines, and perishable export cargo.",
    fullDescription: "PART NO. CARE-Elitech-RC5 is universally recognized for pharmaceutical export shipments and fresh food transit. Plugs directly into any computer's USB port without drivers to export encrypted PDF and Excel reports.",
    keySpecs: [
      "Part Number: CARE-Elitech-RC5",
      "Temperature Range: -30°C to +70°C (-22°F to +158°F)",
      "Accuracy: ±0.5°C (-20°C to +40°C), ±1.0°C elsewhere",
      "Resolution: 0.1°C",
      "Memory Capacity: 32,000 points maximum",
      "Record Interval: 10 sec to 24 hr programmable",
      "Start Delay: 0 to 60 minutes"
    ],
    specifications: {
      "Part Number": "CARE-Elitech-RC5 USB Logger",
      "Temperature Range": "-30°C to 70°C (-22°F to 158°F)",
      "Temperature Accuracy": "±0.5°C (-20°C to +40°C); ±1.0°C (other ranges)",
      "Resolution": "0.1°C",
      "Data Storage": "32,000 data points (MAX)",
      "Logging Interval": "Programmable: 10 seconds to 24 hours",
      "Start Delay": "Programmable: 0 min to 60 min",
      "Waterproof Rating": "IP67 waterproof casing with rubber USB cap",
      "Battery": "Replaceable CR2032 button cell (up to 12 months life)"
    },
    features: [
      "Plug & play USB interface requires zero cables or interface cradles",
      "Generates unalterable PDF reports instantly upon plugging in",
      "Wide cold chain deployment across air freight and maritime reefer cargo",
      "Compact lightweight design fits inside pharmaceutical packaging cartons"
    ],
    applications: [
      "Pharmaceutical export shipments and biologic transport",
      "Vaccine cold chain distribution (WHO PQS compliant)",
      "Export of fresh seafood, meat, fruits, and dairy products",
      "Chemical reagent and laboratory sample transit"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant", "FDA 21 CFR Part 11 compliant format"],
    datasheet: "CARE-Elitech-RC5-USB-Logger-Datasheet.pdf"
  },

  // --- PORTABLE & HANDHELD TEST INSTRUMENTS ---
  {
    id: "hot-wire-anemometer",
    slug: "portable-handheld-instruments",
    name: "Hot-Wire & Vane Type Digital Anemometer",
    partNumber: "CARE-HWA-900 / Vane Series",
    category: "portable",
    categoryName: "Portable & Handheld",
    image: "assets/images/products/hot-wire-anemometer.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Telescopic hot-wire probe anemometer for precise measurement of low air velocities in ventilation ducts and cleanrooms.",
    fullDescription: "CARE-HWA-900 combines a high-precision glass bead thermistor hot-wire sensor with a telescopic antenna probe extending up to 1 meter. Perfect for balancing HVAC grilles, laminar flow velocity audits, and aerodynamic research.",
    keySpecs: [
      "Velocity Range: 0.1 to 25.0 m/s (20 to 4920 ft/min)",
      "Temperature Range: 0°C to 50°C (32°F to 122°F)",
      "Telescopic Probe: Extends up to 1000 mm for deep duct reach",
      "Functions: Air Velocity, Air Flow (CFM/CMM), Ambient Temp",
      "Memory: Data hold, Max/Min, 999 point recall"
    ],
    specifications: {
      "Model": "CARE-HWA-900 Telescopic Anemometer",
      "Velocity Units": "m/s, km/h, ft/min, knots, mph",
      "Measuring Range": "0.1 to 25.0 m/s (resolution 0.01 m/s)",
      "Air Flow Range": "0 to 999,900 CMM / CFM (with duct area entry)",
      "Accuracy": "±3% of reading + 0.1 m/s",
      "Temperature Sensor": "Precision thermistor 0°C to 50°C (±1.0°C)",
      "Probe Diameter": "Slim 12 mm probe head for small test ports",
      "Display": "Dual backlit multifunction LCD display"
    },
    features: [
      "Slim telescopic probe reaches inside ventilation test ports with ease",
      "Instant volumetric flow rate calculation (CFM/CMM) by entering duct cross-section",
      "Ideal for cleanroom biosafety cabinets and laminar airflow hoods",
      "Includes hard carrying case and factory calibration certificate"
    ],
    applications: [
      "HVAC commissioning, air balancing, and duct diagnostics",
      "Cleanroom HEPA filter face velocity testing",
      "Paint spray booth ventilation compliance audits",
      "Fume exhaust hood certified testing in pharmaceutical labs"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-HotWire-Anemometer-Datasheet.pdf"
  },
  {
    id: "sound-level-meter",
    slug: "sound-meter",
    name: "Digital Sound Level Meter (Decibel Meter)",
    partNumber: "CARE-SLM-1350 Class 2",
    category: "portable",
    categoryName: "Portable & Handheld",
    image: "assets/images/products/sound-level-meter.jpg",
    featured: false,
    rating: 4.7,
    shortDescription: "Precision acoustic sound level meter with A/C frequency weighting and Fast/Slow time weighting for occupational noise audits.",
    fullDescription: "CARE-SLM-1350 is built according to IEC 61672 Class 2 sound level standards. Designed for industrial plant noise surveys, environmental acoustic compliance, and OSHA workplace occupational hearing safety audits.",
    keySpecs: [
      "Measuring Range: 30 to 130 dBA (35 to 130 dBC)",
      "Accuracy: ±1.5 dB (under reference 94 dB @ 1 kHz)",
      "Weighting: A and C frequency weighting filters",
      "Time Weighting: FAST (125 ms) and SLOW (1 sec)",
      "Microphone: 1/2 inch prepolarized condenser microphone"
    ],
    specifications: {
      "Standards": "IEC 61672 Class 2 / ANSI S1.4 Type 2",
      "Measuring Range": "30 to 130 dB across 3 ranges (Low, Med, High)",
      "Resolution": "0.1 dB with fast quasi-analog bar graph",
      "Frequency Range": "31.5 Hz to 8.5 kHz",
      "AC/DC Output": "AC: 0.707 Vrms, DC: 10 mV/dB for data acquisition",
      "Maximum Hold": "Peak/Max hold capture function",
      "Windscreen": "High-density polyurethane foam wind ball included"
    },
    features: [
      "Essential for factory inspectorate and environmental noise compliance",
      "Fast response captures sudden impact noise spikes; slow response averages steady noise",
      "Supplied with tripod mount socket and rugged carry case",
      "Long battery operation up to 30 hours"
    ],
    applications: [
      "Factory machinery noise emission audits",
      "Pollution Control Board (PCB) environmental boundary tests",
      "Acoustic noise dampening verification in auditoriums and generator rooms",
      "Occupational hygiene hearing protection programs"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-Sound-Meter-Datasheet.pdf"
  },
  {
    id: "lux-meter",
    slug: "lux-meter",
    name: "Precision Digital Lux & Illuminance Meter",
    partNumber: "CARE-LUX-200K Series",
    category: "portable",
    categoryName: "Portable & Handheld",
    image: "assets/images/products/lux-meter.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Cosine-corrected illuminance photometer for lighting audits in factories, cleanrooms, and office spaces.",
    fullDescription: "CARE-LUX-200K provides wide range light measurement up to 200,000 Lux with precision silicon photodiode and spectral response filter matching standard human eye CIE photopic curve.",
    keySpecs: [
      "Measuring Range: 0.1 to 200,000 Lux / 0.01 to 20,000 Foot-candles",
      "Accuracy: ±3% of reading + 0.5% F.S.",
      "Sensor: Silicon photodiode with color correction filter",
      "Sampling Rate: 2.0 times per second",
      "Cable: Coiled sensor cord extends up to 1.5 meters"
    ],
    specifications: {
      "Model": "CARE-LUX-200K Photometer",
      "Measuring Units": "Lux (lx) and Foot-Candles (fc) selectable",
      "Measuring Ranges": "200, 2000, 20000, 200000 Lux (4 auto-ranges)",
      "Spectral Sensitivity": "CIE photopic curve V(λ)",
      "Cosine Correction": "Angled incident light cosine error < 2%",
      "Functions": "Data Hold, Peak Hold, Relative Zero, Max/Min",
      "Power": "9V battery with low battery warning"
    },
    features: [
      "Detachable sensor on spiral cord enables measurement at any angle",
      "Ensures OSHA and factory illumination level compliance",
      "Protective lens cover shields photodiode during transport",
      "High sensitivity down to 0.1 Lux for emergency lighting verification"
    ],
    applications: [
      "Cleanroom inspection table illumination audits",
      "Office, warehouse, and factory floor lighting optimization",
      "Architectural lighting and LED retrofits",
      "Greenhouse crop grow lighting measurement"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-Lux-Meter-Datasheet.pdf"
  },
  {
    id: "rpm-tachometer",
    slug: "rpm-tachometer",
    name: "Digital Contact & Laser Tachometer (RPM Meter)",
    partNumber: "CARE-RPM-6236 Combo Series",
    category: "portable",
    categoryName: "Portable & Handheld",
    image: "assets/images/products/rpm-tachometer.jpg",
    featured: false,
    rating: 4.8,
    shortDescription: "Dual contact and non-contact laser optical tachometer for measuring rotational RPM and linear surface belt speed.",
    fullDescription: "CARE-RPM-6236 combines high-speed laser optical detection with contact adapters for surface speed measurement (m/min, ft/min). Measures up to 99,999 RPM with crystal oscillator time base and 0.05% accuracy.",
    keySpecs: [
      "Laser Non-Contact: 2.5 to 99,999 RPM (sensing distance 50-500mm)",
      "Contact Measurement: 0.5 to 19,999 RPM",
      "Surface Speed: 0.05 to 1,999.9 m/min",
      "Accuracy: ±(0.05% + 1 digit)",
      "Memory: Automatic storage of Last, Max, and Min values"
    ],
    specifications: {
      "Model": "CARE-RPM-6236 Dual Function",
      "Non-contact Range": "2.5 to 99,999 RPM",
      "Contact Range": "0.5 to 19,999 RPM",
      "Surface Velocity": "0.05 to 1,999.9 m/min; 0.2 to 6,560 ft/min",
      "Measuring Distance": "50 mm to 500 mm with reflective laser target tape",
      "Sampling Rate": "0.8 seconds (over 60 RPM)",
      "Time Base": "High stability 4.194 MHz quartz crystal",
      "Accessories": "Reflective tape strips, contact cone tips, surface speed wheel"
    },
    features: [
      "Safe measurement of high-speed shafts from up to 500 mm distance",
      "Surface speed wheel measures conveyor belts and wire drawing feeds",
      "Rugged ergonomic housing with slip-resistant grip",
      "Supplied with full accessory kit and protective carry case"
    ],
    applications: [
      "Electric motors, diesel engines, and gearboxes",
      "Pumps, fans, blowers, and compressor pulleys",
      "Paper mill rollers, printing presses, and conveyor belts",
      "Textile spinning and winding machine calibration"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-RPM-Tachometer-Datasheet.pdf"
  },
  {
    id: "portable-ph-tds-meter",
    slug: "portable-ph-tds-meter",
    name: "Portable Waterproof pH / TDS / Conductivity Meter",
    partNumber: "CARE-PH-TDS Multi-Param",
    category: "portable",
    categoryName: "Portable & Handheld",
    image: "assets/images/products/portable-ph-tds-meter.jpg",
    featured: false,
    rating: 4.7,
    shortDescription: "Waterproof field tester for pH, Total Dissolved Solids (TDS), Electrical Conductivity (EC), and fluid temperature.",
    fullDescription: "CARE-PH-TDS delivers multi-parameter water quality testing in one rugged IP67 handheld instrument. Equipped with automatic temperature compensation (ATC) and multi-point calibration buffers for reliable industrial field testing.",
    keySpecs: [
      "pH Range: 0.00 to 14.00 pH (Resolution 0.01 pH)",
      "TDS Range: 0 to 9990 ppm / 0 to 10.00 ppt",
      "EC Range: 0 to 9990 µS/cm / 0 to 20.00 mS/cm",
      "Temperature: 0.0°C to 60.0°C (32.0°F to 140.0°F)",
      "Compensation: Automatic Temperature Compensation (ATC)"
    ],
    specifications: {
      "Model": "CARE-PH-TDS Multi-Param Meter",
      "pH Range": "0.00 to 14.00 pH (Accuracy: ±0.05 pH)",
      "Conductivity (EC)": "0 to 1999 µS/cm, 2.00 to 19.99 mS/cm (±2% F.S.)",
      "TDS Range": "0 to 9990 ppm, 10.0 to 19.99 ppt",
      "Temperature Range": "0°C to 60°C (32°F to 140°F)",
      "Calibration": "Automatic 3-point pH (4.01, 7.00, 10.01)",
      "Protection": "IP67 waterproof and floatable casing",
      "Electrode": "Replaceable glass bulb combination sensor"
    },
    features: [
      "Simultaneous dual display of water quality parameter and temperature",
      "Replaceable electrode cartridge extends instrument lifespan",
      "Automatic buffer recognition during calibration routines",
      "Widely used in water treatment, RO skids, and textile wet processing"
    ],
    applications: [
      "Reverse Osmosis (RO) plants and water purifiers",
      "Boiler feedwater and cooling tower blowdown analysis",
      "Industrial wastewater effluent treatment plants (ETP)",
      "Aquaculture, hydroponics, and chemical mixing tanks"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant"],
    datasheet: "CARE-PH-TDS-Meter-Datasheet.pdf"
  }
];

// Product Category Metadata for Faceting & Filtering
const PRODUCT_CATEGORIES = [
  {
    id: "all",
    name: "All Products",
    count: PRODUCTS_DATABASE.length,
    description: "Browse our complete catalog of industrial grade measurement and control instrumentation."
  },
  {
    id: "hvac",
    name: "HVAC / Humidity / BMS",
    count: PRODUCTS_DATABASE.filter(p => p.category === "hvac").length,
    description: "Relative humidity, air velocity, dew point, and CO2 transmitters for cleanrooms and automated building management.",
    icon: "wind"
  },
  {
    id: "pressure",
    name: "Pressure Instruments",
    count: PRODUCTS_DATABASE.filter(p => p.category === "pressure").length,
    description: "Stainless steel Bourdon gauges, differential pressure manometers, Magnehelic cleanroom gauges, and pressure switches.",
    icon: "gauge"
  },
  {
    id: "temperature",
    name: "Temperature Instruments",
    count: PRODUCTS_DATABASE.filter(p => p.category === "temperature").length,
    description: "RTD Pt100 sensors, industrial thermocouples, contact dial thermometers, head transmitters, and infrared pyrometers.",
    icon: "thermometer"
  },
  {
    id: "flow",
    name: "Flow Instruments",
    count: PRODUCTS_DATABASE.filter(p => p.category === "flow").length,
    description: "Electromagnetic flow meters, digital flow totalizers, acrylic rotameters, and glass tube variable area meters.",
    icon: "waves"
  },
  {
    id: "level",
    name: "Level Instruments",
    count: PRODUCTS_DATABASE.filter(p => p.category === "level").length,
    description: "Float and board visual indicators, magnetic level switches, and pump dry-run protection controllers.",
    icon: "layers"
  },
  {
    id: "controllers",
    name: "Indicators & Controllers",
    count: PRODUCTS_DATABASE.filter(p => p.category === "controllers").length,
    description: "Dual display process controllers, jumbo large format displays, flameproof indicators, and digital PID controllers.",
    icon: "cpu"
  },
  {
    id: "dataloggers",
    name: "Data Loggers & Recorders",
    count: PRODUCTS_DATABASE.filter(p => p.category === "dataloggers").length,
    description: "Touchscreen paperless recorders (FDA 21 CFR Part 11), multi-channel online loggers, and USB cold-chain loggers.",
    icon: "hard-drive"
  },
  {
    id: "portable",
    name: "Portable & Handheld",
    count: PRODUCTS_DATABASE.filter(p => p.category === "portable").length,
    description: "Precision handheld anemometers, decibel sound meters, lux meters, tachometers, and portable water quality meters.",
    icon: "wrench"
  }
];

// Verified Marquee Clients (from actual careinstruments.com)
const CLIENTS_LIST = [
  { name: "ISRO", subtitle: "Indian Space Research Organisation", logo: "assets/images/clients/isro.jpg" },
  { name: "BHEL", subtitle: "Bharat Heavy Electricals Limited", logo: "assets/images/clients/bhel.jpg" },
  { name: "Adani", subtitle: "Adani Group", logo: "assets/images/clients/adani.jpg" },
  { name: "Coca-Cola", subtitle: "Hindustan Coca-Cola Beverages", logo: "assets/images/clients/coca-cola.jpg" },
  { name: "Tata Coffee", subtitle: "Tata Coffee Limited", logo: "assets/images/clients/tata-coffee.jpg" },
  { name: "Hitachi", subtitle: "Hitachi Hi-Rel Power Electronics", logo: "assets/images/clients/hitachi.jpg" },
  { name: "Bridgestone", subtitle: "Bridgestone India", logo: "assets/images/clients/bridgestone.jpg" },
  { name: "Torrent Power", subtitle: "Torrent Power Limited", logo: "assets/images/clients/torrent-power.jpg" },
  { name: "Torrent Pharma", subtitle: "Torrent Pharmaceuticals", logo: "assets/images/clients/torrent-pharma.jpg" },
  { name: "Zydus Cadila", subtitle: "Zydus Lifesciences", logo: "assets/images/clients/zydus-cadila.jpg" },
  { name: "Alembic", subtitle: "Alembic Pharmaceuticals", logo: "assets/images/clients/alembic.jpg" },
  { name: "Alkem", subtitle: "Alkem Laboratories", logo: "assets/images/clients/alkem.jpg" },
  { name: "Cadila", subtitle: "Cadila Pharmaceuticals", logo: "assets/images/clients/cadila.jpg" },
  { name: "Intas", subtitle: "Intas Pharmaceuticals", logo: "assets/images/clients/intas.jpg" },
  { name: "Macleods", subtitle: "Macleods Pharmaceuticals", logo: "assets/images/clients/macleods.jpg" },
  { name: "Piramal", subtitle: "Piramal Healthcare", logo: "assets/images/clients/piramal.jpg" },
  { name: "Vadilal", subtitle: "Vadilal Industries Limited", logo: "assets/images/clients/vadilal.jpg" },
  { name: "Sanghi Cement", subtitle: "Sanghi Industries", logo: "assets/images/clients/sanghi-cement.jpg" },
  { name: "Arvind", subtitle: "Arvind Limited", logo: "assets/images/clients/arvind.jpg" },
  { name: "IPR", subtitle: "Institute for Plasma Research", logo: "assets/images/clients/ipr.jpg" },
  { name: "ERDA", subtitle: "Electrical Research & Development", logo: "assets/images/clients/erda.jpg" },
  { name: "Ammann Apollo", subtitle: "Ammann Apollo Group", logo: "assets/images/clients/ammann-apollo.jpg" }
];

// Verified Certifications
const CERTIFICATIONS_LIST = [
  {
    title: "ISO 9001:2015 Quality Management System",
    issuer: "International Organization for Standardization",
    scope: "Design, Manufacture, Calibration and Supply of Industrial Process Instruments",
    image: "assets/images/certificates/iso-certificate-01.jpg"
  },
  {
    title: "CE Conformity Declaration",
    issuer: "European Conformity Certification",
    scope: "Industrial Data Loggers, Temperature Transmitters & Controllers",
    image: "assets/images/certificates/ce-certificate.jpg"
  },
  {
    title: "Certificate of Enterprise Registration",
    issuer: "Government Industrial Authority",
    scope: "Ahmedabad Registered Engineering & Manufacturing Unit",
    image: "assets/images/certificates/registration-cert.jpg"
  },
  {
    title: "ISO Certification of Compliance",
    issuer: "Accredited Certification Body",
    scope: "Quality Assurance & Calibrated Process Instrumentation",
    image: "assets/images/certificates/iso-certificate-02.jpg"
  }
];

// Company Contact & Location Info
const COMPANY_INFO = {
  name: "Care Process Instruments",
  brandName: "Care Instruments",
  tagline: "Precision Instrumentation for Modern Industry",
  established: 2007,
  yearsOfExperience: "17+",
  regOffice: "FF-4, Kaveri Complex, Nr. R.T.O. Circle, Subhash Bridge Road, Ahmedabad - 380027, Gujarat, India.",
  factory: "Plot No. 1, D.K. Metro Industrial Estate, Nr. Sahyog Hotel, Nr. Milan Kata, G.I.D.C., Village: Chhatral, Dist.: Gandhinagar - 382729, Gujarat, India.",
  phone: "+91-7575808287",
  whatsapp: "+91-9327436411",
  emailPrimary: "info@carepg.com",
  emailSecondary: "care_process@yahoo.co.in",
  workingHours: "Monday – Saturday: 9:30 AM – 6:30 PM IST",
  exportCountries: "Russia, Saudi Arabia, UAE, Kazakhstan, Iran, Mongolia, Indonesia, Turkey, USA, UK, Australia, Sri Lanka, Bangladesh, South Africa, and more.",
  mission: [
    "To work with customers by understanding their technical needs and budgetary constraints.",
    "To maintain continuous quality improvement across our manufacturing and calibration lines.",
    "To provide dependable high-technology instrumentation ensuring long-term customer satisfaction and loyalty at reduced cost.",
    "To leverage time-proven and cost-saving industrial engineering design concepts."
  ],
  strengths: [
    "Procurement and manufacturing of the most well-engineered process instruments meant to provide maximum utility to the end user.",
    "Strategic tie-ups with leading global instrumentation partners (such as E+E Elektronik & Brainchild) for zero-flaw reliability.",
    "Strict zero-compromise quality policy representing the pristine brand image of our company.",
    "Large integrated warehouse storing over 1,000+ instruments ready for immediate dispatch with zero lead-time delays.",
    "Global export reach with damage-proof export packaging supplied to over 15+ countries worldwide."
  ]
};

// Export to window object for browser access
if (typeof window !== 'undefined') {
  window.PRODUCTS_DATABASE = PRODUCTS_DATABASE;
  window.PRODUCT_CATEGORIES = PRODUCT_CATEGORIES;
  window.CLIENTS_LIST = CLIENTS_LIST;
  window.CERTIFICATIONS_LIST = CERTIFICATIONS_LIST;
  window.COMPANY_INFO = COMPANY_INFO;
}
