import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

function EnTete() {
  return (
    <div className="d-flex justify-content-between bg-white p-2 entete">
      <div>
        <h1>Bievenue sur RED Product</h1>
        <p className="text-body-secondary">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      {/* ___________________________________  */}
      {/* <!-- Button trigger modal --> */}
      <div className="d-flex align-self-center">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch modal
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title text-uppercase fs-5"
                id="staticBackdropLabel"
              >
                <FaArrowLeft />
                <span className="ms-2">créer un nouveau hotel</span>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="" className="row">
                <div class="col-6 mb-3 p-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-secondary"
                  >
                    Nom de l'hotel
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="col-6 mb-3 p-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-secondary"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name"
                  />
                </div>
                <div class="col-6 mb-3 p-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-secondary"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control text-secondary"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
                <div class="col-6 mb-3 p-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-secondary"
                  >
                    Numéro de téléphone
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
                <div class="col-6 mb-3 p-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-secondary"
                  >
                    Prix par nuit
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
                <div class="col-6 mb-3 p-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-secondary"
                  >
                    Devise
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
                <div class="col-12 mb-3 p-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-secondary"
                  >
                    Ajouter une photo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ______________________________________ */}
    </div>
  );
}

export default EnTete;
