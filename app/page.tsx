'use client';

import { useState } from 'react';
import { ShoppingCart, X, CheckCircle2, MessageCircle, Zap, Send } from 'lucide-react';

// Data extracted from the image
const WHATSAPP_NUMBER = '6285211527292'; // Ganti nomor ini dengan nomor WhatsApp Anda (Gunakan kode negara, contoh: 62 untuk Indonesia)
const TELEGRAM_USERNAME = 'ApakestoreAdmin'; // Ganti dengan username Telegram Anda (tanpa @)

const products = [
  { id: '1', name: 'STRICK BR REGE', color: 'bg-[#FF90E8]' },
  { id: '2', name: 'HEXBLADE', color: 'bg-[#FFC900]' },
  { id: '3', name: 'XTFFH4X V4 FF', color: 'bg-[#00E5FF]' },
  { id: '4', name: 'ELEVEN', color: 'bg-[#FF4911]' },
  { id: '5', name: 'BR MODS V5', color: 'bg-[#33FF00]' },
  { id: '6', name: 'SPOTIFY', color: 'bg-[#FF90E8]' },
  { id: '7', name: 'BEYOND CHEATS', color: 'bg-[#FFC900]' },
  { id: '8', name: 'XITHAX PUBG', color: 'bg-[#00E5FF]' },
  { id: '9', name: 'EAGLE', color: 'bg-[#FF4911]' },
  { id: '10', name: 'LKTEAM', color: 'bg-[#33FF00]' },
  { id: '11', name: 'MATRIX', color: 'bg-[#FF90E8]' },
  { id: '12', name: 'EVO CHEATS', color: 'bg-[#FFC900]' },
];

const prices = [
  { duration: '1 day', idr: '10k', usd: '1$' },
  { duration: '3 day', idr: '30k', usd: '2$' },
  { duration: '5 day', idr: '40k', usd: '3$' },
  { duration: '7 day', idr: '50k', usd: '4$' },
  { duration: '10 day', idr: '60k', usd: '5$' },
  { duration: '15 day', idr: '70k', usd: '6$' },
  { duration: '30 day', idr: '100k', usd: '10$' },
  { duration: '365 day', idr: '300k', usd: '25$' },
];

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<typeof prices[0] | null>(null);

  const handleBuy = () => {
    if (!selectedProduct || !selectedPrice) return;
    
    const text = `Halo min, saya ingin membeli:\n\n🛒 *Produk:* ${selectedProduct.name}\n⏳ *Durasi:* ${selectedPrice.duration}\n💰 *Harga:* ${selectedPrice.idr} / ${selectedPrice.usd}\n\nApakah masih tersedia?`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
  };

  const handleBuyTelegram = () => {
    if (!selectedProduct || !selectedPrice) return;
    
    const text = `Halo min, saya ingin membeli:\n\n🛒 *Produk:* ${selectedProduct.name}\n⏳ *Durasi:* ${selectedPrice.duration}\n💰 *Harga:* ${selectedPrice.idr} / ${selectedPrice.usd}\n\nApakah masih tersedia?`;
    const encodedText = encodeURIComponent(text);
    const tgUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedText}`;
    
    window.open(tgUrl, '_blank');
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 font-inter">
      {/* Header */}
      <header className="mb-12 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-space">
            APAKESTORE
          </h1>
          <div className="flex items-center gap-2 mt-2 border-t-4 border-black pt-2 w-max">
            <Zap className="w-5 h-5 fill-black" />
            <p className="text-lg md:text-xl font-bold uppercase">
              Premium Cheats & Mods
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-[#FFC900] border-4 border-black px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-transform">
          <ShoppingCart className="w-6 h-6" strokeWidth={3} />
          <span className="font-black text-xl tracking-wide">100% TRUSTED</span>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setSelectedProduct(product);
              setSelectedPrice(null);
            }}
            className={`group cursor-pointer border-4 border-black ${product.color} p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between min-h-[360px]`}
          >
            <h2 className="text-2xl font-black uppercase leading-tight font-space break-words border-b-4 border-black pb-4 mb-4">
              {product.name}
            </h2>
            
            <div className="flex-1 flex items-center justify-center relative w-full min-h-[160px] mb-6 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group-hover:bg-black group-hover:text-[#33FF00] transition-colors duration-300">
              <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-space transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 text-center leading-none">
                FREE<br/>FIRE
              </span>
            </div>

            <div className="flex justify-between items-end mt-auto">
              <span className="font-bold bg-white border-4 border-black px-3 py-1.5 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white transition-colors">
                LIHAT HARGA
              </span>
              <div className="w-12 h-12 rounded-full border-4 border-black bg-white flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0 ml-2">
                <ShoppingCart className="w-5 h-5" strokeWidth={3} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
        <p className="text-2xl md:text-4xl font-black uppercase font-space tracking-widest">
          APAKESTORE ©2026
        </p>
      </footer>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className={`p-6 md:p-8 border-b-4 border-black flex justify-between items-center sticky top-0 z-10 ${selectedProduct.color}`}>
              <h2 className="text-3xl md:text-5xl font-black uppercase font-space leading-none">
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none shrink-0 ml-4"
              >
                <X className="w-8 h-8" strokeWidth={3} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 bg-[#f4f4f0]">
              <div className="mb-6 inline-flex items-center gap-2 bg-black text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(200,200,200,1)]">
                <CheckCircle2 className="w-6 h-6 text-[#33FF00]" strokeWidth={3} />
                <h3 className="text-xl font-black uppercase tracking-wide">
                  PILIH DURASI & HARGA
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {prices.map((price, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedPrice(price)}
                    className={`cursor-pointer border-4 border-black p-4 flex justify-between items-center transition-all ${
                      selectedPrice === price
                        ? 'bg-[#33FF00] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1'
                        : 'bg-white hover:bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5'
                    }`}
                  >
                    <span className="font-black text-xl md:text-2xl font-space">{price.duration}</span>
                    <div className="text-right">
                      <div className="font-black text-xl md:text-2xl">{price.idr}</div>
                      <div className="font-bold text-gray-700 text-sm border-t-2 border-black mt-1 pt-1">{price.usd}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              {selectedPrice ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleBuy}
                    className="flex-1 py-4 border-4 border-black text-xl md:text-2xl font-black uppercase flex items-center justify-center gap-2 transition-all font-space bg-[#33FF00] hover:bg-[#FF90E8] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2 active:shadow-none text-black"
                  >
                    <MessageCircle className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                    WHATSAPP
                  </button>
                  <button
                    onClick={handleBuyTelegram}
                    className="flex-1 py-4 border-4 border-black text-xl md:text-2xl font-black uppercase flex items-center justify-center gap-2 transition-all font-space bg-[#00E5FF] hover:bg-[#FFC900] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2 active:shadow-none text-black"
                  >
                    <Send className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                    TELEGRAM
                  </button>
                </div>
              ) : (
                <button
                  disabled
                  className="w-full py-5 border-4 border-black text-2xl md:text-3xl font-black uppercase flex items-center justify-center gap-4 transition-all font-space bg-gray-200 text-gray-400 cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  <ShoppingCart className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
                  PILIH HARGA DULU
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
