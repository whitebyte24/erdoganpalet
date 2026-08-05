'use client';

import React from 'react';

interface PalletGraphicProps {
  type: 'euro' | 'standart' | 'cp' | 'ikinci-el' | 'ihracat' | 'ozel' | 'agir-yuk' | 'production-line' | 'storage-warehouse' | 'epal-pallet' | 'shipping-truck' | 'ispm15-oven' | 'custom-wood';
  className?: string;
}

export const PalletGraphic: React.FC<PalletGraphicProps> = ({ type, className = 'w-full h-full' }) => {
  if (type === 'euro' || type === 'epal-pallet') {
    return (
      <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" rx="12" fill="#0F3D2E" fillOpacity="0.04" />
        {/* Shadow */}
        <ellipse cx="200" cy="225" rx="140" ry="18" fill="#111827" fillOpacity="0.12" />
        
        {/* Wooden Pallet 3D Isometric View */}
        <g transform="translate(40, 20)">
          {/* Bottom Stringers / Skids */}
          <path d="M40 180 L180 215 L280 185 L140 150 Z" fill="#6E482D" />
          <path d="M40 180 L180 215 L180 225 L40 190 Z" fill="#543620" />
          <path d="M180 215 L280 185 L280 195 L180 225 Z" fill="#3D2716" />

          {/* Wooden Blocks (Takozlar) */}
          {/* Left Block */}
          <path d="M60 160 L90 167 L90 182 L60 175 Z" fill="#8B5E3C" />
          <path d="M90 167 L110 162 L110 177 L90 182 Z" fill="#6E482D" />
          {/* Stamp on Block */}
          <rect x="65" y="165" width="22" height="8" rx="2" fill="#D9A441" />
          <text x="67" y="171" fontSize="5" fontWeight="bold" fill="#0F3D2E">PALET</text>

          {/* Middle Block */}
          <path d="M150 180 L180 187 L180 202 L150 195 Z" fill="#8B5E3C" />
          <path d="M180 187 L200 182 L200 197 L180 202 Z" fill="#6E482D" />

          {/* Right Block */}
          <path d="M230 160 L255 154 L255 169 L230 175 Z" fill="#8B5E3C" />

          {/* Top Deck Slats (Üst Ahşap Tahtalar) */}
          <path d="M30 145 L180 182 L300 145 L150 110 Z" fill="#A7744F" />

          {/* Individual Slats for Detail */}
          <path d="M30 145 L180 182 L180 186 L30 149 Z" fill="#8B5E3C" />
          <path d="M180 182 L300 145 L300 149 L180 186 Z" fill="#6E482D" />

          {/* Slat Gaps lines */}
          <path d="M60 137 L210 174" stroke="#6E482D" strokeWidth="2" />
          <path d="M90 130 L240 167" stroke="#6E482D" strokeWidth="2" />
          <path d="M120 123 L270 160" stroke="#6E482D" strokeWidth="2" />

          {/* Oval Certification Badge Floating */}
          <g transform="translate(230, 20)">
            <rect x="0" y="0" width="70" height="34" rx="17" fill="#0F3D2E" stroke="#D9A441" strokeWidth="2" />
            <text x="35" y="21" textAnchor="middle" fill="#D9A441" fontSize="13" fontWeight="900" letterSpacing="1">EURO</text>
          </g>
          
          {/* Quality Stamp */}
          <g transform="translate(10, 20)">
            <rect x="0" y="0" width="60" height="30" rx="4" fill="#1F6B52" fillOpacity="0.9" />
            <text x="30" y="14" textAnchor="middle" fill="#FAFAF8" fontSize="8" fontWeight="bold">ERDOĞAN</text>
            <text x="30" y="23" textAnchor="middle" fill="#D9A441" fontSize="7" fontWeight="bold">AHŞAP PALET</text>
          </g>
        </g>
      </svg>
    );
  }

  if (type === 'cp') {
    return (
      <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" rx="12" fill="#1F6B52" fillOpacity="0.05" />
        <ellipse cx="200" cy="225" rx="130" ry="16" fill="#111827" fillOpacity="0.1" />
        {/* CP Chemical Pallet Illustration */}
        <g transform="translate(45, 30)">
          {/* Heavy Base Frame */}
          <path d="M40 170 L180 205 L280 175 L140 140 Z" fill="#6E482D" />
          <path d="M40 170 L180 205 L180 215 L40 180 Z" fill="#543620" />
          <path d="M180 205 L280 175 L280 185 L180 215 Z" fill="#3D2716" />

          {/* Top Slats closely spaced for Chemical Bags */}
          <path d="M30 135 L180 172 L300 135 L150 100 Z" fill="#8B5E3C" />
          
          {/* Slat divisions */}
          <line x1="50" y1="130" x2="200" y2="167" stroke="#543620" strokeWidth="1.5" />
          <line x1="75" y1="124" x2="225" y2="161" stroke="#543620" strokeWidth="1.5" />
          <line x1="100" y1="118" x2="250" y2="155" stroke="#543620" strokeWidth="1.5" />
          <line x1="125" y1="112" x2="275" y2="149" stroke="#543620" strokeWidth="1.5" />

          {/* Chemical Drum on Pallet */}
          <g transform="translate(120, 45)">
            <ellipse cx="40" cy="15" rx="35" ry="12" fill="#1F6B52" stroke="#0F3D2E" strokeWidth="2" />
            <path d="M5 15 L5 70 C5 77 75 77 75 70 L75 15 Z" fill="#0F3D2E" />
            <ellipse cx="40" cy="70" rx="35" ry="12" fill="#165642" />
            {/* Chemical Spec Line */}
            <line x1="5" y1="35" x2="75" y2="35" stroke="#D9A441" strokeWidth="3" />
            <text x="40" y="55" textAnchor="middle" fill="#FAFAF8" fontSize="10" fontWeight="bold">CP-1</text>
          </g>
        </g>
      </svg>
    );
  }

  if (type === 'ihracat' || type === 'ispm15-oven') {
    return (
      <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" rx="12" fill="#0F3D2E" fillOpacity="0.06" />
        <g transform="translate(30, 25)">
          <rect x="20" y="30" width="300" height="170" rx="12" fill="#0F3D2E" />
          <rect x="30" y="40" width="280" height="150" rx="8" fill="#165642" stroke="#D9A441" strokeWidth="2" strokeDasharray="6 6" />
          
          <path d="M70 150 C75 130 85 130 90 110 C95 90 105 90 110 70" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />
          <path d="M160 150 C165 130 175 130 180 110 C185 90 195 90 200 70" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />
          <path d="M240 150 C245 130 255 130 260 110 C265 90 275 90 280 70" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />

          <rect x="110" y="85" width="120" height="44" rx="8" fill="#111827" stroke="#D9A441" strokeWidth="2" />
          <text x="170" y="106" textAnchor="middle" fill="#D9A441" fontSize="13" fontWeight="bold">KALİTELİ AHŞAP</text>
          <text x="170" y="120" textAnchor="middle" fill="#FAFAF8" fontSize="9">SAĞLAM ÜRETİM</text>
        </g>
      </svg>
    );
  }

  if (type === 'agir-yuk' || type === 'ozel' || type === 'custom-wood') {
    return (
      <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" rx="12" fill="#8B5E3C" fillOpacity="0.06" />
        <ellipse cx="200" cy="225" rx="140" ry="18" fill="#111827" fillOpacity="0.15" />
        <g transform="translate(40, 30)">
          {/* Reinforced Extra Thick Frame */}
          <path d="M30 160 L180 195 L310 160 L160 125 Z" fill="#6E482D" />
          <path d="M30 160 L180 195 L180 212 L30 177 Z" fill="#543620" />
          <path d="M180 195 L310 160 L310 177 L180 212 Z" fill="#3D2716" />

          {/* Steel Rod Reinforcements */}
          <line x1="50" y1="168" x2="290" y2="168" stroke="#D9A441" strokeWidth="4" />
          <line x1="60" y1="185" x2="280" y2="185" stroke="#D9A441" strokeWidth="4" />

          {/* Heavy Machine Mockup on top */}
          <path d="M100 80 L230 80 L250 135 L80 135 Z" fill="#1F6B52" stroke="#0F3D2E" strokeWidth="3" />
          <rect x="130" y="50" width="70" height="35" rx="4" fill="#0F3D2E" />
          <text x="165" y="72" textAnchor="middle" fill="#D9A441" fontSize="11" fontWeight="bold">5.000 KG</text>
        </g>
      </svg>
    );
  }

  if (type === 'production-line') {
    return (
      <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" rx="12" fill="#0F3D2E" />
        <g transform="translate(30, 20)">
          {/* Conveyor Line */}
          <rect x="20" y="140" width="300" height="30" rx="6" fill="#1F6B52" />
          <circle cx="50" cy="155" r="10" fill="#D9A441" />
          <circle cx="110" cy="155" r="10" fill="#D9A441" />
          <circle cx="170" cy="155" r="10" fill="#D9A441" />
          <circle cx="230" cy="155" r="10" fill="#D9A441" />
          <circle cx="290" cy="155" r="10" fill="#D9A441" />

          {/* Nailing System */}
          <path d="M170 30 L170 90 L130 110" stroke="#D9A441" strokeWidth="6" strokeLinecap="round" />
          <rect x="110" y="105" width="40" height="20" rx="4" fill="#FAFAF8" />
          
          {/* Pallet Moving on Line */}
          <rect x="190" y="120" width="80" height="20" rx="3" fill="#8B5E3C" />
          <text x="170" y="200" textAnchor="middle" fill="#FAFAF8" fontSize="13" fontWeight="bold">Ahşap Palet Çakım Tesisimiz</text>
        </g>
      </svg>
    );
  }

  if (type === 'shipping-truck') {
    return (
      <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" rx="12" fill="#1F6B52" />
        <g transform="translate(40, 40)">
          {/* Freight Truck Graphic */}
          <rect x="20" y="30" width="180" height="100" rx="8" fill="#FAFAF8" />
          <path d="M200 60 L240 60 L260 90 L260 130 L200 130 Z" fill="#D9A441" />
          {/* Truck Wheels */}
          <circle cx="60" cy="135" r="18" fill="#111827" stroke="#FAFAF8" strokeWidth="4" />
          <circle cx="150" cy="135" r="18" fill="#111827" stroke="#FAFAF8" strokeWidth="4" />
          <circle cx="230" cy="135" r="18" fill="#111827" stroke="#FAFAF8" strokeWidth="4" />

          {/* Logo on Truck Body */}
          <text x="110" y="75" textAnchor="middle" fill="#0F3D2E" fontSize="15" fontWeight="900">ERDOĞAN PALET</text>
          <text x="110" y="95" textAnchor="middle" fill="#1F6B52" fontSize="9" fontWeight="bold">81 İLE TESLİMAT FİLOSU</text>
        </g>
      </svg>
    );
  }

  if (type === 'storage-warehouse') {
    return (
      <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" rx="12" fill="#111827" />
        <g transform="translate(30, 30)">
          {/* High Bay Racks */}
          <rect x="20" y="20" width="12" height="170" fill="#D9A441" />
          <rect x="130" y="20" width="12" height="170" fill="#D9A441" />
          <rect x="240" y="20" width="12" height="170" fill="#D9A441" />
          
          <rect x="20" y="60" width="232" height="6" fill="#D9A441" />
          <rect x="20" y="110" width="232" height="6" fill="#D9A441" />
          <rect x="20" y="160" width="232" height="6" fill="#D9A441" />

          {/* Stacked Pallets on shelves */}
          <rect x="35" y="40" width="85" height="18" rx="2" fill="#8B5E3C" />
          <rect x="145" y="40" width="85" height="18" rx="2" fill="#A7744F" />
          <rect x="35" y="90" width="85" height="18" rx="2" fill="#8B5E3C" />
          <rect x="145" y="90" width="85" height="18" rx="2" fill="#A7744F" />
          <rect x="35" y="140" width="85" height="18" rx="2" fill="#8B5E3C" />

          <text x="170" y="205" textAnchor="middle" fill="#FAFAF8" fontSize="12" fontWeight="bold">Depo Sahamız</text>
        </g>
      </svg>
    );
  }

  // Default Standard Pallet
  return (
    <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="260" rx="12" fill="#0F3D2E" fillOpacity="0.04" />
      <ellipse cx="200" cy="220" rx="135" ry="16" fill="#111827" fillOpacity="0.12" />
      <g transform="translate(45, 30)">
        <path d="M35 155 L180 190 L300 155 L155 120 Z" fill="#8B5E3C" />
        <path d="M35 155 L180 190 L180 198 L35 163 Z" fill="#6E482D" />
        <path d="M180 190 L300 155 L300 163 L180 198 Z" fill="#543620" />
        <line x1="60" y1="148" x2="205" y2="183" stroke="#543620" strokeWidth="2" />
        <line x1="90" y1="141" x2="235" y2="176" stroke="#543620" strokeWidth="2" />
        <line x1="120" y1="134" x2="265" y2="169" stroke="#543620" strokeWidth="2" />
      </g>
    </svg>
  );
};
