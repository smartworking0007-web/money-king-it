import { Button } from "@/components/ui/Text";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto text-center">
      <div className="p-10 bg-white rounded-3xl border border-zinc-200 shadow-sm">
        {/* font-black aur text-color ke beech space add kiya */}
        <h3 className="text-2xl font-black text-[#0F172A] mb-6">
          Stay Ahead of Technology Trends
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email"
            placeholder="Enter your email address" 
            className="flex-1 bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-500 py-6 px-4 rounded-xl"
          />
          <Button className="bg-[#0F172A] hover:bg-zinc-800 py-6 px-8 rounded-xl font-bold">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}