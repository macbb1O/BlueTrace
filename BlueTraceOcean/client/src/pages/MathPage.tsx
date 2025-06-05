

const MathPage = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gradient-to-b from-ocean-shallow/30 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Mathematics of Ocean Conservation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore mathematical models and calculations that help us understand fishing quotas, population dynamics, and sustainable harvesting
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-ocean-surface/10 p-3 rounded-full mr-4">
                  <i className="fas fa-chart-line text-ocean-surface text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-ocean-deep">Coding</h3>
              </div>
              <p className="text-slate-600 mb-6">
              We built our prototype app client designed for the point-of-catch. This ties into the coding aspect of the math curriculum.  We learned how to work with datasets and coding, and used both of these in our app.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <code className="text-ocean-deep font-mono">//Array of fish weights (in kg)                   Math.mean([25,16,19,33]) //23.25kg

</code>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>using Datasets</li>
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Building arrays and finding weight</li>
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Storing data and lists </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-coral-green/10 p-3 rounded-full mr-4">
                  <i className="fas fa-balance-scale text-coral-green text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-ocean-deep">Data Collection and Analytics </h3>
              </div>
              <p className="text-slate-600 mb-6">
              To combat the overfishing issue, it requires a lot of data, which we need data literacy skills to understand. We had to do a lot of data collection for our app. We had to find stats like the average weight of different fish, using the 1st and 3rd quartile for the low and high weights. We collected large datasets from sources online to train our custom AI. We also did research on overfishing hotspots/   </p>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <code className="text-ocean-deep font-mono">Atlantic Cod weight = 40kg</code>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Graphing data in graphs and tables</li>
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Analyzing average weights of fish</li>
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Comparing data tables</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <i className="fas fa-chart-area text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-ocean-deep">Financial Literacy</h3>
              </div>
              <p className="text-slate-600 mb-6">
              We analyzed the fish market, and the effect it has on the Canadian and global markets.  We found that upwards of 30% of the fish market would be lost with the implementation of our solution. That would be a loss of almost $2.6 billion dollars. We also use a tax in our solution to deter underground markets, so we had to find the right percentage that would deter most fishers from selling illegally.      </p>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <code className="text-ocean-deep font-mono">Canada exports $8.79B worth of fish annually</code>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Analyzing the values and prices</li>
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Creating and analyzing taxes </li>
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Balancing budgets after changes</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                  <i className="fas fa-percentage text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-ocean-deep">Measurement and Geometry</h3>
              </div>
              <p className="text-slate-600 mb-6">
                We 	had design our fish storage boxes. We needed very specific measurements to align with standards so that our box would be compatible with existing infrastructure. We had to fit a precise scale into the bottom of the box that fit seamlessly so it was tamperproof. We had tolerances of just over a millimeter so that the box would be effective. 
              </p>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <code className="text-ocean-deep font-mono">1 cm thick styrofoam, followed by the 2 cm thick scale, and lastyl another 5cm thick layer of styrofoam</code>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Measure precisely</li>
                <li className="flex items-center"><i className="fas fa-check text-coral-green mr-2"></i>Use different shapes to fit in the box</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathPage;
