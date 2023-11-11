import React from 'react'

import M2chip from '../resources/Images/Icons/hero_m2_chip__elhl46h8tbwy_small_2x.png'
import tradeIn from '../resources/Images/Icons/logo_tradein__d1fpktgipvki_small_2x.png'
import wwdc23 from '../resources/Images/Icons/promo_logo_wwdc23__gcsmmrgbhlme_small_2x.png'
import Watch from '../resources/Images/Icons/new-watch icon-logo_promo_pride23__cnampkeybsty_small_2x.png'
import YouTube from './Youtube/YouTube'


function Main() {
  return (
    <div className='mt-5'>
      <section className="main-highlight-wrapper container-fluid">
        <div className="internal-wrapper text-center text-white">
          <div className="product-title pt-5">
            <h1>iphone 14 pro</h1>
            <div className="brief-description">Pro. Beyond</div>
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="https://www.apple.com/macbook-pro-14-and-16/">
                  Learn more
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_14">
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="second-hightlight-wrapper container-fluid">
        <div className="internal-wrapper row text-center text-dark pt-4">
          <div className="title-wraper">
            <h2 className="fw-bold">iPhone 14</h2>
          </div>
          <div className="description-wrapper">Wonderfull.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="https://www.apple.com/iphone-14-pro/">Learn more</a>
              </li>
              <li>
                <a href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_14_pro">
                  Buy
                </a>
              </li>
            </ul>
          </div>
          <div className="main-image-wrapper"></div>
        </div>
      </section>
      <section className="third-hightlight-wrapper container-fluid text-center row mb-2">
        <div className="internal-wrapper col-lg-6 m2">
          <div className="product-title pt-4">
            <h2>ipad Pro</h2>
          </div>
          <div className="brief-description">
            Supercharged by
            <img src={M2chip} alt="M2chip" />
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="https://www.apple.com/ipad-10.9/">Learn more</a>
              </li>
              <li>
                <a href="hhttps://www.apple.com/us/shop/goto/buy_ipad/ipad">
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Fourth-highlight-wrapper container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-12 mb-2 col-md me-md-2">
            <div className="top-logo-wrapper text-center pt-4">
              <div className="logo-wrapper">
                <img src={tradeIn} alt="tradeIn" />
              </div>
              <div className="description-wrapper">
                Upgrade and save. <br />
                It's that easy.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="https://www.apple.com/us/shop/goto/trade_in">
                      See what your device is worth
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-12 col-md mb-2 ms-md-2">
            <div className="bottom-logo-wrapper text-center text-white">
              <div className="logo-wrapper">
                <img src={wwdc23} alt="wwdc23" />
                <div className="description-wrapper pt-4">
                  Apple Worldwide Developers conference. <br />
                  Join us online June 5-9.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="https://developer.apple.com/wwdc23/">
                        Learn more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth-highlight-wrapper container-fluid">
        <div className="row">
          <div className="left-side-wrapper text-center col-12 col-md mb-2 me-md-2">
            <div className="top-logo-wrapper mt-4">
              <div className="logo-wrapper">
                <img src={Watch} alt="Watch" />
              </div>
            </div>
            <div className="description-wrapper">Pride is in the air</div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="https://www.apple.com/watch/">
                    Shop the new pride edition sport Band
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side-wrapper text-center col-12 col-md mb-2 ms-md-2">
            <div className="product-title-2 mt-4">
              <h2>Final Cut Pro for ipad</h2>
            </div>
            <div className="brief-description text-white">
              Bring your entire studio to your shoot.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="https://www.apple.com/macbook-pro-14-and-16/">
                    Learn more
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_14">
                    Try it free <sup>2</sup>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sixth-highlight-wrapper container-fluid">
        <div className="row">
          <div className="left-side-wrapper text-center col-12 col-md me-md-2">
            <div className="product-title-2 mt-4">
              <h2>Logic Pro for ipad</h2>
              <div className="brief-description">
                The ultimate music studio. <br />
                At your fingertips.
              </div>
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="https://www.apple.com/homepod-2nd-generation/">
                    Learn more
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/homepod-2nd-generation/">
                    Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side-wrapper text-center col-12 col-md ms-md-2 text-white">
            <div className="description-wrapper mt-4">
              <h3>
                Your health data. <br />
                In your control.
              </h3>
            </div>
            <div className="brief-description">privacy.That's iphone</div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="https://www.apple.com/apple-card/">Learn more</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="youtubeVideosWrapper ">
        {/* <YouTube /> */}
      </section>
    </div>
  );
}

export default Main