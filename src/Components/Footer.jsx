import React from 'react';

const Footer = () => {
    return (
        <div>
<footer className="footer sm:footer-horizontal bg-[#172b17] text-green-100 font-semibold p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

<footer className="footer sm:footer-horizontal footer-center bg-[#c4dea9] text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by PlantiFy Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;