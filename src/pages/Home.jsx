import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import TrustBar from "../components/TrustBar.jsx";
import EyebrowHeadline from "../components/EyebrowHeadline.jsx";
import FeatureBlock2 from "../components/FeatureBlock2.jsx";
import StepsStrip from "../components/StepsStrip.jsx";
import FinalCTA from "../components/FinalCTA.jsx";
import FeatureBlockWithBg from "../components/FeatureBlockWithBg.jsx";
import FeatureBlock3 from "../components/FeatureBlock3.jsx";
import FeatureBlock4 from "../components/FeatureBlock.jsx";
import FeatureBlock5 from "../components/FeatureBlock5.jsx";
import FeatureBlock6 from "../components/FeatureBlock6.jsx";

export default function Home() {
  return (
    <div className="text-slate-800">
      {/* <Header /> */}
      <Hero />
      <TrustBar />
      <EyebrowHeadline />

      <FeatureBlockWithBg
        title="Banking Built for Your Everyday Life"
        desc="From paying bills to saving for the future, enjoy seamless transfers, secure payments, and insight at your fingertips."
        bgImage="/FirstPic.png"   // make sure this file is in /public
      />

      <FeatureBlock2
        flip
        softBg
        title="Recharge Instantly, Live Without Interruptions."
        desc="Top up airtime and data in seconds. Stay connected with instant renewals and reminders."
        img="/assets/feature-recharge.png"
      />

      <FeatureBlock3
        title="Reliable POS That Works as Hard as You Do."
        desc="From morning rush to late-night sales, our POS keeps you running smoothly—no downtime, no stress."
        img="/assets/feature-pos.png"
      />

      <FeatureBlock4
        flip
        softBg
        title="Quick Loans, Right on Time"
        desc="Get short-term capital to bridge the gap. Fair rates, fast approval—money when you need it."
        img="/assets/feature-loan.png"
      />

      <FeatureBlock5
        title="Your Money, Your Best Rate."
        desc="Skip long waits and unfair charges. Exchange currency instantly at great rates and put your money to work."
        img="/assets/feature-fx.png"
      />

      <StepsStrip />
      <FeatureBlock6
        title="Your Next Transaction Could Be This Easy!"
        desc="With speed, security, and simplicity, you’re one tap away from better money moves."
        img="/assets/feature-fx.png"
      />
      {/* <FinalCTA /> */}

      {/* <Footer /> */}
    </div>
  );
}


