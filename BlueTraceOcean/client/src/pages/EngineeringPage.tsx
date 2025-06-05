import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const EngineeringPage = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gradient-to-b from-white to-ocean-shallow/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Engineer's Toolkit</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Innovative engineering solutions for sustainable fishing, marine monitoring, and ocean conservation technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-ocean-surface/10 p-3 rounded-full mr-4">
                  <i className="fas fa-cogs text-ocean-surface text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-ocean-deep">identifying the issue</h3>
              </div>
              
              <img 
                src="https://pulitzercenter.org/sites/default/files/styles/max_570/public/2024-06/NEW%20S.%20Copy%20of%20Vertical%20thumbnail%20template%2034%20%281536%E2%80%8A%C3%97%E2%80%8A2048px%29%20template%20%286%29.png.webp?itok=lVvBj42W" 
                alt="Modern sustainable fishing technology and equipment on fishing vessel" 
                className="w-full h-40 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-coral-green pl-4">
                  <h4 className="font-semibold text-ocean-deep">OverFishing all over the world</h4>
                  <p className="text-slate-600 text-sm">Overfishing has pushed 33% of global fish stocks into an overexploited state and another 60% to full exploitation, leaving only 64.6% of stocks within biologically sustainable levels (down from 90% in the 1970s). Illegal, unreported, and unregulated (IUU) fishing contributes roughly 20% of wild-caught fish while generating about $36 billion in illicit profits each year. Although marine protected areas now cover 8% of the ocean’s surface, just 3% are highly protected, meaning the vast majority of fishing grounds remain vulnerable. As a result, critical marine ecosystems are collapsing, food security for over 3 billion people is at risk, and coastal economies lose billions annually due to declining catches and depleted stocks.
</p>
                </div>
                <div className="border-l-4 border-ocean-surface pl-4">
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-coral-green/10 p-3 rounded-full mr-4">
                  <i className="fas fa-satellite text-coral-green text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-ocean-deep">Brainstorming solutions  </h3>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Advanced ocean monitoring equipment and underwater sensors" 
                className="w-full h-40 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-ocean-deep">all of our ideas</h4>
                  <p className="text-slate-600 text-sm">We had come up with a lot of different solutions to stop overfishing. At the beginning we had come up with the idea to police fish imports. We then realized that governments have already attempted this and it did not work. We then thought of the idea of tracking every individual fish. That turned out to be too hard and expensive to be a viable solution. We also pondered the idea of just banning fish altogether so that the oceans could regain stability and life. We realized that this would deplete 3 billion people of their main source of protein and disrupt global supply chains. We then thought of having fish verified by our system. This would have all fishing put through one system to track fishing rates.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <i className="fas fa-microchip text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-ocean-deep">Picking The Best Solution</h3>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Modern aquaculture facility with automated systems" 
                className="w-full h-40 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Registered Catch Systems</h4>
                  <p className="text-slate-600 text-sm">The final solution we have come up with is a foolproof plan that requires fishermen to register their catches. To do this we have created an app that tracks the type of fish caught, the location caught and the fishermen who caught it. After the fish are verified by taking a picture of the batch you must load them into our standard boxes that have scales in them to stop fishermen from adding extra fish. A QR code will be created for each batch, allowing for consumers and local authorities to v]confirm its authenticity. The unverified fish have a 48% tax placed on them to make buying them unprofitable.
</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                  <i className="fas fa-wind text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-ocean-deep">Creating prototype</h3>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Offshore renewable energy systems and marine technology" 
                className="w-full h-40 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Fishing box and App</h4>
                  <p className="text-slate-600 text-sm">For the physical component of our prototype, we created a box that has a highly sensitive scale which measures the amount of fake fish in the box. Using a Raspberry Pi, the weight of the fish is then sent to our computer to decide if they have overfished, for our prototype.        
                  </p>
                  <p className="text-slate-600 text-sm">For the app, we prototyped the point-of-catch system, which is designed for the fishermen. We wanted to make sure the app was easy to use, but still allowed you to see the status of your catches at a glance.
                    </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-red-500/10 p-3 rounded-full mr-4">
                  <i className="fas fa-robot text-red-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-ocean-deep">Testing the Prototype</h3>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Underwater robotic vehicles for marine research" 
                className="w-full h-40 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Connection testing</h4>
                  <p className="text-slate-600 text-sm">Kieran tested the prototype by adding different weights into the box to check if the built-in scale accurately recorded the weight and sent the data to the app. He also tested adding extra fish after the first measurement to see if the system would detect it — and it did. The test allowed us to gage weather orr not the scale worked properly, the Raspberry Pi sent the data correctly, and the app displayed the results as expected.
</p>
                  <p>We put this through rounds of testing using our peers to make sure it was as user-friendly as possible. We also demoed the app with several people in the age ranges of our target demographics (40-60 is the average age for fishers) to get more accurate feedback.</p>
                  
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/10 p-3 rounded-full mr-4">
                  <i className="fas fa-leaf text-emerald-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-ocean-deep">Iterations</h3>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Coral restoration and marine habitat rehabilitation technology" 
                className="w-full h-40 object-cover rounded-lg mb-6" 
              />
              
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-semibold text-ocean-deep">Box scale</h4>
                  <p className="text-slate-600 text-sm">Our first design for the prototype was to have a scale just it's separate and not in the box. We then realized that it wouldn't keep tracking after they took it off. We then decided to build the scale into the box. This would allow us to keep tracking going and to make sure no extra fish were added. We tried just a household scale but it was too bulky to fit. We then did some research and in our 3rd iteration we used a raspberry pie to code a small fighting scale that would fit in our box. </p>
                  <p className="text-slate-600 text-sm">We originally didn't have the QR code system, but we realized that it would be a great way to verify the fish at the point of sale, and beyond. We also added a map to the app that uses our data to show the status of local areas. 
                    Another common piece of feedback we got was that it would be great to have a map of local areas, so that fishers knew which places were safe to catch from. We implemented a map based on satellites and our own data, which shows the status of areas nearby. We also added a tide prediction system, which uses satellite data to predict the tides and show them in the app. This allows fishers to catch fish at the best time, which is when the tide is low.

                  </p>
                </div>
                <div className="border-l-4 border-lime-600 pl-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringPage;
