import CMS from 'netlify-cms-app'
import { withStyledComponentsRendered } from '../helpers/styleInjector'

import IndexPagePreview from './previews/IndexPagePreview'

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview))
