"use client";

import React, { useState } from "react";
import { Store, ShoppingBag, HelpCircle, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";

type RoleType = "gym-owner" | "wellness" | "general";

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

export default function EnquiryForm({ selectedRole = "gym-owner", initialSearchValues, onRoleChange }: EnquiryFormProps) {
  const [internalRole, setInternalRole] = useState<RoleType | null>(null);

  const role = internalRole ?? selectedRole;

  const [formData, setFormData] = useState({
    fullName: "",
    bakeryName: "",
    brandName: "",
    phone: "",
    city: initialSearchValues?.location || "",
    availableSpace: initialSearchValues?.spaceType || "Forecourt Canopy Display Rack",
    requiredSpace: initialSearchValues?.spaceType || "Forecourt Canopy Display Rack",
    rackSize: initialSearchValues?.rackSize || "Small (Up to 3x2 ft)",
    category: initialSearchValues?.category || "Premium Sportswear",
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
    if (role === "gym-owner" && !formData.bakeryName.trim()) newErrors.bakeryName = "Petrol Pump / Station Name is required";
    if (role === "wellness" && !formData.brandName.trim()) newErrors.brandName = "Startup / Brand Name is required";
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
    const activeRackSize = formData.rackSize || initialSearchValues?.rackSize || "Small (Up to 3x2 ft)";
    const activeCategory = formData.category || initialSearchValues?.category || "Premium Sportswear";

    let roleText = "Petrol Pump Owner";
    let detailsText = "";

    if (role === "gym-owner") {
      roleText = "Petrol Pump Owner";
      detailsText = `Name: ${formData.fullName}\nPetrol Pump / Station Name: ${formData.bakeryName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nAvailable Space Type: ${activeSpaceType}\nRack Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else if (role === "wellness") {
      roleText = "Startup & Brand";
      detailsText = `Name: ${formData.fullName}\nStartup / Brand Name: ${formData.brandName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nCategory: ${activeCategory}\nRequired Space Type: ${activeRequiredSpace}\nRack Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else {
      roleText = "General Enquiry";
      detailsText = `Name: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nMessage: ${formData.message || "N/A"}`;
    }

    const messageText = `Hello Racks on Rent,

I am interested in petrol pump retail space opportunities.

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
        
        <SectionHeader
          badge="GET IN TOUCH"
          title={
            <>
              Have Unused Space at Your{" "}
              <span className="text-[#B8913A]">Petrol Pump?</span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Turn it into an additional source of income by partnering with trusted startups and retail entrepreneurs.
            </span>
          }
        />

        <div className="max-w-3xl mx-auto">
          {/* Role Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1.5 bg-[#FFFBCC]/30 rounded-2xl mb-8 gap-1.5 border border-[#F0E2E4] shadow-xs">
            <button
              type="button"
              onClick={() => handleRoleSelect("gym-owner")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-normal italic transition-all cursor-pointer min-h-[44px] ${
                role === "gym-owner"
                  ? "bg-[#740202] text-[#FAFA33] shadow-xs"
                  : "text-[#740202] hover:bg-[#FFFBCC]"
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Petrol Pump Owner</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("wellness")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-normal italic transition-all cursor-pointer min-h-[44px] ${
                role === "wellness"
                  ? "bg-[#740202] text-[#FAFA33] shadow-xs"
                  : "text-[#740202] hover:bg-[#FFFBCC]"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Startup & Brand</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("general")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-normal italic transition-all cursor-pointer min-h-[44px] ${
                role === "general"
                  ? "bg-[#740202] text-[#FAFA33] shadow-xs"
                  : "text-[#740202] hover:bg-[#FFFBCC]"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>General Enquiry</span>
            </button>
          </div>

          {/* Form Box */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 sm:p-10 shadow-[0_12px_35px_rgba(116,2,2,0.06)]"
          >
            {submitted && (
              <div className="bg-[#FFFBCC] border border-[#740202]/30 text-[#740202] p-4 rounded-2xl flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#740202] flex-shrink-0" />
                <span>Opening WhatsApp with your enquiry details...</span>
              </div>
            )}

            {/* Common Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                  errors.fullName ? "border-red-500 bg-red-50/30" : ""
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
            </div>

            {/* Petrol Pump Owner specific field */}
            {role === "gym-owner" && (
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="bakeryName">
                  Petrol Pump / Station Name *
                </label>
                <input
                  id="bakeryName"
                  name="bakeryName"
                  type="text"
                  value={formData.bakeryName}
                  onChange={handleChange}
                  placeholder="e.g. Highway Fuel Station / Indian Oil Outlet"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.bakeryName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.bakeryName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.bakeryName}</p>}
              </div>
            )}

            {/* Startup & Brand specific field */}
            {role === "wellness" && (
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="brandName">
                  Startup / Brand Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Rider Gear / Turbo Drinks"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.brandName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.brandName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.brandName}</p>}
              </div>
            )}

            {/* Phone & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7995424477"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.phone ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city || initialSearchValues?.location || ""}
                  onChange={handleChange}
                  placeholder="e.g. Hyderabad"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.city ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.city && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.city}</p>}
              </div>
            </div>

            {/* Petrol Pump Owner Space & Size Fields */}
            {role === "gym-owner" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="availableSpace">
                    Available Space Type
                  </label>
                  <select
                    id="availableSpace"
                    name="availableSpace"
                    value={formData.availableSpace || initialSearchValues?.spaceType || "Forecourt Canopy Display Rack"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                  >
                    <option value="Forecourt Canopy Display Rack" className="text-[#B8913A] font-semibold italic">Forecourt Canopy Display Rack</option>
                    <option value="In-Store Mart Shelf Unit" className="text-[#B8913A] font-semibold italic">In-Store Mart Shelf Unit</option>
                    <option value="Countertop Display Stand" className="text-[#B8913A] font-semibold italic">Countertop Display Stand</option>
                    <option value="Compact Branded Kiosk" className="text-[#B8913A] font-semibold italic">Compact Branded Kiosk</option>
                    <option value="EV Charging Lounge Shelf" className="text-[#B8913A] font-semibold italic">EV Charging Lounge Shelf</option>
                    <option value="Auto Care & Helmet Stand" className="text-[#B8913A] font-semibold italic">Auto Care & Helmet Stand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Rack Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small (Up to 3x2 ft)"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                  >
                    <option value="Small (Up to 3x2 ft)" className="text-[#B8913A] font-semibold italic">Small (Up to 3x2 ft)</option>
                    <option value="Medium (3x2 ft to 6x3 ft)" className="text-[#B8913A] font-semibold italic">Medium (3x2 ft to 6x3 ft)</option>
                    <option value="Large (6x3 ft to 10x5 ft)" className="text-[#B8913A] font-semibold italic">Large (6x3 ft to 10x5 ft)</option>
                    <option value="Custom Forecourt Area" className="text-[#B8913A] font-semibold italic">Custom Forecourt Area</option>
                  </select>
                </div>
              </div>
            )}

            {/* Startup & Brand Category, Space & Size Fields */}
            {role === "wellness" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="category">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category || initialSearchValues?.category || "Premium Sportswear"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#740202] outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                    >
                      <option value="Premium Sportswear" className="text-[#740202]">Premium Sportswear</option>
                      <option value="Rider Helmets" className="text-[#740202]">Rider Helmets</option>
                      <option value="Protein Products" className="text-[#740202]">Protein Products</option>
                      <option value="Mobile Phone Mounts" className="text-[#740202]">Mobile Phone Mounts</option>
                      <option value="Packaged Snacks" className="text-[#740202]">Packaged Snacks</option>
                      <option value="Healthy Snacks" className="text-[#740202]">Healthy Snacks</option>
                      <option value="Gym Apparel" className="text-[#740202]">Gym Apparel</option>
                      <option value="Fitness Accessories" className="text-[#740202]">Fitness Accessories</option>
                      <option value="Cold Beverages" className="text-[#740202]">Cold Beverages</option>
                      <option value="Helmet Cleaning" className="text-[#740202]">Helmet Cleaning</option>
                      <option value="Engine Oil & Care" className="text-[#740202]">Engine Oil & Care</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="requiredSpace">
                      Available Space Type
                    </label>
                    <select
                      id="requiredSpace"
                      name="requiredSpace"
                      value={formData.requiredSpace || initialSearchValues?.spaceType || "Forecourt Canopy Display Rack"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                    >
                      <option value="Forecourt Canopy Display Rack" className="text-[#B8913A] font-semibold italic">Forecourt Canopy Display Rack</option>
                      <option value="In-Store Mart Shelf Unit" className="text-[#B8913A] font-semibold italic">In-Store Mart Shelf Unit</option>
                      <option value="Countertop Display Stand" className="text-[#B8913A] font-semibold italic">Countertop Display Stand</option>
                      <option value="Compact Branded Kiosk" className="text-[#B8913A] font-semibold italic">Compact Branded Kiosk</option>
                      <option value="EV Charging Lounge Shelf" className="text-[#B8913A] font-semibold italic">EV Charging Lounge Shelf</option>
                      <option value="Auto Care & Helmet Stand" className="text-[#B8913A] font-semibold italic">Auto Care & Helmet Stand</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Rack Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small (Up to 3x2 ft)"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                  >
                    <option value="Small (Up to 3x2 ft)" className="text-[#B8913A] font-semibold italic">Small (Up to 3x2 ft)</option>
                    <option value="Medium (3x2 ft to 6x3 ft)" className="text-[#B8913A] font-semibold italic">Medium (3x2 ft to 6x3 ft)</option>
                    <option value="Large (6x3 ft to 10x5 ft)" className="text-[#B8913A] font-semibold italic">Large (6x3 ft to 10x5 ft)</option>
                    <option value="Custom Forecourt Area" className="text-[#B8913A] font-semibold italic">Custom Forecourt Area</option>
                  </select>
                </div>
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="message">
                Short Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share details about your petrol pump space, products, or rental requirements..."
                className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-6 font-extrabold text-base shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit & Continue on WhatsApp</span>
              </button>

              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xs text-[#1F1F1F] text-center mt-3 flex items-center justify-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 text-[#740202]" />
                <span>Your information is used only to respond to your enquiry.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

