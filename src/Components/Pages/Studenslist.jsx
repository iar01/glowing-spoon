import React, { Component } from "react";
import "../../style/KeenTheme/plugins/global/plugins.bundle.css";
import "../../style/KeenTheme/plugins/custom/prismjs/prismjs.bundle.css";
import "../../style/KeenTheme/css/style.bundle.css";
import "../../style/KeenTheme/css/themes/layout/header/base/light.css";
import "../../style/KeenTheme/css/themes/layout/header/menu/light.css";
import "../../style/KeenTheme/css/themes/layout/brand/dark.css";
import "../../style/KeenTheme/css/themes/layout/aside/dark.css";
import Sidebar from "../KeenTheme/Sidebar";
import TableData from "../KeenTheme/TableData";
import MobileHeader from "../KeenTheme/MobileHeader";
import Navbar_Keen from "../KeenTheme/Navbar_Keen";
import Widget_17 from "../KeenTheme/Widget/Widget_17";
import Widget_8 from "../KeenTheme/Widget/Widget_8";
import Subheader from "../KeenTheme/Subheader";
import { Button, Modal } from "react-bootstrap";

class StudentsList extends Component {
  state = { show: false };

  render() {
    const { show } = this.state;
    return (
      <>
        <div>
          {/*begin::Main*/}
          <MobileHeader />
          <div className="d-flex flex-column flex-root">
            {/*begin::Page*/}
            <div className="d-flex flex-row flex-column-fluid page">
              {/*begin::Aside*/}
              {/*TODO:SIDEBAR HERE*/}
              <Sidebar />
              {/*end::Aside*/}
              {/*begin::Wrapper*/}
              <div
                className="d-flex flex-column flex-row-fluid wrapper"
                id="kt_wrapper"
              >
                {/*begin::Header*/}
                <Navbar_Keen />
                {/*end::Header*/}
                {/*begin::Content*/}
                <div
                  className="content d-flex flex-column flex-column-fluid"
                  id="kt_content"
                >
                  {/*begin::Subheader*/}
                  <Subheader name="Students" />
                  {/*end::Subheader*/}
                  {/*begin::Entry*/}
                  <div className="d-flex flex-column-fluid">
                    {/*begin::Container*/}
                    <div className="container">
                      {/*begin::Teachers*/}
                      <div className="d-flex flex-row">
                        {/*begin::Aside*/}
                        {/*TODO: widget here*/}

                        {/*<div className="flex-md-row-auto w-md-275px w-xl-325px">*/}
                        {/*    /!*begin::List Widget 17*!/*/}
                        {/*    /!*<Widget_17/>*!/*/}
                        {/*    /!*end::List Widget 17*!/*/}
                        {/*    /!*begin::List Widget 8*!/*/}
                        {/*    /!*<Widget_8/>*!/*/}
                        {/*    /!*end: Card*!/*/}
                        {/*    /!*end::List Widget 8*!/*/}
                        {/*</div>*/}
                        {/*end::Aside*/}
                        {/*begin::Content*/}
                        <div className="flex-row-fluid ml-lg-8">
                          {/*begin::Card*/}
                          <div className="card card-custom">
                            {/*begin::Header*/}
                            <div className="card-header flex-wrap border-0 pt-6 pb-0">
                              <h3 className="card-title align-items-start flex-column">
                                <span className="card-label font-weight-bolder text-dark">
                                  Students
                                </span>
                                <span className="text-muted mt-1 font-weight-bold font-size-sm">
                                  Manage over 1600 students
                                </span>
                              </h3>
                              <div className="card-toolbar">
                                <div
                                  className="dropdown dropdown-inline"
                                  data-toggle="tooltip"
                                  title
                                  data-placement="left"
                                  data-original-title="Quick actions"
                                >
                                  {/*begin::Trigger Modal*/}
                                  <Button
                                    onClick={() =>
                                      this.setState({ show: true })
                                    }
                                    className="btn btn-success font-weight-bolder font-size-sm"
                                  >
                                    New Student
                                  </Button>
                                  {/*end::Trigger Modal*/}
                                  {/*begin::Modal Content*/}
                                  <Modal
                                    className="modal fade"
                                    show={show}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    onHide={() =>
                                      this.setState({ show: false })
                                    }
                                  >
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title"
                                          id="exampleModalLabel"
                                        >
                                          Add New Student
                                        </h5>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <i
                                            aria-hidden="true"
                                            className="ki ki-close"
                                          />
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div
                                          data-scroll="true"
                                          data-height={600}
                                        >
                                          <form className="form pt-9">
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Name
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <input
                                                  className="form-control form-control-lg form-control-solid"
                                                  type="text"
                                                  defaultValue="Nick"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Nickname
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <input
                                                  className="form-control form-control-lg form-control-solid"
                                                  type="text"
                                                  defaultValue="Bold"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Organization
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <input
                                                  className="form-control form-control-lg form-control-solid"
                                                  type="text"
                                                  defaultValue="Loop Inc."
                                                />
                                                <span className="form-text text-muted">
                                                  If you want your invoices
                                                  addressed to a company. Leave
                                                  blank to use your full name.
                                                </span>
                                              </div>
                                            </div>
                                            <div className="separator separator-dashed my-10" />
                                            {/*begin::Heading*/}
                                            <div className="row">
                                              <div className="col-lg-9 col-xl-6 offset-xl-3">
                                                <h3 className="font-size-h6 mb-5">
                                                  Contact Info:
                                                </h3>
                                              </div>
                                            </div>
                                            {/*end::Heading*/}
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Phone
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <div className="input-group input-group-lg input-group-solid">
                                                  <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                      <i className="la la-phone" />
                                                    </span>
                                                  </div>
                                                  <input
                                                    type="text"
                                                    className="form-control form-control-lg form-control-solid"
                                                    defaultValue={+35278953712}
                                                    placeholder="Phone"
                                                  />
                                                </div>
                                                <span className="form-text text-muted">
                                                  We'll never share your email
                                                  with anyone else.
                                                </span>
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Email Address
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <div className="input-group input-group-lg input-group-solid">
                                                  <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                      <i className="la la-at" />
                                                    </span>
                                                  </div>
                                                  <input
                                                    type="text"
                                                    className="form-control form-control-lg form-control-solid"
                                                    defaultValue="nick.bold@loop.com"
                                                    placeholder="Email"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Site
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <div className="input-group input-group-lg input-group-solid">
                                                  <input
                                                    type="text"
                                                    className="form-control form-control-lg form-control-solid"
                                                    placeholder="Username"
                                                    defaultValue="loop"
                                                  />
                                                  <div className="input-group-append">
                                                    <span className="input-group-text">
                                                      .com
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="separator separator-dashed my-10" />
                                            {/*begin::Heading*/}
                                            <div className="row">
                                              <div className="col-lg-9 col-xl-6 offset-xl-3">
                                                <h3 className="font-size-h6 mb-5">
                                                  Contact Info:
                                                </h3>
                                              </div>
                                            </div>
                                            {/*end::Heading*/}
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Email Notification
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <span className="switch">
                                                  <label>
                                                    <input
                                                      type="checkbox"
                                                      defaultChecked="checked"
                                                      name="email_notification_1"
                                                    />
                                                    <span />
                                                  </label>
                                                </span>
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label className="col-xl-3 col-lg-3 text-right col-form-label">
                                                Send Copy
                                              </label>
                                              <div className="col-lg-9 col-xl-6">
                                                <span className="switch">
                                                  <label>
                                                    <input
                                                      type="checkbox"
                                                      name="email_notification_2"
                                                    />
                                                    <span />
                                                  </label>
                                                </span>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          onClick={() =>
                                            this.setState({ show: false })
                                          }
                                          type="button"
                                          className="btn btn-light-primary font-weight-bold"
                                          data-dismiss="modal"
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          onClick={() =>
                                            this.setState({ show: false })
                                          }
                                          type="button"
                                          className="btn btn-primary font-weight-bold"
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </Modal>
                                  {/*end::Modal Content*/}
                                </div>
                              </div>
                            </div>
                            {/*end::Header*/}
                            {/*begin::Body*/}

                            <div className="card-body">
                              {/*begin: Search Form*/}
                              {/*begin::Search Form*/}
                              <div className="mb-10">
                                <div className="row align-items-center">
                                  <div className="col-lg-9 col-xl-8">
                                    <div className="row align-items-center">
                                      <div className="col-md-4 my-2 my-md-0">
                                        <div className="input-icon">
                                          <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder="Search..."
                                            id="kt_datatable_search_query"
                                          />
                                          <span>
                                            <i className="flaticon2-search-1 text-muted" />
                                          </span>
                                        </div>
                                      </div>
                                      <div className="col-md-4 my-2 my-md-0">
                                        <select
                                          className="form-control form-control-solid"
                                          id="kt_datatable_search_status"
                                        >
                                          <option value>Subject</option>
                                          <option value={1}>English</option>
                                          <option value={2}>Computer</option>
                                          <option value={3}>Biology</option>
                                        </select>
                                      </div>
                                      <div className="col-md-4 my-2 my-md-0">
                                        <select
                                          className="form-control form-control-solid"
                                          id="kt_datatable_search_type"
                                        >
                                          <option value>Exam Type</option>
                                          <option value={4}>AQA</option>
                                          <option value={5}>CCEA</option>
                                          <option value={6}>OCR</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                                    <a
                                      href="#"
                                      className="btn btn-light-primary px-6 font-weight-bold"
                                    >
                                      Search
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/*end::Search Form*/}
                              {/*end: Search Form*/}
                              {/*begin: Datatable*/}
                              <TableData />
                              {/*end: Datatable*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                        </div>
                        {/*end::Content*/}
                      </div>
                      {/*end::Teachers*/}
                    </div>
                    {/*end::Container*/}
                  </div>
                  {/*end::Entry*/}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Page*/}
          </div>
          {/*end::Main*/}
          {/* begin::User Panel*/}
          <div id="kt_quick_user" className="offcanvas offcanvas-right p-10">
            {/*begin::Header*/}
            <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
              <h3 className="font-weight-bold m-0">
                User Profile
                <small className="text-muted font-size-sm ml-2">
                  12 messages
                </small>
              </h3>
              <a
                href="#"
                className="btn btn-xs btn-icon btn-light btn-hover-primary"
                id="kt_quick_user_close"
              >
                <i className="ki ki-close icon-xs text-muted" />
              </a>
            </div>
            {/*end::Header*/}
            {/*begin::Content*/}
            <div className="offcanvas-content pr-5 mr-n5">
              {/*begin::Header*/}
              <div className="d-flex align-items-center mt-5">
                <div className="symbol symbol-100 mr-5">
                  <div
                    className="symbol-label"
                    style={{
                      backgroundImage: 'url("assets/media/users/300_21.jpg")',
                    }}
                  />
                  <i className="symbol-badge bg-success" />
                </div>
                <div className="d-flex flex-column">
                  <a
                    href="#"
                    className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
                  >
                    James Jones
                  </a>
                  <div className="text-muted mt-1">Application Developer</div>
                  <div className="navi mt-2">
                    <a href="#" className="navi-item">
                      <span className="navi-link p-0 pb-2">
                        <span className="navi-icon mr-1">
                          <span className="svg-icon svg-icon-lg svg-icon-primary">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg*/}
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
                                <rect x={0} y={0} width={24} height={24} />
                                <path
                                  d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                  fill="#000000"
                                />
                                <circle
                                  fill="#000000"
                                  opacity="0.3"
                                  cx="19.5"
                                  cy="17.5"
                                  r="2.5"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </span>
                        <span className="navi-text text-muted text-hover-primary">
                          jm@softplus.com
                        </span>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed mt-8 mb-5" />
              {/*end::Separator*/}
              {/*begin::Nav*/}
              <div className="navi navi-spacer-x-0 p-0">
                {/*begin::Item*/}
                <a
                  href="custom/apps/user/profile-1/personal-information.html"
                  className="navi-item"
                >
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light mr-3">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-md svg-icon-success">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/General/Notification2.svg*/}
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
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z"
                                fill="#000000"
                              />
                              <circle
                                fill="#000000"
                                opacity="0.3"
                                cx="18.5"
                                cy="5.5"
                                r="2.5"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold">My Profile</div>
                      <div className="text-muted">
                        Account settings and more
                        <span className="label label-light-danger label-inline font-weight-bold">
                          update
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
                {/*end:Item*/}
                {/*begin::Item*/}
                <a href="custom/apps/user/profile-3.html" className="navi-item">
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light mr-3">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-md svg-icon-warning">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Chart-bar1.svg*/}
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
                              <rect x={0} y={0} width={24} height={24} />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                x={12}
                                y={4}
                                width={3}
                                height={13}
                                rx="1.5"
                              />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                x={7}
                                y={9}
                                width={3}
                                height={8}
                                rx="1.5"
                              />
                              <path
                                d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                x={17}
                                y={11}
                                width={3}
                                height={6}
                                rx="1.5"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold">My Messages</div>
                      <div className="text-muted">Inbox and tasks</div>
                    </div>
                  </div>
                </a>
                {/*end:Item*/}
                {/*begin::Item*/}
                <a href="custom/apps/user/profile-2.html" className="navi-item">
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light mr-3">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-md svg-icon-danger">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Files/Selected-file.svg*/}
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
                                d="M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              />
                              <path
                                d="M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold">My Activities</div>
                      <div className="text-muted">Logs and notifications</div>
                    </div>
                  </div>
                </a>
                {/*end:Item*/}
                {/*begin::Item*/}
                <a
                  href="custom/apps/userprofile-1/overview.html"
                  className="navi-item"
                >
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light mr-3">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-opened.svg*/}
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
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z"
                                fill="#000000"
                                opacity="0.3"
                              />
                              <path
                                d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
                                fill="#000000"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold">My Tasks</div>
                      <div className="text-muted">
                        latest tasks and projects
                      </div>
                    </div>
                  </div>
                </a>
                {/*end:Item*/}
              </div>
              {/*end::Nav*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-7" />
              {/*end::Separator*/}
              {/*begin::Notifications*/}
              <div>
                {/*begin:Heading*/}
                <h5 className="mb-5">Recent Notifications</h5>
                {/*end:Heading*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center bg-light-warning rounded p-5 gutter-b">
                  <span className="svg-icon svg-icon-warning mr-5">
                    <span className="svg-icon svg-icon-lg">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
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
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                            fill="#000000"
                          />
                          <rect
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                            x="16.3255682"
                            y="2.94551858"
                            width={3}
                            height={18}
                            rx={1}
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Another purpose persuade
                    </a>
                    <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="font-weight-bolder text-warning py-1 font-size-lg">
                    +28%
                  </span>
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center bg-light-success rounded p-5 gutter-b">
                  <span className="svg-icon svg-icon-success mr-5">
                    <span className="svg-icon svg-icon-lg">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
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
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                          />
                          <path
                            d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Would be to people
                    </a>
                    <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="font-weight-bolder text-success py-1 font-size-lg">
                    +50%
                  </span>
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">
                  <span className="svg-icon svg-icon-danger mr-5">
                    <span className="svg-icon svg-icon-lg">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
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
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                            fill="#000000"
                          />
                          <path
                            d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Purpose would be to persuade
                    </a>
                    <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="font-weight-bolder text-danger py-1 font-size-lg">
                    -27%
                  </span>
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center bg-light-info rounded p-5">
                  <span className="svg-icon svg-icon-info mr-5">
                    <span className="svg-icon svg-icon-lg">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/General/Attachment2.svg*/}
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
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)"
                          />
                          <path
                            d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                            fill="#000000"
                            transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)"
                          />
                          <path
                            d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)"
                          />
                          <path
                            d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      The best product
                    </a>
                    <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="font-weight-bolder text-info py-1 font-size-lg">
                    +8%
                  </span>
                </div>
                {/*end::Item*/}
              </div>
              {/*end::Notifications*/}
            </div>
            {/*end::Content*/}
          </div>
          {/* end::User Panel*/}
          {/*begin::Quick Cart*/}
          <div id="kt_quick_cart" className="offcanvas offcanvas-right p-10">
            {/*begin::Header*/}
            <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
              <h4 className="font-weight-bold m-0">Shopping Cart</h4>
              <a
                href="#"
                className="btn btn-xs btn-icon btn-light btn-hover-primary"
                id="kt_quick_cart_close"
              >
                <i className="ki ki-close icon-xs text-muted" />
              </a>
            </div>
            {/*end::Header*/}
            {/*begin::Content*/}
            <div className="offcanvas-content">
              {/*begin::Wrapper*/}
              <div className="offcanvas-wrapper mb-5 scroll-pull">
                {/*begin::Item*/}
                <div className="d-flex align-items-center justify-content-between py-8">
                  <div className="d-flex flex-column mr-2">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                    >
                      iBlender
                    </a>
                    <span className="text-muted">
                      The best kitchen gadget in 2020
                    </span>
                    <div className="d-flex align-items-center mt-2">
                      <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                        $ 350
                      </span>
                      <span className="text-muted mr-1">for</span>
                      <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                        5
                      </span>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon mr-2"
                      >
                        <i className="ki ki-minus icon-xs" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon"
                      >
                        <i className="ki ki-plus icon-xs" />
                      </a>
                    </div>
                  </div>
                  <a href="#" className="symbol symbol-70 flex-shrink-0">
                    <img
                      src="assets/media/stock-600x400/img-1.jpg"
                      title
                      alt=""
                    />
                  </a>
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-solid" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center justify-content-between py-8">
                  <div className="d-flex flex-column mr-2">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                    >
                      SmartCleaner
                    </a>
                    <span className="text-muted">Smart tool for cooking</span>
                    <div className="d-flex align-items-center mt-2">
                      <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                        $ 650
                      </span>
                      <span className="text-muted mr-1">for</span>
                      <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                        4
                      </span>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon mr-2"
                      >
                        <i className="ki ki-minus icon-xs" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon"
                      >
                        <i className="ki ki-plus icon-xs" />
                      </a>
                    </div>
                  </div>
                  <a href="#" className="symbol symbol-70 flex-shrink-0">
                    <img
                      src="assets/media/stock-600x400/img-2.jpg"
                      title
                      alt=""
                    />
                  </a>
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-solid" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center justify-content-between py-8">
                  <div className="d-flex flex-column mr-2">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                    >
                      CameraMax
                    </a>
                    <span className="text-muted">
                      Professional camera for edge cutting shots
                    </span>
                    <div className="d-flex align-items-center mt-2">
                      <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                        $ 150
                      </span>
                      <span className="text-muted mr-1">for</span>
                      <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                        3
                      </span>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon mr-2"
                      >
                        <i className="ki ki-minus icon-xs" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon"
                      >
                        <i className="ki ki-plus icon-xs" />
                      </a>
                    </div>
                  </div>
                  <a href="#" className="symbol symbol-70 flex-shrink-0">
                    <img
                      src="assets/media/stock-600x400/img-3.jpg"
                      title
                      alt=""
                    />
                  </a>
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-solid" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center justify-content-between py-8">
                  <div className="d-flex flex-column mr-2">
                    <a
                      href="#"
                      className="font-weight-bold text-dark text-hover-primary"
                    >
                      4D Printer
                    </a>
                    <span className="text-muted">
                      Manufactoring unique objects
                    </span>
                    <div className="d-flex align-items-center mt-2">
                      <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                        $ 1450
                      </span>
                      <span className="text-muted mr-1">for</span>
                      <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                        7
                      </span>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon mr-2"
                      >
                        <i className="ki ki-minus icon-xs" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon"
                      >
                        <i className="ki ki-plus icon-xs" />
                      </a>
                    </div>
                  </div>
                  <a href="#" className="symbol symbol-70 flex-shrink-0">
                    <img
                      src="assets/media/stock-600x400/img-4.jpg"
                      title
                      alt=""
                    />
                  </a>
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-solid" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex align-items-center justify-content-between py-8">
                  <div className="d-flex flex-column mr-2">
                    <a
                      href="#"
                      className="font-weight-bold text-dark text-hover-primary"
                    >
                      MotionWire
                    </a>
                    <span className="text-muted">Perfect animation tool</span>
                    <div className="d-flex align-items-center mt-2">
                      <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                        $ 650
                      </span>
                      <span className="text-muted mr-1">for</span>
                      <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                        7
                      </span>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon mr-2"
                      >
                        <i className="ki ki-minus icon-xs" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-xs btn-light-success btn-icon"
                      >
                        <i className="ki ki-plus icon-xs" />
                      </a>
                    </div>
                  </div>
                  <a href="#" className="symbol symbol-70 flex-shrink-0">
                    <img
                      src="assets/media/stock-600x400/img-8.jpg"
                      title
                      alt=""
                    />
                  </a>
                </div>
                {/*end::Item*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Purchase*/}
              <div className="offcanvas-footer">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <span className="font-weight-bold text-muted font-size-sm mr-2">
                    Total
                  </span>
                  <span className="font-weight-bolder text-dark-50 text-right">
                    $1840.00
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-7">
                  <span className="font-weight-bold text-muted font-size-sm mr-2">
                    Sub total
                  </span>
                  <span className="font-weight-bolder text-primary text-right">
                    $5640.00
                  </span>
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn-primary text-weight-bold"
                  >
                    Place Order
                  </button>
                </div>
              </div>
              {/*end::Purchase*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Quick Cart*/}
          {/*begin::Quick Panel*/}
          <div
            id="kt_quick_panel"
            className="offcanvas offcanvas-right pt-5 pb-10"
          >
            {/*begin::Header*/}
            <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
              <ul
                className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#kt_quick_panel_logs"
                  >
                    Audit Logs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_quick_panel_notifications"
                  >
                    Notifications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_quick_panel_settings"
                  >
                    Settings
                  </a>
                </li>
              </ul>
              <div className="offcanvas-close mt-n1 pr-5">
                <a
                  href="#"
                  className="btn btn-xs btn-icon btn-light btn-hover-primary"
                  id="kt_quick_panel_close"
                >
                  <i className="ki ki-close icon-xs text-muted" />
                </a>
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Content*/}
            <div className="offcanvas-content px-10">
              <div className="tab-content">
                {/*begin::Tabpane*/}
                <div
                  className="tab-pane fade show pt-3 pr-5 mr-n5 active"
                  id="kt_quick_panel_logs"
                  role="tabpanel"
                >
                  {/*begin::Section*/}
                  <div className="mb-15">
                    <h5 className="font-weight-bold mb-5">System Messages</h5>
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center flex-wrap mb-5">
                      <div className="symbol symbol-50 symbol-light mr-5">
                        <span className="symbol-label">
                          <img
                            src="assets/media/svg/misc/006-plurk.svg"
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          Top Authors
                        </a>
                        <span className="text-muted font-weight-bold">
                          Most Successful Fellas
                        </span>
                      </div>
                      <span className="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
                        +82$
                      </span>
                    </div>
                    {/*end: Item*/}
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center flex-wrap mb-5">
                      <div className="symbol symbol-50 symbol-light mr-5">
                        <span className="symbol-label">
                          <img
                            src="assets/media/svg/misc/015-telegram.svg"
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          Popular Authors
                        </a>
                        <span className="text-muted font-weight-bold">
                          Most Successful Fellas
                        </span>
                      </div>
                      <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                        +280$
                      </span>
                    </div>
                    {/*end: Item*/}
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center flex-wrap mb-5">
                      <div className="symbol symbol-50 symbol-light mr-5">
                        <span className="symbol-label">
                          <img
                            src="assets/media/svg/misc/003-puzzle.svg"
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          New Users
                        </a>
                        <span className="text-muted font-weight-bold">
                          Most Successful Fellas
                        </span>
                      </div>
                      <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                        +4500$
                      </span>
                    </div>
                    {/*end: Item*/}
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center flex-wrap mb-5">
                      <div className="symbol symbol-50 symbol-light mr-5">
                        <span className="symbol-label">
                          <img
                            src="assets/media/svg/misc/005-bebo.svg"
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          Active Customers
                        </a>
                        <span className="text-muted font-weight-bold">
                          Most Successful Fellas
                        </span>
                      </div>
                      <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                        +4500$
                      </span>
                    </div>
                    {/*end: Item*/}
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="symbol symbol-50 symbol-light mr-5">
                        <span className="symbol-label">
                          <img
                            src="assets/media/svg/misc/014-kickstarter.svg"
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          Bestseller Theme
                        </a>
                        <span className="text-muted font-weight-bold">
                          Most Successful Fellas
                        </span>
                      </div>
                      <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                        +4500$
                      </span>
                    </div>
                    {/*end: Item*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="mb-5">
                    <h5 className="font-weight-bold mb-5">Notifications</h5>
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                      <span className="svg-icon svg-icon-warning mr-5">
                        <span className="svg-icon svg-icon-lg">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
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
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                fill="#000000"
                              />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                x="16.3255682"
                                y="2.94551858"
                                width={3}
                                height={18}
                                rx={1}
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          Another purpose persuade
                        </a>
                        <span className="text-muted font-size-sm">
                          Due in 2 Days
                        </span>
                      </div>
                      <span className="font-weight-bolder text-warning py-1 font-size-lg">
                        +28%
                      </span>
                    </div>
                    {/*end: Item*/}
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center bg-light-success rounded p-5 mb-5">
                      <span className="svg-icon svg-icon-success mr-5">
                        <span className="svg-icon svg-icon-lg">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
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
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                              />
                              <path
                                d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          Would be to people
                        </a>
                        <span className="text-muted font-size-sm">
                          Due in 2 Days
                        </span>
                      </div>
                      <span className="font-weight-bolder text-success py-1 font-size-lg">
                        +50%
                      </span>
                    </div>
                    {/*end: Item*/}
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-5">
                      <span className="svg-icon svg-icon-danger mr-5">
                        <span className="svg-icon svg-icon-lg">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
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
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                fill="#000000"
                              />
                              <path
                                d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          Purpose would be to persuade
                        </a>
                        <span className="text-muted font-size-sm">
                          Due in 2 Days
                        </span>
                      </div>
                      <span className="font-weight-bolder text-danger py-1 font-size-lg">
                        -27%
                      </span>
                    </div>
                    {/*end: Item*/}
                    {/*begin: Item*/}
                    <div className="d-flex align-items-center bg-light-info rounded p-5">
                      <span className="svg-icon svg-icon-info mr-5">
                        <span className="svg-icon svg-icon-lg">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/General/Attachment2.svg*/}
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
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)"
                              />
                              <path
                                d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                                fill="#000000"
                                transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)"
                              />
                              <path
                                d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)"
                              />
                              <path
                                d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      <div className="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          The best product
                        </a>
                        <span className="text-muted font-size-sm">
                          Due in 2 Days
                        </span>
                      </div>
                      <span className="font-weight-bolder text-info py-1 font-size-lg">
                        +8%
                      </span>
                    </div>
                    {/*end: Item*/}
                  </div>
                  {/*end::Section*/}
                </div>
                {/*end::Tabpane*/}
                {/*begin::Tabpane*/}
                <div
                  className="tab-pane fade pt-2 pr-5 mr-n5"
                  id="kt_quick_panel_notifications"
                  role="tabpanel"
                >
                  {/*begin::Nav*/}
                  <div className="navi navi-icon-circle navi-spacer-x-0">
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-bell text-success icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            5 new user generated report
                          </div>
                          <div className="text-muted">
                            Reports based on sales
                          </div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon2-box text-danger icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            2 new items submited
                          </div>
                          <div className="text-muted">by Grog John</div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-psd text-primary icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            79 PSD files generated
                          </div>
                          <div className="text-muted">
                            Reports based on sales
                          </div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon2-supermarket text-warning icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            $2900 worth producucts sold
                          </div>
                          <div className="text-muted">Total 234 items</div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-paper-plane-1 text-success icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            4.5h-avarage response time
                          </div>
                          <div className="text-muted">Fostest is Barry</div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-safe-shield-protection text-danger icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            3 Defence alerts
                          </div>
                          <div className="text-muted">
                            40% less alerts thar last week
                          </div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-notepad text-primary icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            Avarage 4 blog posts per author
                          </div>
                          <div className="text-muted">Most posted 12 time</div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-users-1 text-warning icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            16 authors joined last week
                          </div>
                          <div className="text-muted">
                            9 photodrapehrs, 7 designer
                          </div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon2-box text-info icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            2 new items have been submited
                          </div>
                          <div className="text-muted">by Grog John</div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon2-download text-success icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            2.8 GB-total downloads size
                          </div>
                          <div className="text-muted">
                            Mostly PSD end AL concepts
                          </div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon2-supermarket text-danger icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            $2900 worth producucts sold
                          </div>
                          <div className="text-muted">Total 234 items</div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-bell text-primary icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            7 new user generated report
                          </div>
                          <div className="text-muted">
                            Reports based on sales
                          </div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="navi-item">
                      <div className="navi-link rounded">
                        <div className="symbol symbol-50 mr-3">
                          <div className="symbol-label">
                            <i className="flaticon-paper-plane-1 text-success icon-lg" />
                          </div>
                        </div>
                        <div className="navi-text">
                          <div className="font-weight-bold font-size-lg">
                            4.5h-avarage response time
                          </div>
                          <div className="text-muted">Fostest is Barry</div>
                        </div>
                      </div>
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Nav*/}
                </div>
                {/*end::Tabpane*/}
                {/*begin::Tabpane*/}
                <div
                  className="tab-pane fade pt-3 pr-5 mr-n5"
                  id="kt_quick_panel_settings"
                  role="tabpanel"
                >
                  <form className="form">
                    {/*begin::Section*/}
                    <div>
                      <h5 className="font-weight-bold mb-3">Customer Care</h5>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Enable Notifications:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-success switch-sm">
                            <label>
                              <input
                                type="checkbox"
                                defaultChecked="checked"
                                name="select"
                              />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Enable Case Tracking:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-success switch-sm">
                            <label>
                              <input
                                type="checkbox"
                                name="quick_panel_notifications_2"
                              />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Support Portal:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-success switch-sm">
                            <label>
                              <input
                                type="checkbox"
                                defaultChecked="checked"
                                name="select"
                              />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/*end::Section*/}
                    <div className="separator separator-dashed my-6" />
                    {/*begin::Section*/}
                    <div className="pt-2">
                      <h5 className="font-weight-bold mb-3">Reports</h5>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Generate Reports:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-sm switch-danger">
                            <label>
                              <input
                                type="checkbox"
                                defaultChecked="checked"
                                name="select"
                              />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Enable Report Export:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-sm switch-danger">
                            <label>
                              <input type="checkbox" name="select" />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Allow Data Collection:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-sm switch-danger">
                            <label>
                              <input
                                type="checkbox"
                                defaultChecked="checked"
                                name="select"
                              />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/*end::Section*/}
                    <div className="separator separator-dashed my-6" />
                    {/*begin::Section*/}
                    <div className="pt-2">
                      <h5 className="font-weight-bold mb-3">Memebers</h5>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Enable Member singup:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-sm switch-primary">
                            <label>
                              <input
                                type="checkbox"
                                defaultChecked="checked"
                                name="select"
                              />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Allow User Feedbacks:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-sm switch-primary">
                            <label>
                              <input type="checkbox" name="select" />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-0 row align-items-center">
                        <label className="col-8 col-form-label">
                          Enable Customer Portal:
                        </label>
                        <div className="col-4 d-flex justify-content-end">
                          <span className="switch switch-sm switch-primary">
                            <label>
                              <input
                                type="checkbox"
                                defaultChecked="checked"
                                name="select"
                              />
                              <span />
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/*end::Section*/}
                  </form>
                </div>
                {/*end::Tabpane*/}
              </div>
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Quick Panel*/}
          {/*begin::Chat Panel*/}
          <div
            className="modal modal-sticky modal-sticky-bottom-right"
            id="kt_chat_modal"
            role="dialog"
            data-backdrop="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                {/*begin::Card*/}
                <div className="card card-custom">
                  {/*begin::Header*/}
                  <div className="card-header align-items-center px-4 py-3">
                    <div className="text-left flex-grow-1">
                      {/*begin::Dropdown Menu*/}
                      <div className="dropdown dropdown-inline">
                        <button
                          type="button"
                          className="btn btn-clean btn-sm btn-icon btn-icon-md"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
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
                                  d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  opacity="0.3"
                                />
                                <path
                                  d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </button>
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
                          {/*begin::Navigation*/}
                          <ul className="navi navi-hover py-5">
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-drop" />
                                </span>
                                <span className="navi-text">New Group</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-list-3" />
                                </span>
                                <span className="navi-text">Contacts</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-rocket-1" />
                                </span>
                                <span className="navi-text">Groups</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-primary label-inline font-weight-bold">
                                    new
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-bell-2" />
                                </span>
                                <span className="navi-text">Calls</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-gear" />
                                </span>
                                <span className="navi-text">Settings</span>
                              </a>
                            </li>
                            <li className="navi-separator my-3" />
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-magnifier-tool" />
                                </span>
                                <span className="navi-text">Help</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-bell-2" />
                                </span>
                                <span className="navi-text">Privacy</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-danger label-rounded font-weight-bold">
                                    5
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          {/*end::Navigation*/}
                        </div>
                      </div>
                      {/*end::Dropdown Menu*/}
                    </div>
                    <div className="text-center flex-grow-1">
                      <div className="text-dark-75 font-weight-bold font-size-h5">
                        Matt Pears
                      </div>
                      <div>
                        <span className="label label-dot label-success" />
                        <span className="font-weight-bold text-muted font-size-sm">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-grow-1">
                      <button
                        type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-md"
                        data-dismiss="modal"
                      >
                        <i className="ki ki-close icon-1x" />
                      </button>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body">
                    {/*begin::Scroll*/}
                    <div
                      className="scroll scroll-pull"
                      data-height={375}
                      data-mobile-height={300}
                    >
                      {/*begin::Messages*/}
                      <div className="messages">
                        {/*begin::Message In*/}
                        <div className="d-flex flex-column mb-5 align-items-start">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-circle symbol-40 mr-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_12.jpg"
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                Matt Pears
                              </a>
                              <span className="text-muted font-size-sm">
                                2 Hours
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                            How likely are you to recommend our company to your
                            friends and family?
                          </div>
                        </div>
                        {/*end::Message In*/}
                        {/*begin::Message Out*/}
                        <div className="d-flex flex-column mb-5 align-items-end">
                          <div className="d-flex align-items-center">
                            <div>
                              <span className="text-muted font-size-sm">
                                3 minutes
                              </span>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                You
                              </a>
                            </div>
                            <div className="symbol symbol-circle symbol-40 ml-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_21.jpg"
                              />
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                            Hey there, we???re just writing to let you know that
                            you???ve been subscribed to a repository on GitHub.
                          </div>
                        </div>
                        {/*end::Message Out*/}
                        {/*begin::Message In*/}
                        <div className="d-flex flex-column mb-5 align-items-start">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-circle symbol-40 mr-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_21.jpg"
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                Matt Pears
                              </a>
                              <span className="text-muted font-size-sm">
                                40 seconds
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                            Ok, Understood!
                          </div>
                        </div>
                        {/*end::Message In*/}
                        {/*begin::Message Out*/}
                        <div className="d-flex flex-column mb-5 align-items-end">
                          <div className="d-flex align-items-center">
                            <div>
                              <span className="text-muted font-size-sm">
                                Just now
                              </span>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                You
                              </a>
                            </div>
                            <div className="symbol symbol-circle symbol-40 ml-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_21.jpg"
                              />
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                            You???ll receive notifications for all issues, pull
                            requests!
                          </div>
                        </div>
                        {/*end::Message Out*/}
                        {/*begin::Message In*/}
                        <div className="d-flex flex-column mb-5 align-items-start">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-circle symbol-40 mr-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_12.jpg"
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                Matt Pears
                              </a>
                              <span className="text-muted font-size-sm">
                                40 seconds
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                            You can unwatch this repository immediately by
                            clicking here:
                            <a href="#">https://github.com</a>
                          </div>
                        </div>
                        {/*end::Message In*/}
                        {/*begin::Message Out*/}
                        <div className="d-flex flex-column mb-5 align-items-end">
                          <div className="d-flex align-items-center">
                            <div>
                              <span className="text-muted font-size-sm">
                                Just now
                              </span>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                You
                              </a>
                            </div>
                            <div className="symbol symbol-circle symbol-40 ml-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_21.jpg"
                              />
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                            Discover what students who viewed Learn Figma -
                            UI/UX Design. Essential Training also viewed
                          </div>
                        </div>
                        {/*end::Message Out*/}
                        {/*begin::Message In*/}
                        <div className="d-flex flex-column mb-5 align-items-start">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-circle symbol-40 mr-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_12.jpg"
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                Matt Pears
                              </a>
                              <span className="text-muted font-size-sm">
                                40 seconds
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                            Most purchased Business courses during this sale!
                          </div>
                        </div>
                        {/*end::Message In*/}
                        {/*begin::Message Out*/}
                        <div className="d-flex flex-column mb-5 align-items-end">
                          <div className="d-flex align-items-center">
                            <div>
                              <span className="text-muted font-size-sm">
                                Just now
                              </span>
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                              >
                                You
                              </a>
                            </div>
                            <div className="symbol symbol-circle symbol-40 ml-3">
                              <img
                                alt="Pic"
                                src="assets/media/users/300_21.jpg"
                              />
                            </div>
                          </div>
                          <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                            Company BBQ to celebrate the last quater
                            achievements and goals. Food and drinks provided
                          </div>
                        </div>
                        {/*end::Message Out*/}
                      </div>
                      {/*end::Messages*/}
                    </div>
                    {/*end::Scroll*/}
                  </div>
                  {/*end::Body*/}
                  {/*begin::Footer*/}
                  <div className="card-footer align-items-center">
                    {/*begin::Compose*/}
                    <textarea
                      className="form-control border-0 p-0"
                      rows={2}
                      placeholder="Type a message"
                      defaultValue={""}
                    />
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="mr-3">
                        <a
                          href="#"
                          className="btn btn-clean btn-icon btn-md mr-1"
                        >
                          <i className="flaticon2-photograph icon-lg" />
                        </a>
                        <a href="#" className="btn btn-clean btn-icon btn-md">
                          <i className="flaticon2-photo-camera icon-lg" />
                        </a>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                    {/*begin::Compose*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card*/}
              </div>
            </div>
          </div>
          {/*end::Chat Panel*/}
          {/*begin::Scrolltop*/}
          <div id="kt_scrolltop" className="scrolltop">
            <span className="svg-icon">
              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Up-2.svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <rect
                    fill="#000000"
                    opacity="0.3"
                    x={11}
                    y={10}
                    width={2}
                    height={10}
                    rx={1}
                  />
                  <path
                    d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
          </div>
          {/*end::Scrolltop*/}
          {/*begin::Sticky Toolbar*/}
          <ul className="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
            {/*begin::Item*/}
            <li
              className="nav-item mb-2"
              id="kt_demo_panel_toggle"
              data-toggle="tooltip"
              title="Check out more demos"
              data-placement="right"
            >
              <a
                className="btn btn-sm btn-icon btn-bg-light btn-icon-success btn-hover-success"
                href="#"
              >
                <i className="flaticon2-drop" />
              </a>
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li
              className="nav-item mb-2"
              data-toggle="tooltip"
              title="Layout Builder"
              data-placement="left"
            >
              <a
                className="btn btn-sm btn-icon btn-bg-light btn-icon-primary btn-hover-primary"
                href="https://preview.keenthemes.com/metronic/demo1/builder.html"
                target="_blank"
              >
                <i className="flaticon2-gear" />
              </a>
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li
              className="nav-item mb-2"
              data-toggle="tooltip"
              title="Documentation"
              data-placement="left"
            >
              <a
                className="btn btn-sm btn-icon btn-bg-light btn-icon-warning btn-hover-warning"
                href="https://keenthemes.com/metronic/?page=docs"
                target="_blank"
              >
                <i className="flaticon2-telegram-logo" />
              </a>
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li
              className="nav-item"
              id="kt_sticky_toolbar_chat_toggler"
              data-toggle="tooltip"
              title="Chat Example"
              data-placement="left"
            >
              <a
                className="btn btn-sm btn-icon btn-bg-light btn-icon-danger btn-hover-danger"
                href="#"
                data-toggle="modal"
                data-target="#kt_chat_modal"
              >
                <i className="flaticon2-chat-1" />
              </a>
            </li>
            {/*end::Item*/}
          </ul>
          {/*end::Sticky Toolbar*/}
          {/*begin::Demo Panel*/}
          <div id="kt_demo_panel" className="offcanvas offcanvas-right p-10">
            {/*begin::Header*/}
            <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
              <h4 className="font-weight-bold m-0">Select A Demo</h4>
              <a
                href="#"
                className="btn btn-xs btn-icon btn-light btn-hover-primary"
                id="kt_demo_panel_close"
              >
                <i className="ki ki-close icon-xs text-muted" />
              </a>
            </div>
            {/*end::Header*/}
            {/*begin::Content*/}
            <div className="offcanvas-content">
              {/*begin::Wrapper*/}
              <div className="offcanvas-wrapper mb-5 scroll-pull">
                <h5 className="font-weight-bold mb-4 text-center">Demo 1</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo offcanvas-demo-active">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo1.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo1/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo1/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 2</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo2.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo2/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo2/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 3</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo3.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo3/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo3/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 4</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo4.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo4/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo4/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 5</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo5.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo5/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo5/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 6</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo6.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo6/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo6/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 7</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo7.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo7/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo7/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 8</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo8.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo8/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo8/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 9</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo9.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo9/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo9/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 10</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo10.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo10/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo10/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 11</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo11.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo11/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo11/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 12</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo12.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo12/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo12/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 13</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo13.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="../../../../../../demo13/dist"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      Default
                    </a>
                    <a
                      href="https://preview.keenthemes.com/metronic/demo13/rtl/index.html"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                      target="_blank"
                    >
                      RTL Version
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 14</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo14.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 15</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo15.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 16</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo16.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 17</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo17.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 18</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo18.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 19</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo19.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 20</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo20.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 21</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo21.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 22</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo22.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 23</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo23.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 24</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo24.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 25</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo25.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 26</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo26.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 27</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo27.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 28</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo28.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 29</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo29.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
                <h5 className="font-weight-bold mb-4 text-center">Demo 30</h5>
                <div className="overlay rounded-lg mb-8 offcanvas-demo">
                  <div className="overlay-wrapper rounded-lg">
                    <img
                      src="assets/media/demos/demo30.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="overlay-layer">
                    <a
                      href="#"
                      className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
              </div>
              {/*end::Wrapper*/}
              {/*begin::Purchase*/}
              <div className="offcanvas-footer">
                <a
                  href="https://1.envato.market/EA4JP"
                  target="_blank"
                  className="btn btn-block btn-danger btn-shadow font-weight-bolder text-uppercase"
                >
                  Buy Metronic Now!
                </a>
              </div>
              {/*end::Purchase*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Demo Panel*/}
          {/*begin::Global Config(global config for global JS scripts)*/}
          {/*end::Global Config*/}
          {/*begin::Global Theme Bundle(used by all pages)*/}
          {/*end::Global Theme Bundle*/}
          {/*begin::Page Scripts(used by this page)*/}
          {/*end::Page Scripts*/}
        </div>
      </>
    );
  }
}

export default StudentsList;
