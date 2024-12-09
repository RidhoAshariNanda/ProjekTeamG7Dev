import React, { useState } from 'react';
import '../App.css';

const Content = () => {
  const [textStyle, setTextStyle] = useState({
    color: 'white', // Warna default
    fontSize: '24px', // Ukuran font default
    fontFamily: 'Garamond, sans-serif', // Font family default
  });

  return (
    <main> 
      {/* slider gambar */}
      <section style={{ textAlign: "center", margin: "10px 0" }}>
        <div
          id="carouselExample"
          className="carousel slide"
          style={{ position: "relative" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/1.png"
                className="d-block w-100"
                alt="..."
                style={{ objectFit: "cover", height: "600px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10%", // Posisi h1 di bagian atas
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <h1 style={{ 
                  fontSize: '3em', // Atur ukuran font di sini
                  color: 'white', // Ubah warna font di sini
                  fontFamily: 'Bold, Garamond, sans-serif' // Atur font family di sini 
                }}>
                  Website Pembelajaran <br /> Sekolah Daring
                </h1>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "10%", // Posisi teks dan tombol di bagian bawah
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "blue",
                  padding: "20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  width: "80%", // Membatasi lebar konten
                  fontSize: "24px",
                }}
              >
                <p style={{ color: textStyle.color, fontSize: textStyle.fontSize, fontFamily: textStyle.fontFamily }}>
                  Tingkatkan pengalaman belajar Anda secara daring dengan platform
                  kami yang interaktif dan mudah digunakan.
                </p>
                <button
                  style={{
                    backgroundColor: "#86d8c6",
                    color: "white",
                    padding: "10px 10px",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Get started
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/2.jpeg"
                className="d-block w-100"
                alt="..."
                style={{ objectFit: "cover", height: "400px" }}
              />
               <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <h1>Innovation & Energetic</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/3.jpeg"
                className="d-block w-100"
                alt="..."
                style={{ objectFit: "cover", height: "400px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <h1>Interaktif & Mudah</h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
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
      <div className="container"> 
        <div className="card-container">
          <div className="card">
            <div className="icon">🎨</div>
            <h3>Craft Exception UIUX Designs</h3>
          </div>
          <div className="card">
            <div className="icon">💻</div>
            <h3>From Design To Dynamic Landing Pages</h3>
          </div>
          <div className="card">
            <div className="icon">🚀</div>
            <h3>Seamless Frontend Development</h3>
          </div>
        </div>
        <div className="text-center" style={{ margin: '20px 0' }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
{/* ke 4 */}
    <div 
      className="app-container" 
      style={{ backgroundColor: '#A9A9A9', margin: '20px 0' }}
    >
      <div className="app-card">
        <div className="app-card-body">
          <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more →</button>
        </div>
      </div>
      <div className="app-card">
        <div className="app-card-body">
        <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more →</button>
        </div>
      </div>
      <div className="app-card">
        <div className="app-card-body">
        <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more →</button>
        </div>
      </div>
      <div className="app-card">
        <div className="app-card-body">
        <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more →</button>
        </div>
      </div>
      {/* Tambahan 4 kartu berikut */}
      <div className="app-card">
        <div className="app-card-body">
        <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more </button>
        </div>
      </div>
      <div className="app-card">
        <div className="app-card-body">
        <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more →</button>
        </div>
      </div>
      <div className="app-card">
        <div className="app-card-body">
        <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more →</button>
        </div>
      </div>
      <div className="app-card">
        <div className="app-card-body">
        <h4 style={{ 
            fontSize: '1.5em', // Ukuran font
            fontWeight: 'bold', // Ketebalan font
            color: '#333', // Warna teks
            marginBottom: '10px', // Jarak bawah
            textAlign: 'center', // Rata tengah
            fontFamily: 'Times, sans-serif',
          }}>ABC</h4>
          <img src="/logo.png" alt="Card Image" className="app-card-img" />
          <p className="app-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="app-read-more">read more →</button>
        </div>
      </div> 
    </div>

    {/* ke 5 */}
        <div className="hiking-container">
          <div className="hiking-text">
            <div className="hiking-guide">---------------------- A LEARNING JOURNEY</div>
            <h1 className="hiking-title">Be Ready to Explore</h1>
            <h2 className="hiking-subtitle">Knowledge and Beyond!</h2>
          </div>
        </div>

        {/* ke 6 */}
        <div className="learning-container">
          <div className="learning-content">
            <div className="learning-title">
              <span className="blue-line"></span>
              <span className="learning-title-text">START LEARNING</span>
            </div>
            <h1>What type of learner <br />are you?</h1>
            <p>
              Determining your learning style can be a key factor in planning your study sessions effectively. This guide will help you identify whether you’re a visual, auditory, reading/writing, or kinesthetic learner. What’s your learning style?
            </p>
            <a href="#" className="learn-more">Learn More →</a>
          </div>
          <div className="learning-image">
            <img src="/logo.png" alt="Student learning in a library" />
          </div>
        </div>


        {/* ke 7 */} 
        <div className="unique-left-section" style={{ marginLeft: '20px' }}>   
          </div>
          <div className="unique-container">
        <div className="unique-left-section">
        <div className="unique-icon"> 
              <svg width="32" height="32" viewBox="0 0 32 32">
                <rect x="2" y="2" width="28" height="28" fill="none" stroke="#333" strokeWidth="2" />
                <path d="M8 12h16" stroke="#333" strokeWidth="2" />
                <path d="M16 8v16" stroke="#333" strokeWidth="2" />
                <circle cx="16" cy="16" r="4" fill="#333" />
              </svg>
            </div>
            <div className="unique-title">Title Goes Here</div>
            <div className="unique-description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </div>
        </div>
        <div className="unique-right-section">
          <div className="unique-heading">Light, Fast & Powerful</div>
          <div className="unique-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br />
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,<br />
            nascetur ridiculus. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div><br />
          <button className="unique-purchase-button">Purchase Now</button>
        </div>
      </div>
       
    </main>
  );
};

export default Content;
