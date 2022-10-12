export default {
    name: 'shippingPageContent',
    title: 'Ship Article',
    type: 'document',
    fields:  [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
            ]
        }
    ]
}