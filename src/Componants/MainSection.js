import React from 'react';

function MainSection() {
  return (
    <section>
      <div className="main_div1">
        <div className="main_heading1">
          <h1>Everything you need to plan a <strong>stress-free wedding</strong>—in one beautiful place.</h1>
          <p>
            All of the completely customizable bells and whistles you need for the wedding website of your dreams—backed by a suite of seamlessly integrated project management tools designed to keep you on-track and in-control as you plan.
          </p>
          <span>
            <input className="buttonOne" type="button" value="Get started" />
            <input className="buttonTwo" type="button" value="How it works" />
          </span>
        </div>
        <div className="main_img1">
          <img className="image1" src="https://wedsites.com/assets/static/scenes/intro-right-d8400974581c49f0751d6ff2232eaa7fe9ad4ca10a43a5214239477137f401db.svg" alt="Main Image" />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
