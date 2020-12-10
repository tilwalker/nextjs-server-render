/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useRouter();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        {/* <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <Link className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </Link>
        </li> */}
        {/*end::1 Level*/}
        
        {/*begin::1 Level*/}
        {/* <li
          className={`menu-item ${getMenuItemActive("/list-student", false)}`}
          aria-haspopup="true"
        >
          <Link className="menu-link" to="/list-student">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Students</span>
          </Link>
        </li> */}
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        {/* <li
          className={`menu-item ${getMenuItemActive("/builder", false)}`}
          aria-haspopup="true"
        >
          <Link className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Layout Builder</span>
          </Link>
        </li> */}
        {/*end::1 Level*/}

        {/* Components */}
        {/* begin::section */}
        {/* <li className="menu-section ">
          <h4 className="menu-text">Components</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li> */}
        {/* end:: section */}

        {/* Student */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/students/list",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <Link className="menu-link menu-toggle" href="/students/list">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
            </span>
            <span className="menu-text">Quản lý học sinh</span>
            <i className="menu-arrow" />
          </Link>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Quản lý học sinh</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/students/list"
                  )}`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/students/list">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Thông tin học sinh</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/students/score"
                  )}`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/students/score">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Điểm thi</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* staff */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <Link className="menu-link menu-toggle" href="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
            </span>
            <span className="menu-text">Quản lý nhân viên</span>
            <i className="menu-arrow" />
          </Link>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Quản lý nhân viên</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Phân quyền</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/badge">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Thông tin nhân viên</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
        
        {/* school */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <Link className="menu-link menu-toggle" href="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Folder.svg")} />
            </span>
            <span className="menu-text">Quản lý trường</span>
            <i className="menu-arrow" />
          </Link>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Quản lý trường</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Thông tin trường học</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/badge">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tạo xét tuyển</span>
                  </Link>
                </li>
                {/*end::2 Level*/}
                
                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/badge">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tài liệu</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

              </ul>
            </ul>
          </div>
        </li>
        
        {/* DoE */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <Link className="menu-link menu-toggle" href="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Folder.svg")} />
            </span>
            <span className="menu-text">Quản lý sở giáo dục</span>
            <i className="menu-arrow" />
          </Link>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Quản lý sở giáo dục</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Thông tin sở giáo dục</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item `}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Thông tin xét tuyển</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

              </ul>
            </ul>
          </div>
        </li>
        
        {/* RoE */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <Link className="menu-link menu-toggle" href="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Folder.svg")} />
            </span>
            <span className="menu-text">Quản lý phòng</span>
            <i className="menu-arrow" />
          </Link>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Quản lý phòng</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Thông tin phòng giáo dục</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item`}
                  aria-haspopup="true"
                >
                  <Link className="menu-link" href="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Thông tin xét tuyển</span>
                  </Link>
                </li>
                {/*end::2 Level*/}

              </ul>
            </ul>
          </div>
        </li>
        
        {/*begin::1 Level*/}
        <li
          className={`menu-item`}
          aria-haspopup="true"
        >
          <Link className="menu-link" href="/logout">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Bookmark.svg")} />
            </span>
            <span className="menu-text">Đăng xuất</span>
          </Link>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
