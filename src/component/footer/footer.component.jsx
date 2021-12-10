import "./footer.style.scss";

const Footer = () => {
  return (
    <footer>
      <div class="top_header">
        <section>
          <span>
            <i class="fa fa-map-marker"></i>
          </span>
          <span>tada, Sri city, AP, India, 234444</span>
        </section>
        <section>
          <span>
            <i class="fa fa-phone"></i>
          </span>
          <span>(+91) 9453123444 </span>
        </section>
        <section>
          <span>
            <i class="fa fa-envelope"></i>
          </span>
          <span>food.delivery@gmail.com</span>
        </section>
      </div>
      <span class="border-shape"></span>
      <div class="bottom_content">
        <section>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-telegram"></i>
          </a>
        </section>
        <section>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Order</a>
          <a href="#">Retail</a>
          <a href="#">Member</a>
          <a href="#">Contact Us</a>
        </section>
      </div>
      <div class="copyright">
        Copyright © 2021 Food delivery - All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
