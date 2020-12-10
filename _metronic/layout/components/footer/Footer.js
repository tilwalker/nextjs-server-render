import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../_core/MetronicLayout";
import {HtmlClassService} from "../../_core/HTMLClassService"

export function Footer() {
  const today = new Date().getFullYear();
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
  const layoutProps = useMemo(() => {
    return {
      footerClasses: getClasses("footer", true),
      footerContainerClasses: getClasses("footer_container", true)
    };
  }, [uiService]);

  return (
    <div
      className={`footer bg-white py-4 d-flex flex-lg-column  ${layoutProps.footerClasses}`}
      id="kt_footer"
    >
      <div
        className={`${layoutProps.footerContainerClasses} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted font-weight-bold mr-2">{today.toString()}</span> &copy;{" "}
          <a
            href="http://keenthemes.com/metronic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-75 text-hover-primary"
          >
            Keenthemes
          </a>
        </div>
        <div className="nav nav-dark order-1 order-md-2">
          <a
            href="http://keenthemes.com/metronic"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link pr-3 pl-0"
          >
            About
          </a>
          <a
            href="http://keenthemes.com/metronic"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link px-3"
          >
            Team
          </a>
          <a
            href="http://keenthemes.com/metronic"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link pl-3 pr-0"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
