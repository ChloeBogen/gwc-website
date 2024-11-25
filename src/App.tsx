import "./App.css";
import Icon from "./components/Icon";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">&nbsp;</div>
          <div className="col-3 img-align">
            <Logo file="/images/GWC_Final-Logo_Teal.png" />
          </div>
          <div className="col-2">
            <Logo file="/images/plus-sign.png" />
          </div>
          <div className="col-3">
            <Logo file="/images/scc.png" />
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-8 ul-div">
            <h4>
              Girls who code is focused on closing the gender gap in tech!
            </h4>
            <ul>
              <li>
                Inspire, educate, and equip girls and non-binary with computing
                skills!
              </li>
              <li className="inner">
                Prepare you to lead, improve, and transform the work force!
              </li>
              <li className="more-inner">
                Creating skill building and networking opportunities!
              </li>
              <li className="inner">
                Inspiring bravery, sisterhood, and activism!
              </li>
              <li>670,000 members and alumni worldwide!</li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-8 ul-div">
            <h4>Girls who code at Seattle Central is:</h4>
            <ul>
              <li>
                A space for all women and those who identify as women or
                non-binary to come together to build their technical skills!
              </li>
              <li className="inner">
                Support for everyone's unique educational journey!
              </li>
              <li className="more-inner">Community Building!</li>
              <li className="inner">
                Creating skill building and networking opportunities.
              </li>
              <li>The future of this club is up to all of us!</li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-10">
            <br />
            <hr />
            <h3>
              Sign up <a href="https://hq.girlswhocode.com/gwc">Here!</a>
            </h3>
            Using our code loop, CL60804.
          </div>
        </div>
        <br />
        <div className="row justify-content-evenly">
          <div className="col-10">
            <h3>Connect With Us!</h3>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-1">
            <a href="https://discord.gg/EAGPdQRN">
              <Icon file="/images/discord.png" />
            </a>
          </div>
          <div className="col-1">
            <a href="https://www.instagram.com/gwc_seattlecentral/ ">
              <Icon file="/images/instagram.png" />
            </a>
          </div>
          <div className="col-1">
            <a href="mailto:seattlecentralgwc@gmail.com?">
              <Icon file="/images/email.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
