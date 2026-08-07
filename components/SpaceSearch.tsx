"use client";

import React, { useState } from "react";
import { Search, MapPin, Layers, Maximize2, Tag } from "lucide-react";
import { COMPACT_SPACE_TYPES, RACK_SIZES } from "@/data/spaceTypes";
import { POPULAR_CATEGORIES } from "@/data/categories";

interface SpaceSearchProps {
  onSearch?: (searchParams: {
    location: string;
    spaceType: string;
    rackSize: string;
    category: string;
  }) => void;
}

export default function SpaceSearch({ onSearch }: SpaceSearchProps) {
  const [location, setLocation] = useState("");
  const [spaceType, setSpaceType] = useState("Helmet & Gear Display Rack");
  const [rackSize, setRackSize] = useState("Small");
  const [category, setCategory] = useState("Helmets");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        location,
        spaceType,
        rackSize,
        category,
      });
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-4 sm:py-5 bg-[#FFFDF5] relative -mt-5 z-20" id="search">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white rounded-3xl border-2 border-[#6B0F1A] p-4 sm:p-5 shadow-[0_16px_40px_rgba(11,30,54,0.12)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            
            {/* Location Input */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-location">
                <MapPin className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Location</span>
              </label>
              <input
                id="search-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Hyderabad"
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#1F1F1F] text-xs sm:text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFFBCC] font-medium h-[42px]"
              />
            </div>

            {/* Space Type Select */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-space-type">
                <Layers className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Space Type</span>
              </label>
              <select
                id="search-space-type"
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#1F1F1F] text-xs sm:text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFFBCC] font-medium h-[42px]"
              >
                {COMPACT_SPACE_TYPES.map((st) => (
                  <option key={st.id} value={st.name}>
                    {st.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Rack Size Select */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-rack-size">
                <Maximize2 className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Rack Size</span>
              </label>
              <select
                id="search-rack-size"
                value={rackSize}
                onChange={(e) => setRackSize(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#1F1F1F] text-xs sm:text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFFBCC] font-medium h-[42px]"
              >
                {RACK_SIZES.map((rs) => (
                  <option key={rs.id} value={rs.name}>
                    {rs.name} ({rs.dimensions})
                  </option>
                ))}
              </select>
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-category">
                <Tag className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Category</span>
              </label>
              <select
                id="search-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#1F1F1F] text-xs sm:text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFFBCC] font-medium h-[42px]"
              >
                {POPULAR_CATEGORIES.slice(0, 9).map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="col-span-1">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7E200] text-[#3D0710] border border-[#6B0F1A]/30 px-4 py-2.5 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-[#3D0710] hover:text-[#F7E200] transition-all cursor-pointer h-[42px]"
              >
                <Search className="w-4 h-4" />
                <span>Search Spaces</span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

