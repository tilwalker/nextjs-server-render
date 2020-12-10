import React, {useMemo} from "react";
import {AsideMenuList} from "./AsideMenuList";
import {useHtmlClassService} from "../../../_core/MetronicLayout";
import {HtmlClassService} from "../../../_core/HTMLClassService";

export function AsideMenu({disableScroll}) {
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
      layoutConfig: uiService.config,
      asideMenuAttr: getAttributes("aside_menu"),
      ulClasses: getClasses("aside_menu_nav", true),
      asideClassesFromConfig: getClasses("aside_menu", true)
    };
  }, [uiService]);

  return (
    <>
      {/* begin::Menu Container */}
      <div
        id="kt_aside_menu"
        data-menu-vertical="1"
        className={`aside-menu my-4 ${layoutProps.asideClassesFromConfig}`}
        {...layoutProps.asideMenuAttr}
      >
        <AsideMenuList layoutProps={layoutProps} />
      </div>
      {/* end::Menu Container */}
    </>
  );
}
