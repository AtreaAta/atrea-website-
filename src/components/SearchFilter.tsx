import { MapPin, Calendar, Anchor, MoreHorizontal, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function SearchFilter() {
  return (
    <div className="bg-[#FF690E] py-4 sticky top-20 z-40 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
          {/* Main Controls */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Destination */}
            <div className="bg-white px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <MapPin className="w-6 h-6 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase leading-none">Destination</span>
                <span className="text-sm font-semibold text-[#000E55]">Select</span>
              </div>
            </div>

            {/* Departure Date */}
            <div className="bg-white px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <Calendar className="w-6 h-6 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase leading-none">Departure Date</span>
                <span className="text-sm font-semibold text-[#000E55]">27 Apr '26 - 03 May '28</span>
              </div>
            </div>

            {/* Departure Ports */}
            <div className="bg-white px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <Anchor className="w-6 h-6 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase leading-none">Departure Ports</span>
                <span className="text-sm font-semibold text-[#000E55]">2 DEPARTURE PORTS</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-stretch gap-2">
            <button className="bg-[#000E55] text-white px-6 py-2 flex items-center gap-2 font-bold uppercase text-sm hover:bg-opacity-90 transition-colors min-h-[52px]">
              <MoreHorizontal className="w-5 h-5 text-orange-500" />
              More Filters
            </button>
            <button className="bg-[#000E55] text-white px-8 py-2 font-bold uppercase text-sm hover:bg-opacity-90 transition-colors flex-1 lg:flex-none min-h-[52px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
