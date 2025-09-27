import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NewsletterForm from '@/components/forms/NewsletterForm';
import Footer from '@/components/sections/Footer';
import TestimonialCard from '@/components/ui/TestimonialCard';

const Home = () => {
  // Data for the Why Precious Metals section
  const whyMetalsData = [
    {
      title: "Hedge Against Inflation",
      description: "Precious metals have historically maintained their value during economic uncertainty and inflationary periods.",
      icon: (
        <svg className="w-8 h-8 text-limed-oak" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Portfolio Diversification",
      description: "Adding metals to your portfolio reduces risk by diversifying beyond traditional assets like stocks and bonds.",
      icon: (
        <svg className="w-8 h-8 text-limed-oak" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Tangible Asset Ownership",
      description: "Unlike digital assets, physical metals provide real ownership of a tangible commodity with intrinsic value.",
      icon: (
        <svg className="w-8 h-8 text-limed-oak" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Store of Value",
      description: "Precious metals have been recognized as a store of value for thousands of years, transcending currencies and economies.",
      icon: (
        <svg className="w-8 h-8 text-limed-oak" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Crisis Insurance",
      description: "During economic crises, precious metals often rise in value when paper assets decline.",
      icon: (
        <svg className="w-8 h-8 text-limed-oak" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Industrial Demand",
      description: "Metals like silver and platinum have significant industrial uses, creating consistent demand.",
      icon: (
        <svg className="w-8 h-8 text-limed-oak" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  // Data for the Product Showcase section - featured affiliate program
  const featuredProduct = {
    title: "Premium Gold IRA",
    description: "Transform your retirement savings with our tax-advantaged precious metals IRA featuring physical gold storage.",
    tag: "IRA Special",
    features: [
      "IRS-Approved Custodian",
      "Secure Storage",
      "Tax Advantages",
      "No Setup Fee"
    ]
  };

  // Additional products data
  const productData = [
    {
      title: "Gold Bars",
      description: "Secure your wealth with our certified gold bars, available in various sizes.",
      image: "/placeholder-gold.jpg",
      tag: "Popular"
    },
    {
      title: "Silver Coins",
      description: "Invest in beautiful, certified silver coins from reputable mints.",
      image: "/placeholder-silver.jpg",
      tag: "New"
    },
    {
      title: "Platinum",
      description: "Diversify with platinum - rarer than gold and essential for industry.",
      image: "/placeholder-platinum.jpg",
      tag: "Exclusive"
    },
    {
      title: "Palladium",
      description: "High-demand industrial metal with limited supply and growing applications.",
      image: "/placeholder-palladium.jpg",
      tag: "Hot Item"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Robert Chen",
      role: "Retired Engineer",
      content: "I've been investing with MetalShares for 5 years. The peace of mind knowing my portfolio has tangible assets is invaluable.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Financial Advisor",
      content: "I recommend MetalShares to my clients looking for portfolio diversification. Their storage security is top-notch.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      content: "The customer service is excellent and their educational resources helped me understand the benefits of precious metals investing.",
      rating: 4
    },
    {
      name: "Jennifer Liu",
      role: "Teacher",
      content: "As someone new to investing, I appreciated the clear explanations and transparent pricing. My portfolio is now more stable.",
      rating: 5
    }
  ];

  // Trust indicators
  const trustData = [
    { value: "99.9%", label: "Purity Guarantee" },
    { value: "24/7", label: "Monitoring" },
    { value: "10K+", label: "Happy Investors" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-spring-wood">
      <Head>
        <title>MetalShares - Invest in Physical Metals with Confidence</title>
        <meta name="description" content="Secure your financial future with our premium precious metals investment platform." />
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org markup for FinancialProduct */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "MetalShares Precious Metals Investment",
              "description": "Invest in physical precious metals with our secure platform",
              "serviceType": "Investment Service",
              "provider": {
                "@type": "Organization",
                "name": "MetalShares",
                "url": "https://metalshares.example.com",
                "logo": "https://metalshares.example.com/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Investment St",
                  "addressLocality": "Financial District",
                  "addressRegion": "CA",
                  "postalCode": "94107",
                  "addressCountry": "US"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "Variable",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "MetalShares"
                }
              },
              "areaServed": "US",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://metalshares.example.com"
              }
            })
          }}
        />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Precious Metals Section */}
        <section 
          id="why-metals"
          className="py-20 bg-gradient-to-b from-spring-wood to-surf-crest"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-everglade font-serif mb-4">
                Why Invest in <span className="text-limed-oak">Precious Metals</span>
              </h2>
              <p className="text-como max-w-2xl mx-auto">
                Diversify your portfolio with tangible assets that have preserved wealth for thousands of years.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyMetalsData.map((item, index) => (
              <Card key={index} className="glass-effect min-h-[220px]">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-everglade">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-como">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4">
                    <button className="text-everglade hover:text-limed-oak font-medium flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </section>

        {/* Featured Product - Affiliate Program */}
        <section 
          id="products"
          className="py-20 bg-gradient-to-b from-surf-crest to-stark-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-everglade font-serif mb-4">
                Our <span className="text-limed-oak">Featured Program</span>
              </h2>
              <p className="text-como max-w-2xl mx-auto">
                Consider our top investment opportunity with special benefits.
              </p>
            </div>
            
            {/* Featured Affiliate Product */}
            <div className="max-w-4xl mx-auto mb-20">
              <Card className="glass-effect overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 flex items-center justify-center bg-de-york/20">
                    <div className="bg-surf-crest rounded-xl w-full h-64 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="bg-limed-oak text-spring-wood text-xs font-bold px-3 py-1 rounded-full">
                          {featuredProduct.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-everglade mt-3">{featuredProduct.title}</h3>
                      </div>
                      <div className="bg-green-100 text-everglade text-xs font-bold px-3 py-1 rounded-full">
                        AFFILIATE
                      </div>
                    </div>
                    <p className="text-como mb-6">{featuredProduct.description}</p>
                    <div className="mb-6">
                      <h4 className="font-bold text-everglade mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {featuredProduct.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg className="w-5 h-5 text-everglade mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-como">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-everglade hover:bg-como text-spring-wood font-medium py-3 px-6 rounded-full transition-colors duration-300">
                        Learn More
                      </button>
                      <button className="border-2 border-everglade text-everglade hover:bg-everglade hover:text-spring-wood font-medium py-3 px-6 rounded-full transition-colors duration-300">
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Additional Products Grid */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-everglade font-serif mb-4">
                More <span className="text-limed-oak">Investment Options</span>
              </h3>
              <p className="text-como max-w-xl mx-auto">
                Explore our complete selection of precious metals investment products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productData.map((product, index) => (
                <Card key={index} className="glass-effect overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative">
                    <div className="bg-surf-crest h-40 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="absolute top-3 right-3 bg-limed-oak text-spring-wood text-xs font-bold px-2 py-1 rounded-full">
                      {product.tag}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-everglade">{product.title}</CardTitle>
                    <CardDescription className="text-como">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="w-full bg-everglade hover:bg-como text-spring-wood font-medium py-2.5 rounded-full transition-colors duration-300 text-sm">
                      View Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust/Social Proof Section */}
        <section 
          id="trust"
          className="py-20 bg-gradient-to-b from-stark-white to-pot-pourri"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-everglade font-serif mb-4">
                Why <span className="text-limed-oak">Trusted</span> by Thousands
              </h2>
              <p className="text-como max-w-2xl mx-auto">
                Our track record speaks for itself. Here's what makes us reliable.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {trustData.map((item, index) => (
                <Card key={index} className="glass-effect text-center p-6 bg-spring-wood/50 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-everglade font-serif mb-2">{item.value}</div>
                  <div className="text-como">{item.label}</div>
                </Card>
              ))}
            </div>
            
            {/* Testimonials */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-everglade font-serif mb-4">
                  What Our <span className="text-limed-oak">Clients Say</span>
                </h3>
                <p className="text-como max-w-xl mx-auto">
                  Don't just take our word for it. Hear from real investors who trust us.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    className="glass-effect"
                  />
                ))}
              </div>
            </div>
            
            {/* Security Info Card */}
            <div className="max-w-4xl mx-auto">
              <Card className="glass-effect p-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <div className="bg-surf-crest rounded-full w-24 h-24 flex items-center justify-center">
                      <svg className="w-12 h-12 text-everglade" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-2/3 text-center md:text-left">
                    <h3 className="text-xl font-bold text-everglade mb-2">Secure Storage & Insurance</h3>
                    <p className="text-como mb-4">
                      All metals are stored in fully insured, high-security vaults with 24/7 monitoring. 
                      Your investment is protected with the highest industry standards.
                    </p>
                    <button className="text-everglade hover:text-limed-oak font-medium flex items-center justify-center md:justify-start">
                      Learn about our security measures
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section - Mid Page */}
        <section 
          id="newsletter"
          className="py-20 bg-gradient-to-b from-pot-pourri to-spring-wood"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-everglade font-serif mb-4">
                Market Insights & Updates
              </h2>
              <p className="text-como mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly market analysis, investment tips, and exclusive offers.
              </p>
              
              <div className="max-w-2xl mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;