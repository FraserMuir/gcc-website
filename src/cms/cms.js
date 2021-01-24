import CMS from 'netlify-cms-app'
import { withStyledComponentsRendered } from '../helpers/styleInjector'

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview))
