import React from 'react';
import { useSanityData } from '../context/SanityDataContext';

export const TeamView: React.FC = () => {
  const { team: TEAM_MEMBERS } = useSanityData();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 text-center space-y-3 max-w-2xl mx-auto">
        <div className="text-xs font-mono font-black uppercase tracking-widest bg-[#FFDA00] text-black px-2.5 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]">
          The Makers & Tinkering Crew
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
          People who make things.
        </h1>
        <p className="text-sm font-medium text-black leading-relaxed">
          We are roboticists, woodworkers, synthesists, folklore nerds, and competitive playtesters. We don't wear corporate suits—we solder wires, paint miniatures, and write code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 p-6 flex flex-col justify-between transition-all group"
          >
            <div className="space-y-4">
              {/* Avatar Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 bg-[#FFDA00] border-3 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center text-xl font-black font-display text-black">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <h3 className="font-display font-black text-lg text-black uppercase group-hover:text-[#4834D4] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-black uppercase text-[#FF6B35]">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="inline-block text-[10px] font-mono font-black uppercase px-2.5 py-0.5 bg-black text-[#FFDA00] border border-black shadow-[1px_1px_0_0_#000]">
                {member.discipline}
              </div>

              <p className="text-xs font-medium text-black leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black space-y-1.5 text-[11px] font-mono">
              <div>
                <span className="text-slate-600 font-bold uppercase">Favorite Game: </span>
                <span className="text-black font-black">{member.favoriteToyOrGame}</span>
              </div>
              <div>
                <span className="text-slate-600 font-bold uppercase">Secret Lab Project: </span>
                <span className="bg-[#FFDA00] px-1 py-0.5 border border-black text-black font-black">{member.secretProject}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
