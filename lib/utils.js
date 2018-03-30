export const parsePosts = (posts) => {
    return posts.map(bp => {
        return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail
        }
    })
}