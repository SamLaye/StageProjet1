import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import logoRT from "../assets/images/Link → SVG.png";

export default function Connexion() {
  return (
    <div className="auth">
      <div className="container">
        <div className="d-flex h-100 justify-content-center align-items-center ">
          <div
            id="connexion"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className="d-flex justify-content-center mb-3">
              <img src={logoRT} alt="" />
              <h2 className="text-white ms-3">RED PRODUCT</h2>
            </div>
            <form className="col-12 justify-content-center form bg-white p-4">
              <h1 className="fs-5">Connectez-vous en tant que Admin</h1>
              <div class="mb-3 w-100 mx-auto">
                <input
                  type="email"
                  className="form-control input rounded-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3 w-100 mx-auto">
                <input
                  type="password"
                  className="form-control input rounded-0"
                  id="exampleInputPassword1"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input rounded-0"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Garder moi connecté
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mx-auto">
                Se connecter
              </button>
            </form>
            <p className="text-center mt-3 anotherAction ">
              <Link
                to="/motdepasseoublie"
                className="anotherAction anotherLink"
              >
                Mot de passe oublié?
              </Link>
            </p>
            <p className="text-center text-white">
              Vous n'avez pas de compte?{" "}
              <Link to="/inscription" className="anotherLink">
                <span className="anotherAction">S'inscrire</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
