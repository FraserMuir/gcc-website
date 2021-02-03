import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { GeneralPreview } from "./GeneralPreview";

import { Home } from "./pages/index/Home";
import { NextMeeting } from "./pages/next-meeting/NextMeeting";
import { HistoricalMeetings } from "./pages/historical-meetings/HistoricalMeetings";
import { Gallery } from "./pages/gallery/Gallery";
import { Links } from "./pages/links/Links";
import { Events } from "./pages/events/Events";
import { News } from "./pages/news/News";
import { ContactUs } from "./pages/contact-us/ContactUs";
import { AboutUs } from "./pages/about-us/AboutUs";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(GeneralPreview, Home));
CMS.registerPreviewTemplate("next-meeting", withStyledComponentsRendered(GeneralPreview, NextMeeting));
CMS.registerPreviewTemplate("historical-meetings", withStyledComponentsRendered(GeneralPreview, HistoricalMeetings));
CMS.registerPreviewTemplate("gallery", withStyledComponentsRendered(GeneralPreview, Gallery));
CMS.registerPreviewTemplate("links", withStyledComponentsRendered(GeneralPreview, Links));
CMS.registerPreviewTemplate("events", withStyledComponentsRendered(GeneralPreview, Events));
CMS.registerPreviewTemplate("news", withStyledComponentsRendered(GeneralPreview, News));
CMS.registerPreviewTemplate("contact-us", withStyledComponentsRendered(GeneralPreview, ContactUs));
CMS.registerPreviewTemplate("about-us", withStyledComponentsRendered(GeneralPreview, AboutUs));
