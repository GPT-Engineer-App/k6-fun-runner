import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const catFacts = [
  "Cats have over 20 muscles that control their ears.",
  "A group of cats is called a clowder.",
  "Cats spend 70% of their lives sleeping.",
  "A cat's nose print is unique, like a human's fingerprint.",
  "Cats can rotate their ears 180 degrees.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">All About Cats</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Did You Know?</CardTitle>
            <CardDescription>Interesting cat facts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{catFacts[factIndex]}</p>
            <Button onClick={nextFact}>Next Fact</Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cat Behavior</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Cats are known for their independent nature and curious behavior. They communicate through vocalizations, body language, and scent marking. Cats are also excellent hunters and enjoy playing, which mimics their hunting instincts.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cat Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Proper cat care includes providing a balanced diet, regular veterinary check-ups, grooming, and plenty of mental and physical stimulation. Cats also need a clean litter box and a safe, comfortable environment.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" alt="Cute cat" className="mx-auto object-cover rounded-lg shadow-md w-full h-64" />
          <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d" alt="Cat looking up" className="mx-auto object-cover rounded-lg shadow-md w-full h-64" />
        </div>
      </div>
    </div>
  );
};

export default Index;
