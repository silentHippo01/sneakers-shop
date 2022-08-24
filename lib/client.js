import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'dnllk8sy',
    dataset: 'production',
    apiVersion: '2022-08-10',
    useCdn: true,
    token: process.env.SANITY_TOKEN_DEV,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);