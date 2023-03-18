import Group132 from "../assets/Group132.svg";
import Group32 from "../assets/Group32.svg";
import Group112 from "../assets/Group112.svg";

const Section = () => {
  return (
    <>
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
    </>
  );
};

export default Section;
