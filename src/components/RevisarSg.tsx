import React from "react";
import logo from "../img/alcadia.png";
import profile from "../img/profile.png";

const RevisarSg = () => {
  return (
    <div>
      <section className="info-panel">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="img-bogota">
                <img
                  src={logo}
                  alt="logo"
                  className="img-fluid float-end ml-2"
                />
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
                  <p>Subdirector</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6 col-sm-12 col-md-6">
              <div className="info-secion">
                <nav
                  aria-label="breadcrumb"
                  style={{ backgroundColor: "#fff " }}
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Inicio</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Bandeja de entrada</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Revisar solicitud
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel-menu">
        <div className="container">
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
                  Trámite: Autorización sanitaria para la concesión de aguas
                  para el consumo humano.
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
                  <small style={{ color: "#000" }}>* Campos Obligatorios</small>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 mt-2 ml-2">
              <div className="panel-search">
                <p>Número</p>
                <input type="text" className="form-control" />

                <p className="mt-3">Estado</p>
                <select name="" id="" className="form-control">
                  <option value="">En revisión</option>
                </select>
                <p className="mt-3">Actividad siguiente</p>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 mt-2">
              <div className="panel-search">
                <p>Tipo trámite</p>
                <input type="text" className="form-control" />

                <p className="mt-3">Actividad actual</p>
                <select name="" id="" className="form-control">
                  <option value="">Validación de requisitos - Revisor</option>
                </select>
                <p className="mt-3">Usuario Asignado</p>
                <select name="" id="" className="form-control">
                  <option value="">CGONZALEL</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="panel-solicitud mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-sm-12 col-md-10">
              <div className="collapse-info">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          Datos del solicitante
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-2"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div className="card-body">Text 2</div>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="mt-3">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapse-3"
                        >
                          Datos de la fuente de abastacemiento
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-3"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div
                        className="card-body"
                        style={{ backgroundColor: "#ede9e3" }}
                      >
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 col-md-6">
                            <p className="mt-3">
                              Tipo de solicitud de concesión*
                            </p>
                            <select name="" id="" className="form-control">
                              <option value="">Tipo de fuente</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 col-sm-12">
                            <p className="mt-3">Tipo de fuente*</p>
                            <select name="" id="" className="form-control">
                              <option value="">Superficial</option>
                            </select>
                            <p className="mt-2">Descripción de otra fuente</p>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 col-lg-6 col-sm-12">
                            <p className="mt-3">Subcategoria de fuente*</p>
                            <select name="" id="" className="form-control">
                              <option value="">Caño</option>
                            </select>
                            <p className="mt-2">Nombre de la fuente</p>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-sm-12 col-md-12">
                            <p className="mt-3">localización</p>
                          </div>
                          <div className="col-md-4 col-lg-4 col-sm-12">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-4 col-lg-4 col-sm-12">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-4 col-lg-4 col-sm-12">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-sm-12 col-md-12">
                            <p>Descripción de la fuente</p>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows={5}
                            ></textarea>
                            <p className="mt-3">
                              Autoridad ambiental que otorga la concesión
                            </p>
                            <select name="" id="" className="form-control">
                              <option value="">
                                SDA - Distrital de Ambiente
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="mt-3">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-4"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          Información de acueductos que captan la misma fuente
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-4"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div className="card-body">Text 2</div>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="mt-3">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-7"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          Información adicional de la fuente de abastecimiento
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-7"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div className="card-body">Text 2</div>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="mt-3">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-6"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          Documentación requisito
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-6"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div
                        className="card-body"
                        style={{ backgroundColor: "#ede9e3" }}
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="check_d">
                              <table className="table table-bordered text-center tablesr">
                                <thead>
                                  <tr
                                    style={{
                                      border: "2px solid  #000",
                                      backgroundColor: "#fff",
                                    }}
                                  >
                                    <th style={{ border: "2px solid  #000" }}>
                                      <input type="checkbox" />
                                    </th>
                                    <th style={{ border: "2px solid  #000" }}>
                                      Nombre de archivo
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{ border: "2px solid  #000" }}>
                                    <td style={{ border: "2px solid  #000" }}>
                                      <input type="checkbox" />
                                    </td>
                                    <td style={{ border: "2px solid  #000" }}>
                                      Documento.pdf
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-4">
                            <button
                              className="btn btn-default"
                              style={{ backgroundColor: "#CBCBCB" }}
                            >
                              ver archivo
                            </button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <table className="table table-bordered text-center">
                              <thead>
                                <tr
                                  style={{
                                    border: "2px solid  #000",
                                    backgroundColor: "#fff",
                                  }}
                                >
                                  <th style={{ border: "2px solid  #000" }}>
                                    No.
                                  </th>
                                  <th style={{ border: "2px solid  #000" }}>
                                    Nombre de archivo
                                  </th>
                                  <th style={{ border: "2px solid  #000" }}>
                                    Acciones
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{ border: "2px solid  #000" }}>
                                  <td style={{ border: "2px solid  #000" }}>
                                    1
                                  </td>
                                  <td style={{ border: "2px solid  #000" }}>
                                    Documento.pdf
                                  </td>
                                  <td style={{ border: "2px solid  #000" }}>
                                    Documento.pdf
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="apro">
                              <p>¿Aprobado?</p>
                              <div className=" custom-control custom-radio custom-control-inline">
                                <input
                                  type="radio"
                                  id="customRadioInline1"
                                  name="customRadioInline1"
                                  className="custom-control-input"
                                />
                                <label className="custom-control-label">
                                  Si
                                </label>
                              </div>
                              <div className="custom-control custom-radio custom-control-inline">
                                <input
                                  type="radio"
                                  id="customRadioInline2"
                                  name="customRadioInline1"
                                  className="custom-control-input"
                                />
                                <label className="custom-control-label">
                                  No
                                </label>
                              </div>
                              <textarea
                                className="mt-3 form-control"
                                id="exampleFormControlTextarea1"
                                rows={5}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="mt-3">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-8"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          Notificaciones generales de revisión
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-8"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div
                        className="card-body"
                        style={{ backgroundColor: "#ede9e3" }}
                      >
                        <div className="row">
                          <div className="col-lg-12 col-sm-12 col-md-12">
                            <p>Tipo de Notificación*</p>
                            <select name="" id="" className="form-control">
                              <option value="">
                                Subsanación/Anulación/Desistimiento/Observación
                                interna
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-12 col-lg-12 col-sm-12">
                            <textarea
                              className="mt-3 form-control"
                              id="exampleFormControlTextarea1"
                              rows={5}
                            ></textarea>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-12 col-md-12 col-sm-1">
                            <button
                              className="btn btn-default"
                              style={{
                                backgroundColor: "#CBCBCB",
                                float: "right",
                              }}
                            >
                              Ver vista previa
                            </button>
                            <button
                              className="mr-3 btn btn-default"
                              style={{
                                backgroundColor: "#CBCBCB",
                                float: "right",
                              }}
                            >
                              Notificar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="mt-3">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-16"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          Documentación asociada a la revisión
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-16"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div
                        className="card-body"
                        style={{ backgroundColor: "#ede9e3" }}
                      >
                        <div className="row">
                          <div className="col-lg-12 col-sm-12 col-md-12">
                            <button
                              className="btn btn-default"
                              style={{
                                backgroundColor: "#CBCBCB",
                                float: "right",
                              }}
                            >
                              Cargar archivo
                            </button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <table className="table table-bordered text-center">
                              <thead>
                                <tr
                                  style={{
                                    border: "2px solid  #000",
                                    backgroundColor: "#fff",
                                  }}
                                >
                                  <th style={{ border: "2px solid  #000" }}>
                                    No.
                                  </th>
                                  <th style={{ border: "2px solid  #000" }}>
                                    Archivo soporte de revisión{" "}
                                  </th>
                                  <th style={{ border: "2px solid  #000" }}>
                                    Acciones
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{ border: "2px solid  #000" }}>
                                  <td style={{ border: "2px solid  #000" }}>
                                    1
                                  </td>
                                  <td style={{ border: "2px solid  #000" }}>
                                    Documento.pdf
                                  </td>
                                  <td style={{ border: "2px solid  #000" }}>
                                    Eliminar
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="mt-3">
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-11"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          Generar acto administrativo de aprobación
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse-11"
                      className="collapse"
                      data-parent="#accordion"
                      aria-labelledby="heading-2"
                    >
                      <div
                        className="card-body"
                        style={{ backgroundColor: "#ede9e3" }}
                      >
                        <div className="row mt-3">
                          <div className="col-md-12 col-lg-12 col-sm-12">
                            <textarea
                              className="mt-3 form-control"
                              id="exampleFormControlTextarea1"
                              rows={5}
                            ></textarea>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-12 col-md-12 col-sm-1">
                            <button
                              className="btn btn-default"
                              style={{
                                backgroundColor: "#CBCBCB",
                                float: "right",
                              }}
                            >
                              Ver vista previa
                            </button>
                            <button
                              className="mr-3 btn btn-default"
                              style={{
                                backgroundColor: "#CBCBCB",
                                float: "right",
                              }}
                            >
                              Notificar{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-lg-12 col-md-12 col-sm-12 justify-content-center">
              <button
                className="btn btn-default"
                style={{ backgroundColor: " #CBCBCB" }}
              >
                Cancelar
              </button>
              <button
                className="btn btn-default"
                style={{ backgroundColor: " #CBCBCB" }}
              >
                Guardar
              </button>
              <button
                className="btn btn-default"
                style={{ backgroundColor: " #CBCBCB" }}
              >
                Finalizar Solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevisarSg;