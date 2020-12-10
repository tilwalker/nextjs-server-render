import React, {useMemo} from "react";
import Link from "next/link";
import objectPath from "object-path";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";
import {useHtmlClassService} from "../../_core/MetronicLayout";
import { HtmlClassService } from "../../_core/HTMLClassService";

export function HeaderMobile() {
  const uiService = useHtmlClassService();

  
  const getLogo = () => {
    const brandSkin = objectPath.get(HtmlClassService.config, "brand.self.theme");
    if (brandSkin === "light") {
      return toAbsoluteUrl("/media/logos/logo-dark.png");
    } else {
      return toAbsoluteUrl("/media/logos/logo-light.png");
    }
  }

  const getStickyLogo = () => {
    let logo = objectPath.get(HtmlClassService.config, "self.logo.sticky");
    if (typeof logo === "undefined") {
      logo = getLogo();
    }
    return logo + "";
  }
  const getClasses = (path, toString) => {
    if (path) {
      const classes = objectPath.get(HtmlClassService.classes, path) || "";
      if (toString && Array.isArray(classes)) {
        return classes.join(" ");
      }
      return classes.toString();
    }
    return HtmlClassService.classes;
  }

  const getAttributes = (path) => {
    if (path) {
      const attributes = objectPath.get(HtmlClassService.attributes, path) || [];
      return attributes;
    }
    return [];
  }

  const layoutProps = useMemo(() => {
    return {
      headerLogo: getStickyLogo(),
      asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
      headerMenuSelfDisplay:
          objectPath.get(uiService.config, "header.menu.self.display") === true,
      headerMobileCssClasses: getClasses("header_mobile", true),
      headerMobileAttributes: getAttributes("header_mobile")
    };
  }, [uiService]);

  return (
      <>
        {/*begin::Header Mobile*/}
        <div
            id="kt_header_mobile"
            className={`header-mobile align-items-center ${layoutProps.headerMobileCssClasses}`}
            {...layoutProps.headerMobileAttributes}
        >
          {/*begin::Logo*/}
          <Link href="/">
            <img alt="logo" src={layoutProps.headerLogo}/>
          </Link>
          {/*end::Logo*/}

          {/*begin::Toolbar*/}
          <div className="d-flex align-items-center">
            {layoutProps.asideDisplay && (
                <>
                  {/*begin::Aside Mobile Toggle*/}
                  <button className="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
                    <span/>
                  </button>
                  {/*end::Aside Mobile Toggle*/}
                </>
            )}

            {layoutProps.headerMenuSelfDisplay && (
                <>
                  {/*begin::Header Menu Mobile Toggle*/}
                  <button className="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
                    <span/>
                  </button>
                  {/*end::Header Menu Mobile Toggle*/}
                </>
            )}

            {/*begin::Topbar Mobile Toggle*/}
            <button
                className="btn btn-hover-text-primary p-0 ml-2"
                id="kt_header_mobile_topbar_toggle"
            >
              <span className="svg-icon svg-icon-xl">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
              </span>
            </button>
            {/*end::Topbar Mobile Toggle*/}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header Mobile*/}
      </>
  );
}
