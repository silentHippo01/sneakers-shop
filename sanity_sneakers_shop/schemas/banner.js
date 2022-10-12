export default {
    name: 'MainPageBanner',
    title: 'Main Page banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array', 
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        }
    ]
}