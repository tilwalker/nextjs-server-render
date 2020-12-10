import React, {useMemo} from "react";
import objectPath from "object-path";
// LayoutContext
import {useHtmlClassService} from "../_core/MetronicLayout";
import { HtmlClassService } from "../_core/HTMLClassService";
// Import Layout components
import {Header} from "./header/Header";
import {HeaderMobile} from "./header-mobile/HeaderMobile";
import {Aside} from "./aside/Aside";
import {Footer} from "./footer/Footer";
// import {LayoutInit} from "./LayoutInit";
import {SubHeader} from "./subheader/SubHeader";
import {QuickPanel} from "./extras/offcanvas/QuickPanel";
import {QuickUser} from "./extras/offcanvas/QuickUser";
import {ScrollTop} from "./extras/ScrollTop";
import {StickyToolbar} from "./extras/StickyToolbar";

export function Layout({ children }) {
    const uiService = useHtmlClassService();
    // Layout settings (cssClasses/cssAttributes)
    
    /**
     * Returns Classes
     *
     * @param path: string
     * @param toString boolean
     */
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
            layoutConfig: uiService.config,
            selfLayout: objectPath.get(uiService.config, "self.layout"),
            asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
            subheaderDisplay: objectPath.get(uiService.config, "subheader.display"),
            desktopHeaderDisplay: objectPath.get(
                uiService.config,
                "header.self.fixed.desktop"
            ),
            contentCssClasses: getClasses("content", true),
            contentContainerClasses: getClasses("content_container", true),
            contentExtended: objectPath.get(uiService.config, "content.extended")
        };
    }, [uiService]);

    return layoutProps.selfLayout !== "blank" ? (
        <>
            {/*begin::Main*/}
            <HeaderMobile/>
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="d-flex flex-row flex-column-fluid page">
                    {layoutProps.asideDisplay && (<Aside/>)}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <Header/>
                        {/*begin::Content*/}
                        <div
                            id="kt_content"
                            className={`content ${layoutProps.contentCssClasses} d-flex flex-column flex-column-fluid`}
                        >
                            {layoutProps.subheaderDisplay && <SubHeader/>}
                            {/*begin::Entry*/}
                            {!layoutProps.contentExtended && (
                                <div className="d-flex flex-column-fluid">
                                    {/*begin::Container*/}
                                    <div className={layoutProps.contentContainerClasses}>
                                        {children}
                                    </div>
                                    {/*end::Container*/}
                                </div>
                            )}

                            {layoutProps.contentExtended && {children}}
                            {/*end::Entry*/}
                        </div>
                        {/*end::Content*/}
                        <Footer/>
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Page*/}
            </div>
            <QuickUser/>
            <QuickPanel/>
            <ScrollTop/>
            <StickyToolbar/>
            {/*end::Main*/}
            {/* <LayoutInit /> */}
        </>
    ) : (
        // BLANK LAYOUT
        <div className="d-flex flex-column flex-root">{children}</div>
    );
}
