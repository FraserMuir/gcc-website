import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { GeneralPreview } from "./GeneralPreview";
import { Home } from "./pages/index/Home";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(GeneralPreview, Home));
