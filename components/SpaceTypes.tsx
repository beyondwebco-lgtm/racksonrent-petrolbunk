import React from "react";
import { Layers, Grid, Store, Coffee, Gift, Box } from "lucide-react";
import { COMPACT_SPACE_TYPES } from "@/data/spaceTypes";

export default function SpaceTypes() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-[#0B1E36] group-hover:text-[#FEF9C3] transition-colors" />,
    Grid: <Grid className="w-6 h-6 text-[#0B1E36] group-hover:text-[#FEF9C3] transition-colors" />,
    Store: <Store className="w-6 h-6 text-[#0B1E36] group-hover:text-[#FEF9C3] transition-colors" />,
    Coffee: <Coffee className="w-6 h-6 text-[#0B1E36] group-hover:text-[#FEF9C3] transition-colors" />,
    Gift: <Gift className="w-6 h-6 text-[#0B1E36] group-hover:text-[#FEF9C3] transition-colors" />,
    Box: <Box className="w-6 h-6 text-[#0B1E36] group-hover:text-[#FEF9C3] transition-colors" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FEF9C3]/30 border-y border-[#E2E8F0]" id="space-types">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-extrabold text-[#0B1E36] border border-[#E2E8F0]">
            Available Formats
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1E36] md:text-5xl">
            What Kind of Space Can Be Offered?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569] md:text-lg font-medium">
            Explore popular petrol pump space options that suit display racks, shelves, counters, and kiosks.
          </p>
        </div>

        {/* Compact Grid with 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {COMPACT_SPACE_TYPES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_35px_rgba(11,30,54,0.06)] hover:shadow-[0_20px_50px_rgba(11,30,54,0.14)] transition-all hover:-translate-y-1 hover:border-[#0B1E36]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF9C3] text-[#0B1E36] group-hover:bg-[#0B1E36] transition-colors mb-4">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="font-extrabold text-lg text-[#0B1E36] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
