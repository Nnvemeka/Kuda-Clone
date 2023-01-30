import React from "react";
import "./landingPage.css";

const LandingPage = () => {
	return (
		<main className="landing-page">
			{/* Hero section */}
			<section className="hero container">
				<div className="hero-text-box">
					<h1 className="heading-primary">The money app for Africans.</h1>
					<p className="hero-description">
						Save, spend, send and invest money across borders.
					</p>
					<a className="btn" href="#">
						Join Kuda
					</a>
				</div>
				<div className="hero-img-box">
					<img
						class="hero-img"
						src="src/Assets/img/kudaHero.png"
						alt="Kuda Bank Illustration"
					/>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
