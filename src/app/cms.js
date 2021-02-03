import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { PagePreview, WidgetPreview } from "./GenericPreviews";

import { Home } from "./pages/index/Home";
import { NextMeeting } from "./pages/next-meeting/NextMeeting";
import { HistoricalMeetings } from "./pages/historical-meetings/HistoricalMeetings";
import { Gallery } from "./pages/gallery/Gallery";
import { Links } from "./pages/links/Links";
import { Events } from "./pages/events/Events";
import { News } from "./pages/news/News";
import { ContactUs } from "./pages/contact-us/ContactUs";
import { AboutUs } from "./pages/about-us/AboutUs";
import { NextMeeting as NextMeetingWidget} from "./widgets/next-meeting/NextMeeting";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(PagePreview, Home));
CMS.registerPreviewTemplate("next-meeting", withStyledComponentsRendered(PagePreview, NextMeeting));
CMS.registerPreviewTemplate("historical-meetings", withStyledComponentsRendered(PagePreview, HistoricalMeetings));
CMS.registerPreviewTemplate("gallery", withStyledComponentsRendered(PagePreview, Gallery));
CMS.registerPreviewTemplate("links", withStyledComponentsRendered(PagePreview, Links));
CMS.registerPreviewTemplate("events", withStyledComponentsRendered(PagePreview, Events));
CMS.registerPreviewTemplate("news", withStyledComponentsRendered(PagePreview, News));
CMS.registerPreviewTemplate("contact-us", withStyledComponentsRendered(PagePreview, ContactUs));
CMS.registerPreviewTemplate("about-us", withStyledComponentsRendered(PagePreview, AboutUs));

CMS.registerPreviewTemplate("next-meeting-widget", withStyledComponentsRendered(WidgetPreview, NextMeetingWidget));