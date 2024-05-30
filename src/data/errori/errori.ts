export function FETCH_ERROR (err: string) { //ritorna un array con un solo oggetto perché altrimenti avrei dovuto cambiare setPostsData in App.tsx
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
}] } //il valore Infinity è messo per il meme