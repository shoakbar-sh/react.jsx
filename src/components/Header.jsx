import Group from "../assets/Group.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src={Group} className="rasm" />

            <ul>
               <li><a href="#">Beranda</a></li>
               <li><a href="#">Koleksi</a></li>
               <li><a href="#">Syarat dan Ketentuan</a></li>
               <li><a href="#">Kontak</a></li>
               <li><a href="#">Masuk</a></li>
            </ul>

          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
