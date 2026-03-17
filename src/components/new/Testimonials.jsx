import React from "react";
import '../../css/new/Testimonials.css'

export default function Testimonials() {

  return (
    <section className="testimonials">

      <h3>What our users say</h3>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐
          <p>Very fast USDT exchange and smooth deposits.</p>
          <span>— Rahul K.</span>
        </div>

        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐
          <p>Best platform for quick crypto purchase.</p>
          <span>— Priya S.</span>
        </div>

        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐
          <p>UPI deposit works perfectly every time.</p>
          <span>— Imran A.</span>
        </div>

      </div>

    </section>
  );
}