export const Portfolio = () => {
  return (


     
    <div className="portfolio-page">
      {/* ✅ Banner Section */}
      <section className="banner">
        <div className="banner-overlay">
          <h1>Our Portfolio</h1>
        </div>
      </section>

      {/* ✅ Startup Cards */}
      <div className="startup-list">
        <div className="startup-card">
          <img src="\master-chow.jpg" alt="Master Chow Logo" />
          <div className="content">
            <p><strong>Sector:</strong> Food & Beverages</p>
            <p><strong>Founders:</strong> Vidur Kataria & Siddharth Madan</p>
            <p>
              A flavor-packed passion project to bring you restaurant-style Asian food at the comfort of your home.
              They’re a proud homegrown brand offering a range of ready-to-cook Asian pantry staples to make home cooking easy,
              convenient and delicious!
            </p>
          </div>
        </div>

        <div className="startup-card">
          <img src="\magma-logo.jpg" alt="Magma Logo" />
          <div className="content">
            <p><strong>Sector:</strong> Online Service Providers</p>
            <p><strong>Founders:</strong> Neal Thakkar & Namra Kaushik Thakkar</p>
            <p>
              Magma is a global supply-first aggregation in building materials, helping factories get better output,
              practices & global demand. It is a tech-enabled platform for building materials.
              The platform partners with factories and raw material suppliers to offer supply chain services from the supplier to the customer.
            </p>
          </div>
        </div>

        <div className="startup-card">
          <img src="\pocket-ATM-small.jpg" alt="PocketATM Logo" />
          <div className="content">
            <p><strong>Sector:</strong> Fintech</p>
            <p><strong>Founders:</strong> Mihir Mehta & Sushil Kumi</p>
            <p>
              A fintech ecosystem that comes from the stable of Optimoney Technologies Pvt Ltd.
              Inspired by the immense potential of mom & pop stores across India and encouraged by a passion to craft seamless,
              intuitive & efficient solutions for mom & pop store owners.
            </p>
          </div>
        </div>

        <div className="startup-card">
          <img src="\hastin.jpg" alt="Hastin Energy Logo" />
          <div className="content">
            <p><strong>Sector:</strong> Renewable Energy</p>
            <p><strong>Founders:</strong> Shrimers Amit Shroff & Mohnish Saha</p>
            <p>
              Hastin Energy aims to set up one of India’s Lithium-ion cell manufacturing plants,
              focusing on leveraging the increasing government support for local manufacturing and be a torch bearer
              for India’s ambitious plan to become energy independent.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}