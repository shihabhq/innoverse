import { toast } from "sonner";
import { XCircle } from "lucide-react";

export function showCustomError(errorstr: string) {
  toast.custom(() => (
    <div
      className="flex items-start gap-3 p-4 rounded-xl shadow-lg border-l-4 border-red-600 bg-red-50 text-red-900 max-w-sm w-full
                 transition-all duration-300 transform hover:scale-[1.02]"
    >
      <XCircle className="w-6 h-6 text-red-600 mt-1" />
      <div className="flex flex-col">
        <p className="font-semibold">Error</p>
        <p className="text-sm">{errorstr}</p>
      </div>
      <button
        onClick={() => toast.dismiss()}
        className="ml-auto p-1 rounded-full hover:bg-red-200/50"
      >
        ✕
      </button>
    </div>
  ));
}
