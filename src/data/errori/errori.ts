export function FETCH_ERROR (err: string) { 
    return [{
    id: Infinity,
    title: err,
    body: "È possibile usare l'app, ma l'API non ha risposto alla richiesta",
    tags: ["Errori"],
    reactions: {
        likes: Infinity,
        dislikes: Infinity
    },
    views: Infinity,
    userId: Infinity
}] }