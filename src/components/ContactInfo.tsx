import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from './Header';

const ContactInfo = () => {
  return (
    <> 
    <div className="bg-gray-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mr-4">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="text-lg font-medium">India Location</h4>
            <p className="text-gray-600 mt-1">
              TopNotch Solutions, 506 Manjeera Majestic Commercial, Hyderabad, Telangana 500072
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium">US Location</h4>
            <p className="text-gray-600 mt-1">
              941 W Morse Blvd, Suite#100 Winter Park, FL 32789
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mr-4">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="text-lg font-medium">Phone Number</h4>
            <p className="text-gray-600 mt-1">
              +91 9666736088
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mr-4">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="text-lg font-medium">Email Address</h4>
            <p className="text-gray-600 mt-1">
              info@topnotchsol.com
            </p>
          </div>
        </div>
        
      </div>
    </div> 
    </>
    
  );
};

export default ContactInfo;