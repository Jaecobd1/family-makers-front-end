import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import createImageURLBuilder from '@sanity/image-url'
import { config } from './config'

export const urlFor = (source) => createImageURLBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)