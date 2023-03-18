import Group126 from "../assets/Group126.svg";
import Group121 from "../assets/Group121.svg";
import Group128 from "../assets/Group128.svg";
import Group122 from "../assets/Group122.svg";
import Group127 from "../assets/Group127.svg";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="baca">
            <span className="pojok">Pojok Baca </span>
            <span className="go">Probolinggo</span>
            <h1 className="pinj">
              Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat
            </h1>
            <button className="cari">Cari Judul Buku</button>
            <button className="dona">Donasi dengan Kami</button>
          </div>

          <div className="box">
            <div className="one">
              <img src={Group126} className="" />
            </div>

            <div className="two">
              <img src={Group121} className="" />
            </div>

            <div className="tri">
              <img src={Group128} className="" />
            </div>

            <div className="four">
              <img src={Group122} className="" />
            </div>

            <div className="five">
              <img src={Group127} className="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
