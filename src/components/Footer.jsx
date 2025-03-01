import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
    <div>
      <p>&copy; 2025 KUMAR Store. All Rights Reserved.</p>
    </div>
    <div className="mt-4">
      <a href="/privacy-policy" className="text-white mx-4 hover:underline">Privacy Policy</a>
      <a href="/terms-of-service" className="text-white mx-4 hover:underline">Terms of Service</a>
    </div>
    <div className="mt-4">
      <p>Follow us on:</p>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:underline">Twitter</a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:underline">Facebook</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:underline">LinkedIn</a>
    </div>
  </footer>
  )
}

export default Footer