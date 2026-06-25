import {
  Code,
  Server,
  Shield,
  Headphones,
  DollarSign,
  BarChart3,
} from "lucide-react";

export default function SupportOptions() {
  const options = [
    {
      icon: Headphones,                                            
      title: "Technical Support",                                
      desc: "Hardware & software troubleshooting.",
    },
    {
      icon: Code,                       
      title: "Software Dev",                    
      desc: "Expert guidance for custom builds.",                        
    },                                               
    {
      icon: Server,                    
      title: "Cloud Infrastructure",                   
      desc: "Monitoring and scaling help.",          
    },              
    {
      icon: Shield,                            
      title: "Cyber Security",                       
      desc: "Threat protection & audits.",                               
    },

    {
      icon: DollarSign,              
      title: "Billing & Account",               
      desc: "Manage payments & plans.",             
    },

    {
      icon: BarChart3,
      title: "Sales & Consultation",                                   
      desc: "Strategic IT business advice.",   
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">       
      <h2 className="text-3xl font-black text-[#0F172A] mb-12 text-center">                  
        Choose Your Support Category                        
      </h2>                             
      <div className="grid md:grid-cols-3 gap-6">             
        {options.map((o, i) => (                        
          <div               
            key={i}                        
            className="p-8 bg-white rounded-3xl border border-zinc-200 hover:border-[#2D6A6A] transition-all shadow-sm"        
          >              
            <o.icon className="w-10 h-10 text-[#2D6A6A] mb-6"/>                              
            <h4 className="font-black text-[#0F172A] text-lg mb-2">                            
              {o.title}                   
            </h4>                    
            <p className="text-zinc-500 text-sm mb-6">{o.desc}             
            </p>             
          </div>               
        ))}                     
      </div>             
    </section>                 
  );
}
