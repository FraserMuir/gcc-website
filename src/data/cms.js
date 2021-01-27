import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { IndexPagePreview } from "./IndexPagePreview";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(IndexPagePreview));
