import React, {useMemo} from "react";
import Link from "next/link";
import objectPath from "object-path";
import {Brand} from "../brand/Brand";
import {AsideMenu} from "./aside-menu/AsideMenu";
import {useHtmlClassService} from "../../_core/MetronicLayout";
import { HtmlClassService } from "../../_core/HTMLClassService"

export function Aside() {
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
  const layoutProps = useMemo(() => {
    return {
      disableScroll:
          objectPath.get(uiService.config, "aside.menu.dropdown") === "true" ||
          false,
      asideClassesFromConfig: getClasses("aside", true),
      disableAsideSelfDisplay:
          objectPath.get(uiService.config, "aside.self.display") === false,
      headerLogo: getLogo()
    };
  }, [uiService]);

  return (
      <>
        {/* begin::Aside */}
        <div id="kt_aside"
             className={`aside aside-left  ${layoutProps.asideClassesFromConfig} d-flex flex-column flex-row-auto`}>
          <Brand/>

          {/* begin::Aside Menu */}
          <div id="kt_aside_menu_wrapper" className="aside-menu-wrapper flex-column-fluid">
            {layoutProps.disableAsideSelfDisplay && (
              <>
                {/* begin::Header Logo */}
                <div className="logo">
                  <Link href="">
                    <h3>VNA</h3>
                  </Link>
                </div>
                {/* end::Header Logo */}
              </>
            )}
            <AsideMenu disableScroll={layoutProps.disableScroll}/>
          </div>
          {/* end::Aside Menu */}
        </div>
        {/* end::Aside */}
      </>
  );
}
