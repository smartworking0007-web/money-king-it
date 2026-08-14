// File Name: ContactInfoGrid.tsx

import React from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  UserCheck,
  Wrench,
  Handshake,
} from "lucide-react";

export default function ContactInfoGrid() {
  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Top 6 Cards Grid (2 columns on tablet/desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: Call Us */}
          <div className="bg-[#121212] rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#00D094]/50 transition-all flex flex-col justify-between">
            <div className="text-[#00D094] mb-2">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-0.5">
                CALL US
              </p>
              <div className="text-white font-bold text-sm sm:text-base space-y-0.5">
                <p>01204206832</p>
                <p>+91 7669291199</p>
              </div>
            </div>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-[#121212] rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#00D094]/50 transition-all flex flex-col justify-between">
            <div className="text-[#00D094] mb-2">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-0.5">
                EMAIL US
              </p>
              <p className="text-white font-bold text-sm sm:text-base break-all">
                info@moneykingfinancial.com
              </p>
            </div>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-[#121212] rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#00D094]/50 transition-all flex flex-col justify-between">
            <div className="text-[#00D094] mb-2">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-0.5">
                WHATSAPP
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                Connect Now
              </p>
            </div>
          </div>

          {/* Card 4: Sales Team */}
          <div className="bg-[#121212] rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#00D094]/50 transition-all flex flex-col justify-between">
            <div className="text-[#00D094] mb-2">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-0.5">
                SALES TEAM
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                Connect to Sales
              </p>
            </div>
          </div>

          {/* Card 5: Tech Support */}
          <div className="bg-[#121212] rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#00D094]/50 transition-all flex flex-col justify-between">
            <div className="text-[#00D094] mb-2">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-0.5">
                TECH SUPPORT
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                24/7 Assistance
              </p>
            </div>
          </div>

          {/* Card 6: Partnership */}
          <div className="bg-[#121212] rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#00D094]/50 transition-all flex flex-col justify-between">
            <div className="text-[#00D094] mb-2">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-0.5">
                PARTNERSHIP
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                Join Network
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Card: Business Hours */}
        <div className="bg-[#121212] rounded-xl p-5 sm:p-6 shadow-lg border border-white/10">
          <div className="flex items-center gap-2 mb-4 text-white">
            <h3 className="font-bold text-base sm:text-lg tracking-tight">Business Hours</h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
              <span className="font-semibold text-zinc-300">Mon – Fri</span>
              <span className="font-bold text-[#00D094]">
                9:00 AM - 7:00 PM
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
              <span className="font-semibold text-zinc-300">Saturday</span>
              <span className="font-bold text-[#00D094]">
                10:00 AM - 4:00 PM
              </span>
            </div>

            <div className="flex justify-between items-center pt-0.5">
              <span className="font-semibold text-zinc-500">Sunday</span>
              <span className="font-bold text-zinc-500">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}