import React, { useState } from 'react';
import { Cpu, Zap, Eye, Play, CheckCircle2, Sliders, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReMoroConfigurator: React.FC = () => {
  const [chassis, setChassis] = useState<'quad' | 'biped' | 'serpent' | 'sentinel'>('quad');
  const [headPod, setHeadPod] = useState<'cyclops' | 'lidar' | 'acoustic'>('cyclops');
  const [limbs, setLimbs] = useState<'treads' | 'wheels' | 'legs'>('treads');
  const [colorScheme, setColorScheme] = useState<'lime' | 'amber' | 'cyan' | 'obsidian'>('lime');
  const [behavior, setBehavior] = useState<string>('roam');
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simLog, setSimLog] = useState<string>('Ready for behavior test.');

  const colorPalettes = {
    lime: { name: 'Cyber-Lime', primary: '#10b981', secondary: '#059669', bg: 'bg-[#10b981]' },
    amber: { name: 'Solar Flare', primary: '#FFDA00', secondary: '#d97706', bg: 'bg-[#FFDA00]' },
    cyan: { name: 'Neon Glitch', primary: '#00A896', secondary: '#0891b2', bg: 'bg-[#00A896]' },
    obsidian: { name: 'Deep Slate', primary: '#111111', secondary: '#475569', bg: 'bg-black' },
  };

  const handleRunSimulation = () => {
    setIsRunningSim(true);
    setSimLog('Calibrating 40-pin bus... Sensors locked.');
    setTimeout(() => {
      if (behavior === 'roam') {
        setSimLog('Obstacle detected at 24cm! Executing autonomous pivot.');
      } else if (behavior === 'follow') {
        setSimLog('Light beacon acquired. Accelerating kinetic motors +30%.');
      } else if (behavior === 'opossum') {
        setSimLog('Simulating play-dead mode: Motors dormant, LED eyes glowing softly!');
      } else {
        setSimLog('Executing custom visual script sequence...');
      }
      setIsRunningSim(false);
      try {
        confetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
      } catch (e) {}
    }, 1200);
  };

  const activePal = colorPalettes[colorScheme];

  return (
    <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-3 border-black">
        <div>
          <div className="flex items-center gap-2 text-black text-xs font-mono font-black uppercase tracking-widest bg-[#10b981] px-2 py-0.5 border border-black inline-flex shadow-[2px_2px_0_0_#000]">
            <Cpu className="w-4 h-4" />
            <span>Interactive Toy Lab</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-black tracking-tight uppercase mt-2">
            ReMoro Modular Creature Configurator
          </h3>
          <p className="text-xs font-bold text-slate-800 mt-0.5">
            Test magnetic snaps, limb kinematics, and real-time block-code logic in our virtual maker bench.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FFDA00] px-3 py-1.5 border-2 border-black text-xs font-mono font-black text-black shadow-[2px_2px_0_0_#000]">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span>CAN-Bus 40-Pin: Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left: Interactive 2.5D Creature Viewport */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center bg-[#FFDA00]/20 border-3 border-black shadow-[6px_6px_0_0_#000] p-6 min-h-[380px] relative overflow-hidden">
          
          {/* Visual SVG Creature Assembly */}
          <div className="relative z-10 w-64 h-64 flex items-center justify-center transition-transform duration-500">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
              {/* Shadow */}
              <ellipse cx="100" cy="180" rx="65" ry="12" fill="#000000" opacity="0.3" />

              {/* Limbs / Mobility Chassis */}
              {limbs === 'treads' && (
                <g>
                  {/* Left Tread */}
                  <rect x="35" y="130" width="30" height="40" rx="4" fill="#ffffff" stroke="#000000" strokeWidth="3" />
                  <line x1="38" y1="140" x2="62" y2="140" stroke="#000000" strokeWidth="2" />
                  <line x1="38" y1="150" x2="62" y2="150" stroke="#000000" strokeWidth="2" />
                  <line x1="38" y1="160" x2="62" y2="160" stroke="#000000" strokeWidth="2" />
                  {/* Right Tread */}
                  <rect x="135" y="130" width="30" height="40" rx="4" fill="#ffffff" stroke="#000000" strokeWidth="3" />
                  <line x1="138" y1="140" x2="162" y2="140" stroke="#000000" strokeWidth="2" />
                  <line x1="138" y1="150" x2="162" y2="150" stroke="#000000" strokeWidth="2" />
                  <line x1="138" y1="160" x2="162" y2="160" stroke="#000000" strokeWidth="2" />
                </g>
              )}

              {limbs === 'wheels' && (
                <g>
                  {/* Omnidirectional Wheels */}
                  <circle cx="50" cy="155" r="20" fill="#ffffff" stroke="#000000" strokeWidth="3" />
                  <circle cx="50" cy="155" r="8" fill={activePal.primary} stroke="#000000" strokeWidth="2" />
                  <circle cx="150" cy="155" r="20" fill="#ffffff" stroke="#000000" strokeWidth="3" />
                  <circle cx="150" cy="155" r="8" fill={activePal.primary} stroke="#000000" strokeWidth="2" />
                </g>
              )}

              {limbs === 'legs' && (
                <g>
                  {/* Articulated Legs */}
                  <path d="M70 125 L45 155 L40 175" stroke="#000000" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M130 125 L155 155 L160 175" stroke="#000000" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <circle cx="45" cy="155" r="5" fill={activePal.primary} stroke="#000000" strokeWidth="2" />
                  <circle cx="155" cy="155" r="5" fill={activePal.primary} stroke="#000000" strokeWidth="2" />
                </g>
              )}

              {/* Central Core Chassis (Dual-Cortex Brain) */}
              <rect 
                x="65" 
                y="85" 
                width="70" 
                height="60" 
                rx="8" 
                fill={activePal.primary} 
                stroke="#000000" 
                strokeWidth="4" 
              />

              {/* Magnetic Snap Ring */}
              <circle cx="100" cy="115" r="14" fill="#ffffff" stroke="#000000" strokeWidth="2.5" />
              <circle cx="100" cy="115" r="6" fill="#000000" className={isRunningSim ? "animate-ping" : ""} />

              {/* Head / Sensor Pod */}
              {headPod === 'cyclops' && (
                <g>
                  <rect x="75" y="42" width="50" height="42" rx="6" fill="#ffffff" stroke="#000000" strokeWidth="3.5" />
                  {/* Glowing LED Visor */}
                  <rect x="83" y="52" width="34" height="14" rx="2" fill="#000000" />
                  <line x1="86" y1="59" x2="114" y2="59" stroke="#FFDA00" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
                </g>
              )}

              {headPod === 'lidar' && (
                <g>
                  <rect x="78" y="48" width="44" height="36" rx="6" fill="#ffffff" stroke="#000000" strokeWidth="3" />
                  {/* LiDAR Turret */}
                  <circle cx="100" cy="35" r="12" fill="#FFDA00" stroke="#000000" strokeWidth="2.5" />
                  <line x1="100" y1="35" x2="108" y2="30" stroke="#000000" strokeWidth="3" className="animate-spin origin-[100px_35px]" />
                </g>
              )}

              {headPod === 'acoustic' && (
                <g>
                  <rect x="74" y="44" width="52" height="40" rx="6" fill="#ffffff" stroke="#000000" strokeWidth="3" />
                  {/* Dual Stereo Mic Grilles */}
                  <circle cx="86" cy="62" r="6" fill="#000000" />
                  <circle cx="114" cy="62" r="6" fill="#000000" />
                  <circle cx="100" cy="74" r="3" fill="#EF476F" />
                </g>
              )}

              {/* Tail Antenna */}
              {chassis === 'serpent' || chassis === 'quad' ? (
                <path d="M135 110 Q165 95 170 70" stroke="#000000" strokeWidth="4" strokeLinecap="round" fill="none" />
              ) : null}
            </svg>
          </div>

          {/* Live Status readout */}
          <div className="w-full mt-4 bg-white border-2 border-black p-3 text-xs font-mono font-bold flex items-center justify-between text-black shadow-[2px_2px_0_0_#000]">
            <div className="flex items-center gap-2 truncate">
              <span className="bg-[#FFDA00] px-1 border border-black text-black">LOG:</span>
              <span className="truncate">{simLog}</span>
            </div>
            <button
              onClick={handleRunSimulation}
              disabled={isRunningSim}
              className="px-3 py-1 bg-black hover:bg-[#FFDA00] text-[#FFDA00] hover:text-black font-black uppercase border border-black text-[11px] flex items-center gap-1 shrink-0 transition-transform active:scale-95 disabled:opacity-50"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isRunningSim ? 'Testing...' : 'Simulate Code'}</span>
            </button>
          </div>
        </div>

        {/* Right: Module Controls & Customizer Tabs */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Head Sensor Pod */}
          <div>
            <label className="text-xs font-mono font-black uppercase text-black block mb-1.5">
              1. Sensor & Head Pod
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'cyclops', label: 'RGB Visor' },
                { id: 'lidar', label: 'Dual LiDAR' },
                { id: 'acoustic', label: 'Binaural Mic' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setHeadPod(item.id as any)}
                  className={`py-2 px-2 text-xs font-mono font-black uppercase border-2 border-black transition-all text-center ${
                    headPod === item.id
                      ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                      : 'bg-white text-black hover:bg-[#FFDA00]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobility Limbs */}
          <div>
            <label className="text-xs font-mono font-black uppercase text-black block mb-1.5">
              2. Mobility & Limbs
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'treads', label: 'Terrain Treads' },
                { id: 'wheels', label: 'Omni-Wheels' },
                { id: 'legs', label: 'Kinetic Legs' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLimbs(item.id as any)}
                  className={`py-2 px-2 text-xs font-mono font-black uppercase border-2 border-black transition-all text-center ${
                    limbs === item.id
                      ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                      : 'bg-white text-black hover:bg-[#FFDA00]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Armor Shell Hue */}
          <div>
            <label className="text-xs font-mono font-black uppercase text-black block mb-1.5">
              3. Shell Finish & Palette
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(Object.keys(colorPalettes) as Array<keyof typeof colorPalettes>).map((key) => {
                const pal = colorPalettes[key];
                return (
                  <button
                    key={key}
                    onClick={() => setColorScheme(key)}
                    className={`py-1.5 px-2 text-[11px] font-mono font-black uppercase border-2 border-black flex items-center justify-center gap-1.5 transition-all ${
                      colorScheme === key
                        ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                        : 'bg-white text-black hover:bg-slate-100'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 border border-black" style={{ backgroundColor: pal.primary }} />
                    <span className="truncate">{pal.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visual Block-Code Logic */}
          <div>
            <label className="text-xs font-mono font-black uppercase text-black block mb-1.5">
              4. Loaded Behavior Routine
            </label>
            <div className="space-y-1.5 font-mono text-xs">
              {[
                { id: 'roam', code: 'IF obstacle < 20cm THEN pivot(180) ELSE drive_forward()' },
                { id: 'follow', code: 'TARGET = find_brightest_light(); steer_towards(TARGET)' },
                { id: 'opossum', code: 'IF loud_noise THEN play_dead(duration=5s) ELSE chirp()' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setBehavior(item.id)}
                  className={`p-2.5 border-2 border-black cursor-pointer transition-all ${
                    behavior === item.id
                      ? 'bg-[#FFDA00] text-black shadow-[3px_3px_0_0_#000]'
                      : 'bg-white text-black hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-slate-700 mb-0.5">
                    <span>BLOCK_ROUTINE_{item.id.toUpperCase()}</span>
                    {behavior === item.id && <span className="bg-black text-[#FFDA00] px-1">ACTIVE</span>}
                  </div>
                  <code className="text-[11px] font-bold">{item.code}</code>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
