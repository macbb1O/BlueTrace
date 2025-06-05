import { motion } from "framer-motion";

const GeographyPage = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gradient-to-b from-ocean-shallow/30 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Geography Connections</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here's how our project connects to the geography curriculum.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-ocean-deep mb-6">Resource Use/Extraction</h3>
              <img 
                src="https://science.nasa.gov/wp-content/uploads/2024/06/article-i-before-after-1000.jpg?resize=900,432" 
                alt="Global ocean map showing major fishing regions and maritime boundaries" 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Physical Geography</h4>
                  <p className="text-slate-600 text-sm">Fishing is an example of extracting a renewable resource from our environment. When fishing exceeds the natural replenishment rate, populations decline. We learned how humans over exploit Earth’s materials  and the consequences of overexplotation. By comparing registered catches against the Maximum Sustainable Yield of areas, the app can store all this data. It provides governments data on unregulated marine harvesting, turning it into a traceable and data-based industry.


</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-ocean-deep mb-6">Livable Communities</h3>
              <img 
                src="https://novascotia.com/wp-content/uploads/2024/10/peggys-cove-1920x1080-6703ee22d89bb.webp" 
                alt="Pristine marine protected area with abundant sea life and healthy coral reefs" 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Human Geography</h4>
                  <p className="text-slate-600 text-sm">Over 3 billion people rely on fish for at least 20% of their animal protein. In densely populated coastal regions like Southeast Asia, fish consumption accounts for over 50 percent of protein intake, especially among lower-income households. This connects to demography, as we can map where these fish are being sold to figure out areas that are highly dependent on fish, where the government can then create alternative jobs and livelihoods.
                </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-ocean-deep mb-6">Climate & Physical Earth</h3>
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Ocean currents and marine life migration patterns" 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Climate and physical Earth</h4>
                  <p className="text-slate-600 text-sm">Areas with cold, nutrient-rich waters are very productive for fishers. For example, the Humboldt Current off of South America creates one of the world’s most productive fishing spots. Ocean currents, sea surface temperature, and winds all play a huge role in the fish population. As the climate changes, we can directly see the impacts of this on the local fish population, through our catch data. 


</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-ocean-deep mb-6">Industry Levels</h3>
              <img 
                src="https://media.istockphoto.com/id/1470862522/photo/sardines-fisherman.jpg?s=612x612&w=0&k=20&c=-OWEO6xXGsIbTfRlhdtfprdvhynBbBO2olEm_NeljrU=" 
                alt="Commercial fishing vessels and economic zones" 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Human Geography</h4>
                  <p className="text-slate-600 text-sm">Fishing is a mainly a primary industry, as natural resources are extracted straight from the environment. In coastal communities, like Southeast Asia (India, Bangladesh) and West Africa, small scale fishers depend on fishing for their livelihoods. Secondary industries come into play with the processing of the raw fish, like smoking or canning. This means our solution will impact these lower industry levels, which could have further effects higher up. For example, at the tertiary level, salespeople selling the processed fish will be impacted when fishing rates go down. Even going up to the quinary level, with the organization and managements of these local markets as a whole, the impacts will be felt for some that rely on fish sales.
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeographyPage;
