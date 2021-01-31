import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { GeneralPreview } from "./GeneralPreview";
import IndexPage from "./pages/index";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(GeneralPreview, IndexPage));
