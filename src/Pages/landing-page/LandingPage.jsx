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

				{/* Spend section */}
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
						<img class="send-img" src="src/Assets/img/send.png" alt="" />
					</div>
				</section>

				<section className="invest">
					<div className="invest-img-box">
						<img class="invest-img" src="src/Assets/img/invest.png" alt="" />
						<div class="invest-img-list">
							<img
								class="invest-img-item"
								src="src/Assets/img/investTesla.png"
								alt=""
							/>
							<img
								class="invest-img-item"
								src="src/Assets/img/investFacebook.png"
								alt=""
							/>
							<img
								class="invest-img-item"
								src="src/Assets/img/investGoogle.png"
								alt=""
							/>
							<img
								class="invest-img-item"
								src="src/Assets/img/investApple.png"
								alt=""
							/>
							<img
								class="invest-img-item"
								src="src/Assets/img/investAmazon.png"
								alt=""
							/>
						</div>
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
						<h3 className="save-heading">
							We’re always <br />
							happy to help you.
						</h3>
						<p className="save-description">
							You can chat with us on the app, slide into our DMs, tweet, leave
							an Instagram comment, send an email or call. However you choose to
							reach out, there’ll always be a friendly person there to make your
							life easy.
						</p>
						<a className="contactUs" href="#">
							Contact us &rarr;
						</a>
					</div>
					<div className="">
						<img class="save-img" src="src/Assets/img/kudaHero.png" alt="" />
					</div>
				</section>
				<section className="cta">
					<div className="cta-items">
						<div className="hero-text-box">
							<h1 className="heading">
								The money app for <br />
								Africans.
							</h1>
							<p className="description">
								Save, spend, send and invest money across borders.
							</p>
							<a className="btn" href="#">
								Join Kuda
							</a>
						</div>
						<img src="src/Assets/img/heroIcon.png" alt="" />
						<div></div>
					</div>
				</section>
			</section>
			{/* Footer */}
			<section className="footer">
				<div>
					<a className="logo">
						<svg width="120" height="20" viewBox="0 0 99 22" fill="none">
							<path
								d="M58.4144 6.81538V21.764H54.0773V19.5807C53.6053 20.3675 52.9857 20.9674 52.2186 21.3804C51.4515 21.7935 50.586 22 49.6222 22C47.7537 22 46.3572 21.4788 45.4327 20.4363C44.5083 19.3938 44.046 17.8203 44.046 15.7157V6.81538H48.5011V15.8042C48.5011 17.6138 49.278 18.5186 50.8319 18.5186C51.7563 18.5186 52.5038 18.2038 53.0742 17.5744C53.6446 16.945 53.9298 16.1189 53.9298 15.0961V6.81538H58.4144ZM75.4086 0V21.764H71.0125V19.5512C70.5601 20.3183 69.9209 20.9182 69.0947 21.3509C68.2686 21.7836 67.3344 22 66.2919 22C65.0134 22 63.8726 21.6755 62.8695 21.0165C61.8663 20.3576 61.0894 19.4332 60.5288 18.2432C59.9682 17.0532 59.6929 15.696 59.6929 14.1618C59.6929 12.6276 59.9682 11.2803 60.5288 10.11C61.0894 8.93965 61.8663 8.03487 62.8596 7.39562C63.8529 6.75637 64.9937 6.44166 66.2919 6.44166C67.295 6.44166 68.2096 6.65802 69.0357 7.07108C69.8619 7.49396 70.5011 8.07421 70.9535 8.82164V0H75.4086ZM70.1274 17.4761C70.7175 16.7188 71.0125 15.637 71.0125 14.2208C71.0125 12.8243 70.7175 11.7523 70.1175 10.9951C69.5176 10.2378 68.6817 9.8641 67.5999 9.8641C66.4984 9.8641 65.6428 10.2378 65.0331 10.9852C64.4233 11.7327 64.1184 12.7948 64.1184 14.1717C64.1184 15.5878 64.4233 16.6795 65.0331 17.4564C65.6428 18.2333 66.4984 18.6169 67.5999 18.6169C68.7014 18.6071 69.5373 18.2333 70.1274 17.4761ZM92.4126 6.81538V21.764H88.0165V19.5512C87.5641 20.3183 86.9249 20.9182 86.0988 21.3509C85.2727 21.7836 84.3384 22 83.2959 22C81.9977 22 80.8569 21.6853 79.8636 21.0559C78.8703 20.4265 78.0934 19.5315 77.5328 18.3612C76.9723 17.1909 76.6969 15.8435 76.6969 14.3093C76.6969 12.7751 76.9723 11.4081 77.5328 10.2083C78.0934 9.00849 78.8703 8.08404 79.8735 7.42512C80.8766 6.7662 82.0174 6.44166 83.2959 6.44166C84.3384 6.44166 85.2727 6.66786 86.0988 7.12025C86.9249 7.57264 87.5641 8.18239 88.0165 8.94949V6.81538H92.4126ZM87.1314 17.4859C87.7215 16.7385 88.0165 15.6567 88.0165 14.2405C88.0165 12.8243 87.7215 11.7425 87.1314 10.9852C86.5413 10.228 85.6956 9.85427 84.5941 9.85427C83.4926 9.85427 82.637 10.2477 82.0272 11.0344C81.4175 11.8212 81.1126 12.9128 81.1126 14.3093C81.1126 15.7059 81.4077 16.768 82.0076 17.5056C82.6075 18.2432 83.4631 18.6071 84.5842 18.6071C85.6956 18.6071 86.5413 18.2333 87.1314 17.4859ZM43.1511 21.9803H37.624L31.6839 15.2043V21.9803H27.1797V0H31.6839V13.3456L37.3585 6.86455H42.7675L36.3455 14.1225L43.1511 21.9803Z"
								fill="#40196D"
							></path>
							<path
								d="M14.8207 21.9803L6.17613 12.0277L10.8967 21.9803H7.62181L2.80286 11.831L4.80912 21.9803H2.79303L0.786768 11.8114V21.9803H0V0H0.786768V10.9656L2.82253 0H4.82879L2.78319 11.0148L7.70049 0H10.9361L6.04828 10.9754L14.9289 0H20.0134L10.8181 11.3491L20.0527 21.9803H14.8207Z"
								fill="#40196D"
							></path>
							<path
								d="M96.146 21.7447C97.493 21.7447 98.585 20.6527 98.585 19.3057C98.585 17.9587 97.493 16.8667 96.146 16.8667C94.799 16.8667 93.707 17.9587 93.707 19.3057C93.707 20.6527 94.799 21.7447 96.146 21.7447Z"
								fill="#40196D"
							></path>
						</svg>
					</a>
				</div>
				<div className="sort">
					<p className="link-header">Personal</p>
					<a className="link" href="#">
						Kuda Card
					</a>
					<a className="link" href="#">
						Investments
					</a>
					<a className="link" href="#">
						Spend
					</a>
					<a className="link" href="#">
						Save
					</a>
					<a className="link" href="#">
						Budget
					</a>
					<a className="link" href="#">
						Borrow
					</a>
				</div>
				<div className="sort">
					<p className="link-header">Business</p>
					<a className="link" href="#">
						Discover Business
					</a>
					<a className="link" href="#">
						Business Registration
					</a>
					<a className="link" href="#">
						SoftPOS
					</a>
					<a className="link" href="#"></a>
				</div>

				<div className="sort">
					<p className="link-header">Company</p>
					<a className="link" href="#">
						Blog
					</a>
					<a className="link" href="#">
						Press
					</a>
					<a className="link" href="#">
						Join Our Team
					</a>
					<a className="link" href="#">
						About Us
					</a>
				</div>
				<div className="sort">
					<p className="link-header">Help</p>
					<a className="link" href="#">
						Get Help
					</a>
					<a className="link" href="#">
						Scam Awareness
					</a>
					<a className="link" href="#">
						Contact Us
					</a>
				</div>
				<div className="sort">
					<p className="link-header">Transparency</p>
					<a className="link" href="#">
						Terms & Conditions
					</a>
					<a className="link" href="#">
						Privacy Policy
					</a>
					<a className="link" href="#">
						Information Security Policy
					</a>
					<a className="link" href="#">
						Cookie Policy
					</a>
					<a className="link" href="#">
						Complaints
					</a>
				</div>
			</section>
			<section className="footer2">
				<div>
					<img
						className="footer-img"
						src="src/Assets/img/app-store.svg"
						alt="apple store"
					/>
					<img
						className="footer-img"
						src="src/Assets/img/goggle-play.svg"
						alt="google playstore"
					/>
					<img src="src/Assets/img/kuda-web.svg" alt="kuda web" />
				</div>
				<p className="product">Products may vary by country or market.</p>
			</section>
			<section className="footer3">
				<div className="sort">
					<p className="link-header">Contact</p>
					<a href="#" className="email">
						help@kuda.com
					</a>
					<div className="socials">
						<div className="social-icon-wrapper">
							<ion-icon name="logo-twitter" class="social-icon"></ion-icon>
						</div>
						<div className="social-icon-wrapper">
							<ion-icon name="logo-instagram" class="social-icon"></ion-icon>
						</div>
						<div className="social-icon-wrapper">
							<ion-icon name="logo-facebook" class="social-icon"></ion-icon>
						</div>
						<div className="social-icon-wrapper">
							<ion-icon name="logo-youtube" class="social-icon"></ion-icon>
						</div>
						<div className="social-icon-wrapper">
							<ion-icon name="logo-medium" class="social-icon"></ion-icon>
						</div>
						<div className="social-icon-wrapper">
							<ion-icon name="logo-linkedin" class="social-icon"></ion-icon>
						</div>
					</div>
				</div>

				<div className="sort">
					<p className="link-header">Lagos</p>
					<p className="address" href="#">
						151 Herbert Macaulay Way, Yaba, <br /> Lagos,
						<br />
						Nigeria
					</p>
				</div>

				<div className="sort">
					<p className="link-header">London</p>
					<p className="address" href="#">
						5 New Street Square,
						<br />
						London, EC4A 3TW,
						<br />
						United Kingdom
					</p>
				</div>

				<div className="sort">
					<p className="link-header">Cape Town</p>
					<p className="address">
						146 Campground Road,
						<br />
						Snakepit Building, Level 4,
						<br /> Newlands, Cape Town
					</p>
				</div>
			</section>
			<section className="footer4">
				<div>
					© 2023 Kuda Technologies Ltd (Company No.11472232). All rights
					reserved.
				</div>
				<div>
					If you would like to find out more about which Kuda entity you receive
					services from, please reach out to us via the in-app chat in the Kuda
					app. Nigerian banking services offered by Kuda Microfinance Bank
					(RC796975) with registered address at 151 - Herbert Macaulay Way,
					Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the
					Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit
					Insurance Corporation (NDIC).
				</div>
				<div>
					UK services are offered by Kuda EMI Ltd (Company No. 13724208) with
					registered address at 5 New Street Square, London, EC4A 3TW, United
					Kingdom. Kuda EMI Ltd is A Distributor of Modulr FS Limited. Modulr FS
					Limited (Company No 09897919), is regulated by the Financial Conduct
					Authority for issuance of electronic money under reference 900573.
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
