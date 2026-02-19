"use client";

import { FaShareFromSquare, IoExitOutline, PiDevicesFill } from '@/lib/icons';
import { useState } from 'react';
import QRCode from 'react-qr-code';

const Index: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const qrCodeURL = "https://khalifa.studio/";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const shareQRCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Share My Profile',

        url: qrCodeURL,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Web Share API is not supported in this browser. You can manually share the QR code.');
    }
  };

  return (
    <div className='relative'>
      <PiDevicesFill
        className="text-[32px] font-bold cursor-pointer text-black hover:text-[#bef264]"
        onClick={openModal}
        aria-label="Open QR code modal"
      />
      <span className="absolute inline-flex items-center justify-center top-1.5 left-0.5 h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1 w-1 bg-[#000000]"></span>
      </span>

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="fixed inset-0 transition-opacity  backdrop-blur" onClick={closeModal}></div>
          <div className="flex items-center justify-center min-h-screen">
            <div className="blur-container relative z-10 bg-background rounded-2xl ">
              <div className=" px-6 py-2  ">
                <div className="flex justify-end mb-1 ">

                </div>
                <div className="flex flex-col justify-center">
                  <QRCode value={qrCodeURL} size={200} />
                  <div className='flex justify-between mt-2 text-black'>
                    <p>Share My Profile!</p>
                    <FaShareFromSquare
                      className="text-xl cursor-pointer text-black"
                      onClick={shareQRCode}
                      aria-label="Share QR code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
