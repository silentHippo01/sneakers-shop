export default {
    name: 'FAQ',
    title: 'FAQ',
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