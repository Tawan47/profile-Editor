import { FallbackImage } from "./FallbackImage";
import { MapPin, Mail, Share, Plus } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Profile Card */}
      <div className="bg-white rounded-md shadow-md border border-gray-200 p-6 relative">
        {/* Share Icon */}
        <button className="absolute top-6 right-6 text-gray-800 hover:text-black transition-colors">
          <Share className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-start text-left">
          {/* Profile Picture */}
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative group cursor-pointer bg-black flex items-center justify-center p-2 border-2 border-gray-100 shadow-sm">
            <img
              src="/พลุ%20logo.png"
              alt="Profile Picture"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Name */}
          <div className="mb-3">
            <h1 className="text-[20px] font-semibold tracking-tight text-gray-900 leading-tight">
              Wanchanok Siriphanurak
            </h1>
            <p className="text-sm text-gray-500 font-medium">วรรณชนก ศิริภาณุรักษ์</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-gray-900 font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Bangkok, Thailand</span>
          </div>

          {/* Bio Section */}
          <div className="flex flex-col text-[13px] text-gray-900 leading-snug mb-6">
            <p className="font-semibold text-blue-600 mb-1">ผู้ประสานงานการจัดการ</p>
            <p>Management Coordinator</p>
            <p className="mt-2">Tel: 0657515366</p>
            <p>jinjinwanchanok@gmail.com</p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center gap-2.5 text-[13px] text-gray-900">
              <Mail className="w-4 h-4 text-gray-400" />
              <span>jinjinwanchanok@gmail.com</span>
            </div>
          </div>

          {/* Follow Button */}
          <button className="w-full bg-[#f2f2f2] text-gray-900 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Follow
          </button>
        </div>
      </div>

      {/* Activity Card */}
      <div className="bg-white rounded-md border border-gray-100 p-6">
        <h2 className="text-base font-medium text-gray-800">Activity</h2>
      </div>
    </div>
  );
}