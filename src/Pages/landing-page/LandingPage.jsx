import React from "react";
import "./landingPage.css";

const LandingPage = () => {
	return (
		<main className="landing-page container-main">
			{/* Hero section */}
			<section className="hero">
				<div className="hero-text-box">
					<h1 className="hero-heading-primary">The money app for Africans.</h1>
					<p className="hero-description">
						Save, spend, send and invest money across borders.
					</p>
					<a className="btn" href="#">
						Join Kuda
					</a>
				</div>
				<div className="hero-img-box">
					{/* <img
						class="hero-img"
						src="src/Assets/img/kudaHero.png"
						alt="Kuda Bank Illustration"
					/> */}
					<div className="spin1"></div>
					<div className="spin1-cover"></div>
					<div className="spin2"></div>
					<div className="spin2-cover"></div>
					<div className="spin3"></div>
					<div className="spin3-cover"></div>
					<div className="heroIcon">
						<img src="src/Assets/img/heroIcon.png" alt="" />
					</div>
				</div>
			</section>

			{/* Body section */}
			<section className="container">
				{/* Save section */}
				<section className="save">
					<div className="save-text-box">
						<h3 className="save-heading">Save</h3>
						<p className="save-description">
							Putting money away for the future is smart but it takes discipline
							- something humans don’t have in abundance. We’re using technology
							to solve that by automating saving. You set an amount to save and
							the Kuda app takes care of the rest, prompt interest payout
							included.
						</p>
					</div>
					<div className="save-img-box">
						<img class="save-img" src="src/Assets/img/kudaSave.png" alt="" />
					</div>
				</section>
			</section>
		</main>
	);
};

export default LandingPage;
