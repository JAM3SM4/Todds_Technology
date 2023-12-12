// components/Main/Main.js

import React from 'react';

const Main = () => (
  <main>
    <div className="quadrant" onClick={() => alert('Navigate to About Us')}>
      {/* Placeholder Image for Quadrant */}
    </div>
    <div className="quadrant" onClick={() => alert('Navigate to Education & Training')}>
      {/* Placeholder Image for Quadrant */}
    </div>
    <div className="quadrant" onClick={() => alert('Navigate to Services')}>
      {/* Placeholder Image for Quadrant */}
    </div>
    <div className="quadrant" onClick={() => alert('Navigate to Contact Us')}>
      {/* Placeholder Image for Quadrant */}
    </div>
  </main>
);

export default Main;
