import React from 'react';
import '../App.css';

const Content = () => {
  return (
    <main style={{ padding: '20px' }}>
      {/* Hero Section */}
      <br /><br />
      <section style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>Website Pembelajaran <br />
        Sekolah Daring</h1>
        <div className="circles">
          <div className="circle">
            <img src="https://source.unsplash.com/random/200x200" alt="Circle 1" />
          </div>
          <div className="circle">
            <img src="https://source.unsplash.com/random/200x200" alt="Circle 2" />
          </div>
          <div className="circle">
            <img src="https://source.unsplash.com/random/200x200" alt="Circle 3" />
          </div>
          <div className="circle">
            <img src="https://source.unsplash.com/random/200x200" alt="Circle 4" />
          </div>
          <div className="circle">
            <img src="https://source.unsplash.com/random/200x200" alt="Circle 5" />
          </div>
        </div>
        <div className="content">
          <p>
            Is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more
          </p>
          <button className="button" style={{ backgroundColor: '#86d8c6', color: 'white' }}>Get started</button>
        </div>
      </section>

                <div className="ca" style={{ backgroundColor: '#A9A9A9' }}>
                  <h2>How Can I Help?</h2>
                  <div style={{ 
                    
                  
                  }}>
                    <h1 style={{ 
            fontSize: '3em', 
            fontWeight: 'bold', 
            marginTop: '10px', 
            color: '#333',
            textAlign   : 'left',
            width: '400%',
            marginBottom: '0',
            position: 'relative', // memungkinkan pergeseran
            left: '-150px', // geser horizontal
            fontFamily: 'Garamond, sans-serif', // gunakan font yang diinginkan
          }}>
            Crafting Brand Triumph
          </h1>

          <h3 style={{ 
            fontSize: '3em', 
            fontWeight: 'bold', 
            marginTop: '10px', 
            color: '#333',
            textAlign: 'right',
            width: '100%',
            marginBottom: '0',
            position: 'relative', // memungkinkan pergeseran
            right: '-150px', // geser horizontal
            fontFamily: 'Times, sans-serif', // gunakan font yang diinginkan
          }}>
            Through UI/UX Design
          </h3>
        </div>
        {/* no 2 */}
        <div className="cards">
          <div className="card">
            <div className="circle" />
            <h3>Judul Section</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
              purus lectus malesuada libero, sit amet commodo magna eros quis
              urna.
            </p>
          </div>
          <div className="card">
            <div className="circle" />
            <h3>Judul Section</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
              purus lectus malesuada libero, sit amet commodo magna eros quis
              urna.
            </p>
          </div>
          <div className="card">
            <div className="circle" />
            <h3>Judul Section</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
              purus lectus malesuada libero, sit amet commodo magna eros quis
              urna.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section style={{ textAlign: 'center', background: '#e9ecef', padding: '40px 0', margin: '20px 0' }}>
        <h2>Crafting Brand Triumph Through UI/UX Design</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div>
            <h4>Solid Service</h4>
            <p>Provide reliable and scalable solutions for your needs.</p>
          </div>
          <div>
            <h4>Expert Guidance</h4>
            <p>Get professional advice for your digital projects.</p>
          </div>
          <div>
            <h4>Timely Support</h4>
            <p>Receive assistance and maintenance when you need it.</p>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section style={{ textAlign: 'center', padding: '40px 0', margin: '20px 0' }}>
        <h2>Be Prepared For The Mountains And Beyond!</h2>
        <p>Explore our resources and get ready for your next adventure.</p>
      </section>

      {/* Other Content */}
      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '40px 0', margin: '20px 0' }}>
        <div>
          <h4>What level of hiker are you?</h4>
          <p>Find the best hiking gear tailored to your skill level.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Hiking" />
        </div>
      </section>
    </main>
  );
};

export default Content;
