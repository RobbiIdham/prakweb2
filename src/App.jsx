import { data, div, img, p } from "motion/react-client";
import heroImg from "./assets/hero-img.webp";
import Lanyard from "./component/Lanyard/Lanyard";
import ScrollVelocity from "./component/ScrollVelocity/ScrollVelocity";
import DataImage from "./data.js";
import { listTools, listProyek } from "./data";

import ProfileCard from "./component/ProfileCard/ProfileCard";
import imghero from "/src/assets/profile.png";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-4 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            {/* <img
              src={imghero}
              alt="hero img"
              className="w-10 rounded-md"
              loading="lazy"
            /> */}
            <q>Kode tanpa dokumentasi seperti buku tanpa daftar isi.</q>
          </div>
          <h1 className="text-3xl/tight font-bold mb-6">
            Hi, Saya Robbi Idham Fawaid
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya bersemangat dengan bidang pemrograman web dan bercita-cita
            menjadi seorang developer yang mahir. Saya fokus pada pengembangan
            skill untuk membangun aplikasi web yang responsive dan berkinerja
            tinggi.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Donwload CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        {/* <img
          src={DataImage.HeroImage}
          alt="Hero img"
          className="w-[400px] md:ml-auto"
          loading="lazy"
        /> */}
        <ProfileCard
          className="w-[350px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          name="Robbi Idham"
          title="Frontend Developer"
          handle="Robbi"
          status="Online"
          contactText="Kontak"
          avatarUrl={imghero}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>

      <div
        className=" mx-auto w-full py-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <ScrollVelocity texts={["FrontEnd Developer", "Web Developer"]} />
      </div>

      {/* tentang */}
      <div className="tentang mt-20 " id="tentang">
        <div
          className=" mx-auto h-1/2 p-7 bg-zinc-800 rounded-lg grid grid-cols-1 lg:grid-cols-2 items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div>
            <img
              src={imghero}
              alt="image"
              className="w-12 rounded-md mb-10 sm:hidden"
              loading="lazy"
            />
            <h1 className="text-5xl font-bold mb-10">Tentang Saya</h1>
            <p className="text-base/loose mb-10">
              Saya adalah seorang Frontend dan Web Developer yang memiliki
              ketertarikan besar pada pengembangan antarmuka web yang modern,
              cepat, dan intuitif. Dengan keahlian dalam HTML, CSS, JavaScript,
              serta framework seperti React, saya berkomitmen untuk menghadirkan
              pengalaman pengguna yang maksimal melalui desain yang responsif
              dan performa yang optimal. Saya juga terbiasa bekerja dalam tim
              lintas disiplin, dan terus mengikuti perkembangan teknologi web
              untuk menghasilkan solusi yang relevan dan inovatif.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={imghero}
                alt="Hero image"
                className="w-12 rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    1<span className="text-violet-500">+</span>
                  </h1>
                  <p>Proyek selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    0<span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini adalah beberapa tools yang saya pakai untuk membuat
            website
          </p>

          {/* tools */}
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" >
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="tools img"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
          {/* toos */}
        </div>
      </div>
      {/* tentang */}

      {/* proyek */}
      <div className="mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini adalah proyek yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-center">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="proyek image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* kontak */}

      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/robbiidham30@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan"
                className="border border-zinc-500 p-2 rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-violet-700 p-3 rounded-lg w-full border cursor-pointer border-zinc-600 hover:bg-violet-600"
                type="submit"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* kontak */}
    </>
  );
}

export default App;
