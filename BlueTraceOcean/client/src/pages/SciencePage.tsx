

const SciencePage = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gradient-to-b from-white to-ocean-shallow/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Ocean Science & Marine Biology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the scientific principles behind marine ecosystems, food chains, and the biological impact of overfishing
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                  alt="Vibrant coral reef ecosystem with diverse marine life" 
                  className="w-full h-40 object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3">Ecology</h3>
              <p className="text-slate-600 mb-4">
              By restricting overfishing,   we are protecting fish populations from collapsing and allowing ecosystems to function naturally, as well as helping biodiversity,  and maintaining balanced, resilient ecosystems.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                  alt="Ocean scene showing environmental impact of fishing practices" 
                  className="w-full h-40 object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3">Electricity</h3>
              <p className="text-slate-600 mb-4">
              In our box prototype we included a circuit. We used the circuit making skills that we learned in class to make our boxes as energy efficient as we could. We used copper wires as well as a rubber insulator and sealant to protect it from seawater, and weight scales that use the least amount of energy to extend battery life.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                  alt="Climate change effects on marine ecosystems" 
                  className="w-full h-40 object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3">Chemistry</h3>
              <p className="text-slate-600 mb-4">
              By reducing overfishing, the balance of marine life is maintained, which helps control the exchange of gases like carbon dioxide and oxygen because marine ecosystems absorb CO2 and release O2. 
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                  alt="Scientific monitoring equipment and underwater sensors" 
                  className="w-full h-40 object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3">Astronomy
</h3>
              <p className="text-slate-600 mb-4">
              Our app includes a map, a map that uses satellite data to map out restricted fishing zones, and areas that have been overfished. Another feature, tracks ocean tides caused by the moon and puts the prediction in the app, allowing for efficient and safe fishing.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;
