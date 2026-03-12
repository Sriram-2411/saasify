import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer>
        <div className="footerbox">
            <h2>First-project</h2>
            <p>The modern platform for scaling your business</p>
            <div className="icons">
                <ul>
                    <li>
                        <a href="#"><i class="bi bi-twitter-x"></i></a>
                        <a href="#"><i class="bi bi-whatsapp"></i></a>
                        <a href="#"><i class="bi bi-facebook"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="productlist">
            <h2>Products</h2>
            <div className="listss">
                <ul>
                <li>
                <a href="#">About</a>
                <a href="#">About</a>
                <a href="#">About</a>
                <a href="#">About</a>
                <a href="#">About</a>
                </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
