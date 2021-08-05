import React, { Component } from "react";

export default class Subheader extends Component {
  render() {
    return (
      <>
        <hr />
        <div
          className="subheader py-2 py-lg-6 subheader-solid mt-5"
          id="kt_subheader"
        >
          <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            {/*begin::Info*/}
            <div className="d-flex align-items-center flex-wrap mr-1">
              {/*begin::Page Heading*/}
              <div className="d-flex align-items-baseline flex-wrap mr-5">
                {/*begin::Page Title*/}
                <h5 className="text-dark font-weight-bold my-1 mr-5">
                  Lingfield College
                </h5>
                {/*end::Page Title*/}
                {/*begin::Breadcrumb*/}
                <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                  <li className="breadcrumb-item text-muted">
                    <a href className="text-muted">
                      {this.props.name}
                    </a>
                  </li>
                </ul>
                {/*end::Breadcrumb*/}
              </div>
              {/*end::Page Heading*/}
            </div>
            {/*end::Info*/}
            {/*begin::Toolbar*/}
            <div className="d-flex align-items-center">
              {/*begin::Actions*/}
              <a
                href="#"
                className="btn btn-light-primary font-weight-bolder btn-sm"
              >
                Actions
              </a>
              {/*end::Actions*/}
              {/*begin::Dropdown*/}
              <div
                className="dropdown dropdown-inline"
                data-toggle="tooltip"
                title="Quick actions"
                data-placement="left"
              >
                <a
                  href="#"
                  className="btn btn-icon"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="svg-icon svg-icon-success svg-icon-2x">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Files/File-plus.svg*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <path
                          d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="0.3"
                        />
                        <path
                          d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right p-0 m-0">
                  {/*begin::Navigation*/}
                  <ul className="navi navi-hover">
                    <li className="navi-header font-weight-bold py-4">
                      <span className="font-size-lg">Choose Label:</span>
                      <i
                        className="flaticon2-information icon-md text-muted"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Click to learn more..."
                      />
                    </li>
                    <li className="navi-separator mb-3 opacity-70" />
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-success">
                            Customer
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-danger">
                            Partner
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-warning">
                            Suplier
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-primary">
                            Member
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-dark">
                            Staff
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-separator mt-3 opacity-70" />
                    <li className="navi-footer py-4">
                      <a
                        className="btn btn-clean font-weight-bold btn-sm"
                        href="#"
                      >
                        <i className="ki ki-plus icon-sm" />
                        Add new
                      </a>
                    </li>
                  </ul>
                  {/*end::Navigation*/}
                </div>
              </div>
              {/*end::Dropdown*/}
            </div>
            {/*end::Toolbar*/}
          </div>
        </div>
      </>
    );
  }
}