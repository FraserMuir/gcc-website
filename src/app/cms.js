import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { PagePreview } from "./GenericPreviews";

import { Home } from "./pages/index/Home";
import { ContactUs } from "./pages/contact-us/ContactUs";
import { AboutUs } from "./pages/about-us/AboutUs";
import { Post } from "./pages/post/Post";
import { Posts } from "./pages/posts/Posts";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(PagePreview, Home));
CMS.registerPreviewTemplate("contact-us", withStyledComponentsRendered(PagePreview, ContactUs));
CMS.registerPreviewTemplate("about-us", withStyledComponentsRendered(PagePreview, AboutUs));
CMS.registerPreviewTemplate("post", withStyledComponentsRendered(PagePreview, Post));
CMS.registerPreviewTemplate("posts", withStyledComponentsRendered(PagePreview, Posts));