import React from "react";

import { Twitter, Send, Github, Globe } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";



const Footer = () => {
    return (
        <footer className="relative w-full mt-12 py-10 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* ---------- Left Section: Logo + Branding ---------- */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Token Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-white">SP Token</h2>
                <p className="text-sm text-gray-400">Empowering the Future of DeFi</p>
              </div>
            </div>
    
            {/* ---------- Middle Section: ICO Info ---------- */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
              <div className="text-center md:text-left">
                <p className="text-gray-500 uppercase tracking-wider">Soft Cap</p>
                <p className="text-white font-semibold">2,000 ETH</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 uppercase tracking-wider">Hard Cap</p>
                <p className="text-white font-semibold">10,000 ETH</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 uppercase tracking-wider">Sale Ends</p>
                <p className="text-white font-semibold">Nov 30, 2025</p>
              </div>
            </div>
    
            {/* ---------- Right Section: Social Links ---------- */}
            <div className="flex gap-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Send className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://project-website.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Globe className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
    
          {/* ---------- Divider ---------- */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} SP Token. All Rights Reserved.
          </div>
    
          {/* ---------- Background Glow ---------- */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-600 to-indigo-600 opacity-10 blur-3xl rounded-full" />
          </div>
        </footer>
      );
    };

export default Footer