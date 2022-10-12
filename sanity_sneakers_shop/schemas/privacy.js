export default {
    name: 'Privacy',
    title: 'privacy',
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