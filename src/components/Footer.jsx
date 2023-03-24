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
                <li>Email</li>
                <li>Alamat</li>
                <li>No. Rekening</li>
              </ul>
            </div>

            <div className="rayt">
              <h3>Tentang Kami</h3>
              <ul>
                <li>Umum</li>
              </ul>
            </div>

            <div className="rayt">
              <h3>Galery</h3>
              <ul>
                <li>Kegiatan 2018</li>
                <li>Kegiatan 2019</li>
                <li>Kegiatan 2020</li>
                <li>Kegiatan 2021</li>
              </ul>
            </div>
          </div>

          <div className="end">
            <h1>Pojok Baca Probolinggo 2022</h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
