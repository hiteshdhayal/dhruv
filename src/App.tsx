import React from 'react';
import { Camera, Mail, Phone, ExternalLink } from 'lucide-react';

function App() {
  const portfolioItems = [
    {
      title: "Parties",
      url: "https://www.instagram.com/reel/DENz_shT07x/?igsh=YnN3aG4zdnZ6aXl2",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Food for Soul",
      url: "https://www.instagram.com/reel/DHvKIqZhXB8/?igsh=MXRhOHl3dTRiaGZsaA==",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Cultural Events",
      url: "https://www.instagram.com/reel/DHkq79Mh3wf/?igsh=azNseWZibnQxNDFo",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Hotels",
      url: "#",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Small Business",
      url: "https://www.instagram.com/reel/DLHhq_4PB0d/?igsh=MXJueHFjODEwMG45Yw==",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Education",
      url: "https://www.instagram.com/reel/DJBqWGXTwLO/?igsh=MWNhOWpmOWd6a2x0eA==",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Jewellery",
      url: "https://www.instagram.com/reel/DF2WN9dz_88/?igsh=NmU2ZmRqZjhnOG4y",
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Influencers",
      url: "https://www.instagram.com/reel/DKmr-3uyk22/?igsh=dHl4NnppbDdxejl2",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const handleCardClick = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Header */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-800/50 to-stone-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-wider mb-8 text-amber-100 drop-shadow-2xl">
            CUTCRAFTS
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-4 text-stone-200">
            by Dhruv Kaushik
          </p>
          <div className="text-3xl md:text-5xl font-bold tracking-wide text-amber-200">
            <p>Capture the Moment,</p>
            <p className="text-4xl md:text-6xl mt-2">Make it <span className="text-amber-300">IMMORTAL</span></p>
          </div>
        </div>
      </header>

      {/* Portfolio Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 text-stone-800 tracking-wide">
          Our Journey So Far
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item.url)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  {item.url !== "#" && (
                    <ExternalLink className="text-amber-300 w-5 h-5" />
                  )}
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-stone-50 to-amber-50">
                <h3 className="text-stone-800 text-lg font-semibold tracking-wide text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/public/WhatsApp Image 2025-07-19 at 17.33.39.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-800/70 to-stone-900/90"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <div className="flex justify-center mb-8">
            <Camera className="w-16 h-16 text-amber-300" />
          </div>
          
          <h3 className="text-4xl md:text-6xl font-bold mb-4 text-amber-200 tracking-wide">
            Magician at Work
          </h3>
          <p className="text-2xl md:text-3xl font-light mb-12 text-stone-200 tracking-wide">
            Dhruv Kaushik
          </p>
          
          <div className="space-y-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 text-lg">
              <Mail className="w-6 h-6 text-amber-300" />
              <a 
                href="mailto:kaushikdhruv002@gmail.com"
                className="text-stone-200 hover:text-amber-300 transition-colors duration-300 tracking-wide"
              >
                kaushikdhruv002@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-lg">
              <Phone className="w-6 h-6 text-amber-300" />
              <a 
                href="tel:7056689697"
                className="text-stone-200 hover:text-amber-300 transition-colors duration-300 tracking-wide"
              >
                +91 7056689697
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-stone-600">
            <p className="text-stone-400 text-sm tracking-wide">
              © 2025 CUTCRAFTS. Capturing moments, creating memories.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;