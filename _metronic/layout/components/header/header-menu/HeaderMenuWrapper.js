import React, {useMemo} from "react";
import objectPath from "object-path";
import Link from "next/link";
import {toAbsoluteUrl} from "../../../../_helpers";
import {useHtmlClassService} from "../../../_core/MetronicLayout";
import { HtmlClassService } from "../../../_core/HTMLClassService";
import {HeaderMenu} from "./HeaderMenu";

export function HeaderMenuWrapper() {
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
            config: uiService.config,
            ktMenuClasses: getClasses("header_menu", true),
            rootArrowEnabled: objectPath.get(
                uiService.config,
                "header.menu.self.root-arrow"
            ),
            menuDesktopToggle: objectPath.get(uiService.config, "header.menu.desktop.toggle"),
            headerMenuAttributes: getAttributes("header_menu"),
            headerSelfTheme: objectPath.get(uiService.config, "header.self.theme"),
            ulClasses: getClasses("header_menu_nav", true),
            disabledAsideSelfDisplay:
                objectPath.get(uiService.config, "aside.self.display") === false
        };
    }, [uiService]);
    const getHeaderLogo = () => {
        let result = "logo-light.png";
        if (layoutProps.headerSelfTheme && layoutProps.headerSelfTheme !== "dark") {
            result = "logo-dark.png";
        }
        return toAbsoluteUrl(`/media/logos/${result}`);
    };

    return <>
        {/*begin::Header Menu Wrapper*/}
        <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            {layoutProps.disabledAsideSelfDisplay && (
                <>
                    {/*begin::Header Logo*/}
                    <div className="header-logo">
                        <Link href="/">
                            <img alt="logo" src={getHeaderLogo()}/>
                        </Link>
                    </div>
                    {/*end::Header Logo*/}
                </>
            )}
            {/*begin::Header Menu*/}
            <HeaderMenu layoutProps={layoutProps} />
            {/*end::Header Menu*/}
        </div>
        {/*Header Menu Wrapper*/}
    </>
}
