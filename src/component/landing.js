import './styles.css'




function Land() {

  

  return (
    <div className="container">
      <nav>
        <div className="nav__logo">MEDIBuddy</div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">About Us</a></li>
          <li className="link"><a href="#">Contact</a></li>
        </ul>
        <button className="btn">Patient Login</button>
        <button className="btn">Doctor Login</button>
      </nav>
      <header className="header">
        <div className="content">
          <h1><span>Get Quick</span><br />Medical Services</h1>
          <p>
            In today's fast-paced world, access to prompt and efficient medical
            services is of paramount importance. Your family members and even the
            doctors can keep track of your health sitting on a place.
            MAKING THE THINGS EASIER.
          </p>
        </div>
        <div className="image">
          <span className="image__bg"></span>
          <img src="/header-bg.png" alt="header image" />
          <div className="image__content image__content__2">
            <ul>
              <li>
                <span><i className="ri-check-line"></i></span>
                Expert Doctors
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Land;
