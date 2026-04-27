import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination() {
  return (
    <div className="flex flex-col items-center gap-6 py-12 border-t border-gray-100">
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#000E55] font-bold hover:bg-[#FF690E] hover:border-[#FF690E] hover:text-white transition-all active bg-[#FF690E] border-[#FF690E] text-white">1</button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#000E55] font-bold hover:bg-[#FF690E] hover:border-[#FF690E] hover:text-white transition-all">2</button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#000E55] font-bold hover:bg-[#FF690E] hover:border-[#FF690E] hover:text-white transition-all">3</button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#000E55] hover:bg-[#FF690E] hover:border-[#FF690E] hover:text-white transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">
        1-8 Of 20 Itineraries
      </span>
    </div>
  );
}
