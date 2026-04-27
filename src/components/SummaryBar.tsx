import { ChevronRight, ChevronDown } from 'lucide-react';

export function Breadcrumbs() {
  return (
    <div className="bg-gray-50 border-b border-gray-100 py-3">
      <div className="container mx-auto px-4 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
        <a href="#" className="hover:text-[#000E55] transition-colors">Home</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#000E55]">Search Result</span>
      </div>
    </div>
  );
}

export function SummaryBar({ count }: { count: number }) {
  return (
    <div className="bg-white py-6 border-b border-gray-100">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[#000E55] font-medium">
          Results found: <b className="text-lg">{count}</b>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-[#000E55] font-semibold text-sm cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-gray-400 text-xs font-bold uppercase">Sort by:</span>
            Low to high
            <ChevronDown className="w-4 h-4 text-[#FF690E]" />
          </div>
        </div>
      </div>
    </div>
  );
}
