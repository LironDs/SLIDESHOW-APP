import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";
import { HOME_PAGE_LINK, ABOUT_PAGE_LINK, CREATE_PIC_PAGE_LINK, SINPUP_PAGE_LINK } from "./services/domServices.js";

/********* האזנה לאירועים **********/
// ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
CREATE_PIC_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.CREATE_PIC));
SINPUP_PAGE_LINK.addEventListener("click",()=> onChangePage(PAGES.SINPUP));
