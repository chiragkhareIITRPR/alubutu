import React, { useEffect, useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [sitemap, setSitemap] = useState([]);

  useEffect(() => {
    axios
      .get("https://coefficient.netscribes.com/ms/sitemap-api/", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        setSitemap(response.data.data);
      })
      .catch((error) => {
        console.error("API fetch failed:", error);
      });
  }, []);


const handleformSubmit = (formdata) => {
const frominputdata = object.fromentries(
  formdata.entries()
)

   };



  return (
    <div className="homebodycontact">
     
      <section className="banner">
        <div className="banner-overlay">
         
        </div>
      </section>

      
      <div className="centercontainer">
        <div className="contact-section">
        
          <div className="contact-left">
            <div className="person">
              <img src="/saurav.webp" alt="Sourav Mukherjee" />
              <div className="details">
                <h3>Sourav Mukherjee</h3>
                <p>Chief Mentor</p>
                <a href="mailto:sourav.mukherjee@alubutu.com">
                  sourav.mukherjee@alubutu.com
                </a>
              </div>
            </div>

            <div className="person">
              <img src="/yuvraj.webp" alt="Yuvraj Gharat" />
              <div className="details">
                <h3>Yuvraj Gharat</h3>
                <p>Director</p>
                <a href="mailto:yuvraj.gharat@alubutu.com">
                  yuvraj.gharat@alubutu.com
                </a>
              </div>
            </div>

            <div className="company-info">
              <h3>Alubutu Advisors Private Limited</h3>
              <p>
                Flat No 2, A Wing, 2nd Floor, Lloyds Garden, Appasaheb Marathe
                Marg,
                <br />
                Prabhadevi, Mumbai MH 400025 IN. +91 22 4098 7600
              </p>
            </div>
          </div>

   
          <div className="contact-right">
           <form onSubmit={handleformSubmit}>
  <input type="text" placeholder="Full name" required name="name"/>
  <input type="text" placeholder="Company" name="company"/>
  <input type="email" placeholder="Email" required name="mail"/>
  <input type="tel" placeholder="Contact No." name="phonenumber" />
  <textarea placeholder="Message" name="message"></textarea>
  <button type="submit">Submit</button>
</form>
          </div>
        </div>
      </div>
    </div>
  );
};
