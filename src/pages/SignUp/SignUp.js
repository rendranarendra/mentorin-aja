import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [type, setType] = useState("murid");

  return (
    <div className="sign-up-container">
      <div className="sign-up-left-container col-2">
        <h1 className="sign-up-rotate-title">Sign Up</h1>
      </div>

      <div className="sign-up-right-container col-10">
        <div className="sign-up-button-container">
          <button
            type="button"
            className={`btn button-type${type === "murid" ? "-active" : ""}`}
            onClick={() => setType("murid")}
          >
            Murid
          </button>
          <button
            type="button"
            className={`btn button-type${type !== "murid" ? "-active" : ""}`}
            onClick={() => setType("mentor")}
          >
            Mentor
          </button>
        </div>

        <h1 className="sign-up-title">Daftar Sebagai Murid</h1>

        <form className="form-container">
          <div className="inputs-container">
            <div className="col-6">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>

              {type !== "murid" && (
                <div className="form-group">
                  <label>No HP / WA</label>
                  <input type="text" className="form-control" />
                </div>
              )}

              <div className="form-group">
                <label>Kata Sandi</label>
                <input type="password" className="form-control" />
              </div>

              <div className="form-group">
                <label>Konfirmasi Kata Sandi</label>
                <input type="password" className="form-control" />
              </div>
            </div>

            <div className="col-6">
              {type === "murid" ? (
                <>
                  <div className="form-group">
                    <label>No HP / WA</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Asal Sekolah</label>
                    <input type="text" className="form-control" />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label>Mata Pelajaran</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Bekerja</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Lulusan Kampus</label>
                    <input type="text" className="form-control" />
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Kelas / Semester</label>
                <select class="form-control">
                  <option>Default select</option>
                </select>
              </div>

              {type !== "murid" && (
                <div className="photo-container">
                  <div className="pr-3">
                    <label>Foto</label>
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" />
                      <label class="custom-file-label">Choose file</label>
                    </div>
                  </div>

                  <div className="pl-3">
                    <label>CV</label>
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" />
                      <label class="custom-file-label">Choose file</label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="footer-container">
            <div>
              <text>Sudah punya akun?</text>
              <a href="/sign-in" className="link-to-sign-up">
                Masuk
              </a>
            </div>

            <button type="submit" className="btn btn-primary sign-up-submit">
              Registrasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
