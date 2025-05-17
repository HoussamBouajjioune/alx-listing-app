import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="A modern Airbnb clone listing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to ALX Listing App</h1>
        
        {/* Sample Card Component */}
        <div className="flex justify-center">
          <Card
            title="Modern Apartment"
            description="A cozy apartment in the city center."
            imageUrl="/assets/sample-property.jpg"
          />
        </div>

        {/* Sample Button */}
        <div className="flex justify-center mt-6">
          <Button label="Explore Listings" onClick={() => alert('Button clicked!')} />
        </div>
      </main>
    </>
  );
}
