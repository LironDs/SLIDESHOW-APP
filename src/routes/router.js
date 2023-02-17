import PAGES from "../models/pageModel.js";
import { 
  HOME_PAGE,
  ABOUT_PAGE,
  CREATE_PIC_PAGE,
  SINPUP_PAGE,
  ERROR404_PAGE } 
  from "../services/domServices.js";

export const onChangePage = page => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  CREATE_PIC_PAGE.className="d-none";
  SINPUP_PAGE.className="d-none";
  ERROR404_PAGE.className="d-none";


  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.CREATE_PIC) return (CREATE_PIC_PAGE.className = "d-block");
  if (page===PAGES.SINPUP) return (SINPUP_PAGE.className="d-block");
  return ERROR404_PAGE.className="d-block";
};