// "use client";
// import React from 'react';
// import { UserButton, useUser, SignInButton, useAuth } from "@clerk/nextjs";
// import Link from 'next/link';
// import Image from 'next/image';

// const LandingPage: React.FC = () => {
//     const { isLoaded, userId } = useAuth();
//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   const isSignedIn = !!userId;

//   return (
//     <div className="min-h-screen bg-gray-100">
//     <header className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <div className="flex items-center">
//             <Image src="/logo.svg" alt="AI Content Generator" width={50} height={50} />
//         </div>
//         {isSignedIn ? (
//           <UserButton afterSignOutUrl="/"/>
//         ) : (
//           <SignInButton mode="modal">
//             <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               Login
//             </button>
//           </SignInButton>
//         )}
//       </div>
//     </header>

//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="text-center">
//         <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//           <span className="block">AI Content Generator</span>
//         </h1>
//         <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//           Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
//         </p>
//         <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
//           {isSignedIn ? (
//             <div className="rounded-md shadow">
//               <Link href="/dashboard" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
//                 Go to Dashboard
//               </Link>
//             </div>
//           ) : (
//             <>
//               <div className="rounded-md shadow">
//                 <SignInButton mode="modal">
//                   <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
//                     Get Started
//                   </button>
//                 </SignInButton>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//         {/* Feature section remains the same */}
//         <div className="mt-16">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               { icon: "📄", title: "20+ templates", description: "Responsive, and mobile-first project on the web" },
//               { icon: "🔧", title: "Customizable", description: "Components are easily customized and extendable" },
//               { icon: "📚", title: "Free to Use", description: "Every component and plugin is well documented" },
//               { icon: "🛠", title: "24/7 Support", description: "Contact us 24 hours a day, 7 days a week" },
//             ].map((feature, index) => (
//               <div key={index} className="pt-6">
//                 <div className="flow-root bg-white rounded-lg px-6 pb-8">
//                   <div className="-mt-6">
//                     <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-white text-3xl">
//                       {feature.icon}
//                     </div>
//                     <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
//                     <p className="mt-5 text-base text-gray-500">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default LandingPage;


"use client";
import React, { useState, useEffect } from 'react';
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const { isLoaded, userId } = useAuth();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const isSignedIn = !!userId;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-200">
      <header className="bg-white bg-opacity-90 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="AI Content Generator" width={50} height={50} />
          </div>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/"/>
          ) : (
            <SignInButton mode="modal">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
                Login
              </button>
            </SignInButton>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            <span className="block">Generator Genie</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl">
          Create captivating, high-quality text effortlessly with our AI-driven platform—saving you time and unlocking your creative potential in seconds.
          </p>
          <motion.div 
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSignedIn ? (
              <Link href="/dashboard" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition duration-300 shadow-lg hover:shadow-xl">
                Explore the Dashboard
              </Link>
            ) : (
              <SignInButton mode="modal">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </SignInButton>
            )}
          </motion.div>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📄", title: "Diverse Templates", description: "Choose from 20+ ready-to-use templates designed to meet your unique needs, from blogs to business content." },
              { icon: "🔧", title: "Fully Customizable", description: "Tailor every element with ease-whether text, style, or structure-so your content feels just right." },
              { icon: "📚", title: "Free and Accessible", description: "Enjoy seamless access to well-documented tools without any cost barriers." },
              { icon: "🛠", title: "Always Here to Help", description: "Round-the-clock support, ensuring your creative flow never hits a roadblock." },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div>
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg text-white text-3xl mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-4 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

