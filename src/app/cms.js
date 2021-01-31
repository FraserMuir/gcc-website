import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { IndexPagePreview } from "./GeneralPreview";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(IndexPagePreview));
