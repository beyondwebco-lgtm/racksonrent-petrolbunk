"use client";

import React, { useState } from "react";
import { Building2, Store, HelpCircle, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

type RoleType = "bunk-owner" | "brand-merchant" | "general";

interface EnquiryFormProps {
  selectedRole?: RoleType;
  initialSearchValues?: {
    location?: string;
    spaceType?: string;
    rackSize?: string;
    category?: string;
  };
  onRoleChange?: (role: RoleType) => void;
}

export default function EnquiryForm({ selectedRole = "bunk-owner", initialSearchValues, onRoleChange }: EnquiryFormProps) {
  const [internalRole, setInternalRole] = useState<RoleType | null>(null);

  const role = internalRole ?? selectedRole;

  const [formData, setFormData] = useState({
    fullName: "",
    bunkName: "",
    brandName: "",
    phone: "",
    city: initialSearchValues?.location || "",
    availableSpace: initialSearchValues?.spaceType || "Forecourt Canopy Display Rack",
    requiredSpace: initialSearchValues?.spaceType || "Forecourt Canopy Display Rack",
    rackSize: initialSearchValues?.rackSize || "Small",
    category: initialSearchValues?.category || "Helmets & Rider Safety Gear",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleRoleSelect = (newRole: RoleType) => {
    setInternalRole(newRole);
    if (onRoleChange) {
      onRoleChange(newRole);
    }
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (role === "bunk-owner" && !formData.bunkName.trim()) newErrors.bunkName = "Petrol Pump Name is required";
    if (role === "brand-merchant" && !formData.brandName.trim()) newErrors.brandName = "Brand Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.city.trim() && !initialSearchValues?.location) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const activeCity = formData.city || initialSearchValues?.location || "";
    const activeSpaceType = formData.availableSpace || initialSearchValues?.spaceType || "Forecourt Canopy Display Rack";
    const activeRequiredSpace = formData.requiredSpace || initialSearchValues?.spaceType || "Forecourt Canopy Display Rack";
    const activeRackSize = formData.rackSize || initialSearchValues?.rackSize || "Small";
    const activeCategory = formData.category || initialSearchValues?.category || "Helmets & Rider Safety Gear";

    let roleText = "Petrol Pump Owner";
    let detailsText = "";

    if (role === "bunk-owner") {
      roleText = "Petrol Pump Owner";
      detailsText = `Name: ${formData.fullName}\nPetrol Pump Name: ${formData.bunkName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nAvailable Space: ${activeSpaceType}\nRack Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else if (role === "brand-merchant") {
      roleText = "Startup / Retail Brand";
      detailsText = `Name: ${formData.fullName}\nBrand Name: ${formData.brandName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nProduct Category: ${activeCategory}\nRequired Space: ${activeRequiredSpace}\nPreferred Rack Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else {
      roleText = "General Enquiry";
      detailsText = `Name: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nMessage: ${formData.message || "N/A"}`;
    }

    const messageText = `Hello Racks on Rent,

I am interested in your petrol pump rack rental platform.

Role: ${roleText}
${detailsText}`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Have Unused Space at Your Petrol Pump?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Turn it into an additional source of income by partnering with trusted startups and retail entrepreneurs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Role Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1.5 bg-[#FFF6A3]/50 rounded-2xl mb-8 gap-1.5 border border-[#F0E2E4] shadow-xs">
            <button
              type="button"
              onClick={() => handleRoleSelect("bunk-owner")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "bunk-owner"
                  ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                  : "text-[#6B0F1A] hover:bg-[#FFF6A3]"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Petrol Pump Owner</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("brand-merchant")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "brand-merchant"
                  ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                  : "text-[#6B0F1A] hover:bg-[#FFF6A3]"
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Startup & Brand</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("general")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "general"
                  ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                  : "text-[#6B0F1A] hover:bg-[#FFF6A3]"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>General Enquiry</span>
            </button>
          </div>

          {/* Form Box */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border-2 border-[#F0E2E4] bg-white p-6 sm:p-10 shadow-[0_12px_35px_rgba(11,30,54,0.06)]"
          >
            {submitted && (
              <div className="bg-[#FFF6A3] border border-[#6B0F1A]/30 text-[#6B0F1A] p-4 rounded-2xl flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0" />
                <span>Opening WhatsApp with your enquiry details...</span>
              </div>
            )}

            {/* Common Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                  errors.fullName ? "border-red-500 bg-red-50/30" : ""
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
            </div>

            {/* Petrol Pump Owner specific field */}
            {role === "bunk-owner" && (
              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="bunkName">
                  Petrol Pump / Station Name *
                </label>
                <input
                  id="bunkName"
                  name="bunkName"
                  type="text"
                  value={formData.bunkName}
                  onChange={handleChange}
                  placeholder="e.g. Highway Fuel Station (HPCL)"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.bunkName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.bunkName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.bunkName}</p>}
              </div>
            )}

            {/* Startup / Brand specific field */}
            {role === "brand-merchant" && (
              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="brandName">
                  Startup or Brand Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Helmets & Rider Gear"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.brandName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.brandName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.brandName}</p>}
              </div>
            )}

            {/* Phone & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7995424477"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.phone ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city || initialSearchValues?.location || ""}
                  onChange={handleChange}
                  placeholder="e.g. Hyderabad"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.city ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.city && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.city}</p>}
              </div>
            </div>

            {/* Petrol Pump Space & Size Fields */}
            {role === "bunk-owner" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="availableSpace">
                    Available Space Type
                  </label>
                  <select
                    id="availableSpace"
                    name="availableSpace"
                    value={formData.availableSpace || initialSearchValues?.spaceType || "Forecourt Canopy Display Rack"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                  >
                    <option value="Forecourt Canopy Display Rack">Forecourt Canopy Display Rack</option>
                    <option value="In-Store Mart Shelf Unit">In-Store Mart Shelf Unit</option>
                    <option value="Countertop Display Stand">Countertop Display Stand</option>
                    <option value="Compact Branded Kiosk">Compact Branded Kiosk</option>
                    <option value="EV Charging Lounge Shelf">EV Charging Lounge Shelf</option>
                    <option value="Auto Care & Helmet Stand">Auto Care & Helmet Stand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Rack Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                  >
                    <option value="Small">Small (Up to 3x2 ft)</option>
                    <option value="Medium">Medium (3x2 ft to 6x3 ft)</option>
                    <option value="Large">Large (6x3 ft to 10x5 ft)</option>
                    <option value="Custom">Custom Forecourt Area</option>
                  </select>
                </div>
              </div>
            )}

            {/* Startup Category, Space & Size Fields */}
            {role === "brand-merchant" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="category">
                      Product Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category || initialSearchValues?.category || "Helmets & Rider Safety Gear"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                    >
                      <option value="Helmets & Rider Safety Gear">Helmets & Rider Safety Gear</option>
                      <option value="Packaged Snacks & Munchies">Packaged Snacks & Munchies</option>
                      <option value="Cold Beverages & Energy Drinks">Cold Beverages & Energy Drinks</option>
                      <option value="Car Care & Auto Accessories">Car Care & Auto Accessories</option>
                      <option value="Travel & Phone Accessories">Travel & Phone Accessories</option>
                      <option value="Bakery & Fresh Quick Bites">Bakery & Fresh Quick Bites</option>
                      <option value="Hygiene & Personal Care">Hygiene & Personal Care</option>
                      <option value="Emergency & Car Survival Gear">Emergency & Car Survival Gear</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="requiredSpace">
                      Required Space Type
                    </label>
                    <select
                      id="requiredSpace"
                      name="requiredSpace"
                      value={formData.requiredSpace || initialSearchValues?.spaceType || "Forecourt Canopy Display Rack"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                    >
                      <option value="Forecourt Canopy Display Rack">Forecourt Canopy Display Rack</option>
                      <option value="In-Store Mart Shelf Unit">In-Store Mart Shelf Unit</option>
                      <option value="Countertop Display Stand">Countertop Display Stand</option>
                      <option value="Compact Branded Kiosk">Compact Branded Kiosk</option>
                      <option value="EV Charging Lounge Shelf">EV Charging Lounge Shelf</option>
                      <option value="Auto Care & Helmet Stand">Auto Care & Helmet Stand</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Preferred Rack Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                  >
                    <option value="Small">Small (Up to 3x2 ft)</option>
                    <option value="Medium">Medium (3x2 ft to 6x3 ft)</option>
                    <option value="Large">Large (6x3 ft to 10x5 ft)</option>
                    <option value="Custom">Custom Forecourt Area</option>
                  </select>
                </div>
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="message">
                Short Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any additional notes or space details..."
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] hover:bg-[#3D0710] text-[#3D0710] hover:text-[#F4E409] border border-[#6B0F1A]/20 py-3.5 px-6 font-extrabold text-base shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit & Continue on WhatsApp</span>
              </button>

              <p className="text-xs text-[#5F5F5F] text-center mt-3 flex items-center justify-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Your information is used only to respond to your enquiry.</span>
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
