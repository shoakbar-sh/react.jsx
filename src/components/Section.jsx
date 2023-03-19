import Group132 from "../assets/Group132.svg";
import Group32 from "../assets/Group32.svg";
import Group112 from "../assets/Group112.svg";
import Group126 from "../assets/Group126.svg";
import Group121 from "../assets/Group121.svg";
import Group128 from "../assets/Group128.svg";
import Group122 from "../assets/Group122.svg";
import Group127 from "../assets/Group127.svg";
import Group12 from "../assets/Group12.svg";
import Group13 from "../assets/Group13.svg";
import Frame128 from "../assets/Frame128.jpg";
import Frame129 from "../assets/Frame129.jpg";
import Frame130 from "../assets/Frame130.jpg";

const Section = () => {
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

      <section>
        <div className="container">
          <h1 className="kita">
            Kenapa Kita <span>Harus</span> Membaca Buku?
          </h1>

          <div className="row">
            <div className="card">
              <p>
                “Aku rela dipenjara asalkan <span>bersama buku,</span> karena
                dengan buku <span>aku bebas“</span>
              </p>
              <img src={Group132} />
            </div>

            <div className="card">
              <p>
                “Cuma perlu <span>satu buku</span> untuk jatuh cinta pada
                membaca, Cari Buku itu! <span>Mari jatuh cinta!</span>
              </p>
              <img src={Group32} />
            </div>
          </div>

          <div className="col">
            <div className="col1">
              <img src={Group112} />
              <div className="">
                <h1>500+</h1>
                <span>Judul Buku</span>
              </div>
            </div>

            <div className="col2">
              <img src={Group112} />
              <div className="">
                <h1>0$</h1>
                <span>Gratis Peminjaman</span>
              </div>
            </div>

            <div className="col3">
              <img src={Group112} />
              <div className="">
                <h1>5</h1>
                <span>Kegiatan Rutin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="war">
            <div className="merek">
              <h1>Apa Kata Mereka?</h1>
              <p>Mereka yang telah menjadi pengunjung tetap kami</p>
            </div>
          </div>
          <div className="app">
            <div className="kata">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <img src={Group12} />
            </div>

            <div className="kata">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <img src={Group13} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text">
            <div className="kami">
              <h1>Kegiatan Pojok Baca Probolinggo</h1>
              <p>Intip kegiatan yang telah kami selenggarakan</p>
            </div>
            <div className="smal">
              <small>Selengkapnya</small>
            </div>
          </div>

          <div className="foto">
            <img src={Frame128} />
            <img src={Frame129} />
            <img src={Frame130} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="list">
            <h1>
              Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak
              Sekitar Kita?
            </h1>
            <p>Percayakan melalui kegiatan kita</p>
            <button className="cari">Donasi dengan Kami</button>
            <br />
            <small>Atau</small>
            <br />
            <button className="dona">Hubungi Kami</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;