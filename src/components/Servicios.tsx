import React from "react";
import logo from "../img/alcadia.png";
import profile from "../img/profile.png";

const Servicios = () => {
  return (
    <section className="info-panel">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="img-bogota">
              <img src={logo} alt="logo" className="img-fluid float-end ml-2" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="img-profile">
              <img
                src={profile}
                alt="logo"
                className="img-fluid float-end mr-2"
              />
              <div className="info-usuario">
                <p>Ciudadano</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-10 col-sm-12 col-md-10">
            <div className="info-secion">
              <nav aria-label="breadcrumb" style={{ backgroundColor: "#fff" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Inicio</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">
                      Solicitar autorización sanitaria para la concesión de
                      aguas
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Revisar solicitud
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 ml-4 col-sm-12 ">
            <div className="ubi-menu" style={{ marginLeft: "-12px" }}>
              <nav className="nav panel">
                <a className="nav-link active" href="#">
                  1. Solicitar revisión{" "}
                </a>
                <a className="nav-link" href="#">
                  2. Crear Solicitud
                </a>
                <a className="nav-link" href="#">
                  3. En gestión
                </a>
                <a className="nav-link disabled" href="#">
                  4. Respuesta
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="info-tramite mt-3 ml-2">
              <p>
                Trámite: Autorización sanitaria para la concesión de aguas para
                el consumo humano.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="info-tramite mt-2">
              <p
                className="ml-2"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Datos de la solicitud. <br />{" "}
                <small className="color: #000;">* Campos Obligatorios</small>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Número de radicado</p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Tipo de trámite</p>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="info-tramite mt-2">
              <p
                className="ml-2"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Datos del solicitante. <br />{" "}
                <small style={{ color: "#000" }}>* Campos Obligatorios</small>
              </p>
            </div>

            <div
              className="col-lg-6col-sm-4 col-md-6 mt-2 mr-5"
              style={{ marginLeft: "-18px" }}
            >
              <div className="panel-search">
                <p className="mt-5">Tipo de solicitante*</p>
                <select name="" id="" className="form-control">
                  <option value="">Personal natural</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4 mt-4 ml-2">
            <div className="panel-search">
              <p>Tipo de documento</p>
              <select name="" id="" className="form-control">
                <option value="">item</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-4 ml-2">
            <div className="panel-search">
              <p>Número de documento</p>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Primer nombre</p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2">
            <div className="panel-search">
              <p>Segundo nombre</p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Primer apellido </p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Segundo apellido</p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Teléfono de contacto 1 </p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Teléfono de contacto 2</p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Correo electrónico </p>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="info-tramite mt-2">
              <p
                className="ml-2"
                style={{ fontSize: "18", fontWeight: "bold" }}
              >
                Información del lugar de revisión . <br />{" "}
                <small style={{ color: "#000;" }}>* Campos Obligatorios</small>
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-6 col-sm-12 col-md-6"
                style={{ marginLeft: "5px" }}
              >
                <p>Dirección de domicilio</p>
                <input type="text" className="form-control" />
              </div>
              <div
                className="col-lg-2 col-sm-12 col-md-12"
                style={{ marginTop: "40px", marginLeft: "12px" }}
              >
                <button
                  className="ml-4 mr-3 float-right button btn btn-default"
                  style={{ backgroundColor: "#CBCBCB" }}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Departamento</p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2">
            <div className="panel-search">
              <p>Localidad</p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Vereda </p>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
            <div className="panel-search">
              <p>Sector</p>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-lg-8 col-sm-12 col-md-8">
            <p className="ml-2">Observaciones adicionales</p>
            <textarea
              className="form-control ml-2"
              id="exampleFormControlTextarea1"
              rows={5}
            ></textarea>
          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 mt-4">
            <button
              className="ml-4 float-right button btn btn-default" 
              style={{backgroundColor:'#CBCBCB'}}
            >
              Enviar
            </button>
            <button
              className="float-right button btn btn-default"
              style={{backgroundColor:'#CBCBCB'}}
            >
              Guardar
            </button>
            <button
              className="mr-3 float-right button btn btn-default"
              style={{backgroundColor:'#CBCBCB'}}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
