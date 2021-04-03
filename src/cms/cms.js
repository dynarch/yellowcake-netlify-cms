import React from 'react'
import CMS from 'netlify-cms-app'
import { de } from 'netlify-cms-locales';

import './cms-utils'

import { AboutPageTemplate } from '../templates/AboutPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { ComponentsPageTemplate } from '../templates/ComponentsPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { EmploymentPageTemplate } from '../templates/EmploymentPage'
import { InfoPageTemplate } from '../templates/InfoPage'
import { HomePageTemplate } from '../templates/HomePage'
import { PricePageTemplate } from '../templates/PricePage'
import { ProjectIndexTemplate } from '../templates/ProjectIndex'
import { ServiceIndexTemplate } from '../templates/ServiceIndex'
import { SinglePostTemplate } from '../templates/SinglePost'
import { SingleProjectTemplate } from '../templates/SingleProject'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare)
CMS.registerLocale('de', de);

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('components-page', ({ entry }) => (
  <ComponentsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('employment-page', ({ entry }) => (
  <EmploymentPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <InfoPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('price-page', ({ entry }) => (
  <PricePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('projects-page', ({ entry }) => (
  <ProjectIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('projects', ({ entry }) => (
  <SingleProjectTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('service-page', ({ entry }) => (
  <ServiceIndexTemplate {...entry.toJS().data} />
))
