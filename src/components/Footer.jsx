import Group from "../assets/Group.svg";
import Frame39 from "../assets/Frame39.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="top">
            <div className="left">
              <img src={Group} />
              <span>Pojok Baca Probolinggo</span>
              <br />
              <br />
              <br />
              <img src={Frame39} className="fram" />
            </div>
            <div className="cent">
              <h3>Kontak</h3>
              <ul>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">Alamat</a>
                </li>
                <li>
                  <a href="#">No. Rekening</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
