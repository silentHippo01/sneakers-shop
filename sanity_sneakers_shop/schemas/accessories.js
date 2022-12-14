export default {
    name: 'accessories',
    titlle: 'Accessories',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'number',
        },
        {
            name: 'characteristics',
            title: 'Characteristics',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
            ]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'typeOfProduct',
            title: 'Type of Product',
            type: 'string',
        },
        {
            name: 'recommendWith',
            title: 'Recommend with',
            type: 'string',
        }
    ]
}