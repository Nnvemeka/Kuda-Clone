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

				{/* Save section */}
				<section className="spend">
					<div className="spend-img-box">
						<img class="spend-img" src="src/Assets/img/spend.png" alt="" />
					</div>
					<div className="spend-text-box">
						<h3 className="spend-heading">Spend</h3>
						<p className="spend-description">
							Kuda gives you more than one way to pay easily, including a widely
							accepted debit card issued in partnership with Visa, quick web
							payments direct from your Kuda account, and location-based gift
							cards for shopping and subscriptions.
						</p>
					</div>
				</section>

				{/* Save section */}
				<section className="save">
					<div className="save-text-box">
						<h3 className="save-heading">Send</h3>
						<p className="save-description">
							From international transfers to on-the-spot payments at market
							stalls, we’ve simplified sending money so you don’t need to think
							too much about it.
						</p>
						<p className="save-description">
							You can find your friends on Kuda and make unlimited instant
							transfers free of charge, send money to local banks without
							breaking a sweat, or fulfil your promises to family across
							borders.
						</p>
					</div>
					<div className="send-img-box">
						<img class="save-img" src="src/Assets/img/kudaSave.png" alt="" />
					</div>
				</section>

				<section className="spend">
					<div className="spend-img-box">
						<img class="spend-img" src="src/Assets/img/spend.png" alt="" />
					</div>
					<div className="spend-text-box">
						<h3 className="spend-heading">Invest</h3>
						<p className="spend-description">
							We’re bringing verified global investment options closer to every
							African with fractional shares on Kuda, giving anyone with a Kuda
							account the opportunity to grow their money wherever they are in
							the world.
						</p>
					</div>
				</section>

				<section className="save">
					<div className="save-text-box">
						<h3 className="save-heading">We’re always</h3>
						<h3 className="save-heading">happy to help you.</h3>
						<p className="save-description">
							You can chat with us on the app, slide into our DMs, tweet, leave
							an Instagram comment, send an email or call. However you choose to
							reach out, there’ll always be a friendly person there to make your
							life easy.
						</p>
						<a href="https://www.instagram.com">Contact us</a>
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
