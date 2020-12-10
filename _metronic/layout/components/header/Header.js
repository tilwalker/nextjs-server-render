import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../_core/MetronicLayout";
import { HtmlClassService } from "../../_core/HTMLClassService";
import {Topbar} from "./Topbar";
import {HeaderMenuWrapper} from "./header-menu/HeaderMenuWrapper";
import {AnimateLoading} from "../../../_partials/controls";

export function Header() {
  const uiService = useHtmlClassService();

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
      headerClasses: getClasses("header", true),
      headerAttributes: getAttributes("header"),
      headerContainerClasses: getClasses("header_container", true),
      menuHeaderDisplay: objectPath.get(
        uiService.config,
        "header.menu.self.display"
      )
    };
  }, [uiService]);

  return (
    <>
      {/*begin::Header*/}
      <div
        className={`header ${layoutProps.headerClasses}`}
        id="kt_header"
        {...layoutProps.headerAttributes}
      >
        {/*begin::Container*/}
        <div className={` ${layoutProps.headerContainerClasses} d-flex align-items-stretch justify-content-between`}>
          <AnimateLoading />
          {/*begin::Header Menu Wrapper*/}
          {layoutProps.menuHeaderDisplay && <HeaderMenuWrapper />}
          {!layoutProps.menuHeaderDisplay && <div />}
          {/*end::Header Menu Wrapper*/}

          {/*begin::Topbar*/}
          {/* <Topbar /> */}
          {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Header*/}
    </>
  );
}
