import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import qr from "../frame.png"

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Ocean conservation underwater scene with marine life" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/70 to-ocean-surface/50"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Blue<span className="text-ocean-light">Trace</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Protecting Oceans. Preventing Overfishing.
</p>
          <div className="flex flex-row sm:flex-row gap-4 justify-center">
            <Link href="/math">
              <Button className="bg-coral-green hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Start Learning
              </Button>
            </Link>
            <img src={{qr}}></img>
            
          </div>
        </motion.div>
        
        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 animate-float text-white/30">
          <i className="fas fa-fish text-4xl"></i>
        </div>
        <div className="absolute top-1/3 right-20 animate-wave text-white/20">
          <i className="fas fa-anchor text-3xl"></i>
          </div>
            </section>
            {/* Why Overfishing Matters Section */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Why Overfishing Matters</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="bg-gradient-to-br from-ocean-shallow/20 to-ocean-light/10 rounded-2xl p-8 shadow-xl">
                    <div className="mb-6">
                      <img 
                        src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                        alt="Ocean waves representing UN Sustainable Development Goal 14 Life Below Water" 
                        className="w-full h-48 object-cover rounded-lg" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-ocean-deep mb-4">SDG-14: Life Below Water</h3>
                    <p className="text-slate-600 leading-relaxed">
                      SDG-14 is to conserve and sustainable use the oceans, seas, and marine resources for sustainable development. As of May of last year, 18,000 marine protected areas cover 29 million square kilometers, or 8% of the ocean's surface, but only 3% is highly protected. One initiative that is working towards this goal is the Shared Seas initiative aims to make a circular economy for plastics. Some of their goals include 100% of plastic packaging being reusable, recyclable, or compostable & to take action to move from single-use towards reuse models where relevant. 

                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-coral-green/10 to-ocean-surface/10 rounded-2xl p-8 shadow-xl">
                    <div className="mb-6">
                      <img 
                        src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                        alt="Colorful fish swimming in a vibrant coral reef ecosystem" 
                        className="w-full h-48 object-cover rounded-lg" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-ocean-deep mb-4">Death of Marine Life</h3>
                    <p className="text-slate-600 leading-relaxed">
                    Overfishing is wiping out seafood faster than they can reproduce, breaking the balance of ,arine ecosystems. It leaves communities without food or income, and pushes a lot of different marine species toward extinction. If it doesn't stop, entire marine food chains could collapse.

                    </p>
                  </div>
                </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-shallow/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Our Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We created an app that records the type of fish caught, the location, and the fisherman’s identity, with photo verification and standardized boxes with a built in scales to prevent extra fish being added. Each batch is assigned a QR code for consumer and authority verification, while unverified fish face a 48% tax to discourage illegal sales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-ocean-surface/10 p-3 rounded-full">
                  <i className="fas fa-graduation-cap text-ocean-surface text-xl"></i>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-ocean-deep mb-2">Scanning Fish</h3>
                  <p className="text-slate-600">Every fisher in areas we're setup in must register their fish using our app. Tracking overfishing is a huge issue which requires significant action. Regardless of scale, all fisheries must cooperate. They take a photo of their catch and it identifies the species, the weight of the fish, and tracks the location using GPS & satellite sensors.   </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-coral-green/10 p-3 rounded-full">
                  <i className="fas fa-leaf text-coral-green text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ocean-deep mb-2">Boxing and Shipping Fish</h3>
                  <p className="text-slate-600">Every fisher can order standardized boxes that have tamper-proof scales. These scales ensure that no extra fish is added after the fish are registered. The app then creates a QR code associated with that catch that can be stuck onto the box. This QR code is linked to the catch and is used for verication at point-of-sale and beyond. </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-ocean-light/20 p-3 rounded-full">
                  <i className="fas fa-globe text-ocean-surface text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ocean-deep mb-2">In the Hands of Consumers</h3>
                  <p className="text-slate-600">When customers buy the fish, they can check where the fish came from, how it was caught, and other details by scanning the QR code. Authorities can use this same code to verify the legality of fish through random checks, which is what stops black markets from popping up as a result of our solution.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse marine life underwater ecosystem" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ocean-deep">90%</div>
                  <div className="text-sm text-slate-600">of large fish gone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-20 bg-ocean-deep text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Challenge We Face</h2>
            <p className="text-xl text-ocean-light max-w-2xl mx-auto">
              Understanding the scale of overfishing through data and science
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-coral-green mb-4">3 billion</div>
              <div className="text-lg">People depend on fish for protein globally</div>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-ocean-light mb-4">1 in 3</div>
              <div className="text-lg">Fishermen overfish</div>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-yellow-400 mb-4">$246B</div>
              <div className="text-lg">Annual profit from fishing</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
