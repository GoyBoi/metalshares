import React from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/sections/Navbar';

const ProductsPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: "Gold Bars",
      description: "Secure your wealth with our certified gold bars, available in various sizes from 1 gram to 1 kilogram.",
      features: [
        "99.99% purity",
        "Certified authenticity",
        "Secure storage options",
        "IRA eligible"
      ],
      tag: "Popular",
      image: "/placeholder-gold.jpg"
    },
    {
      id: 2,
      title: "Silver Coins",
      description: "Invest in beautiful, certified silver coins from reputable mints around the world.",
      features: [
        "Government minted",
        "99.9% purity",
        "Collectible designs",
        "Affordable entry point"
      ],
      tag: "Best Value",
      image: "/placeholder-silver.jpg"
    },
    {
      id: 3,
      title: "Platinum",
      description: "Diversify with platinum - rarer than gold and essential for industrial applications.",
      features: [
        "99.95% purity",
        "Industrial demand",
        "Limited supply",
        "Portfolio diversification"
      ],
      tag: "Exclusive",
      image: "/placeholder-platinum.jpg"
    },
    {
      id: 4,
      title: "Palladium",
      description: "High-demand industrial metal with limited supply and growing automotive applications.",
      features: [
        "99.95% purity",
        "Automotive catalyst",
        "Supply constraints",
        "Growth potential"
      ],
      tag: "Hot Item",
      image: "/placeholder-palladium.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-spring-wood dark:bg-dark-bg transition-colors duration-300">
      <Navbar />
      <Head>
        <title>MetalShares - Premium Precious Metals Products</title>
        <meta name="description" content="Explore our premium selection of certified precious metals products including gold bars, silver coins, platinum, and palladium." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-spring-wood to-surf-crest dark:from-dark-bg dark:to-dark-card transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-everglade font-serif mb-6 dark:text-dark-text">
                Premium <span className="text-limed-oak dark:text-dark-limed-oak">Precious Metals</span>
              </h1>
              <p className="text-lg md:text-xl text-como mb-8 dark:text-dark-text/90">
                Discover our curated selection of certified precious metals products. Each item is carefully chosen for quality, authenticity, and investment potential.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-everglade font-serif mb-4 dark:text-dark-text">
                Our <span className="text-limed-oak dark:text-dark-limed-oak">Precious Metals</span>
              </h2>
              <p className="text-como max-w-2xl mx-auto dark:text-dark-text/80">
                Explore our complete selection of precious metals investment products, each backed by certification and secure storage options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  className="rounded-2xl border border-everglade/20 bg-spring-wood/70 backdrop-blur-sm shadow-lg p-6 transition-all duration-300 dark:border-dark-border/30 dark:bg-dark-card hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] glass-effect overflow-hidden"
                >
                  <div className="relative">
                    <div className="bg-surf-crest h-40 flex items-center justify-center rounded-xl dark:bg-dark-surf-crest">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 dark:bg-dark-spring-wood/50" />
                    </div>
                    <div className="absolute top-3 right-3 bg-limed-oak text-spring-wood text-xs font-bold px-2 py-1 rounded-full dark:bg-dark-limed-oak dark:text-dark-spring-wood">
                      {product.tag}
                    </div>
                  </div>
                  
                  <CardHeader className="p-0 pt-3">
                    <CardTitle className="text-everglade text-xl font-bold dark:text-dark-text">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-como mt-2 dark:text-dark-text/80">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 pt-2">
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-everglade rounded-full p-1 mr-2 mt-1 dark:bg-dark-everglade">
                            <svg 
                              className="w-3 h-3 text-spring-wood dark:text-dark-spring-wood" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-sm text-como dark:text-dark-text/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="p-0 pt-4">
                    <Button className="w-full bg-limed-oak hover:bg-green-smoke text-spring-wood font-medium py-2 rounded-full transition-all duration-300 text-sm dark:bg-dark-limed-oak dark:hover:bg-dark-como dark:text-dark-spring-wood hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gradient-to-b from-surf-crest to-stark-white dark:from-dark-card dark:to-dark-bg transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-everglade font-serif mb-4 dark:text-dark-text">
                Why Choose <span className="text-limed-oak dark:text-dark-limed-oak">MetalShares</span>
              </h2>
              <p className="text-como max-w-2xl mx-auto dark:text-dark-text/80">
                Our commitment to quality, security, and transparency sets us apart in the precious metals investment industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-everglade/20 bg-spring-wood/70 backdrop-blur-sm shadow-lg p-6 glass-effect dark:border-dark-border/30 dark:bg-dark-card">
                <div className="flex items-center mb-4">
                  <div className="bg-limed-oak rounded-full p-2 mr-4 dark:bg-dark-limed-oak">
                    <svg 
                      className="w-6 h-6 text-spring-wood dark:text-dark-spring-wood" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-everglade dark:text-dark-text">Certified Authenticity</h3>
                </div>
                <p className="text-como dark:text-dark-text/80">
                  Every metal product comes with certification from reputable assayers, guaranteeing authenticity and purity.
                </p>
              </div>

              <div className="rounded-2xl border border-everglade/20 bg-spring-wood/70 backdrop-blur-sm shadow-lg p-6 glass-effect dark:border-dark-border/30 dark:bg-dark-card">
                <div className="flex items-center mb-4">
                  <div className="bg-limed-oak rounded-full p-2 mr-4 dark:bg-dark-limed-oak">
                    <svg 
                      className="w-6 h-6 text-spring-wood dark:text-dark-spring-wood" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-everglade dark:text-dark-text">Secure Storage</h3>
                </div>
                <p className="text-como dark:text-dark-text/80">
                  Your metals are stored in fully insured, high-security vaults with 24/7 monitoring and protection.
                </p>
              </div>

              <div className="rounded-2xl border border-everglade/20 bg-spring-wood/70 backdrop-blur-sm shadow-lg p-6 glass-effect dark:border-dark-border/30 dark:bg-dark-card">
                <div className="flex items-center mb-4">
                  <div className="bg-limed-oak rounded-full p-2 mr-4 dark:bg-dark-limed-oak">
                    <svg 
                      className="w-6 h-6 text-spring-wood dark:text-dark-spring-wood" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-everglade dark:text-dark-text">Transparent Pricing</h3>
                </div>
                <p className="text-como dark:text-dark-text/80">
                  No hidden fees or markups. We provide clear, competitive pricing with detailed breakdowns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-everglade to-como rounded-3xl p-12 dark:from-dark-everglade dark:to-dark-como">
              <h2 className="text-3xl md:text-4xl font-bold text-spring-wood font-serif mb-6 dark:text-dark-text">
                Ready to Start Investing?
              </h2>
              <p className="text-spring-wood/90 mb-8 text-lg max-w-2xl mx-auto dark:text-dark-text/90">
                Join thousands of investors who have secured their financial future with precious metals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-limed-oak hover:bg-green-smoke text-spring-wood font-medium py-3 px-8 rounded-full transition-all duration-300 dark:bg-dark-limed-oak dark:hover:bg-dark-green-smoke dark:text-dark-spring-wood hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  View All Products
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border border-limed-oak text-limed-oak hover:bg-limed-oak hover:text-spring-wood font-medium py-3 px-8 rounded-full transition-all duration-300 dark:border-dark-limed-oak dark:text-dark-text dark:hover:bg-dark-limed-oak dark:hover:text-dark-spring-wood hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;