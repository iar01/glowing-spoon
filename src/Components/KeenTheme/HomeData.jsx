import React, { Component } from "react";
import img70 from "../../assets/media/stock-600x400/img-70.jpg";
import book4 from "../../assets/media/books/4.png";
import img25 from "../../assets/media/stock-600x400/img-25.jpg";
import img24 from "../../assets/media/stock-600x400/img-24.jpg";
import img20 from "../../assets/media/stock-600x400/img-20.jpg";
import img19 from "../../assets/media/stock-600x400/img-19.jpg";

export default class HomeData extends Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column-fluid">
          {/*begin::Container*/}
          <div className="container">
            {/*begin::Education*/}
            <div className="d-flex flex-column flex-md-row">
              {/*begin::Aside*/}
              <div className="col-4">
                {/*begin::Nav Panel Widget 3*/}
                <div className="card card-custom gutter-b">
                  {/*begin::Body*/}
                  <div className="card-body">
                    {/*begin::Wrapper*/}
                    <div className="d-flex justify-content-between flex-column h-100">
                      {/*begin::Container*/}
                      <div className="h-100">
                        {/*begin::Header*/}
                        <div className="d-flex flex-column flex-center">
                          {/*begin::Image*/}
                          <div
                            className="bgi-no-repeat bgi-size-cover rounded min-h-180px w-100"
                            style={{
                              backgroundImage: `url(${img70})`,
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <a
                            href="#"
                            className="card-title font-weight-bolder text-dark-75 text-hover-primary font-size-h4 m-0 pt-7 pb-1"
                          >
                            Hopkins High School
                          </a>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <div className="font-weight-bold text-dark-50 font-size-sm pb-7">
                            CV38+2J Palo Alto
                          </div>
                          {/*end::Text*/}
                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div className="pt-1">
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center pb-9">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-45 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
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
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <rect
                                        fill="#000000"
                                        opacity="0.3"
                                        x={13}
                                        y={4}
                                        width={3}
                                        height={16}
                                        rx="1.5"
                                      />
                                      <rect
                                        fill="#000000"
                                        x={8}
                                        y={9}
                                        width={3}
                                        height={11}
                                        rx="1.5"
                                      />
                                      <rect
                                        fill="#000000"
                                        x={18}
                                        y={11}
                                        width={3}
                                        height={9}
                                        rx="1.5"
                                      />
                                      <rect
                                        fill="#000000"
                                        x={3}
                                        y={13}
                                        width={3}
                                        height={7}
                                        rx="1.5"
                                      />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1">
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder"
                              >
                                Grade
                              </a>
                              <span className="text-muted font-weight-bold">
                                Good Fellas
                              </span>
                            </div>
                            {/*end::Text*/}
                            {/*begin::label*/}
                            <span className="font-weight-bolder label label-xl label-light-success label-inline px-3 py-5 min-w-45px">
                              3.2
                            </span>
                            {/*end::label*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center pb-9">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-45 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg*/}
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
                                        d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                        opacity="0.3"
                                      />
                                      <path
                                        d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                      />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1">
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder"
                              >
                                Students
                              </a>
                              <span className="text-muted font-weight-bold">
                                Successful Fellas
                              </span>
                            </div>
                            {/*end::Text*/}
                            {/*begin::label*/}
                            <span className="font-weight-bolder label label-xl label-light-danger label-inline px-3 py-5 min-w-45px">
                              582
                            </span>
                            {/*end::label*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center pb-9">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-45 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Globe.svg*/}
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
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <path
                                        d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                      />
                                      <circle
                                        fill="#000000"
                                        opacity="0.3"
                                        cx={12}
                                        cy={10}
                                        r={6}
                                      />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1">
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder"
                              >
                                Subjects
                              </a>
                              <span className="text-muted font-weight-bold">
                                Successful Fellas
                              </span>
                            </div>
                            {/*end::Text*/}
                            {/*begin::label*/}
                            <span className="font-weight-bolder label label-xl label-light-primary label-inline py-5 min-w-45px">
                              74
                            </span>
                            {/*end::label*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center pb-9">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-45 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
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
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <rect
                                        fill="#000000"
                                        x={4}
                                        y={4}
                                        width={7}
                                        height={7}
                                        rx="1.5"
                                      />
                                      <path
                                        d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1">
                              <a
                                href="#"
                                className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder"
                              >
                                Winners
                              </a>
                              <span className="text-muted font-weight-bold">
                                Achievements
                              </span>
                            </div>
                            {/*end::Text*/}
                            {/*begin::label*/}
                            <span className="font-weight-bolder label label-xl label-light-info label-inline px-3 py-5 min-w-45px">
                              209
                            </span>
                            {/*end::label*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*eng::Container*/}
                      {/*begin::Footer*/}
                      <div
                        className="d-flex flex-center"
                        id="kt_sticky_toolbar_chat_toggler_2"
                        data-toggle="tooltip"
                        title
                        data-placement="right"
                        data-original-title="Chat Example"
                      >
                        <button
                          className="btn btn-primary font-weight-bolder font-size-sm py-3 px-14"
                          data-toggle="modal"
                          data-target="#kt_chat_modal"
                        >
                          Contact School
                        </button>
                      </div>
                      {/*end::Footer*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Nav Panel Widget 3*/}
                {/*begin::List Widget 17*/}
                <div className="card card-custom gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-5">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder text-dark">
                        Books to Pickup
                      </span>
                      <span className="text-muted mt-3 font-weight-bold font-size-sm">
                        24 Books to Return
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        title="Quick actions"
                        data-placement="left"
                      >
                        <a
                          href="#"
                          className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ki ki-bold-more-hor" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
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
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-4">
                    {/*begin::Container*/}
                    <div>
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-8">
                        {/*begin::Symbol*/}
                        <div className="symbol mr-5 pt-1">
                          <div
                            className="symbol-label min-w-65px min-h-100px"
                            style={{
                              backgroundImage: `url(${book4})`,
                            }}
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Info*/}
                        <div className="d-flex flex-column">
                          {/*begin::Title*/}
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                          >
                            Darius The Great
                          </a>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <span className="text-muted font-weight-bold font-size-sm pb-4">
                            Amazing Short Story About
                            <br />
                            Darius greatness
                          </span>
                          {/*end::Text*/}
                          {/*begin::Action*/}
                          <div>
                            <button
                              type="button"
                              className="btn btn-light font-weight-bolder font-size-sm py-2"
                            >
                              Book Now
                            </button>
                          </div>
                          {/*end::Action*/}
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-8">
                        {/*begin::Symbol*/}
                        <div className="symbol mr-5 pt-1">
                          <div
                            className="symbol-label min-w-65px min-h-100px"
                            style={{
                              backgroundImage: `url(${book4})`,
                            }}
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Info*/}
                        <div className="d-flex flex-column">
                          {/*begin::Title*/}
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                          >
                            Wild Blues
                          </a>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <span className="text-muted font-weight-bold font-size-sm pb-4">
                            Amazing Short Story About
                            <br />
                            Darius greatness
                          </span>
                          {/*end::Text*/}
                          {/*begin::Action*/}
                          <div>
                            <button
                              type="button"
                              className="btn btn-light font-weight-bolder font-size-sm py-2"
                            >
                              Book Now
                            </button>
                          </div>
                          {/*end::Action*/}
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol mr-5 pt-1">
                          <div
                            className="symbol-label min-w-65px min-h-100px"
                            style={{
                              backgroundImage: `url(${book4})`,
                            }}
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Info*/}
                        <div className="d-flex flex-column">
                          {/*begin::Title*/}
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                          >
                            Simple Thinking
                          </a>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <span className="text-muted font-weight-bold font-size-sm pb-4">
                            Amazing Short Story About
                            <br />
                            Darius greatness
                          </span>
                          {/*end::Text*/}
                          {/*begin::Action*/}
                          <div>
                            <button
                              type="button"
                              className="btn btn-light font-weight-bolder font-size-sm py-2"
                            >
                              Book Now
                            </button>
                          </div>
                          {/*end::Action*/}
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Container*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::List Widget 17*/}
                {/*begin::List Widget 9*/}
                <div className="card card-custom gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header align-items-center border-0 mt-4">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="font-weight-bolder text-dark">
                        My Activity
                      </span>
                      <span className="text-muted mt-3 font-weight-bold font-size-sm">
                        890,344 Sales
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div className="dropdown dropdown-inline">
                        <a
                          href="#"
                          className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ki ki-bold-more-hor" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                          {/*begin::Navigation*/}
                          <ul className="navi navi-hover">
                            <li className="navi-header font-weight-bold py-4">
                              <span className="font-size-lg">
                                Choose Label:
                              </span>
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
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-4">
                    {/*begin::Timeline*/}
                    <div className="timeline timeline-6 mt-3">
                      {/*begin::Item*/}
                      <div className="timeline-item align-items-start">
                        {/*begin::Label*/}
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                          08:42
                        </div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge">
                          <i className="fa fa-genderless text-warning icon-xl" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="font-weight-mormal font-size-lg timeline-content text-muted pl-3">
                          Outlines keep you honest. And keep structure
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="timeline-item align-items-start">
                        {/*begin::Label*/}
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                          10:00
                        </div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge">
                          <i className="fa fa-genderless text-success icon-xl" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Content*/}
                        <div className="timeline-content d-flex">
                          <span className="font-weight-bolder text-dark-75 pl-3 font-size-lg">
                            AEOL meeting
                          </span>
                        </div>
                        {/*end::Content*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="timeline-item align-items-start">
                        {/*begin::Label*/}
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                          14:37
                        </div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge">
                          <i className="fa fa-genderless text-danger icon-xl" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Desc*/}
                        <div className="timeline-content font-weight-bolder font-size-lg text-dark-75 pl-3">
                          Make deposit
                          <a href="#" className="text-primary">
                            USD 700
                          </a>
                          . to ESL
                        </div>
                        {/*end::Desc*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="timeline-item align-items-start">
                        {/*begin::Label*/}
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                          16:50
                        </div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge">
                          <i className="fa fa-genderless text-primary icon-xl" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                          Indulging in poorly driving and keep structure keep
                          great
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="timeline-item align-items-start">
                        {/*begin::Label*/}
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                          21:03
                        </div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge">
                          <i className="fa fa-genderless text-danger icon-xl" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Desc*/}
                        <div className="timeline-content font-weight-bolder text-dark-75 pl-3 font-size-lg">
                          New order placed
                          <a href="#" className="text-primary">
                            #XF-2356
                          </a>
                          .
                        </div>
                        {/*end::Desc*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="timeline-item align-items-start">
                        {/*begin::Label*/}
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                          23:07
                        </div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge">
                          <i className="fa fa-genderless text-info icon-xl" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                          Outlines keep and you honest. Indulging in poorly
                          driving
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Timeline*/}
                  </div>
                  {/*end: Card Body*/}
                </div>
                {/*end: List Widget 9*/}
              </div>
              {/*end::Aside*/}
              {/*begin::Content*/}
              <div className="col-10">
                <div className="row">
                  <div className="col-xxl-6">
                    {/*begin::Base Table Widget 10*/}
                    <div className="card card-custom gutter-b">
                      {/*begin::Header*/}
                      <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label font-weight-bolder text-dark">
                            Upcoming Events
                          </span>
                          <span className="text-muted mt-3 font-weight-bold font-size-sm">
                            Next Event is in
                            <span className="text-primary">9 days</span>
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <ul className="nav nav-pills nav-pills-sm nav-dark-75">
                            <li className="nav-item">
                              <a
                                className="nav-link py-2 px-4 font-weight-bolder"
                                data-toggle="tab"
                                href="#kt_tab_pane_10_1"
                              >
                                Tomorrow
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-2 px-4 active font-weight-bolder"
                                data-toggle="tab"
                                href="#kt_tab_pane_10_2"
                              >
                                Today
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-2 pb-0 mt-n3">
                        <div className="tab-content mt-5" id="myTabTables10">
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_tab_pane_10_1"
                            role="tabpanel"
                            aria-labelledby="kt_tab_pane_10_1"
                          >
                            {/*begin::Table*/}
                            <div className="table-responsive">
                              <table className="table table-borderless table-vertical-center">
                                {/*begin::Thead*/}
                                <thead>
                                  <tr>
                                    <th className="p-0 w-50px" />
                                    <th className="p-0 w-100 min-w-100px" />
                                    <th className="p-0" />
                                    <th className="p-0 min-w-130px w-100" />
                                  </tr>
                                </thead>
                                {/*end::Thead*/}
                                {/*begin::Tbody*/}
                                <tbody>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-info mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-info">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Color-profile.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <path
                                                  d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                  opacity="0.3"
                                                />
                                                <circle
                                                  fill="#000000"
                                                  cx={12}
                                                  cy={9}
                                                  r={5}
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        The School Art Leads
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Ellie Cole
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-warning mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-warning">
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
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
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        Napoleon Days
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Luke Owen
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-primary mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-primary">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Globe.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <path
                                                  d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                />
                                                <circle
                                                  fill="#000000"
                                                  opacity="0.3"
                                                  cx={12}
                                                  cy={10}
                                                  r={6}
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        Who Knows Geography
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Zoey Dylan
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-danger mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-danger">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <rect
                                                  fill="#000000"
                                                  x={4}
                                                  y={4}
                                                  width={7}
                                                  height={7}
                                                  rx="1.5"
                                                />
                                                <path
                                                  d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        Maths Championship
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Tom Gere
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        25 Oct, 10:05PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 pt-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-success mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-success">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Playlist1.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <path
                                                  d="M8.97852058,18.8007059 C8.80029331,20.0396328 7.53473012,21 6,21 C4.34314575,21 3,19.8807119 3,18.5 C3,17.1192881 4.34314575,16 6,16 C6.35063542,16 6.68722107,16.0501285 7,16.1422548 L7,5.93171093 C7,5.41893942 7.31978104,4.96566617 7.78944063,4.81271925 L13.5394406,3.05418311 C14.2638626,2.81827161 15,3.38225531 15,4.1731748 C15,4.95474642 15,5.54092513 15,5.93171093 C15,6.51788965 14.4511634,6.89225606 14,7 C13.3508668,7.15502181 11.6842001,7.48835515 9,8 L9,18.5512168 C9,18.6409956 8.9927193,18.7241187 8.97852058,18.8007059 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                />
                                                <path
                                                  d="M16,9 L20,9 C20.5522847,9 21,9.44771525 21,10 C21,10.5522847 20.5522847,11 20,11 L16,11 C15.4477153,11 15,10.5522847 15,10 C15,9.44771525 15.4477153,9 16,9 Z M14,13 L20,13 C20.5522847,13 21,13.4477153 21,14 C21,14.5522847 20.5522847,15 20,15 L14,15 C13.4477153,15 13,14.5522847 13,14 C13,13.4477153 13.4477153,13 14,13 Z M14,17 L20,17 C20.5522847,17 21,17.4477153 21,18 C21,18.5522847 20.5522847,19 20,19 L14,19 C13.4477153,19 13,18.5522847 13,18 C13,17.4477153 13.4477153,17 14,17 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        School Music Festival
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Rose Liam
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Tbody*/}
                              </table>
                            </div>
                            {/*end::Table*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade show active"
                            id="kt_tab_pane_10_2"
                            role="tabpanel"
                            aria-labelledby="kt_tab_pane_10_2"
                          >
                            {/*begin::Table*/}
                            <div className="table-responsive">
                              <table className="table table-borderless table-vertical-center">
                                {/*begin::Thead*/}
                                <thead>
                                  <tr>
                                    <th className="p-0 w-50px" />
                                    <th className="p-0 w-100 min-w-100px" />
                                    <th className="p-0" />
                                    <th className="p-0 min-w-130px w-100" />
                                  </tr>
                                </thead>
                                {/*end::Thead*/}
                                {/*begin::Tbody*/}
                                <tbody>
                                  <tr>
                                    <td className="pl-0 pt-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-success mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-success">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Playlist1.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <path
                                                  d="M8.97852058,18.8007059 C8.80029331,20.0396328 7.53473012,21 6,21 C4.34314575,21 3,19.8807119 3,18.5 C3,17.1192881 4.34314575,16 6,16 C6.35063542,16 6.68722107,16.0501285 7,16.1422548 L7,5.93171093 C7,5.41893942 7.31978104,4.96566617 7.78944063,4.81271925 L13.5394406,3.05418311 C14.2638626,2.81827161 15,3.38225531 15,4.1731748 C15,4.95474642 15,5.54092513 15,5.93171093 C15,6.51788965 14.4511634,6.89225606 14,7 C13.3508668,7.15502181 11.6842001,7.48835515 9,8 L9,18.5512168 C9,18.6409956 8.9927193,18.7241187 8.97852058,18.8007059 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                />
                                                <path
                                                  d="M16,9 L20,9 C20.5522847,9 21,9.44771525 21,10 C21,10.5522847 20.5522847,11 20,11 L16,11 C15.4477153,11 15,10.5522847 15,10 C15,9.44771525 15.4477153,9 16,9 Z M14,13 L20,13 C20.5522847,13 21,13.4477153 21,14 C21,14.5522847 20.5522847,15 20,15 L14,15 C13.4477153,15 13,14.5522847 13,14 C13,13.4477153 13.4477153,13 14,13 Z M14,17 L20,17 C20.5522847,17 21,17.4477153 21,18 C21,18.5522847 20.5522847,19 20,19 L14,19 C13.4477153,19 13,18.5522847 13,18 C13,17.4477153 13.4477153,17 14,17 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        School Music Festival
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Rose Liam
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-danger mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-danger">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <rect
                                                  fill="#000000"
                                                  x={4}
                                                  y={4}
                                                  width={7}
                                                  height={7}
                                                  rx="1.5"
                                                />
                                                <path
                                                  d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        Maths Championship
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Tom Gere
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        25 Oct, 10:05PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-primary mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-primary">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Globe.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <path
                                                  d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                />
                                                <circle
                                                  fill="#000000"
                                                  opacity="0.3"
                                                  cx={12}
                                                  cy={10}
                                                  r={6}
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        Who Knows Geography
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Zoey Dylan
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-warning mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-warning">
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
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
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        Napoleon Days
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Luke Owen
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl-0 py-5">
                                      <div className="symbol symbol-45 symbol-light-info mr-2">
                                        <span className="symbol-label">
                                          <span className="svg-icon svg-icon-2x svg-icon-info">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Color-profile.svg*/}
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
                                                <rect
                                                  x={0}
                                                  y={0}
                                                  width={24}
                                                  height={24}
                                                />
                                                <path
                                                  d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                  opacity="0.3"
                                                />
                                                <circle
                                                  fill="#000000"
                                                  cx={12}
                                                  cy={9}
                                                  r={5}
                                                />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="pl-0">
                                      <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                      >
                                        The School Art Leads
                                      </a>
                                      <span className="text-muted font-weight-bold d-block">
                                        By Ellie Cole
                                      </span>
                                    </td>
                                    <td />
                                    <td className="text-left">
                                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        03 Sep, 4:20PM
                                      </span>
                                      <span className="text-muted font-weight-bold d-block font-size-sm">
                                        Time
                                      </span>
                                    </td>
                                    <td className="text-right pr-0">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-light btn-sm"
                                      >
                                        <span className="svg-icon svg-icon-md svg-icon-success">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                              <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                x={11}
                                                y={5}
                                                width={2}
                                                height={14}
                                                rx={1}
                                              />
                                              <path
                                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                              />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Tbody*/}
                              </table>
                            </div>
                            {/*end::Table*/}
                          </div>
                          {/*end::Tap pane*/}
                        </div>
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Base Table Widget 10*/}
                    {/*begin::Forms Widget 7*/}
                    <div className="card card-custom bg-white gutter-b">
                      {/*begin::Header*/}
                      <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label font-weight-bold font-size-h4 text-dark-75">
                            Accident Report
                          </span>
                          <span className="text-muted mt-3 font-weight-bold font-size-sm">
                            Last week
                            <span className="text-primary font-weight-bolder">
                              9 accidents
                            </span>
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <ul className="nav nav-pills nav-pills-sm nav-dark">
                            <li className="nav-item ml-0">
                              <a
                                className="nav-link py-2 px-4 font-weight-bolder font-size-sm"
                                data-toggle="tab"
                                href="#kt_tab_pane_7_1"
                              >
                                Active Cases
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-2 px-4 active font-weight-bolder font-size-sm"
                                data-toggle="tab"
                                href="#kt_tab_pane_7_2"
                              >
                                Create
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-1">
                        <div className="tab-content mt-5" id="myTabContent">
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_tab_pane_7_1"
                            role="tabpanel"
                            aria-labelledby="kt_tab_pane_7_1"
                          >
                            {/*begin::Form*/}
                            <form className="form" id="kt_form_7_1">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-solid border-0"
                                  name="name"
                                  placeholder="Name"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-solid border-0"
                                  name="email"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  className="form-control form-control-solid border-0"
                                  name="memo"
                                  rows={4}
                                  placeholder="Message"
                                  id="kt_forms_widget_7_1_input"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="mt-10">
                                <button className="btn btn-primary font-weight-bold">
                                  Send
                                </button>
                              </div>
                            </form>
                            {/*end::Form*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade show active"
                            id="kt_tab_pane_7_2"
                            role="tabpanel"
                            aria-labelledby="kt_tab_pane_7_2"
                          >
                            {/*begin::Form*/}
                            <form className="form" id="kt_form_7_2">
                              <div className="form-group mb-6">
                                <input
                                  type="text"
                                  className="form-control border-0 form-control-solid pl-6 min-h-50px font-size-lg font-weight-bolder"
                                  name="name"
                                  placeholder="Report Name"
                                />
                              </div>
                              <div className="form-group mb-6">
                                <select
                                  className="form-control border-0 form-control-solid text-muted font-size-lg font-weight-bolder pl-5 min-h-50px"
                                  id="exampleSelects"
                                >
                                  <option>Select Category</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div className="form-group mb-6">
                                <textarea
                                  className="form-control border-0 form-control-solid pl-6 font-size-lg font-weight-bolder min-h-130px"
                                  name="memo"
                                  rows={4}
                                  placeholder="Accident Details"
                                  id="kt_forms_widget_7_2_input"
                                  defaultValue={""}
                                />
                              </div>
                              <div>
                                <button className="btn btn-primary font-weight-bold">
                                  Send Report
                                </button>
                              </div>
                            </form>
                            {/*end::Form*/}
                          </div>
                          {/*end::Tap pane*/}
                        </div>
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Forms Widget 7*/}
                    {/*begin::List Widget 18*/}
                    <div className="card card-custom gutter-b">
                      {/*begin::Header*/}
                      <div className="card-header border-0 pt-7">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label font-weight-bold font-size-h4 text-dark-75">
                            Latest Accidents
                          </span>
                          <span className="text-muted mt-3 font-weight-bold font-size-sm">
                            Last week
                            <span className="text-primary font-weight-bolder">
                              9 accidents
                            </span>
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <ul className="nav nav-pills nav-pills-sm nav-dark">
                            <li className="nav-item ml-0">
                              <a
                                className="nav-link py-2 px-4 font-weight-bolder font-size-sm"
                                data-toggle="tab"
                                href="#kt_tab_pane_1_1"
                              >
                                Year
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-2 px-4 active font-weight-bolder font-size-sm"
                                data-toggle="tab"
                                href="#kt_tab_pane_2_2"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-1">
                        <div className="tab-content mt-5" id="myTabLIist18">
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_tab_pane_1_1"
                            role="tabpanel"
                            aria-labelledby="kt_tab_pane_1_1"
                          >
                            {/*begin::Form*/}
                            <div className="form">
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-9">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img25})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                                  >
                                    Nike &amp; Blue
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Your website will have long term business
                                    should think about those term business
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-9">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img24})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                                  >
                                    Red Boots
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Have long term business objectives. You
                                    should think about those long term business
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-9">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img20})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder font-size-lg text-hover-primary mb-1"
                                  >
                                    Cup &amp; Green
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Your company your website have long term
                                    business objectives. You should think about
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-6">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img19})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                                  >
                                    Yellow Background
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Your company will have long term business
                                    objectives You should think about those long
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Form*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade show active"
                            id="kt_tab_pane_2_2"
                            role="tabpanel"
                            aria-labelledby="kt_tab_pane_2_2"
                          >
                            {/*begin::Form*/}
                            <div className="form">
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-9">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img20})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder font-size-lg text-hover-primary mb-1"
                                  >
                                    Cup &amp; Green
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Your company your website have long term
                                    business objectives. You should think about
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-9">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img19})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                                  >
                                    Yellow Background
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Your company will have long term business
                                    objectives You should think about those long
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-9">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img25})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                                  >
                                    Nike &amp; Blue
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Your website will have long term business
                                    should think about those term business
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center pb-6">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                  <div
                                    className="symbol-label"
                                    style={{
                                      backgroundImage: `url(${img24})`,
                                    }}
                                  />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Section*/}
                                <div className="d-flex flex-column flex-grow-1">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                                  >
                                    Red Boots
                                  </a>
                                  {/*end::Title*/}
                                  {/*begin::Desc*/}
                                  <span className="text-dark-50 font-weight-normal font-size-sm">
                                    Have long term business objectives. You
                                    should think about those long term business
                                  </span>
                                  {/*begin::Desc*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Form*/}
                          </div>
                          {/*end::Tap pane*/}
                        </div>
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::List Widget 18*/}
                  </div>
                </div>
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Education*/}
          </div>
          {/*end::Container*/}
        </div>
      </>
    );
  }
}
